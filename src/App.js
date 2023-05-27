import React, { Component, Suspense } from 'react'
import { IntlProvider } from 'react-intl'
import { HashRouter, Route, Routes } from 'react-router-dom'
import French from './assets/lang/French.json'
import Arabic from './assets/lang/Arabic.json'
import English from './assets/lang/English.json'
import './scss/style.scss'
import MapLeaflet from './components/map/MapLeaflet'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

const locale = navigator.language;
let lang;
if (locale==="en") {
   lang = English;
} else {
   if (locale === "fr") {
       lang = French;
   } else {
       lang = Arabic;
   }
}

class App extends Component {
  render() {
    return (
      <IntlProvider locale ={locale} messages={English}>
                  <h1 style={{marginLeft: "50%"}}> map with leaflet </h1>
                <MapLeaflet/>
        <HashRouter>
          <Suspense fallback={loading}>

            <Routes>
              <Route exact path="/login" name="Login Page" element={<Login />} />
              <Route exact path="/register" name="Register Page" element={<Register />} />
              <Route exact path="/404" name="Page 404" element={<Page404 />} />
              <Route exact path="/500" name="Page 500" element={<Page500 />} />
              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Routes>
          </Suspense>
        </HashRouter>
      </IntlProvider>
    )
  }
}

export default App

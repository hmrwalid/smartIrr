import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Sensors = React.lazy(() => import('./views/sensors/Sensors'))
const Sites = React.lazy(() => import('./views/sites/Sites'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/sensors', name: 'Sensors', element: Sensors, exact: true },
  { path: '/sites', name: 'Sites', element: Sites, exact: true  },
]

export default routes

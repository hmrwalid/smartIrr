import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilEqualizer,
  cilLocationPin,
  cilSpeedometer,
} from '@coreui/icons'
import {CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'nav.dashborad',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'nav.mysites',
    to: '/sites',
    icon: <CIcon icon={cilLocationPin} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'nav.mysensors',
    to: '/sensors',
    icon: <CIcon icon={cilEqualizer} customClassName="nav-icon" />,
  },
]

export default _nav

import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Menu.css'

function MenuLink({ children, path, directTo, reference }) {

  return (
    <h1>
        <NavLink
            onClick={() => directTo(path, reference)}
            className={'menu-link'}
            >
            {children}
        </NavLink>
    </h1>
  )
}

export default MenuLink

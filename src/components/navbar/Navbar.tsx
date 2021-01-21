import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../img/logo.png'
import './Navbar.css'

const Navbar: React.FC = () => {
   return (
      <nav>
      <div className="nav-wrapper  purple darken-3 ">
        <NavLink to="/" className="brand-logo logo-item"><img src={logo} alt='logo' className="logo" /></NavLink>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">List</NavLink></li>
          <li><NavLink to="/about">Information</NavLink></li>
        </ul>
      </div>
    </nav>
   )
}

export default Navbar
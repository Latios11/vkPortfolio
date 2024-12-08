import React, {useState} from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        Vivek Kumar
      </div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className={`close-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <i class="fa-solid fa-x"></i>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        
      </div>
    </div>
  )
}

export default Navbar

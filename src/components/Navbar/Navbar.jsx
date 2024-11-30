import React, {useState} from 'react'
import "./Navbar.css"

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
        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar

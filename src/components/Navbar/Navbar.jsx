import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        Vivek Kumar
      </div>
      <div className="nav-links">
        <a href="#Home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Navbar

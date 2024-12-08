import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="follow">
      <h2 className="fheader">Follow me</h2>
        <div className="icons">
            <div className="icon-container">
              <a href="https://www.instagram.com/vivek_kumar_034/?hl=en" target='_blank'><i class="fa-brands fa-instagram"></i></a>
            </div>
            <div className="icon-container">
            <a href="https://www.facebook.com/profile.php?id=100009389696483" target='_blank'><i class="fa-brands fa-facebook"></i></a>
            </div>
            <div className="icon-container">
            <a href="https://github.com/Latios11" target='_blank'><i class="fa-brands fa-github"></i></a>
            </div>
            <div className="icon-container">
            <a href="https://www.linkedin.com/in/vivek-kumar-0b7363143/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
      </div>
      <div className="quick-links">
          <h2 className="fheader">Quick links</h2>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/">Projects</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
          </div>
      </div>
      <div className="ending">
        <p>Copyright @vivek_kumar. Made with  <i class="fa-regular fa-heart"></i> using React tools.</p>
        </div>
    </div>
  )
}

export default Footer

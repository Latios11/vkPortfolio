import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <div className="follow">
      <h2 className="fheader">Follow me</h2>
        <div className="icons">
          <a href="https://www.instagram.com/vivek_kumar_034/?hl=en" target='_blank'>
            <div className="icon-container">
            <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009389696483" target='_blank'>
            <div className="icon-container">
            <FontAwesomeIcon className='footer-icon' icon={faFacebook} />
            </div>
          </a>
          <a href="https://github.com/Latios11" target='_blank'>
            <div className="icon-container">
            <FontAwesomeIcon className='footer-icon' icon={faGithub} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/vivek-kumar-0b7363143/" target='_blank'>
            <div className="icon-container">
            <FontAwesomeIcon className='footer-icon' icon={faLinkedin} />
            </div>
          </a>
        </div>
      </div>
      <div className="quick-links">
          <h2 className="fheader">Quick links</h2>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
          </div>
      </div>
      <div className="ending">
        <p>Copyright @vivek_kumar. Made with  <FontAwesomeIcon icon={faHeart}/> using React tools.</p>
      </div>
      <div className="cat-rest"></div>
    </div>
  )
}

export default Footer

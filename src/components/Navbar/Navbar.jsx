import React, {useState, useContext, useEffect} from 'react'
import "./Navbar.css"
import {UserContext} from '../UserContext' 
import { account } from '../appwrite/auth'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [error, setError] = useState("")

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await account.get()
        if(userData){
          setUser(userData)
        }
      } catch (error) {
        setError("You are not logged in")  
      }
    }
    fetchUser()
  }, [])
  
  const handleLogout = async () => {
    try{
      await account.deleteSession('current')
      setUser(null)
      navigate("/")
    }
    catch(error){
      setError("Failed to logout")
    }
  }

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <span>Vivek kumar</span>
      </div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars}/>
      </div>
      <div className={`close-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <FontAwesomeIcon icon={faX}/>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to='/signin'>Sign In</NavLink>
        {user && <button className='logout-btn' onClick={handleLogout}>logout</button>}
      </div>
      {user &&<div className="message"> <p>Welcome {user.name}</p></div>}
    </div>
  )
}

export default Navbar

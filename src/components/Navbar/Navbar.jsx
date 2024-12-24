<<<<<<< HEAD
import React, {useState, useContext, useEffect} from 'react'
import "./Navbar.css"
import {UserContext} from '../UserContext' 
import { account } from '../appwrite/auth'
=======
import React, {useState} from 'react'
import "./Navbar.css"
>>>>>>> 5dc0c6be81e034a5d5b99e12a4bbe5baf79109c7
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
<<<<<<< HEAD
  const [error, setError] = useState("")
=======
>>>>>>> 5dc0c6be81e034a5d5b99e12a4bbe5baf79109c7

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

<<<<<<< HEAD
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

=======
>>>>>>> 5dc0c6be81e034a5d5b99e12a4bbe5baf79109c7
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
<<<<<<< HEAD
        {user && <button className='logout-btn' onClick={handleLogout}>logout</button>}
      </div>
      {user &&<div className="message"> <p>Welcome {user.name}</p></div>}
=======
      </div>
>>>>>>> 5dc0c6be81e034a5d5b99e12a4bbe5baf79109c7
    </div>
  )
}

export default Navbar

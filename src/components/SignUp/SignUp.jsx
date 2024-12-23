import React from 'react'
import { NavLink } from 'react-router-dom'
import './SignUp.css'

function SignUp() {
  return (
  <div className="hero">
    <div className='signup'>
       <h1>Register Here</h1>
       <form className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id='password' name='password' required/>
        </div>
        <button className='form-submit-btn' type='submit'><span>Register</span></button>
       </form>
       <div className="redirect">
        Already have an account? <NavLink to='/signin'>Register here</NavLink>
       </div>
    </div>
  </div>
  )
}

export default SignUp

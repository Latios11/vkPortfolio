import React from 'react'
import { NavLink } from 'react-router-dom'
import './SignIn.css'

function SignIn() {
  return (
    <div className="hero">
    <div className='signin'>
       <h1>Login Here</h1>
       <form className="signin-form">
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
        Dont have an account? <NavLink to='/signup'>Register here</NavLink>
       </div>
    </div>
  </div>
  )
}

export default SignIn

import React,{useState, useContext} from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import './SignIn.css'
import {UserContext} from '../UserContext'
import {account} from '../appwrite/auth'
import { toast } from 'react-toastify'

function SignIn() {
  const navigate = useNavigate()
  const {setUser} = useContext(UserContext)

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials({
      ...credentials,
      [name]: value,
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await account.createEmailPasswordSession(credentials.email, credentials.password)
      const userData = await account.get()
      setUser(userData)
      toast.success('Logged in!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
      setTimeout(() => {
        navigate("/")
      },2000)
    } catch (error) {
      toast.error(`${error.message}`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
    }
  }

  return (
    <div className="hero-signin">
    <div className='signin'>
       <h1>Login Here</h1>
       <form className="signin-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          name="email"
          value={credentials.email} 
          onChange={handleChange} 
          required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          name='password'
          value={credentials.password}
          onChange={handleChange} 
          required/>
        </div>
        <button className='form-submit-btn' type='submit'><span>Login</span></button>
       </form>
       <div className="redirect">
        Dont have an account? <NavLink to='/signup'>Register here</NavLink>
       </div>
    </div>
  </div>
  )
}

export default SignIn

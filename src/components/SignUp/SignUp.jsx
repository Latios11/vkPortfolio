import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import './SignUp.css'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { account } from '../appwrite/auth'


function SignUp() {
  const [userData, setUserData] = useState({
    email:'',
    password:'',
    name:''
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await account.create("unique()", userData.email, userData.password, userData.name);
      toast.success('Account registered!', {
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
          navigate("/signin");
        }, 2000);
    } 
    catch (error) {
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
  <div className="hero-signup">
    <div className='signup'>
       <h1>Register Here</h1>
       <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input 
          type="text"
          name='name' 
          value={userData.name} 
          onChange={handleChange} 
          required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          name='email' 
          value={userData.email} 
          onChange={handleChange} 
          required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          name='password' 
          value={userData.password} 
          onChange={handleChange} 
          required/>
        </div>
        <button className='form-submit-btn' type='submit' ><span>Register</span></button>
       </form>
       <div className="redirect">
        Already have an account? <NavLink to='/signin'>Register here</NavLink>
       </div>
    </div>
  </div>
  )
}

export default SignUp

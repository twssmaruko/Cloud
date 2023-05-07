import React from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const registerClick = () => {
    console.log('Hello World')
  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">CC12 Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>

                <button>Login</button>
            </form>
            <p>Don't have an account? <button onClick={() => navigate("/register")}>Register</button></p>
        </div>
    </div>
  )
}

export default Login
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as actions from '../store/users/index';


const Login = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate()
  const registerClick = () => {
    console.log('Hello World')
  }
  useEffect(() => {
     dispatcher(actions.fetchUsers())
  }, [])

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
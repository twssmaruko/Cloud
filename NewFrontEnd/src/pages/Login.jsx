import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as actions from '../store/users/index';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const Login = () => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  useEffect(() => {
     dispatcher(actions.fetchUsers())
  }, [])

  const {load, usrs} = useSelector(({users}) => ({
    load: users.loading,
    usrs: users.users
  }), shallowEqual);

  const handleSubmit = async(data) => {
    data.preventDefault();

    const toSend  = {
      username: userName,
      password: password
    }
    
    try {
      await dispatcher(actions.loginUser(toSend))
    } catch (err) {
      console.error(err.message)
    }


  }


  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">CC12 Chat</span>
            <span className="title">Login</span>
            <Spin indicator={antIcon} spinning={load}/>
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder='Username/Email' onChange = {(e) => {setUserName(e.target.value)}}/>
                <input type="password" placeholder='Password' onChange={(e) => {setPassword(e.target.value)}}/>

                <button>Login</button>
            </form>
            <p>Don't have an account? <button onClick={() => navigate("/register")}>Register</button></p>
        </div>
    </div>
  )
}

export default Login
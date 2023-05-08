import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import Add from '../img/icon-registration.png';
import moment from 'moment';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space, message } from 'antd';
import { useNavigate } from "react-router-dom";
import * as actions from '../store/users/index';

const Register = () => {

  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('9x1923921ajsdkw')
  const [birthday, setBirthday] = useState('')

  const dispatcher = useDispatch();

  const onDateSelected = (data) => {
    const date = moment(data._d).format('MMMM Do YYYY');
    setBirthday(date)
  }

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setBirthday(dateString)
  };

  const handleSubmit = (data) => {
    data.preventDefault()

    const toSend = {
      username: userName,
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
      birthday: birthday,

    }
    dispatcher(actions.createUser(toSend));
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo"> CC12 Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input id="userName" name="userName" type="text" placeholder='User Name' onChange={(e) => { setUserName(e.target.value) }} />
          <input name="firstName" type="text" placeholder='First Name' onChange={(e) => { setFirstName(e.target.value) }} />
          <input name="lastName" type="text" placeholder='Last Name' onChange={(e) => { setLastName(e.target.value) }}/>
          <input name="email" type="email" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }}/>
          <input name="password" type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }}/>
          <input name="confirmPassword" type="password" placeholder='Confirm Password' onChange={(e) => { setConfirmPassword(e.target.value) }}/>
          <DatePicker name="birthday" placeholder="Birthday" onChange={onChange} />
          <input name="profilePic" type="file" id='file' style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={Add} alt="" /> <p>Upload your profile photo</p>
          </label>
          <button>Register</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register;
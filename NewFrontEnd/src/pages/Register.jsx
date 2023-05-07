import React, { useState } from 'react';
import Add from '../img/icon-registration.png';
import moment from 'moment';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space, message } from 'antd';


const Register = () => {

  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('9x1923921ajsdkw')
  const [birthday, setBirthday] = useState('')

  const onDateSelected = (data) => {
    const date = moment(data._d).format('MMMM Do YYYY');
    setBirthday(date)
  }

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setBirthday(dateString)
  };

  const handleSubmit = (test) => {
    test.preventDefault()
    if (password !== confirmPassword) {
      message.error('Passwords do not match!')
    } else {
      const toSend = {
        user_name: userName,
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        birthday: birthday,

      }
      window.print(toSend)
    }
  }
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo"> {birthday}CC12 Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input id="userName" name="userName" type="text" placeholder='User Name' onChange={(e) => { setUserName(e.target.value) }} />
          <input name="firstName" type="text" placeholder='First Name' />
          <input name="lastName" type="text" placeholder='Last Name' />
          <input name="email" type="email" placeholder='Email' />
          <input name="password" type="password" placeholder='Password' />
          <input name="confirmPassword" type="password" placeholder='Confirm Password' />
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

export default Register
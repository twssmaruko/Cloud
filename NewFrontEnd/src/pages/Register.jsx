import React from 'react';
import Add from '../img/icon-registration.png';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">CC12 Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='User Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input type="file" id='file' style={{display:"none"}}/>
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
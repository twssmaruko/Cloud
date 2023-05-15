import React, {useEffect} from 'react'
import {useSelector, shallowEqual} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {Button} from 'antd';


const Navbar = () => {

  const navigate = useNavigate();

  const {usr} = useSelector(({users}) => ({
    usr: users.user
  }), shallowEqual);

  useEffect(() => {

  }, [usr])

  return (
    <div className='navbar'>
      <div className='user'>
      <img src= {usr.profile_picture_link} alt="" />
        <Button onClick={() =>{navigate("/profile")}}><span className="name">{usr.first_name} {usr.last_name}</span></Button>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
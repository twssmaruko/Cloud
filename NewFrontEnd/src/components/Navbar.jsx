import React from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import { useNavigate } from "react-router-dom";
import * as actions from '../store/users/index';


const Navbar = () => {

  const dispatcher = useDispatch();

  const {load, usr, logUser} = useSelector(({users}) => ({
    load: users.loading,
    usr: users.user
  }), shallowEqual);

  return (
    <div className='navbar'>
      <div className='user'>
        <img src="https://hips.hearstapps.com/hmg-prod/images/michael-jordan.jpg" alt="" />
        <span className="name">{usr.first_name} {usr.last_name}</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
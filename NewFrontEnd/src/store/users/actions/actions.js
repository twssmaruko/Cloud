import * as actionTypes from '../actionTypes';
// import axios from '../../../axios-orders';
import {message} from 'antd';
import api from '../../../api/api';
import { useNavigate } from "react-router-dom";



export const fetchUsersStart = () => ({
    type: actionTypes.FETCH_USERS_START
});

export const fetchUsersSuccess = (users) => ({
    type: actionTypes.FETCH_USERS_SUCCESS,
    users
})

export const newUserStart = () => ({
    type: actionTypes.NEW_USER_START
})

export const newUserSuccess = (user) => ({
    type:actionTypes.NEW_USER_SUCCESS,
    user
})

export const fetchUsers = () => async(dispatch) => {
    dispatch(fetchUsersStart())
    try {
        const response  = await api.get('/users')
        const fetchedUsers = [];
        for (const key in response.data) {
            fetchedUsers.push({
                ...response.data[key]
            })
        }
        fetchedUsers.sort(compare);
        dispatch(fetchUsersSuccess(fetchedUsers));
    } catch (err) {
        console.error(err.message)
    }
}

export const createUser = (userData) => async(dispatch) => {
    console.log('userData: ', userData)
    //const navigate = useNavigate()
    dispatch(newUserStart())
    try {
        const response = await api.post('/users/', userData);
        message.success('User Registration Success!');
      //  navigate("/")
        dispatch(fetchUsers());
    } catch (err) {
        console.error(err.message)
    }
}

const compare = (a, b) => {
    if(a.name < b.name) {
      return -1;
    }
    if(a.name > b.name) {
      return 1;
    }
    return 0;
  }
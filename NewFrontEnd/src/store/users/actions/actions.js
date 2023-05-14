import * as actionTypes from '../actionTypes';
// import axios from '../../../axios-orders';
import {message} from 'antd';
import api from '../../../api/api';
import { uploadFile } from 'react-s3';


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

export const newUserSuccess = () => ({
    type:actionTypes.NEW_USER_SUCCESS
})

export const loginUserStart =  () => ({
    type: actionTypes.LOGIN_USER_START
})

export const loginUserSuccess = (data) => ({
    type: actionTypes.LOGIN_USER_SUCCESS,
    data
})

export const loginUserFail = (data) => ({
    type: actionTypes.LOGIN_USER_FAIL,
    data
})

export const setUserLogin = () => ({
    type:actionTypes.SET_USER_LOGIN
})

export const setUserLogoff = () => ({
    type:actionTypes.SET_USER_LOGOFF
})

export const uploadPicStart = () => ({
    type:actionTypes.UPLOAD_PIC_START
})

export const uploadPicSuccess = (data) => ({
    type: actionTypes.UPLOAD_PIC_SUCCESS,
    data
})

export const uploadPicFail = () => ({
    type:actionTypes.UPLOAD_PIC_FAIL
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
        //fetchedUsers.sort(compare);
        dispatch(fetchUsersSuccess(fetchedUsers));
    } catch (err) {
        console.error(err.message)
    }
}

export const createUser = (userData, pictureFile, pictureType) => async(dispatch) => {
    dispatch(newUserStart())
    try {
        const pictureLink = "https://aimsbconnectbucket.s3.amazonaws.com/default.png"
        const createUser = {
            ...userData,
            profile_picture_link: pictureLink
        }
        console.log(createUser)
        await api.post('/users/', createUser);
        dispatch(newUserSuccess())
        message.success('User Registration Success!');
        
    } catch (err) {
        console.error(err.message)
    }
}

export const loginUser = (userData) => async(dispatch) => {
    dispatch(loginUserStart())
    try {
        const response = await api.post('/user-login', userData)
        if(response.data !== ''){
            await dispatch(setUserLogin())
            await dispatch(loginUserSuccess(response.data))
        } else {
            throw new Error("Invalid Username/Password")
        }
        
    } catch (err) {
       const errorUser = {username: 'error'}
        console.error(err.message)
        message.error('Invalid Username or Password!')
        await dispatch(setUserLogoff())
        dispatch(loginUserFail(errorUser))
        
    }
}

export const uploadPic = (data) => async(dispatch) => {
    dispatch(uploadPicStart())
    try {
        
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
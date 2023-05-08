import * as actionTypes from '../actionTypes';
import {updateObject} from '../../utility';

const initialState = {
    users: [],
    user: {},
    loading: false
}

const fetchUsersStart = (state, action) => updateObject(state, {loading: true});

const fetchUsersSuccess = (state, action) => updateObject(state, {
    users: action.users,
    loading:false
})

const newUserStart = (state, action) => updateObject(state, {loading: true});
const newUserSuccess = (state, action) => updateObject(state, {
    loading: false
})

const users = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_START: return fetchUsersStart(state, action);
        case actionTypes.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
        case actionTypes.NEW_USER_START: return newUserStart(state, action);
        case actionTypes.NEW_USER_SUCCESS: return newUserSuccess(state, action);
        default: return state;

    }
}

export default users;
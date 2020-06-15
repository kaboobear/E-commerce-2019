import {COUNT_LOADED,COUNT_LOADING,USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS,REGISTER_FAIL,LOGOUT_SUCCESS,CHANGE_MAIL,CHANGE_PASS,SET_DELIVERY} from '../actions/types';
import {returnErrors,clearErrors} from './errorActions'
import axios from 'axios';
import notify from '../components/global/notify';





export const loadUser = () => (dispatch, getState) => {
    // dispatch({type:USER_LOADING});

    axios.get('/user/info',tokenConfig(getState))
        .then(res => {
            dispatch({type:USER_LOADED,payload:res.data})
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,AUTH_ERROR))
            dispatch({type:AUTH_ERROR})
        })
}

export const calcCounts = () => (dispatch,getState) => {
    dispatch({type:COUNT_LOADING});

    axios.get('/user/counts',tokenConfig(getState))
        .then(res => {
            dispatch({type:COUNT_LOADED,payload:res.data})
        })
        .catch(err=>{
            console.log(err.response);
        })
}

export const register = (regData) => dispatch =>{
    const config = {headers:{'Content-type':'application/json'}}

    const body = JSON.stringify(regData)
    axios.post('/user/register',body,config)
        .then(res => {
            dispatch({type:REGISTER_SUCCESS,payload:res.data})
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,REGISTER_FAIL))
            dispatch({type:REGISTER_FAIL})
        })
}

export const login = (loginData) => dispatch =>{
    const config = {headers:{'Content-type':'application/json'}}

    const body = JSON.stringify(loginData)
    axios.post('/user/login',body,config)
        .then(res => dispatch({type:LOGIN_SUCCESS,payload:res.data}))
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,LOGIN_FAIL))
            dispatch({type:LOGIN_FAIL})
        })
}

export const editMail = (mail) => dispatch =>{
    const config = {headers:{'Content-type':'application/json'}}

    const body = JSON.stringify(mail)
    axios.post('/user/editMail',body,config)
        .then(res => {
            notifyMail();
            dispatch(clearErrors());
            dispatch({type:CHANGE_MAIL,payload:res.data})
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,'AUTH_EDIT_FAIL'))
        })
}

export const editPass = (data) => dispatch =>{
    const config = {headers:{'Content-type':'application/json'}}

    const body = JSON.stringify(data)
    axios.post('/user/editPass',body,config)
        .then(res => {
            notifyPass();
            dispatch(clearErrors());
            dispatch({type:CHANGE_PASS,payload:res.data})
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,'AUTH_EDIT_FAIL'))
        })
}

export const setDelivery = (data) => dispatch =>{
    const config = {headers:{'Content-type':'application/json'}}

    const body = JSON.stringify(data)
    axios.post('/user/setDelivery',body,config)
        .then(res => {
            notifyDelivery();
            dispatch(clearErrors());
            dispatch({type:SET_DELIVERY,payload:res.data})
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,'AUTH_EDIT_FAIL'))
        })
}

export const logout = () =>{
    return{
        type:LOGOUT_SUCCESS
    }
}



export const tokenConfig = (getState) =>{
    const token = getState().auth.token;

    const config = {
        headers:{
            'Content-type':'application/json'
        }
    }

    if(token) {
        config.headers['x-auth-token'] = token;
    }

    return config;
}

export const notifyMail = () =>{
    notify.mailEdit();
}

export const notifyPass = () =>{
    notify.passEdit();
}

export const notifyDelivery = () =>{
    notify.deliveryEdit();
}
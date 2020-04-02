import {ADD_ORDER,ORDERS_LOADED,SET_ORDERS_LOADING,SET_IS_ADDED,DELETE_ORDER} from './types';
import {returnErrors} from './errorActions'
import axios from 'axios';




export const loadOrders = () => (dispatch) => {
    dispatch({type:SET_ORDERS_LOADING});

    axios.get('/order')
        .then(res => {
            dispatch({type:ORDERS_LOADED,payload:res.data})
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data,err.response.status,'ORDER_ERROR'))
        })
}

export const addOrder = (order) => (dispatch) => {
    axios.post('/order',order)
        .then(res => {
            console.log(res);
            dispatch({type:ADD_ORDER,payload:res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch(returnErrors(err.response.data,err.response.status,'ORDER_ERROR'))
        })
}

export const deleteOrder = (id) => (dispatch) => {
    axios.delete(`/order/${id}`).then(order=>{
        dispatch({
            type:DELETE_ORDER,
            payload:id
        })
    })
}

export const setIsAdded = () => {
    return {
        type: SET_IS_ADDED
    }
}

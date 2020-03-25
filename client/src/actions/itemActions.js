import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING,GET_ITEM,EDIT_ITEM} from './types';
import axios from 'axios'
import {tokenConfig} from './authActions'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/item').then(res=>dispatch({type:GET_ITEMS,payload:res.data})).catch(err=>{console.log(err)})
}

export const getItem = (id) => dispatch => {
    dispatch(setItemsLoading());
    axios.get(`/item/${id}`).then(res=>dispatch({type:GET_ITEM,payload:res.data}))
}

export const deleteItem = (id) => (dispatch,getState) => {
    axios.delete(`/item/${id}`,tokenConfig(getState)).then(res=>dispatch({type:DELETE_ITEM,payload:res.data}))
}

export const addItem = (item) => (dispatch,getState) => {
    axios.post('/item',item,tokenConfig(getState)).then(res => dispatch({type:ADD_ITEM,payload:res.data}))
}

export const editItem = (item,id) => (dispatch,getState) => {
    axios.post(`/item/${id}`,item,tokenConfig(getState)).then(res => dispatch({type:EDIT_ITEM,payload:res.data}))
}

export const setItemsLoading = () => {
    return {type:ITEMS_LOADING}
}
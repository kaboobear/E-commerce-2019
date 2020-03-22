import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING,GET_ITEM,EDIT_ITEM} from './types';
import axios from 'axios'

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios.get('/item').then(res=>dispatch({type:GET_ITEMS,payload:res.data}))
}

export const getItem = (id) => dispatch => {
    dispatch(setItemsLoading());
    axios.get(`/item/${id}`).then(res=>dispatch({type:GET_ITEM,payload:res.data}))
}

export const deleteItem = (id) => dispatch => {
    axios.delete(`/item/${id}`).then(res=>dispatch({type:DELETE_ITEM,payload:res.data}))
}

export const addItem = (item) => (dispatch) => {
    axios.post('/item',item).then(res => dispatch({type:ADD_ITEM,payload:res.data}))
}

export const editItem = (item,id) => (dispatch) => {
    axios.post(`/item/${id}`,item).then(res => dispatch({type:EDIT_ITEM,payload:res.data}))
}

export const setItemsLoading = () => {
    return {type:ITEMS_LOADING}
}
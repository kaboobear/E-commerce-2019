import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING,
    GET_ITEM,
    EDIT_ITEM
} from './types';
import {returnErrors} from './errorActions';
import {tokenConfig} from './authActions';
import axios from 'axios';

export const getItems = (page, limit, category=0, from=0, to=1000000, ship=0, sort=1, regex='') => dispatch => {
    dispatch(setItemsLoading());
    axios
        .get(`/item?page=${page}&limit=${limit}&category=${category}&from=${from}&to=${to}&ship=${ship}&sort=${sort}&regex=${regex}`)
        .then(res => {
            setTimeout(() => {
                dispatch({type: GET_ITEMS, payload: res.data})
            }, 300)
        })
        .catch(err => {
            console.log(err)
        })
}

export const getItem = (id) => dispatch => {
    // dispatch(setItemsLoading());
    axios
        .get(`/item/${id}`)
        .then(res => dispatch({type: GET_ITEM, payload: res.data}))
}

export const deleteItem = (id) => (dispatch, getState) => {
    axios
        .delete(`/item/${id}`, tokenConfig(getState))
        .then(res => dispatch({type: DELETE_ITEM, payload: res.data}))
}

export const addItem = (item) => (dispatch, getState) => {
    axios
        .post('/item', item, tokenConfig(getState))
        .then(res => dispatch({type: ADD_ITEM, payload: res.data}))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "ITEM_ERROR"))
        })
}

export const editItem = (item, id, history) => (dispatch, getState) => {
    axios
        .post(`/item/${id}`, item, tokenConfig(getState))
        .then(res => {
            dispatch({type: EDIT_ITEM, payload: res.data})
            setTimeout(() => {
                history.push('/admin')
            }, 1000)
        })
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, "ITEM_ERROR"))
        })
}

export const setItemsLoading = () => {
    return {type: ITEMS_LOADING}
}
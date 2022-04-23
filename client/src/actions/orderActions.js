import {
  ADD_ORDER,
  ORDERS_LOADED,
  SET_ORDERS_LOADING,
  SET_IS_ADDED,
  DELETE_ORDER,
  ORDER_LOADED,
  SET_STATUS,
} from './types';
import { returnErrors } from './errorActions';
import axios from 'axios';

export const loadOrders = () => (dispatch) => {
  dispatch({ type: SET_ORDERS_LOADING });

  axios
    .get('/order')
    .then((res) => {
      dispatch({ type: ORDERS_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'ORDER_ERROR'),
      );
    });
};

export const getOrderById = (id) => (dispatch) => {
  dispatch({ type: SET_ORDERS_LOADING });

  axios.post(`/order/orderById/${id}`).then((res) => {
    dispatch({ type: ORDER_LOADED, payload: res.data });
  });
};

export const getOrdersByUser = (id) => (dispatch) => {
  dispatch({ type: SET_ORDERS_LOADING });

  axios
    .get(`/order/${id}`)
    .then((res) => {
      dispatch({ type: ORDERS_LOADED, payload: res.data });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'ORDER_ERROR'),
      );
    });
};

export const addOrder = (order) => (dispatch) => {
  axios
    .post('/order', order)
    .then((res) => {
      dispatch({ type: ADD_ORDER, payload: res.data });
    })
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'ORDER_ERROR'),
      );
    });
};

export const changeStatus = (id, status) => (dispatch) => {
  axios.post(`/order/status`, { id, status }).then((order) => {
    dispatch({
      type: SET_STATUS,
      payload: order.data,
    });
  });
};

export const deleteOrder = (id) => (dispatch) => {
  axios.delete(`/order/${id}`).then((order) => {
    dispatch({
      type: DELETE_ORDER,
      payload: id,
    });
  });
};

export const setIsAdded = () => {
  return {
    type: SET_IS_ADDED,
  };
};

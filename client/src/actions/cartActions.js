import {ADD_CART,SET_CART,DELETE_CART,SET_CHECKOUT,CLEAR_CART} from '../actions/types';

export const addToCart = (item,count) =>{
    return {
        type:ADD_CART,
        payload: {item,count}
    }
}

export const setCart = (items,total,count) =>{
    return {
        type:SET_CART,
        payload: {items,total,count}
    }
}

export const setCheckout = (checkout) =>{
    return {
        type:SET_CHECKOUT,
        payload:checkout
    }
}

export const deleteCart = (id) =>{
    return {
        type:DELETE_CART,
        payload: id
    }
}

export const clearCart = () =>{
    return {
        type:CLEAR_CART,
    }
}

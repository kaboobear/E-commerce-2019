import {COUNT_LOADED,COUNT_LOADING,USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS,REGISTER_FAIL,LOGOUT_SUCCESS, CHANGE_MAIL, CHANGE_PASS, SET_DELIVERY} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    user:{},
    isAuthenticated:false,
    isLoading:true,
    countLoading:false,
    counts: {}
}

export default function(state=initialState,action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case COUNT_LOADING:
            return {
                ...state,
                countLoading:true
            }
        case COUNT_LOADED:
            return {
                ...state,
                countLoading:false,
                counts: action.payload
            }
        case CHANGE_PASS:
        case CHANGE_MAIL: 
        case SET_DELIVERY:
            return{
                ...state,
                user: action.payload
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                ...action.payload,
                isLoading:false,
                isAuthenticated:true,
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isLoading:false,
                isAuthenticated:false,
                user:{},
                isAdmin:false
            }
        default:
            return state
    }
}
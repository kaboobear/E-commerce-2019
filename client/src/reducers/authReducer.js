import {USER_LOADING,USER_LOADED,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS,REGISTER_FAIL,LOGOUT_SUCCESS} from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    user:{},
    isAuthenticated:false,
    isLoading:false,
}

export default function(state=initialState,action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            return{
                ...state,
                isLoading:false,
                isAuthenticated:true,
                user:action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
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
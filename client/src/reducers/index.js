import {combineReducers} from 'redux';
import itemReducer from './itemReducer'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
    items: itemReducer,
    auth: authReducer,
    error:errorReducer
})
import {combineReducers} from 'redux';
import itemReducer from './itemReducer'

export default combineReducers({
    items: itemReducer
})
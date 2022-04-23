import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import orderReducer from './orderReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  items: itemReducer,
  auth: authReducer,
  error: errorReducer,
  cart: cartReducer,
  order: orderReducer,
  comment: commentReducer,
});

import {
  ADD_ORDER,
  ORDERS_LOADED,
  SET_ORDERS_LOADING,
  SET_IS_ADDED,
  DELETE_ORDER,
  ORDER_LOADED,
  SET_STATUS,
} from '../actions/types';

const initialState = {
  orders: [],
  order: null,
  isLoading: true,
  idAdded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_IS_ADDED:
      return {
        ...state,
        isAdded: false,
      };
    case SET_ORDERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_STATUS:
      return {
        ...state,
        order: action.payload,
        orders: state.orders.map((elem) =>
          elem._id === action.payload._id ? action.payload : elem,
        ),
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((elem) => {
          return elem._id !== action.payload;
        }),
      };
    case ORDER_LOADED:
      return {
        ...state,
        isLoading: false,
        order: action.payload,
      };
    case ORDERS_LOADED:
      return {
        ...state,
        isLoading: false,
        orders: action.payload,
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        isAdded: true,
      };
    default:
      return state;
  }
}

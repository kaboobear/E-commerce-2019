import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  GET_ITEM,
  EDIT_ITEM,
  SET_UPDATED,
  SET_ADDED,
} from '../actions/types';

const initialState = {
  items: [],
  item: {},
  pagination: {},
  filters: [],
  sort: 0,
  regex: '',
  isLoading: true,
  isUpdated: false,
  isAdded: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload.results,
        pagination: action.payload.pagination,
        filters: action.payload.filters,
        sort: action.payload.sort,
        regex: action.payload.regex,
        isLoading: false,
      };
    case GET_ITEM:
      return {
        ...state,
        item: action.payload,
        isLoading: false,
      };
    case SET_UPDATED:
      return {
        ...state,
        isUpdated: false,
      };
    case SET_ADDED:
      return {
        ...state,
        isAdded: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((elem) => elem._id !== action.payload._id),
      };
    case ADD_ITEM:
      return {
        ...state,
        isAdded: true,
        items: [action.payload, ...state.items],
      };
    case EDIT_ITEM:
      return {
        ...state,
        isUpdated: true,
        items: state.items.map((elem) => {
          if (elem._id === action.payload._id) return action.payload;
          else return elem;
        }),
      };
    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

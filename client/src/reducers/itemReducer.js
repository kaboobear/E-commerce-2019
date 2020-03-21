import {GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING} from '../actions/types'

const initialState = {
    items: [],
    isLoading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items:action.payload,
                isLoading:false
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state
                    .items
                    .filter((elem) => (elem._id !== action.payload._id))
            }
        case ADD_ITEM:
            return {
                ...state,
                items: [
                    action.payload, ...state.items
                ]
            }

        case ITEMS_LOADING:
            return {
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}
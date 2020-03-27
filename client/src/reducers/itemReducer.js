import {
    GET_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    ITEMS_LOADING,
    GET_ITEM,
    EDIT_ITEM
} from '../actions/types'

const initialState = {
    items: [],
    item: {},
    pagination: {},
    isLoading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload.results,
                pagination: action.payload.pag,
                isLoading: false
            }

        case GET_ITEM:
            return {
                ...state,
                item: action.payload,
                isLoading: false
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
        case EDIT_ITEM:
            return {
                ...state,
                items: state
                    .items
                    .map(elem => {
                        if (elem._id === action.payload._id) 
                            return action.payload;
                        else 
                            return elem
                    })
            }
        case ITEMS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}
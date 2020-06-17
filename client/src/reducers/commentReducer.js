import {ADD_COMMENT,COMMENTS_IS_LOADED,COMMENTS_IS_LOADING} from '../actions/types'

const initialState = {
    comments:[],
    commentsLoading:false,
}

export default function(state=initialState,action){
    switch(action.type){
        case COMMENTS_IS_LOADING:
            return{
                ...state,
                commentsLoading:true
            }
        case COMMENTS_IS_LOADED:
            return{
                ...state,
                commentsLoading:false,
                comments: action.payload
            }
        case ADD_COMMENT:
            return{
                ...state,
                comments: [action.payload,...state.comments]
            }
        default:
            return state
    }
}
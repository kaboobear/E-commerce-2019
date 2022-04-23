import {
  COMMENTS_IS_LOADED,
  COMMENTS_IS_LOADING,
  ADD_COMMENT,
} from '../actions/types';
import axios from 'axios';

export const getComments = (id) => (dispatch) => {
  dispatch({ type: COMMENTS_IS_LOADING });

  axios.get(`/comment/${id}`).then((comments) => {
    dispatch({ type: COMMENTS_IS_LOADED, payload: comments.data });
  });
};

export const addComment = (data) => (dispatch) => {
  axios
    .post('/comment', data)
    .then((comment) => dispatch({ type: ADD_COMMENT, payload: comment.data }));
};

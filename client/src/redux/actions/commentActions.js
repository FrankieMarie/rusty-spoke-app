import axios from 'axios'
import {
  GET_COMMENTS,
  COMMENTS_LOADING,
  GET_ERRORS
} from './types'

// Get all comments
export const getAllComments = () => dispatch => {
  dispatch(setCommentsLoading())
  axios.get('http://localhost:5000/api/comments/all')
    .then(res =>
      dispatch({
        type: GET_COMMENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}

// Comments loading
export const setCommentsLoading = () => {
  return {
    type: COMMENTS_LOADING
  }
}
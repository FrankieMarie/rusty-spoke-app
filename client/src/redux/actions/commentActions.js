import axios from 'axios'
import {
  GET_COMMENTS,
  COMMENTS_LOADING,
  GET_ERRORS,
  POST_COMMENT
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

// Post comment
export const postComment = (comment, history) => dispatch => {
  axios.post('http://localhost:5000/api/comments', comment)
    .then(res => {
      dispatch({
        type: POST_COMMENT,
        payload: res.data
      })
      history.push('/comments')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {err}
      })
    )
}
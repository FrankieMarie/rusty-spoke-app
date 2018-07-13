import axios from 'axios'
import {
  GET_HOLDS,
  HOLDS_LOADING,
  GET_ERRORS
} from './types'

// Get all holds
export const getAllHolds = () => dispatch => {
  dispatch(setHoldsLoading())
  axios.get('http://localhost:5000/api/holds/all')
    .then(res =>
      dispatch({
        type: GET_HOLDS,
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

// Holds loading
export const setHoldsLoading = () => {
  return {
    type: HOLDS_LOADING
  }
}
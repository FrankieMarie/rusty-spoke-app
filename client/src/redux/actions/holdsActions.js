import axios from 'axios'
import {
  GET_HOLDS,
  HOLDS_LOADING,
  GET_ERRORS,
  DELETE_HOLD,
  EDIT_HOLD,
  GET_HOLD_BY_ID
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

// Get hold by id
export const getHoldById = (id) => dispatch => {
  dispatch(setHoldsLoading())
  axios.get(`http://localhost:5000/api/holds/${id}`)
    .then(res =>
      dispatch({
        type: GET_HOLD_BY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_HOLD_BY_ID,
        payload: null
      })
    )
}

// Edit hold
export const editHold = (id, hold, history) => dispatch => {
  axios.post(`http://localhost:5000/api/holds/${id}`, hold)
  .then(res =>{
    dispatch({
      type: EDIT_HOLD,
      payload: res.data
    })
    history.push('/holds')
  }
  )
  .catch(err =>
    dispatch({
      type: GET_ERRORS,
      payload: {}
    })
  )
}

// Delete Hold
export const deleteHold = (id) => dispatch => {
  if(window.confirm('Are you sure you want to delete this hold?')) {
    axios.delete(`http://localhost:5000/api/holds/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_HOLD,
          payload: id
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      )
  }
}
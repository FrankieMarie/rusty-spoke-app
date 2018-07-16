import axios from 'axios'
import {
  GET_SHIFTS,
  SHIFTS_LOADING,
  GET_ERRORS,
  START_SHIFT,
  GET_SHIFT_BY_ID,
  EDIT_SHIFT
} from './types'

// Get all shifts
export const getAllShifts = () => dispatch => {
  dispatch(setShiftsLoading())
  axios.get('http://localhost:5000/api/shifts/all')
    .then(res =>
      dispatch({
        type: GET_SHIFTS,
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

// Shifts loading
export const setShiftsLoading = () => {
  return {
    type: SHIFTS_LOADING
  }
}

// Get shift by id
export const getShiftById = (id) => dispatch => {
  dispatch(setShiftsLoading())
  axios.get(`http://localhost:5000/api/shifts/${id}`)
    .then(res =>
      dispatch({
        type: GET_SHIFT_BY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SHIFT_BY_ID,
        payload: null
      })
    )
}

// Update shift information
export const editShift = (id, shift, history) => dispatch => {
  axios.post(`http://localhost:5000/api/shifts/${id}`, shift)
    .then(res =>{
      dispatch({
        type: EDIT_SHIFT,
        payload: res.data
      })
      history.push('/shifts')
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}
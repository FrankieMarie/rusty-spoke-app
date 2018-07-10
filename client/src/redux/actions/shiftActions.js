import axios from 'axios'
import {
  GET_SHIFTS,
  SHIFTS_LOADING,
  GET_ERRORS
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
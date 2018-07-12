import axios from 'axios'
import {
  GET_ERRORS,
  GET_STAFF,
  STAFF_LOADING
} from './types'

// Register staff member
export const registerStaff = (staffData) => {
  return {
    type: GET_ERRORS,
    payload: staffData
  }
}

// Get all staff
export const getAllStaff = () => dispatch => {
  dispatch(setStaffLoading())
  axios.get('http://localhost:5000/api/staff/all')
    .then(res =>
      dispatch({
        type: GET_STAFF,
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

// Staff loading
export const setStaffLoading = () => {
  return {
    type: STAFF_LOADING
  }
}

// Delete Staff
export const deleteStaff = () => {

}
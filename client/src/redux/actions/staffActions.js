import axios from 'axios'
import {
  GET_ERRORS,
  GET_STAFF,
  STAFF_LOADING,
  GET_STAFF_BY_ID,
  ADD_STAFF,
  EDIT_STAFF,
  DELETE_STAFF
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

// Get staff by id
export const getStaffById = (id) => dispatch => {
  dispatch(setStaffLoading())
  axios.get(`http://localhost:5000/api/staff/${id}`)
    .then(res =>
      dispatch({
        type: GET_STAFF_BY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_STAFF_BY_ID,
        payload: null
      })
    )
}

// Register new staff/volunteer
export const addStaff = (volunteer, history) => dispatch => {
  axios.post('http://localhost:5000/api/staff', volunteer)
    .then(res => {
      dispatch({
        type: ADD_STAFF,
        payload: res.data
      })
      history.push('/staff')
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}

// Update staff/volunteer information
export const editStaff = (id, volunteer, history) => dispatch => {
  axios.post(`http://localhost:5000/api/staff/${id}`, volunteer)
    .then(res =>{
      dispatch({
        type: EDIT_STAFF,
        payload: res.data
      })
      history.push('/staff')
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}

// Delete Staff
export const deleteStaff = (id) => dispatch => {
  if(window.confirm('Are you sure you want to remove staff member?')) {
    axios.delete(`http://localhost:5000/api/staff/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_STAFF,
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
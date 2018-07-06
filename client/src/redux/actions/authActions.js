import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_USER } from './types'

// Register User
export const registerUser = (userData) => dispatch => {
  axios.post('http://localhost:5000/api/user/register', userData)
      .then(res => console.log(res.data))
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      )
}

// Login Admin User - get token
export const loginUser = (userData) => dispatch => {
  axios.post('http://localhost:5000/api/user/login', userData)
    .then(res => {
      const { token } = res.data
      localStorage.setItem('jwtToken', token)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setUser(decoded))
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

// Set logged in User
export const setUser = (decoded) => {
  return {
    type: SET_USER,
    payload: decoded
  }
}
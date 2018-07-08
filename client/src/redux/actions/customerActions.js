import axios from 'axios'
import { GET_CUSTOMERS, CUSTOMERS_LOADING, GET_ERRORS } from './types'

// Get all customers
export const getAllCustomers = () => dispatch => {
  dispatch(setCustomersLoading())
  axios.get('http://localhost:5000/api/customers/all')
    .then(res =>
      dispatch({
        type: GET_CUSTOMERS,
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

// Customers loading
export const setCustomersLoading = () => {
  return {
    type: CUSTOMERS_LOADING
  }
}
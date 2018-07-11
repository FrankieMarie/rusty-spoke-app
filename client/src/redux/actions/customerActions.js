import axios from 'axios'
import {
  GET_CUSTOMERS,
  CUSTOMERS_LOADING,
  GET_ERRORS,
  GET_CUSTOMER_BY_ID,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER
} from './types'

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

// Get customer by id
export const getCustomerById = (id) => dispatch => {
  dispatch(setCustomersLoading())
  axios.get(`http://localhost:5000/api/customers/${id}`)
    .then(res =>
      dispatch({
        type: GET_CUSTOMER_BY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CUSTOMER_BY_ID,
        payload: null
      })
    )
}

// Register a new customer
export const addCustomer = (customer, history) => dispatch => {
  axios.post('http://localhost:5000/api/customers', customer)
    .then(res => {
      dispatch({
        type: ADD_CUSTOMER,
        payload: res.data
      })
      history.push('/customers')
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}

// Update customer information
export const editCustomer = (id) => dispatch => {
  axios.post(`http://localhost:5000/api/customers/${id}`)
    .then(res =>
      dispatch({
        type: EDIT_CUSTOMER,
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

// Delete Customer
export const deleteCustomer = (id) => dispatch => {
  if(window.confirm('Are you sure you want to remove this customer?')) {
    axios.delete(`http://localhost:5000/api/customers/${id}`)
      .then(res =>
        dispatch({
          type: DELETE_CUSTOMER,
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
import {
  GET_CUSTOMERS,
  CUSTOMERS_LOADING,
  GET_CUSTOMER_BY_ID,
  ADD_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER
} from '../actions/types'

const initialState = {
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CUSTOMERS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
        loading: false
      }
    case GET_CUSTOMER_BY_ID:
      return {
        ...state,
        customer: action.payload,
        loading: false
      }
    case ADD_CUSTOMER:
      return {
        ...state,
        customer: action.payload
      }
    case EDIT_CUSTOMER:
      return {
        ...state,
        customer: action.payload
      }
    case DELETE_CUSTOMER:
      console.log('state',state)
      return {
        ...state,
        customers: state.customers.filter(val => val._id != action.payload)
      }
    default:
      return state
  }
}
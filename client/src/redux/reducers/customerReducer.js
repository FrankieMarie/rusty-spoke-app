import {
  GET_CUSTOMERS,
  CUSTOMERS_LOADING,
  GET_CUSTOMER_BY_ID
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
    default:
      return state
  }
}
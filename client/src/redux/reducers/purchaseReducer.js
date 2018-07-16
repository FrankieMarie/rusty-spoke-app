import {
  GET_PURCHASES,
  PURCHASES_LOADING,
  NEW_PURCHASE,
  GET_PURCHASE_BY_ID,
  EDIT_PURCHASE
} from '../actions/types'

const initialState = {
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case PURCHASES_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_PURCHASES:
      return {
        ...state,
        purchases: action.payload,
        loading: false
      }
    case NEW_PURCHASE:
      return {
        ...state,
        purchase: action.payload
      }
    case GET_PURCHASE_BY_ID:
      return {
        ...state,
        purchase: action.payload,
        loading: false
      }
    case EDIT_PURCHASE:
      return {
        ...state,
        purchase: action.payload
      }
    default:
      return state
  }
}
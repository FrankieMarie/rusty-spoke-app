import {
  GET_PURCHASES,
  PURCHASES_LOADING
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
    default:
      return state
  }
}
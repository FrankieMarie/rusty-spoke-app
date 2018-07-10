import {
  GET_SHIFTS,
  SHIFTS_LOADING
} from '../actions/types'

const initialState = {
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SHIFTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_SHIFTS:
      return {
        ...state,
        shifts: action.payload,
        loading: false
      }
    default:
      return state
  }
}
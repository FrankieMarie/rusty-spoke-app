import {
  GET_SHIFTS,
  SHIFTS_LOADING,
  START_SHIFT,
  GET_SHIFT_BY_ID,
  EDIT_SHIFT
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
    case GET_SHIFT_BY_ID:
      return {
        ...state,
        shift: action.payload,
        loading: false
      }
    case EDIT_SHIFT:
      return {
        ...state,
        shift: action.payload
      }
    default:
      return state
  }
}
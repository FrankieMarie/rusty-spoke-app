import {
  GET_HOLDS,
  HOLDS_LOADING,
  DELETE_HOLD,
  GET_HOLD_BY_ID,
  EDIT_HOLD
} from '../actions/types'

const initialState = {
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case HOLDS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_HOLDS:
      return {
        ...state,
        holds: action.payload,
        loading: false
      }
    case GET_HOLD_BY_ID:
      return {
        ...state,
        hold: action.payload,
        loading: false
      }
    case EDIT_HOLD:
      return {
        ...state,
        hold: action.payload
      }
    case DELETE_HOLD:
      return {
        ...state,
        holds: state.holds.filter(val => val._id !== action.payload)
      }
    default:
      return state
  }
}
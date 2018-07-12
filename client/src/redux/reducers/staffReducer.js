import {
  STAFF_LOADING,
  GET_STAFF,
  GET_STAFF_BY_ID,
  ADD_STAFF,
  EDIT_STAFF,
  DELETE_STAFF
} from '../actions/types'

const initialState = {
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case STAFF_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_STAFF:
      return {
        ...state,
        staff: action.payload,
        loading: false
      }
    case GET_STAFF_BY_ID:
      return {
        ...state,
        volunteer: action.payload,
        loading: false
      }
    case ADD_STAFF:
      return {
        ...state,
        volunteer: action.payload
      }
    case EDIT_STAFF:
      return {
        ...state,
        volunteer: action.payload
      }
    case DELETE_STAFF:
      return {
        ...state,
        staff: state.staff.filter(val => val._id !== action.payload)
      }
    default:
      return state
  }
}
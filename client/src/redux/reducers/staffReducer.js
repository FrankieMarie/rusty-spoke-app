import {
  STAFF_LOADING,
  GET_STAFF
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
    default:
      return state
  }
}
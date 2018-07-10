import {
  GET_HOLDS,
  HOLDS_LOADING
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
    default:
      return state
  }
}
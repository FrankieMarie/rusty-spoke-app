import {
  GET_VISITS,
  VISITS_LOADING,
  NEW_VISIT,
  GET_VISIT_BY_ID,
  EDIT_VISIT
} from '../actions/types'

const initialState = {
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case VISITS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_VISITS:
      return {
        ...state,
        visits: action.payload,
        loading: false
      }
    case NEW_VISIT:
      return {
        ...state,
        visit: action.payload
      }
    case GET_VISIT_BY_ID:
      return {
        ...state,
        visit: action.payload,
        loading: false
      }
    case EDIT_VISIT:
      return {
        ...state,
        visit: action.payload
      }
    default:
      return state
  }
}
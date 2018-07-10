import {
  GET_COMMENTS,
  COMMENTS_LOADING
} from '../actions/types'

const initialState = {
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case COMMENTS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        loading: false
      }
    default:
      return state
  }
}
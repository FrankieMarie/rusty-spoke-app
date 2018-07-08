import { TEST_DISPATCH } from '../actions/types'

const initialState = {
  staff: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state,
        staff: action.payload
      }
    default:
      return state
  }
}
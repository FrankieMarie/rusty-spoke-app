import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import customerReducer from './customerReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  customer: customerReducer
})
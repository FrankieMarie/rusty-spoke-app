import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import customerReducer from './customerReducer'
import staffReducer from './staffReducer'
import commentReducer from './commentReducer'
import purchaseReducer from './purchaseReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  customers: customerReducer,
  staff: staffReducer,
  comments: commentReducer,
  purchases: purchaseReducer
})
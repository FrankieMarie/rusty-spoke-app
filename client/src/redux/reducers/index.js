import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
import customerReducer from './customerReducer'
import staffReducer from './staffReducer'
import commentReducer from './commentReducer'
import purchaseReducer from './purchaseReducer'
import shiftReducer from './shiftReducer'
import currentVisitReducer from './currentVisitReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  customers: customerReducer,
  staff: staffReducer,
  comments: commentReducer,
  purchases: purchaseReducer,
  shifts: shiftReducer,
  visits: currentVisitReducer
})
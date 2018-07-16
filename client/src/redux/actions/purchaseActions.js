import axios from 'axios'
import {
  GET_PURCHASES,
  PURCHASES_LOADING,
  GET_ERRORS,
  NEW_PURCHASE
} from './types'

// Get all purchases
export const getAllPurchases = () => dispatch => {
  dispatch(setPurchasesLoading())
  axios.get('http://localhost:5000/api/purchases/all')
    .then(res =>
      dispatch({
        type: GET_PURCHASES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}

// Purchases loading
export const setPurchasesLoading = () => {
  return {
    type: PURCHASES_LOADING
  }
}

// New purchase
export const newPurchase = (purchase, history) => dispatch => {
  axios.post('http://localhost:5000/api/purchases', purchase)
    .then(res => {
      dispatch({
        type: NEW_PURCHASE,
        payload: res.data
      })
      history.push('/purchases')
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}
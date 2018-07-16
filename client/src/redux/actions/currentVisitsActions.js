import axios from 'axios'
import {
  GET_VISITS,
  VISITS_LOADING,
  GET_ERRORS,
  NEW_VISIT,
  GET_VISIT_BY_ID,
  EDIT_VISIT
} from './types'

// Get all visits
export const getAllVisits = () => dispatch => {
  dispatch(setVisitsLoading())
  axios.get('http://localhost:5000/api/visits')
    .then(res =>
      dispatch({
        type: GET_VISITS,
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

// Visits loading
export const setVisitsLoading = () => {
  return {
    type: VISITS_LOADING
  }
}

// Log new visit
export const newVisit = (visit, history) => dispatch => {
  axios.post('http://localhost:5000/api/visits', visit)
    .then(res => {
      dispatch({
        type: NEW_VISIT,
        payload: res.data
      })
      history.push('/current-visits')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}

// Get visit by id
export const getVisitById = (id) => dispatch => {
  dispatch(setVisitsLoading())
  axios.get(`http://localhost:5000/api/visits/${id}`)
    .then(res =>
      dispatch({
        type: GET_VISIT_BY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_VISIT_BY_ID,
        payload: null
      })
    )
}

// Update visit information
export const editVisit = (id, visit, history) => dispatch => {
  axios.post(`http://localhost:5000/api/visits/${id}`, visit)
    .then(res =>{
      dispatch({
        type: EDIT_VISIT,
        payload: res.data
      })
      history.push('/current-visits')
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    )
}
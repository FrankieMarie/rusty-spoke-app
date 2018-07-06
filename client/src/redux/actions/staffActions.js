import { GET_ERRORS } from './types'

// Register staff member
export const registerStaff = (staffData) => {
  return {
    type: GET_ERRORS,
    payload: staffData
  }
}
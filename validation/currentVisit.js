const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateCurrentVisitInput(data) {
  let errors = {}

  data.customer = !isEmpty(data.customer) ? data.customer : ''
  data.reason = !isEmpty(data.reason) ? data.reason : ''
  data.worktrade = !isEmpty(data.worktrade) ? data.worktrade : ''

  if (Validator.isEmpty(data.customer)) {
    errors.customer = 'Customer field is required'
  }

  if (Validator.isEmpty(data.reason)) {
    errors.reason = 'Reason is required'
  }

  if (Validator.isEmpty(data.worktrade)) {
    errors.worktrade = 'Worktrade field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
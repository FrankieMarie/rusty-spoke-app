const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateRegisterInput(data) {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.phone = !isEmpty(data.phone) ? data.phone : ''

  if (!Validator.isLength(data.name, {
      min: 2,
      max: 30
    })) {
    errors.name = 'Name must be between 2 and 30 characters'
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.phone)) {
    errors.phone = 'Phone Number field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
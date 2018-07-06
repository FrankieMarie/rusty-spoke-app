const Validator = require('validator')
const isEmpty = require('./is-empty')

module.exports = function validateCommentInput(data) {
  let errors = {}

  data.resourceType = !isEmpty(data.resourceType) ? data.resourceType : ''
  data.author = !isEmpty(data.author) ? data.author : ''
  data.body = !isEmpty(data.body) ? data.body : ''

  if (Validator.isEmpty(data.resourceType)) {
    errors.resourceType = 'Resource Type field is required'
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = 'Author field is required'
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body field is required'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
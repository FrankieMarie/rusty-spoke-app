const mongoose = require('mongoose')
const Schema = mongoose.Schema

const StaffSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Staff = mongoose.model('staff', StaffSchema)
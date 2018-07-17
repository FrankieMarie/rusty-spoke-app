const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  workTradeHours: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Customer = mongoose.model('customer', CustomerSchema)
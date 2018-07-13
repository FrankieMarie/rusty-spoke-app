const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HoldSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'customer',
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  item: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false,
    required: true
  }
})

module.exports = Hold = mongoose.model('hold', HoldSchema)
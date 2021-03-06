const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CurrentVisitSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'customer',
    required: true
  },
  toolbox: {
    type: String
  },
  reason: {
    type: String,
    required: true
  },
  worktrade: {
    type: String,
    required: true
  },
  arrived: {
    type: Date,
    default: Date.now
  },
  departed: {
    type: Date
  }
})

module.exports = CurrentVisit = mongoose.model('currentVisit', CurrentVisitSchema)
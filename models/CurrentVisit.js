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
    type: Boolean,
    required: true,
    default: false
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
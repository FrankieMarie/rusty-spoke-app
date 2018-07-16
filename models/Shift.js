const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ShiftSchema = new Schema({
  start: {
    type: Date,
    default: Date.now
  },
  end: {
    type: Date
  },
  floatStart: {
    type: Number,
    required: true
  },
  floatEnd: {
    type: Number
  },
  staff: [{
    one: {
      type: Schema.Types.ObjectId,
      ref: 'staff',
      required: true
    },
    two: {
      type: Schema.Types.ObjectId,
      ref: 'staff'
    },
    three: {
      type: Schema.Types.ObjectId,
      ref: 'staff'
    },
    four: {
      type: Schema.Types.ObjectId,
      ref: 'staff'
    }
  }]
})

module.exports = Shift = mongoose.model('shift', ShiftSchema)
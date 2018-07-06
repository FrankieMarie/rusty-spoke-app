const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PurchaseSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'customer',
    required: true
  },
  item: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  costHours: {
    type: Number
  },
  costCash: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Purchase = mongoose.model('purchase', PurchaseSchema)
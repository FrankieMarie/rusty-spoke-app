const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  resourceType: {
    type: String,
    required: true
  },
  resource: {
    type: Schema.Types.ObjectId,
    ref: 'customer'
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'staff',
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

module.exports = Comment = mongoose.model('comment', CommentSchema)
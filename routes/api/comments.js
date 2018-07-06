const express = require('express')
const router = express.Router()
const passport = require('passport')

// Model
const Comment = require('../../models/Comment')
const Customer = require('../../models/Customer')
const Staff = require('../../models/Staff')

// @route     GET api/comments/all
// @desc      Get all comments
// @access    Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  Comment.find()
    .populate('resource', ['name'], Customer)
    .populate('author', ['name'], Staff)
    .then(comment => res.json(comment))
    .catch(err => res.status(404).json(err))
})

// @route     POST api/comments
// @desc      Post a comment
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const comment = new Comment({
    resourceType: req.body.resourceType,
    resource: req.body.resource,
    author: req.body.author,
    body: req.body.body
  })
  comment.save()
    .then(comment => res.json(comment))
    .catch(err => res.json(err))
})

// @route     POST api/comments/:id
// @desc      Edit a comment
// @access    Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const commentFields = {}
  commentFields.comment = req.params.id
  if(req.body.resourceType) commentFields.resourceType = req.body.resourceType
  if(req.body.resource) commentFields.resource = req.body.resource
  if(req.body.author) commentFields.author = req.body.author
  if(req.body.body) commentFields.body = req.body.body
    Comment.findOneAndUpdate(
      { _id: req.params.id },
      { $set: commentFields },
      { new: true }
    ).then(comment => res.json(comment))
})

// @route     DELETE api/comments/:id
// @desc      Delete a comment
// @access    Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Comment.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ success: 'Comment deleted'}))
})

module.exports = router
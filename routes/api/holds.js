const express = require('express')
const router = express.Router()
const passport = require('passport')

// Model
const Hold = require('../../models/Hold')

// @route     GET api/holds/all
// @desc      Get all holds
// @access    Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  Hold.find()
  .then(hold => res.json(hold))
  .catch(err => res.status(404).json(err))
})

// @route     POST api/holds
// @desc      Log a hold
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const hold = new Hold({
    customer: req.body.customer,
    date: req.body.date,
    item: req.body.item,
    description: req.body.description,
    completed: req.body.completed
  })
  hold.save()
    .then(hold => res.json(hold))
    .catch(err => res.json(err))
})

// @route     POST api/holds/:id
// @desc      Edit a hold
// @access    Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const holdFields = {}
  holdFields.hold = req.params.id
  if(req.body.customer) holdFields.customer = req.body.customer
  if(req.body.date) holdFields.date = req.body.date
  if(req.body.item) holdFields.item = req.body.item
  if(req.body.description) holdFields.description = req.body.description
  if(req.body.completed) holdFields.completed = req.body.completed
    Hold.findOneAndUpdate(
      { _id: req.params.id },
      { $set: holdFields },
      { new: true }
    ).then(hold => res.json(hold))
})

// @route     DELETE api/holds/:id
// @desc      Delete a hold
// @access    Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Hold.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ success: 'Hold deleted'}))
})

module.exports = router
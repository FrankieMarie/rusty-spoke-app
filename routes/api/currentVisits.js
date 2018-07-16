const express = require('express')
const router = express.Router()
const passport = require('passport')

// Model
const CurrentVisit = require('../../models/CurrentVisit')
const Customer = require('../../models/Customer')

// Validation
const validateCurrentVisitInput = require('../../validation/currentVisit')

// @route     GET api/visits
// @desc      Get all current visits
// @access    Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  CurrentVisit.find().sort({ arrived: -1 })
    .populate('customer', ['name', '_id'], Customer)
    .then(visit => res.json(visit))
    .catch(err => res.status(404).json(err))
})

// @route     POST api/visits
// @desc      Log a new visit
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const {
    errors,
    isValid
  } = validateCurrentVisitInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  const visit = new CurrentVisit({
    customer: req.body.customer,
    toolbox: req.body.toolbox,
    reason: req.body.reason,
    worktrade: req.body.worktrade,
    arrived: req.body.arrived,
    departed: req.body.departed
  })
  visit.save()
    .then(visit => res.json(visit))
    .catch(err => res.json(err))
})

// @route     GET api/visits/:id
// @desc      Get visit by id
// @access    Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  CurrentVisit.findById({ _id: req.params.id })
    .then(visit => res.json(visit))
    .catch(err => res.status(404).json({ notfound: 'Visit not found' }))
})

// @route     POST api/visits/:id
// @desc      Edit a visit
// @access    Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const visitFields = {}
  visitFields.visit = req.params.id
  if(req.body.customer) visitFields.customer = req.body.customer
  if(req.body.arrived) visitFields.arrived = req.body.arrived
  if(req.body.reason) visitFields.reason = req.body.reason
  if(req.body.toolbox) visitFields.toolbox = req.body.toolbox
  if(req.body.worktrade) visitFields.worktrade = req.body.worktrade
  if(req.body.departed) visitFields.departed = req.body.departed
  CurrentVisit.findOneAndUpdate(
    { _id: req.params.id },
    { $set: visitFields },
    { new: true }
  ).then(visit => res.json(visit))
})

module.exports = router
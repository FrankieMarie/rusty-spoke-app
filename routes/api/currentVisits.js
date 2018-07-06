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
  CurrentVisit.find()
    .populate('customer', ['name'], Customer)
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
    toolbox: req.body.item,
    reason: req.body.description,
    worktrade: req.body.worktrade,
    arrived: req.body.costHours,
    departed: req.body.costCash
  })
  visit.save()
    .then(visit => res.json(visit))
    .catch(err => res.json(err))
})

module.exports = router
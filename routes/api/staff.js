const express = require('express')
const router = express.Router()
const passport = require('passport')

// Model
const Staff = require('../../models/Staff')

// Validation
const validateRegisterStaffInput = require('../../validation/registerStaff')

// @route     GET api/staff/all
// @desc      Get all staff members
// @access    Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  Staff.find()
    .then(staff => res.json(staff))
    .catch(err => res.status(404).json(err))
})

// @route     GET api/staff/:id
// @desc      Get staff member by id
// @access    Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Staff.findById({ _id: req.params.id })
    .then(staff => res.json(staff))
    .catch(err => res.status(404).json({ notfound: 'Staff member not found' }))
})

// @route     POST api/staff
// @desc      Register staff member
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const {
    errors,
    isValid
  } = validateRegisterStaffInput(req.body)
  if (!isValid) {
    return res.status(400).json(errors)
  }

  Staff.findOne({ email: req.body.email })
    .then(staff => {
      if(staff) {
        return res.status(400).json({ error: 'Email already exists. '})
      } else {
        const staff = new Staff({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone
        })
        staff.save().then(staff => res.json(staff))
      }
    })
})

// @route     POST api/staff/:id
// @desc      Edit staff member
// @access    Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const staffFields = {}
  staffFields.staff = req.params.id
  if(req.body.name) staffFields.name = req.body.name
  if(req.body.email) staffFields.email = req.body.email
  if(req.body.phone) staffFields.phone = req.body.phone
  Staff.findOneAndUpdate(
    { _id: req.params.id },
    { $set: staffFields },
    { new: true }
  ).then(staff => res.json(staff))
})

// @route     DELETE api/staff/:id
// @desc      Delete staff member
// @access    Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Staff.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ success: 'Staff member deleted'}))
})

module.exports = router
const express = require('express')
const router = express.Router()
const passport = require('passport')

// Model
const Shift = require('../../models/Shift')
const Staff = require('../../models/Staff')

// @route     GET api/shifts/all
// @desc      Get all shifts
// @access    Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  Shift.find().sort({ start: -1 })
    .populate('staff.one', ['name', 'email'], Staff)
    .populate('staff.two', ['name', 'email'], Staff)
    .populate('staff.three', ['name', 'email'], Staff)
    .populate('staff.four', ['name', 'email'], Staff)
    .then(shifts => res.json(shifts))
    .catch(err => res.status(404).json(err))
})

// @route     POST api/shifts
// @desc      Create a shift
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const shift = new Shift({
    start: req.body.start,
    end: req.body.end,
    floatStart: req.body.floatStart,
    floatEnd: req.body.floatEnd,
    staff: [{
      one: req.body.one,
      two: req.body.two,
      three: req.body.three,
      four: req.body.four
    }]
  })
  shift.save()
    .then(shift => res.json(shift))
    .catch(err => res.json(err))
})

// @route     GET api/shifts/:id
// @desc      Get shift by id
// @access    Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Shift.findById({ _id: req.params.id })
    .then(shift => res.json(shift))
    .catch(err => res.status(404).json({ notfound: 'Shift not found' }))
})

// @route     POST api/shifts/:id
// @desc      Edit a shift
// @access    Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const shiftFields = {}
  shiftFields.shift = req.params.id
  if(req.body.start) shiftFields.start = req.body.start
  if(req.body.end) shiftFields.end = req.body.end
  if(req.body.floatStart) shiftFields.floatStart = req.body.floatStart
  if(req.body.floatEnd) shiftFields.floatEnd = req.body.floatEnd
  if(req.body.one) shiftFields.one = req.body.one
  if(req.body.two) shiftFields.two = req.body.two
  if(req.body.three) shiftFields.three = req.body.three
  if(req.body.four) shiftFields.four = req.body.four
  Shift.findOneAndUpdate(
    { _id: req.params.id },
    { $set: shiftFields },
    { new: true }
  ).then(shift => res.json(shift))
})

module.exports = router
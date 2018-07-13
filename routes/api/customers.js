const express = require('express')
const router = express.Router()
const passport = require('passport')

// Model
const Customer = require('../../models/Customer')

// @route     GET api/customers/all
// @desc      Get all customers
// @access    Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  Customer.find()
  .then(customer => res.json(customer))
  .catch(err => res.status(404).json(err))
})

// @route     GET api/customers/:id
// @desc      Get customer by id
// @access    Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Customer.findById({ _id: req.params.id })
  .then(customer => res.json(customer))
  .catch(err => res.status(404).json({ notfound: 'Customer not found' }))
})

// @route     POST api/customers
// @desc      Register a customer
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  Customer.findOne({ email: req.body.email })
    .then(customer => {
      if(customer) {
        return res.status(400).json({ error: 'Email already exists. '})
      } else {
        const customer = new Customer({
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          workTradeHours: req.body.workTradeHours
        })
        customer.save().then(customer => res.json(customer))
      }
    })
})

// @route     POST api/customers/:id
// @desc      Edit customer's information
// @access    Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const customerFields = {}
  customerFields.customer = req.params.id
  if(req.body.name) customerFields.name = req.body.name
  if(req.body.email) customerFields.email = req.body.email
  if(req.body.phone) customerFields.phone = req.body.phone
  if(req.body.workTradeHours) customerFields.workTradeHours = req.body.workTradeHours
  Customer.findOneAndUpdate(
    { _id: req.params.id },
    { $set: customerFields },
    { new: true }
  ).then(customer => res.json(customer))
})

// @route     DELETE api/customers/:id
// @desc      Delete a customer
// @access    Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Customer.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ success: 'Customer deleted'}))
})

module.exports = router
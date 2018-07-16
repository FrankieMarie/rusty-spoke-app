const express = require('express')
const router = express.Router()
const passport = require('passport')

// Model
const Purchase = require('../../models/Purchase')
const Customer = require('../../models/Customer')

// @route     GET api/purchases/all
// @desc      Get all purchases
// @access    Private
router.get('/all', passport.authenticate('jwt', { session: false }), (req, res) => {
  Purchase.find().sort({ date: -1 })
    .populate('customer', ['name'], Customer)
    .then(purchase => res.json(purchase))
    .catch(err => res.status(404).json(err))
})

// @route     GET api/purchases/:id
// @desc      Get a single purchase by id
// @access    Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Purchase.findById({ _id: req.params.id })
    .then(purchase => res.json(purchase))
    .catch(err => res.status(404).json({ notfound: 'Purchase not found' }))
})

// @route     POST api/purchases
// @desc      Create a purchase
// @access    Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const purchase = new Purchase({
    customer: req.body.customer,
    item: req.body.item,
    description: req.body.description,
    costHours: req.body.costHours,
    costCash: req.body.costCash
  })
  purchase.save()
    .then(purchase => res.json(purchase))
    .catch(err => res.json(err))
})

// @route     POST api/purchases/:id
// @desc      Edit a purchase
// @access    Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  const purchaseFields = {}
  purchaseFields.purchase = req.params.id
  if(req.body.customer) purchaseFields.customer = req.body.customer
  if(req.body.item) purchaseFields.item = req.body.item
  if(req.body.description) purchaseFields.description = req.body.description
  if(req.body.costHours) purchaseFields.costHours = req.body.costHours
  if(req.body.costCash) purchaseFields.costCash = req.body.costCash
    Purchase.findOneAndUpdate(
      { _id: req.params.id },
      { $set: purchaseFields },
      { new: true }
    ).then(purchase => res.json(purchase))
})

// @route     DELETE api/purchases/:id
// @desc      Delete a purchase
// @access    Private
router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Purchase.findOneAndRemove({ _id: req.params.id })
    .then(() => res.json({ success: 'Purchase information deleted'}))
})

module.exports = router
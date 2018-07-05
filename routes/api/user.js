const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')
const passport = require('passport')

// Model
const User = require('../../models/User')

// @route     POST api/user/register
// @desc      Register user/admin
// @access    Public
router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(user) {
        return res.status(400).json({ error: 'Email already exists. '})
      } else {
        const admin = new User({
          email: req.body.email,
          password: req.body.password
        })
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(admin.password, salt, (err, hash) => {
            if(err) throw err
            admin.password = hash
            admin.save()
              .then(admin => res.json(admin))
              .catch(err => console.log(err))
          })
        })
      }
    })
})

// @route     POST api/user/login
// @desc      Login user/admin
// @access    Public
router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({
          email: 'User not found'
        })
      }
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              email: user.email
            }
            jwt.sign(payload, keys.secretOrKey, {
              expiresIn: 3600
            }, (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              })
            })
          } else {
            return res.status(400).json({
              error: 'Invalid credentials'
            })
          }
        })
    })
})

// @route    GET api/users/current
// @desc     Return current user
// @access   Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    email: req.user.email
  })
})

module.exports = router
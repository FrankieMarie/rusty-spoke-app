const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')

const user = require('./routes/api/user')
const staff = require('./routes/api/staff')
const shifts = require('./routes/api/shifts')
const customers = require('./routes/api/customers')

const app = express()

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Passport Middleware
app.use(passport.initialize())

// Passport Config
require('./config/passport')(passport)

// Use Routes
app.use('/api/user', user)
app.use('/api/staff', staff)
app.use('/api/shifts', shifts)
app.use('/api/customers', customers)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
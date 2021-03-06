const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')

const user = require('./routes/api/user')
const staff = require('./routes/api/staff')
const shifts = require('./routes/api/shifts')
const customers = require('./routes/api/customers')
const purchases = require('./routes/api/purchases')
const comments = require('./routes/api/comments')
const visits = require('./routes/api/currentVisits')
const holds = require('./routes/api/holds')

const app = express()

// Allow cross origin requests
app.use(cors())

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
app.use('/api/purchases', purchases)
app.use('/api/comments', comments)
app.use('/api/visits', visits)
app.use('/api/holds', holds)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))
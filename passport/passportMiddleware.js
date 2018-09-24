// passport auth middleware
import express from 'express'
import passport from 'passport'
require('./passeport')(passport)

// init and configure passport
const passportMiddleware = express()
passportMiddleware.use(passport.initialize())
passportMiddleware.use(passport.session())

// passport auth middleware
export default passportMiddleware

//libs import
import morgan from 'morgan'
import bodyParser from 'body-parser'

//express config 
import express from 'express'
import cors from 'cors'

//app import 
import gqlMiddleware from '../grapql/middleware/gqlMiddleware'
import passportMiddleware from '../passport/passportMiddleware'

// logger
import AppLogger from '../core/logger/AppLogger'
AppLogger.stream = {
  write: function (message, encoding) {
    AppLogger.info(message, encoding)
  }
}

//mongoose part
import DBConnect from '../db/DBConnect'
DBConnect()

// Create an express instance
const app = express()

// init and configure passport
app.use(passportMiddleware)

// parse application/json
app.use(bodyParser.json())

//configure app
app.use('*', cors())
app.use(morgan('dev', { 'stream': AppLogger.stream }))

// use graphql middleware
app.use('/graphql', gqlMiddleware)

//route index
app.get('/', (req, res) => {
  res.send('Invalid endpoint!')
})

// Start server
const portNumber = process.env.GRAPHQL_APP_PORT || 4000
app.listen(portNumber, () => {
  AppLogger.debug('server started - ', portNumber)
})

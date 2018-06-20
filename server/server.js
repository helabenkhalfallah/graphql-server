//libs import
import morgan from 'morgan'

//express config 
import express from 'express'
import cors from 'cors'

//graphql express
import expressGraphQL from 'express-graphql'

//app import
//import AppRouter from '../routes/AppRouter' 
import gqlProvider from '../grapql'
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

//configure app
app.use('*', cors())
app.use(morgan('dev', { 'stream': AppLogger.stream }))

//routes
//app.use('/users', AppRouter)
//app.use('/photos', AppRouter)

// GraphQL schema
app.use('/graphql', cors(), expressGraphQL({
  schema: gqlProvider,
  rootValue: global,
  graphiql: true
}))

//route index
app.get('/', (req, res) => {
  res.send('Invalid endpoint!')
})

// Start server
const portNumber = process.env.GRAPHQL_APP_PORT || 4000
app.listen(portNumber, () => {
  AppLogger.debug('server started - ', portNumber)
})

//import router 
//import AppRouter from '../routes/AppRouter'
import UsergqlProvider from '../grapql/users/UsergqlProvider'

//import logger
import AppLogger from '../core/logger/AppLogger'
import morgan from 'morgan'
AppLogger.stream = {
  write: function (message, encoding) {
    AppLogger.info(message, encoding)
  }
}

//express config 
import express from 'express'
import cors from 'cors'

//graphql express
import expressGraphQL from 'express-graphql'

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
app.use('/graphql', cors(), expressGraphQL({
  schema: UsergqlProvider.UserQueries.UsersListQuery,
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

//express config 
const express = require('express')
const expressGraphQL = require('express-graphql')

// Create an express instance
const app = express()

// Connect with graphql and the graphiql panel
const gqlPath = process.env.GRAPHQL_APP_PATH || '/graphql'
console.log('gqlPath : ', gqlPath)
app.use(gqlPath, expressGraphQL({
  graphiql: true
}))

// Start server
const portNumber = process.env.GRAPHQL_APP_PORT || 4000
console.log('portNumber : ', portNumber)
app.listen(portNumber, () => {
  console.log('Server is running...')
})
# graphql-server


1. install dependecies : 
npm install graphql express express-graphql —save

2. configure lint :
npm install eslint --save-dev
./node_modules/.bin/eslint --init

3. add a /server/server.js file
in this file we will configure our gql server.
we start by configure a simple express server

```js
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
```

4. configure dotenv :
npm install dotenv --save
in index.js file and before any load :

```js
//dot env configuration
var dotenv = require('dotenv')
dotenv.load()
console.log('Your environment variable GRAPHQL_APP_PATH has the value: ', process.env.GRAPHQL_APP_PATH)

//launch server after loading env var
require('./server/server.js')
```


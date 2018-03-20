# graphql-server


1. install dependencies : 
npm install graphql express express-graphql --save

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
5. add cors, mongoose and bluebird
npm install cors mongoose bluebird --save

6. add models folder which will contains all mongoose schema.
7. add graphql folder which will contains all gql schema & CRUD.
8. all models defined on models are exported on a single module inside index.js.
9. all schem & CRUD defined on graphql are exported on a single module inside index.js.
10. Define all constant inside .env file.
11. add babel to run ES6
npm install --save-dpev babel-cli
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-stage-0
12. add  .babelrc
```js
{
  "presets": ["es2015", "stage-0"]
}
```
13. modify package.json to run with babel
14. add nodemon so that it will automatically reload the app on everychange
npm install --save-dev nodemon
https://javierfernandes.gitbooks.io/rest-api-babel-express/content/nodeapp.html

15. mongo database preparation :
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/
https://stackoverflow.com/questions/2518127/how-do-i-reload-bashrc-without-logging-out-and-back-in

16. install Robomongo
17. customize logger file
npm install morgan winston winston-daily-rotate-file --save
18. create a route file : AppRouter.js.
19. modiy server.js :
```js
//routes
app.use('/users', AppRouter) 
app.use('/photos', AppRouter)

//route index
app.get('/', (req, res) => {
  res.send('Invalid endpoint!')
})
```
20. prepare graphql types
21. link mongoose schema to graphql types and monggose models using queries and mutation.
22. modify AppRouter.js to call appropriate action :


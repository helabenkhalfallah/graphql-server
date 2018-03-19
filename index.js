//dot env configuration
var dotenv = require('dotenv')
dotenv.load()
console.log('Your environment variable GRAPHQL_APP_PATH has the value: ', process.env.GRAPHQL_APP_PATH)

//launch server after loading env var
require('./server/server.js')
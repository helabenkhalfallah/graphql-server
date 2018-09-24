import jwt from 'jsonwebtoken'

// verify if token is valid
const isValidToken = (token) => {
  try {
    jwt.verify(token, process.env.JWT_SECRET_OR_KEY)
    return true
  } catch (error) {
    // error
    return false
  }
}

// retrieve token from header
const retrieveToken = (headers) => {
  if (headers && headers.authorization) {
    let tokens = headers.authorization.split(' ')
    if (tokens && tokens.length === 2) {
      return tokens[1]
    } else {
      return null
    }
  } else {
    return null
  }
}

// check for required params
const isValidUser = (params) => {
  if (params) {
    let email = params.email || ''
    let username = params.username || ''
    let password = params.password || ''
    let firstName = params.firstName || ''
    let lastName = params.lastName || ''
    if (email && username && password && firstName && lastName)
      return true
  }
  return false
}

// auth utility helper
const AuthUtils = {
  isValidToken,
  retrieveToken,
  isValidUser,
}

export default AuthUtils
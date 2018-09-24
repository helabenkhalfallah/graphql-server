import { GraphQLNonNull, GraphQLString } from 'graphql'
import jwt from 'jsonwebtoken'
import Messages from '../../../messages/Messages'
import AppModels from '../../../models/index'
import User from '../../users/types/User'

// user auth login
const AuthLogin = {
  type: User,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: (root, params) => {
    return new Promise((resolve, reject) => {
      let email = params.email || ''
      let password = params.password || ''
      if (email && password) {
        AppModels.UserModel.findOne({ email: email }, (error, user) => {
          // insert only if user not exist 
          if (error) {
            reject(error.message)
          } else {
            if (!user) {
              reject(Messages.KEYS.USER_NOT_EXIST)
            } else {
              // check if password matches 
              user.comparePassword(password, (error, isMatch) => {
                if (isMatch && !error) {

                  // if user is found and password is right create a token
                  //algorithm: process.env.JWT_TOKEN_HASH_ALGO 
                  const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET_OR_KEY, {
                    expiresIn: process.env.JWT_TOKEN_EXPIRATION
                  })

                  // return the information 
                  // including token as JSON
                  if (token) {
                    resolve({
                      email: user.email,
                      password: user.password,
                      firstName: user.firstName,
                      lastName: user.lastName,
                      username: user.username,
                      job: user.job,
                      birthday: user.birthday,
                      token: `${process.env.JWT_TOKEN_PREFIX} ${token}`
                    })
                  } else {
                    reject((Messages.KEYS.WRONG_PASSWORD))
                  }
                } else {
                  reject((Messages.KEYS.WRONG_PASSWORD))
                }
              })
            }
          }
        })
      } else {
        reject(Messages.KEYS.VERIFY_REQUIRED_INFORMATION)
      }
    })
  }
}

export default AuthLogin

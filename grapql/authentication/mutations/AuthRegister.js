import { GraphQLNonNull, GraphQLString } from 'graphql'
import Messages from '../../../messages/Messages'
import AppModels from '../../../models/index'
import User from '../../users/types/User'
import AuthUtils from '../utils/AuthUtils'

// user auth register
const AuthRegister = {
  type: User,
  args: {
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    birthday: {
      type: GraphQLString,
    },
    job: {
      type: GraphQLString,
    }
  },
  resolve: (root, params) => {
    return new Promise((resolve, reject) => {
      // insert only if user not exist
      if (AuthUtils.isValidUser(params)) {
        // insert only if we have required data
        // we can find by username or email
        // because they are unique
        // insert only if user not exist
        let email = params.email || ''
        AppModels.UserModel.findOne({ email: email }, (error, user) => {
          // insert only if user not exist
          if (error) {
            reject(error.message)
          } else {
            if (!user) {
              const userModel = new AppModels.UserModel(params)
              let newUser = userModel.save(userModel)
              if (newUser) {
                resolve(newUser)
              } else {
                reject(Messages.KEYS.USER_ADD_ERROR)
              }
            } else {
              reject(Messages.KEYS.USER_ALREADY_EXIST)
            }
          }
        })
      } else {
        reject(Messages.KEYS.VERIFY_REQUIRED_INFORMATION)
      }
    })
  }
}

export default AuthRegister
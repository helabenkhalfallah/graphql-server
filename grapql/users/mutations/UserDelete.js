import { GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'
import AppLogger from '../../../core/logger/AppLogger'

//add
let UserDelete = {
  type: User,
  args: {
    email: {
      type: GraphQLString,
    }
  },
  resolve(root, params) {
    AppLogger.debug('UserDelete params : ', params)
    return new Promise((resolve, reject) => {
      // insert only if user not exist
      AppModels.UserModel.findOne({ email: params.email }, (error, user) => {
        // insert only if user not exist
        if (!error) {
          if (user) {
            // delete user
            let userDeleted = user.remove()
            if (userDeleted) {
              resolve(userDeleted)
            } else {
              reject(new Error('Error occured when deleting user'))
            }
          } else {
            reject(new Error('User does not exist'))
          }
        } else {
          reject(error)
        }
      })
    })
  }
}

//export user delete mutation
export default UserDelete 
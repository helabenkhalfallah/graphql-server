import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'
import Messages from '../../../messages/Messages'

//delete
const UserDelete = {
  type: User,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: (_, params, context) => {
    return new Promise((resolve, reject) => {

      // user authorization 
      if (!context.user) {
        reject(Messages.KEYS.WRONG_SESSION)
      }

      // delete only if user exist
      const email = params.email
      AppModels.UserModel.findOne({ email: email }, (error, user) => {
        // delete only if user exist
        if (!error) {
          if (user) {
            // delete user
            let userDeleted = user.remove()
            if (userDeleted) {
              resolve(userDeleted)
            } else {
              reject(Messages.KEYS.USER_DELETE_ERROR)
            }
          } else {
            reject(Messages.KEYS.USER_NOT_EXIST)
          }
        } else {
          reject(error.message)
        }
      })
    })
  }
}

//export user delete mutation
export default UserDelete 
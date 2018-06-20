import { GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'

//delete
let UserDelete = {
  type: User,
  args: {
    email: {
      type: GraphQLString,
    }
  },
  resolve(root, params) {
    return new Promise((resolve, reject) => {
      // delete only if user exist
      AppModels.UserModel.findOne({ email: params.email }, (error, user) => {
        // delete only if user exist
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
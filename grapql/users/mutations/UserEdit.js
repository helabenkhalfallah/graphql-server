import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'
import Messages from '../../../messages/Messages'


//edit
const UserEdit = {
  type: User,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    birthday: {
      type: GraphQLString,
    },
    job: {
      type: GraphQLString,
    }
  },
  resolve: (_, params, context) => {
    return new Promise((resolve, reject) => {

      // user authorization 
      if (!context.user) {
        reject(Messages.KEYS.WRONG_SESSION)
      }

      // update user
      const email = params.email
      AppModels.UserModel.findOne({ email: email }, (error, user) => {
        // update only if user exist
        if (!error) {
          if (user) {
            user.firstName = params.firstName
            user.lastName = params.lastName
            user.birthday = params.birthday
            user.job = params.job
            const userUpdated = user.save()
            if (userUpdated) {
              resolve(userUpdated)
            } else {
              reject(Messages.KEYS.USER_UPDATE_ERROR)
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

//export user edit mutation
export default UserEdit 
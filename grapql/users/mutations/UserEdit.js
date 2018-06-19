import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'
import AppLogger from '../../../core/logger/AppLogger'

//edit
let UserEdit = {
  type: User,
  args: {
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
    },
    email: {
      type: GraphQLString,
    }
  },
  resolve(root, params) {
    AppLogger.debug('UserEdit params : ', params)
    return new Promise((resolve, reject) => {
      AppModels.UserModel.findOne({ email: params.email }, (error, user) => {
        // update only if user exist
        if (!error) {
          if (user) {
            user.firstName = params.firstName
            user.lastName = params.lastName
            user.birthday = params.birthday
            user.job = params.job
            user.email = params.email
            const userUpdated = user.save()
            if (userUpdated) {
              resolve(userUpdated)
            } else {
              reject(new Error('Error when updating user'))
            }
          } else {
            reject(new Error('Error when updating user'))
          }
        } else {
          reject(error)
        }
      })
    })
  }
}

//export user edit mutation
export default UserEdit 
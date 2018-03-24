import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'
import AppLogger from '../../../core/logger/AppLogger'

//add
let UserAdd = {
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
    }
  },
  resolve(root, params) {
    AppLogger.debug('UserAdd params : ', params)
    return new Promise((resolve, reject) => {
      // insert only if user not exist
      AppModels.UserModel.findOne({ firstName: params.firstName }, (error, user) => {
        // insert only if user not exist
        if (!user) {
          const userModel = new AppModels.UserModel(params)
          let newUser = userModel.save(userModel)
          if (newUser) {
            resolve(newUser)
          } else {
            reject(new Error('error when user insert'))
          }
        } else {
          reject(new Error('user exist'))
        }
      })
    })
  }
}

//export user add mutation
export default UserAdd 
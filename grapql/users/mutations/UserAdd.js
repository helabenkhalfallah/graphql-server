import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'

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
    },
    email: {
      type: GraphQLString,
    }
  },
  resolve(root, params) {
    return new Promise((resolve, reject) => {
      // insert only if user not exist
      AppModels.UserModel.findOne({ email: params.email }, (error, user) => {
        // insert only if user not exist
        if (!error) {
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
        } else {
          reject(error)
        }
      })
    })
  }
}

//export user add mutation
export default UserAdd 
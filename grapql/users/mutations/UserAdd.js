import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'

//add
let UserAdd = {
  type: User,
  args: {
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    last_name: {
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
    const uModel = new AppModels.UserModel(params)
    const newUser = uModel.save()
    if (!newUser) {
      throw new Error('Error')
    }
    return newUser
  }
}

//export user add mutation
export default UserAdd 
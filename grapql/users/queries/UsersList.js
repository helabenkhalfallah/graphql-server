import { GraphQLList } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'

// Query
export default {
  type: new GraphQLList(User),
  resolve() {
    const users = AppModels.UserModel.find().exec()
    if (!users) {
      throw new Error('Error getting users')
    }
    return users
  }
}
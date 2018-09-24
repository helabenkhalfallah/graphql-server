import { GraphQLList } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'
import Messages from '../../../messages/Messages'


// Query
export default {
  type: new GraphQLList(User),
  resolve: (_, args, context) => {

    // user authorization 
    if (!context.user) {
      throw new Error(Messages.KEYS.WRONG_SESSION)
    }

    // users
    const users = AppModels.UserModel.find().exec()
    if (!users) {
      throw new Error(Messages.KEYS.USER_LIST_ERROR)
    }
    return users
  }
}
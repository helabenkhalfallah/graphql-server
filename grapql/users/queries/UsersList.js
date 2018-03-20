import { GraphQLList, GraphQLObjectType } from 'graphql'
import AppModels from '../../../models/index'
import User from '../types/User'
import AppLogger from '../../../core/logger/AppLogger'

// Query
let UsersList = new GraphQLObjectType({
  name: 'users',
  fields: {
    users: {
      type: new GraphQLList(User),
      args: {},
      resolve() {
        return new Promise((resolve, reject) => {
          AppModels.UserModel.find((error, users) => {
            AppLogger.debug('err : ', error)
            AppLogger.debug('users : ', users)
            if (error) reject(error)
            else resolve(users)
          })
        })
      }
    }
  }
})

//export get all users gql query
export default UsersList 
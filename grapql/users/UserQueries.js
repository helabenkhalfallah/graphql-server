import { GraphQLSchema } from 'graphql'
import UsersList from './queries/UsersList'

//get all users
let UsersListQuery = new GraphQLSchema({
  query: UsersList,
  mutation: null,
})

//all user queries
let UsersQueries = {
  UsersListQuery,
}

//export users gql queries
export default UsersQueries 
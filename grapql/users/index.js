import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import UsersList from './queries/UsersList'
import UserMutations from './mutations'

//all user queries
let UsergqlProvider = new GraphQLSchema({
  query: UsersList,
  mutation: new GraphQLObjectType({
    name: 'mutation',
    fields: UserMutations
  })
})

//export users gql provider
export default UsergqlProvider 
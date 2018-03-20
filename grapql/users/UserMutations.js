import { GraphQLSchema } from 'graphql'
import UserAdd from './mutations/UserAdd'

//user add mutation
let UserAddMutation = new GraphQLSchema({
  query: null,
  mutation: UserAdd,
})

//all user mutations
let UserMutations = {
  UserAddMutation,
}

//export user gql mutations
export default UserMutations 
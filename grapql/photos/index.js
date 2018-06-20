import { GraphQLSchema, GraphQLObjectType } from 'graphql'
import PhotosList from './queries/PhotosList'
import PhotoMutations from './mutations'

//all photos queries
let PhotogqlProvider = new GraphQLSchema({
  query: PhotosList,
  mutation: new GraphQLObjectType({
    name: 'mutation',
    fields: PhotoMutations
  })
})

//export users gql provider
export default PhotogqlProvider 
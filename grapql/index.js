import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'
import gqlQueriesProvider from './gqlQueriesProvider'
import gqlMutationsProvider from './gqlMutationsProvider'

const gqlProvider = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: gqlQueriesProvider
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: gqlMutationsProvider
  })
})

export default gqlProvider
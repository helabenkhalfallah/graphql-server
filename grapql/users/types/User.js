import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql'

// User Type
let User = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
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
    }
  }
})

//export user gql type
export default User
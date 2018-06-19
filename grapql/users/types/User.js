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
      firstName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      lastName: {
        type: new GraphQLNonNull(GraphQLString),
      },
      birthday: {
        type: GraphQLString,
      },
      job: {
        type: GraphQLString,
      },
      email: {
        type: GraphQLString,
      }
    }
  }
})

//export user gql type
export default User
import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql'

// User Type
const User = new GraphQLObjectType({
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
      email: {
        type: new GraphQLNonNull(GraphQLString),
      },
      password: {
        type: new GraphQLNonNull(GraphQLString),
      },
      username: {
        type: new GraphQLNonNull(GraphQLString),
      },
      token: {
        type: GraphQLString,
      },
      birthday: {
        type: GraphQLString,
      },
      job: {
        type: GraphQLString,
      },
    }
  }
})

//export user gql type
export default User
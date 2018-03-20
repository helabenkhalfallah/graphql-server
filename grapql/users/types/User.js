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
        type: GraphQLString,
      },
      last_name: {
        type: GraphQLString,
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
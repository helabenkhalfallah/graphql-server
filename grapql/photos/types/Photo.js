import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql'

// Photo Type
const Photo = new GraphQLObjectType({
  name: 'Photo',
  description: 'Photo type definition',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID),
      },
      userId: {
        type: new GraphQLNonNull(GraphQLString),
      },
      path: {
        type: new GraphQLNonNull(GraphQLString),
      },
      date: {
        type: GraphQLString,
      },
      location: {
        type: GraphQLString,
      }
    }
  }
})

//export photo gql type
export default Photo
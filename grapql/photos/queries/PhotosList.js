import { GraphQLList, GraphQLObjectType } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'

// Query
let PhotosList = new GraphQLObjectType({
  name: 'photos',
  fields: {
    photos: {
      type: new GraphQLList(Photo),
      args: {},
      resolve() {
        return new Promise((resolve, reject) => {
          AppModels.PhotoModel.find((error, photos) => {
            if (error) reject(error)
            else resolve(photos)
          })
        })
      }
    }
  }
})

//export get all photos gql query
export default PhotosList 
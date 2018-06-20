import { GraphQLList } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'

// Query
export default {
  type: new GraphQLList(Photo),
  resolve() {
    const photos = AppModels.PhotoModel.find().exec()
    if (!photos) {
      throw new Error('Error getting photos')
    }
    return photos
  }
}
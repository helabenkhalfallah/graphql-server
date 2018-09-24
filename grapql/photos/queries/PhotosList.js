import { GraphQLList } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'
import Messages from '../../../messages/Messages'

// Query
export default {
  type: new GraphQLList(Photo),
  resolve: (_, args, context) => {

    // user authorization 
    if (!context.user) {
      throw new Error(Messages.KEYS.WRONG_SESSION)
    }

    // photos
    const photos = AppModels.PhotoModel.find().exec()
    if (!photos) {
      throw new Error(Messages.KEYS.PHOTO_LIST_ERROR)
    }
    return photos
  }
}
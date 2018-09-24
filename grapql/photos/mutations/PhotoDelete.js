import { GraphQLString, GraphQLNonNull } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'
import Messages from '../../../messages/Messages'

//delete
const PhotoDelete = {
  type: Photo,
  args: {
    path: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: (_, params, context) => {
    return new Promise((resolve, reject) => {

      // user authorization  
      if (!context.user) {
        reject(Messages.KEYS.WRONG_SESSION)
      }

      // delete only if photo exist
      AppModels.PhotoModel.findOne({ path: params.path }, (error, photo) => {
        // delete only if photo exist
        if (!error) {
          if (photo) {
            // delete photo
            let photoDeleted = photo.remove()
            if (photoDeleted) {
              resolve(photoDeleted)
            } else {
              reject(Messages.KEYS.PHOTO_DELETE_ERROR)
            }
          } else {
            reject(Messages.KEYS.PHOTO_NOT_EXIST)
          }
        } else {
          reject(error.message)
        }
      })
    })
  }
}

//export photo delete mutation
export default PhotoDelete 
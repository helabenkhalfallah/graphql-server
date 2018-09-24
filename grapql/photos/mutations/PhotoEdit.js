import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'
import Messages from '../../../messages/Messages'


//edit
const PhotoEdit = {
  type: Photo,
  args: {
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
  },
  resolve: (_, params, context) => {
    return new Promise((resolve, reject) => {

      // user authorization  
      if (!context.user) {
        reject(Messages.KEYS.WRONG_SESSION)
      }

      // update only if photo exist
      AppModels.PhotoModel.findOne({ path: params.path }, (error, photo) => {
        // update only if photo exist
        if (!error) {
          if (photo) {
            photo.userId = params.userId
            photo.path = params.path
            photo.date = params.date
            photo.location = params.location
            const photoUpdated = photo.save()
            if (photoUpdated) {
              resolve(photoUpdated)
            } else {
              reject(Messages.KEYS.PHOTO_UPDATE_ERROR)
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

//export photo edit mutation
export default PhotoEdit 
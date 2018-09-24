import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'
import Messages from '../../../messages/Messages'


//add
const PhotoAdd = {
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

      // add a new photo
      AppModels.PhotoModel.findOne({ path: params.path }, (error, photo) => {
        // insert only if photo path not exist
        if (!error) {
          if (!photo) {
            const photoModel = new AppModels.PhotoModel(params)
            let newPhoto = photoModel.save(photoModel)
            if (newPhoto) {
              resolve(newPhoto)
            } else {
              reject(Messages.KEYS.PHOTO_ADD_ERROR)
            }
          } else {
            reject(Messages.KEYS.PHOTO_ALREADY_EXIST)
          }
        } else {
          reject(error.message)
        }
      })
    })
  }
}

//export photo add mutation
export default PhotoAdd 
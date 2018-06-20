import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'
import AppLogger from '../../../core/logger/AppLogger';

//add
let PhotoAdd = {
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
  resolve(root, params) {
    return new Promise((resolve, reject) => {
      AppModels.PhotoModel.findOne({ path: params.path }, (error, photo) => {
        // insert only if photo path not exist
        AppLogger.debug('PhotoAdd photo - ', photo)
        AppLogger.debug('PhotoAdd error - ', error)
        if (!error) {
          if (!photo) {
            const photoModel = new AppModels.PhotoModel(params)
            AppLogger.debug('PhotoAdd photoModel - ', photoModel)
            let newPhoto = photoModel.save(photoModel)
            AppLogger.debug('PhotoAdd newPhoto - ', newPhoto)
            if (newPhoto) {
              resolve(newPhoto)
            } else {
              reject(new Error('Error when photo insert'))
            }
          } else {
            reject(new Error('Error photo already exist'))
          }
        } else {
          reject(error)
        }
      })
    })
  }
}

//export photo add mutation
export default PhotoAdd 
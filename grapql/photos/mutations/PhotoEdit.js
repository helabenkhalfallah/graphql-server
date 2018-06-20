import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'

//edit
let PhotoEdit = {
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
              reject(new Error('Error when updating photo'))
            }
          } else {
            reject(new Error('Error when updating photo, photo not exist'))
          }
        } else {
          reject(error)
        }
      })
    })
  }
}

//export photo edit mutation
export default PhotoEdit 
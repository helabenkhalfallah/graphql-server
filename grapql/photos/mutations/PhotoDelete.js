import { GraphQLString, GraphQLNonNull } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'

//delete
let PhotoDelete = {
  type: Photo,
  args: {
    path: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return new Promise((resolve, reject) => {
      // insert only if photo not exist
      AppModels.PhotoModel.findOne({ path: params.path }, (error, photo) => {
        // insert only if photo not exist
        if (!error) {
          if (photo) {
            // delete photo
            let photoDeleted = photo.remove()
            if (photoDeleted) {
              resolve(photoDeleted)
            } else {
              reject(new Error('Error occured when deleting photo'))
            }
          } else {
            reject(new Error('Photo does not exist'))
          }
        } else {
          reject(error)
        }
      })
    })
  }
}

//export photo delete mutation
export default PhotoDelete 
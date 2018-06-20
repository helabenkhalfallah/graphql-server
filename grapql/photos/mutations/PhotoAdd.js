import { GraphQLNonNull, GraphQLString } from 'graphql'
import AppModels from '../../../models/index'
import Photo from '../types/Photo'

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
        if (!error) {
          if (!photo) {
            const photoModel = new AppModels.PhotoModel(params)
            let newPhoto = photoModel.save(photoModel)
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
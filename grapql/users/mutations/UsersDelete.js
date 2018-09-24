import AppModels from '../../../models/index'
import User from '../types/User'
import Messages from '../../../messages/Messages'

//delete all users
const UsersDelete = {
  type: User,
  args: {},
  resolve: (_, params, context) => {
    return new Promise((resolve, reject) => {

      // user authorization  
      if (!context.user) {
        reject(Messages.KEYS.WRONG_SESSION)
      }

      // delete all users
      AppModels.UserModel.remove({}, (error) => {
        if (!error) {
          resolve(Messages.KEYS.USER_LIST_DELETE_SUCCESS)
        } else {
          reject(error.message)
        }
      })
    })
  }
}

//export users delete mutation
export default UsersDelete 
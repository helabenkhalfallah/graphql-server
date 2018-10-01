
import User from '../types/User'
import Messages from '../../../messages/Messages'


// Query
export default {
  type: User,
  resolve: (_, args, context) => {

    // user authorization
    if (!context.user) {
      throw new Error(Messages.KEYS.WRONG_SESSION)
    }

    // return current user
    return context.user
  }
}

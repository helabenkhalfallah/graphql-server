import PhotoAdd from './photos/mutations/PhotoAdd'
import PhotoDelete from './photos/mutations/PhotoDelete'
import PhotoEdit from './photos/mutations/PhotoEdit'
import UserAdd from './users/mutations/UserAdd'
import UserEdit from './users/mutations/UserEdit'
import UserDelete from './users/mutations/UserDelete'

//all mutations
let gqlMutationsProvider = {
  UserAdd,
  UserEdit,
  UserDelete,
  PhotoAdd,
  PhotoDelete,
  PhotoEdit,
}

//export gql provider
export default gqlMutationsProvider 
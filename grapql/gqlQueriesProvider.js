import UsersList from './users/queries/UsersList'
import PhotosList from './photos/queries/PhotosList'
import UserProfile from './users/queries/UserProfile'

//all queries
const gqlQueriesProvider = {
  UsersList,
  UserProfile,
  PhotosList,
}

//export gql provider
export default gqlQueriesProvider 
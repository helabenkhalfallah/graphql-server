//import mongoose
import mongoose from 'mongoose'

//prepare mongoose user schema
let userSchema = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    birthday: String,
    job: String,
  },
  {
    collection: 'User'
  })


//export mongoose user schema module 
let UserModel = mongoose.model('User', userSchema)
export default UserModel
//import mongoose
import mongoose from 'mongoose'

//prepare mongoose photo schema
let photoSchema = mongoose.Schema(
  {
    url: String,
    description: String,
    date: String,
  },
  {
    collection: 'Photo'
  })

//export mongoose photo schema module
let PhotoModel = mongoose.model('Photo', photoSchema)
export default PhotoModel
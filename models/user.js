const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email:{
    type: String,
    required: [true,'Email is required']
  },
  password:{
    type: String,
    required: [true,'Password is required']
  },
  name:{
    type: String,
    required: [true,'Name is required']
  },
  phone:{
    type: Number
  }
})

const User = mongoose.model('User',UserSchema)

module.exports=User

import { Schema, model } from "mongoose";

const User = Schema({
  name: {
    type: String,
    required: [true, 'The name property is required']
  },
  email: {
    type: String,
    required: [true, 'The email property is required'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'The password property is required'],
    unique: true
  },
})

export default model('users', User);

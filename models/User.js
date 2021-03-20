// models/User.model.js

const mongoose = require('mongoose');
const { Schema, model } = mongoose;
// const Schema = mongoose.Schema;
// const model = mongoose.model;
// thse 2 lines are both being accomplished on line 4 with the object destructuring

const userSchema = new Schema(
  {
    username: String,
    bio: String, 
    img: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
    // this means user model will have posts which is an array of object ids and those ids will belong to a model called 'Post'
  }
);

module.exports = model('User', userSchema);
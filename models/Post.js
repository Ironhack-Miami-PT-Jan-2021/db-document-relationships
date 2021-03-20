
const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const postSchema = new Schema(
  {
    title: String,
    content: String,
    author: {type: Schema.Types.ObjectId, ref: 'User'}
    // in this app, i am keeping track of the user's posts inside the user model and also, here, we are keeping track of the user who wrote the post inside this post model
    // it is not necessary to put this connection onto both models.  Only 1 of them needs it, it's up to you which one you want to put the relationship on
  }
);

module.exports = model('Post', postSchema);
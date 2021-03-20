const express = require('express');
const routerThingy  = express.Router();
const User = require('../models/User');
const Post = require('../models/Post');

/* GET home page */
routerThingy.get('/users', (req, res, next) => {
  User.find()
  .then((allTheUsers)=>{
    res.render('user-views/index', {users: allTheUsers})
  })
  .catch((erroObjectThingy)=>{
    next(erroObjectThingy);
  })
});

routerThingy.get('/users/:userid/posts', (req, res, next) => {
  Post.find({author: req.params.userid})
  .then((posts)=>{
    User.findById(req.params.userid)
    .then((theUser)=>{
      console.log(posts, theUser)
      res.render('user-views/user-posts', {posts: posts, author: theUser})
    })
    .catch((err)=>{
      next(err)
    })
  })
  .catch((erroObjectThingy)=>{
    next(erroObjectThingy);
  })
});
module.exports = routerThingy;

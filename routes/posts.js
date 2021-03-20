const express = require('express');
const router  = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

router.get('/posts/new/:idOfUser', (req, res, next)=>{
  User.findById(req.params.idOfUser)
  .then((theUser)=>{

    res.render('post-views/new', {theUser: theUser})

  })
  .catch((err)=>{
    next(err);
  })

})

router.post('/posts/create', (req, res, next)=>{
  // userID = req.body.userIDInput;
  // title = req.body.postTitleInput;
  // content = req.body.postContentInput;
  const {userIDInput:userID, postTitleInput:title, postContentInput:content} = req.body;
  // this is a fancy way of doing all three of those lines in one line
  Post.create({
    title: title,
    content: content,
    author: userID
  })
  .then(()=>{
    res.redirect('/users')
  })
  .catch((err)=>{

  })

})


module.exports = router;

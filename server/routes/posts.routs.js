const postController = require("../controllers/post.controller");

const express = require('express')
const Post = express()

  // all post and comm
  Post.get("/post", postController.getAllPosts);
  Post.get("/comm", postController.getAllComm);
  Post.get("/three", postController.getThree);

  // find comments by a post
  Post.get("/post/:id/comm", postController.findCommentsByPost);

  //create
  Post.post("/post/new", postController.createPosts);
  Post.post("/comm/new", postController.createComment);
  //retrive by idconst express = require('express')

  Post.get("/post/:id", postController.getPost);
  Post.get("/comm/:id", postController.getComment);
  // edit by id
  Post.put("/post/:id/edit", postController.updatePosts);
  Post.put("/comm/:id/edit", postController.updateComment);
  //
  Post.delete("/post/:id/delete", postController.deletePosts);
  Post.delete("/comm/:id/delete", postController.deleteComment);


  module.exports = Post

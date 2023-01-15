const GroupController = require("../controllers/group.controller");
const express = require('express')
const group = express()
  //get all
  group.get("/", GroupController.getAllGroup);// not for use just emergancy
  //create
  group.post("/new",GroupController.createGroup)
  //get by id
  group.get('/:id', GroupController.getGroup)
  // get all groups by spacific category
  group.get('/:cat/group', GroupController.findGroupByCategory)
  group.get('/:id/posts', GroupController.findPostsByGroup)
  //update 
  group.put('/:id/edit', GroupController.updateGroup)
  //delete
  group.delete('/:id/delete', GroupController.deleteGroup)

  module.exports= group

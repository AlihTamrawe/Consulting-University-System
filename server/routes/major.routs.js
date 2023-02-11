// const MajorController = require("../controllers/major.controller");

// const express = require('express')
// const Major = express()

//   // all Major and comm
//   Major.get("/api/major", MajorController.getAllMajors);
//   // Major.get("/comm", MajorController.getAllComm);
//   Major.get("/three", MajorController.getThree);

//   // find comments by a Major
//   // Major.get("/Major/:id/comm", MajorController.findCommentsByMajor);

//   //create
//   Major.post("/Major/new", MajorController.createMajor);
//   // Major.Major("/comm/new", MajorController.createComment);
//   //retrive by idconst express = require('express')

//   Major.get("/Major/:id", MajorController.getMajor);
//   // Major.get("/comm/:id", MajorController.getComment);
//   // edit by id
//   Major.put("/Major/:id/edit", MajorController.updateMajor);
//   // Major.put("/comm/:id/edit", MajorController.updateComment);
//   //
//   Major.delete("/Major/:id/delete", MajorController.deleteMajor);
//   // Major.delete("/comm/:id/delete", MajorController.deleteComment);


//   module.exports = Major


const UserController = require('../controllers/major.controller');
 
module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.put('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}

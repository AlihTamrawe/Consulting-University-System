const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const CommentsSchema = new mongoose.Schema({
        title : {type:String,
            required: [
                true,
                "First name is required"
            ],
            minLength: [1, "question me have to be at least 3 characters."],}
            ,
            user:  {
                type: ObjectId,
                ref: "User",
                },
                post:  {
                    type:ObjectId,
                    ref: "Posts",
                    },
}, { timestamps: true });
module.exports.Comments = mongoose.model('Comments', CommentsSchema);

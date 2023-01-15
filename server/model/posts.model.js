const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const PostSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
    },
    Likes: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      minLength: [5, "question me have to be at least 5 characters."],
    },

    group: {
      type: ObjectId,
      ref: "Group",
    },
  },
  { timestamps: true }
);
module.exports.Posts = mongoose.model("Posts", PostSchema);

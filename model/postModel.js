const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
     imageUrl: {
          tyepe: String,
     },
     post: {
          type: String
     },
     isDelete: Boolean
}, {
     timestamps: true
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
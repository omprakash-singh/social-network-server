const Post = require('../model/postModel');

exports.Post = async (req, res) => {
     try {
          const { imageUrl, post, isDelete } = req.body;
          await Post.create({
               imageUrl: imageUrl,
               post: post,
               isDelete: isDelete
          }).then((doc) => {
               res.status(201).json({
                    status: 'success',
                    message: 'post create successfully',
                    data: doc
               });
          }).catch((err) => {
               res.status(400).json({
                    status: 'Fail',
                    message: err.message
               })
          })

     } catch (error) {
          res.status(500).json({
               status: "Fail",
               message: error.message
          })
     }
}
exports.get = async (req, res) => {
     try {
          const data = await Post.find({}).sort({ updatedAt: -1 })
          res.send(data)
     } catch (error) {
          res.status(500).json({
               status: "Fail",
               message: error.message
          })
     }
}
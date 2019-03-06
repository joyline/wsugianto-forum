const postService = require('../services/postService')

const getAllPost = function(req, res) {
    // console.log("ini getAllPost dari postController")
    return postService.getAllPost()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            // kalo error
            // return err
            res.send(err)
        })
}

const deletePost = function(req,res){
    // return postService.deletePost
    // return postService.deleteComment
}
module.exports = {
    getAllPost,
    deletePost,
}
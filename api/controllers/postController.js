const postService = require('../services/postService')

const getAllPost = function(req, res) {
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

const createPost = function(req, res){
    return postService.createPost(req.body, res)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
}

const updatePost = function(req, res){
    return postService.updatePost(req.body, res)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
}

const deletePost = function(req,res){
    return postService.deletePost(req.body, res)
    .then(data => {
        postService.deleteComment(req.body, res)
        // res.send(data)
    })
    .catch(err => {
        res.send(err)
    }) 
}

const searchPostByTitle = function(req, res) {
    return postService.searchPostByTitle(req.body.forumName)
    .then((data) => res.send(data))
    .catch((err) => res.send(err)); 
}

const getPostByTag = function(req, res){
    return postService.getPostByTag(req.body, res)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
}

module.exports = {
    getAllPost,
    deletePost,
    updatePost,
    createPost,
    searchPostByTitle,
    getPostByTag,
}

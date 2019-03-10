const postService = require('../services/postService')
const validatorController = require('./validatorController')

const getAllPost = function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (!validatorController.validateToken(req)) {
        return "false";
    }
    return postService.createPost(req.body, res)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
}

const updatePost = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (!validatorController.validateToken(req)) {
        return "false";
    }
    return postService.updatePost(req.body, res)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.send(err)
    })
}

const deletePost = function(req,res){
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (!validatorController.validateToken(req)) {
        return "false";
    }
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
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return postService.searchPostByTitle(req.body.forumName)
    .then((data) => res.send(data))
    .catch((err) => res.send(err)); 
}

const getPostByTag = function(req, res){
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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

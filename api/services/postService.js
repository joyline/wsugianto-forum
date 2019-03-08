const Model = require('../../models')

const getAllPost = function(req,res){
    return Model.Forums.findAll({include: [
        {model: Model.Users},
        {model: Model.ConnectForumTags, include: [{model: Model.Tags}]},
        {model: Model.Comments, required: false},
        ]}
    )
    .then((res) => {
        // disni kalo bener
        // res.send()
        return res
    })
    .catch((err) => {
        // kalo error
        return err
    })
}

const createPost = function(req, res){
    return Model.Forums.create({
        forumName: req.forumName,
        forumDescription: req.forumDescription,
        userId: req.userId,
    })
    .then(res => {
        return res
    })
    .catch(err => {
        return err
    })
}

const updatePost = function(req, res) {
    return Model.Forums.update(
        {forumName: req.forumName,forumDescription: req.forumDescription}, {where: {id: req.id}}
    )
    .then(res => {
        return res
    })
    .catch(err => {
        return err
    })
}

const deletePost = function(req, res) {
    return Model.Forums.destroy(
        {where: {id: req.id}}
    )
    .then(res => {
        return {
            status : "deleted"
        }
    })
    .catch(err => {
        return err
    })
}

const deleteComment = function(req, res){
    Model.Comments.destroy(
        {where: {forumId: req.id}}
    )
}

const searchPostByTitle = function(forumName) {
    return Model.Forums.findAll(
        {where: {forumName}}
    );
}

const getPostByTag = function(req, res){
    return Model.Forums.findAll({include: [
            {model: Model.ConnectForumTags, include: [{model: Model.Tags}], where: {id: req.id}, required: true}
        ]}
    )
}

module.exports = {
    getAllPost,
    createPost,
    updatePost,
    deletePost,
    searchPostByTitle,
    getPostByTag,
    deleteComment,
}
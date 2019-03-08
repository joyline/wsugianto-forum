const commentService = require('../services/commentService')

const createComment = function(req, res){
    // console.log(req)
    return commentService.createComment(req.body, res)
    .then(data=>{
        res.send(data)
    })
    .catch(err =>{
        res.send(err)
    })
}

module.exports = {
    createComment,
}
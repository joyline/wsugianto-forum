const commentService = require('../services/commentService')
const validatorController = require('./validatorController')

const createComment = function(req, res){
    // console.log(req)
    if (!validatorController.validateToken(req)) {
        return "false";
    }
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
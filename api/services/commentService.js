const Model = require('../../models')


const createComment = function(req, res) {
    return Model.Comments.create({
            message: req.message,
            userId: req.userId,
            forumId: req.forumId,
        }
    )
    .then(res => {
        return res
    })
    .catch(err => {
        return err
    })
}

module.exports = {
    createComment,
}
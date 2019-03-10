const jwt = require('jsonwebtoken')


const validateToken = function(req, res){
    try {
        // console.log(req.body)
        console.log(res.send(jwt.verify(req.body.token, 'secretkey')))
        res.send(jwt.verify(req.body.token, 'secretkey'))
        return true
    } catch (error) {
        return false
    }
}

module.exports = {
    validateToken,
}
//const userService = require userService.js
const userService = require('../services/userService')
// const userController = require('./controllers/userController')
// const express = require('express');
// const router = express.Router();

const login = function(req, res) {
    // need some JWT
    console.log("login controller")
    return userService.loginUser();
}

module.exports = {
    login,
}

// module.exports.login = (req, res) => {
//     // return userService.login().then().catch()
// }
// module.exports.logout = (request) => {
    
// }
// module.exports = router;
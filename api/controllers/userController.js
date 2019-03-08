//const userService = require userService.js
const userService = require('../services/userService')
// const userController = require('./controllers/userController')
// const express = require('express');
// const router = express.Router();

const login = function(req, res) {
    // need some JWT
    console.log("login controller")
    return userService.loginUser(req.body, res)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const registerUser = function(req, res) {
    // console.log("register userController")
    // console.log(req)
    return userService.registerUser(req.body, res)
    .then((data) =>{
        res.send(data)
    })
    .catch((err) =>{
        res.send(error)
    })
}

const changePassword = function(req, res){
    // console.log(req)
    return userService.changePassword(req.body, res)
    .then((data) =>{
        res.send(data)
    })
    .catch((err) =>{
        res.send(error)
    })
}

module.exports = {
    login,
    registerUser,
    changePassword,

}

// module.exports.login = (req, res) => {
//     // return userService.login().then().catch()
// }
// module.exports.logout = (request) => {
    
// }
// module.exports = router;
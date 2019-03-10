//const userService = require userService.js
const userService = require('../services/userService')
// const userController = require('./controllers/userController')
// const express = require('express');
// const router = express.Router();
const jwt = require('jsonwebtoken')
const validatorController = require('./validatorController')

const login = function(req, res) {
    // need some JWT
    // console.log("login controller")
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    return userService.loginUser(req.body, res)
    .then((data)=>{

        const userData = {
            id: data.id,
            firstName: data.firstName,
            lastName: data.lastName
        }

        console.log(data)
        if(!data){
            return "false"
        }
        res.send({
            token: jwt.sign({data}, 'secretkey'),
            user: userData
        })//, data)
        // res.send(data)
    })
    .catch((err)=>{
        res.send(err)
    })
}

const logout = function(req, res) {
    // need some JWT
    // console.log("login controller")
    return userService.logoutUser(req.body, res)
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
    // console.log(req.body)
    res.header("Access-Control-Allow-Origin", "*");    
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return userService.registerUser(req.body, res)
    .then((data) =>{
        console.log("register User")
        res.send(data)
        
    })
    .catch((err) =>{
        console.log("error")
        res.send(error)
    })
}

const changePassword = function(req, res){
    // console.log(req)
    // console.log(req)
    if(!validatorController.validateToken(req)){
        // console.log("aaaa")
        return "false"
    }
    return userService.changePassword(req.body, res)
    .then((data) =>{
        res.send(data)
        // res.send({token: jwt.sign({data}, 'secretkey')})
        // res.send(jwt.verify(req.token, 'secretkey'))
    })
    .catch((err) =>{
        res.send(error)
    })
}



module.exports = {
    login,
    logout,
    registerUser,
    changePassword,

}

// module.exports.login = (req, res) => {
//     // return userService.login().then().catch()
// }
// module.exports.logout = (request) => {
    
// }
// module.exports = router;
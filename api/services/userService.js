const Model = require('../../models')
// module.exports.login = () =>
// return

const jwt = require('jsonwebtoken')

const loginUser = function(req, res) {
    // console.log("loginUser dari userService")
    return Model.Users.findOne({where: {email: req.email, password: req.password}, attributes: {exclude: ['createdAt', 'updatedAt']}}) 
    .then((res) => {
        return res
    })
    .catch((err)=>{
        return err
    })
}

const logoutUser = function(req, res) {
    // console.log("loginUser dari userService")

    return Model.Users.findOne({where: {email: req.email, password: req.password}}) 
    .then((res) => {
        return res
    })
    .catch((err)=>{
        return err
    })
}

const registerUser = function(req, res) {
    // console.log("ini createUser dari userService")
    return Model.Users.create({
        firstName: req.firstName,
        lastName: req.lastName,
        email: req.email,
        password: req.password,
        // createdAt: new Date(),
        // updatedAt: new Date(),
    })
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

const changePassword = function(req, res) {
    return Model.Users.update(
        {password: req.password}, {where: {email: req.email, id: req.id}
    })
    .then((res)=>{
        return res
    })
    .catch(err => {
        return err
    })
    db.user.update({
        lastName: 'Taco'
      }, {
        where: {
          firstName: 'Brian'
        }
      }).then(function(user) {
        // do something when done updating
      });
}

module.exports = {
    loginUser,
    logoutUser,
    registerUser,
    changePassword,

}
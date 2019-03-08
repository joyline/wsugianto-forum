// const router = require('express').Router();
// const app = express()
// const Model = require('../models');
// const server = require('server.js')
// const router = express.Router()

const express = require('express')
const router = express.Router()
// const userHandler = require('./handlers/User')
const userController = require('./controllers/userController')
const postController = require('./controllers/postController')
// var express = require('express');
// var router = express.Router();

router.get('/login', function (req, res) {
    res.send("ini login get")
});

router.post('/login', userController.login);
// get register
router.get('/register', function(req, res) {
    res.send('Welcome to Node JS REGISTER');
});
router.post('/register', userController.registerUser)

router.get('/change-password', function(req, res) {
    res.send('Welcome to Node JS changePassword');
});
router.post('/change-password', userController.changePassword);
// create update delete forum
// create post
router.get('/create-post', function(req, res){
    res.send("this is create post page")
})
router.post('/create-post', postController.createPost)

// read forum
router.get('/get-all-post', postController.getAllPost)
// router.get('/get', function(req, res) {
//     res.send('Welcome to Node JS FORUM!!');
// });

// update post
router.get('/update-post', function(req, res){
    res.send("this is update post page")
})
router.post('/update-post', postController.updatePost)

// delete post
router.get('/delete-post', function(req, res){
    res.send("this is delete post page")
})
router.post('/delete-post', postController.deletePost)


// create comment

// get post by tag
router.get('/get-post', function(req, res){
    res.send("this is Get post by Tag page")
})
router.post('/get-post', postController.getPostByTag)

// serach by title
router.get('/search-post', function(req, res){
    res.send("this is Search post by title page")
})
router.post('/search-post', postController.searchPostByTitle)

// router.use('/users', require('./users'))//.router);
// router.use('/api/v1', require('./routes'));
// router.use('/api/v2', require('./routes2'));

module.exports = router;


// handler require
// module.export = {}
// url/endpoint
// module.exports = function(app) {
//     router.get('/a', (req, res)=> res.send("ini router.get"))
// }

// // router.get('/', (req, res)=> res.send("welcome to index.js"))
// app.get('/', (req, res) => res.send('Hello HOME Express!'))

// // create a user
// app.post('/api/users', (req, res) => {
//   Model.User.create(req.body)
//       .then(user => res.json(user))
// })

// // get all users
// app.get('/api/users', (req, res) => {
//   Model.Users.findAll().then(Users => res.json(Users))
// })

// app.get('/api/forums/:id?', (req, res) => {
//   let query;
//   if (req.params.id) {
    // console.log("INI DARI TADI")
    // query = Model.Forums.findAll({ include: [
    //   {model: Model.Users, where: {id: req.params.id}},
    //   {model: Model.ConnectForumTags, include: [{model: Model.Tags}],where: {forumId: req.params.id}},
    //   {model: Model.Comments, where: {forumId: req.params.id}},
    // ]
    // })
//   } else {
//     // query = Model.Forums.findAll({include: [Model.Users]})
//     query = Model.Forums.findAll()
//     console.log("it is else")
//   }
//   return query.then(Forums => res.json(Forums)) 
//   // Model.Forums.findAll().then(Users => res.json(Users))
// })

// app.get('/login', (req, res) => res.send('Hello LOGIN Express!'))
// app.get('/register', (req, res) => res.send('Hello REGISTER Express!'))
// app.get('/change-password', (req, res) => res.send('Hello ChangePASSWORD Express!'))

// app.get('/create', (req, res) => res.send('Hello create forum Express!'))
// app.get('/delete', (req, res) => res.send('Hello delete forum Express!'))
// app.get('/update', (req, res) => res.send('Hello update forum Express!'))
// // forum
// // comment di forum
// // get post by tag
// // search by title

// app.get('/about', (req, res) => res.send('Express is Express'))

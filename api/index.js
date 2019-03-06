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

router.get('/login', userController.login);

router.get('/register', function(req, res) {
    res.send('Welcome to Node JS REGISTER');
});
router.get('/change-password', function(req, res) {
    res.send('Welcome to Node JS changePass');
});
// create update delete forum

// read forum
router.get('/get-forums', postController.getAllPost)
// router.get('/get', function(req, res) {
//     res.send('Welcome to Node JS FORUM!!');
// });

// create comment

// get post by tag

// serach by title


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
//     console.log("INI DARI TADI")
//     query = Model.Forums.findAll({ include: [
//       {model: Model.Users, where: {id: req.params.id}},
    //   {model: Model.ConnectForumTags, include: [{model: Model.Tags}],where: {forumId: req.params.id}},
//       {model: Model.Comments, where: {forumId: req.params.id}},
//     ]
//     })
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

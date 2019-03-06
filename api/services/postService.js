const Model = require('../../models')
// const res = require('../../server')
const getAllPost = function(req,res){
 // app.get('/api/forums/:id?', (req, res) => {
//   let query;
//   if (req.params.id) {
//     console.log("INI DARI TADI")
//     query = Model.Forums.findAll({ include: [
//       {model: Model.Users, where: {id: req.params.id}},
//       {model: Model.ConnectForumTags, include: [{model: Model.Tags}],where: {forumId: req.params.id}},
    //   {model: Model.Comments, where: {forumId: req.params.id}, required: false},
//     ]
//     })
//   } else {
//     // query = Model.Forums.findAll({include: [Model.Users]})
    // query = Model.Forums.findAll()
//     console.log("it is else")
//   }

    // console.log("INI postServcice dari services")
    return Model.Forums.findAll()
    .then((res) => {
        // disni kalo bener
        // res.send()
        return res
    })
    .catch((err) => {
        // kalo error
        return err
    })
    // return Model.Forums.findAll().then(test => res.json(test)).catch(error)
    // return query.then(Forums => res.json(Forums)) 
//   // Model.Forums.findAll().then(Users => res.json(Users))
// })   
}

module.exports = {
    getAllPost,
}
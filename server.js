const express = require('express')
const app = express()
const router = require('./api/index')
const port = 3000
// const routes = require('./api/index.js')(app);

const bodyParser = require('body-parser')
app.use(bodyParser.json())

// router.get('/', (req, res) => res.send('in the home page'))
// router.get('/about', (req, res)=> res.send("in about page"))

app.use('/', router)
app.listen(port, () => console.log('server.js Hello World app berjalan di http://localhost:',port))

module.exports.app = app

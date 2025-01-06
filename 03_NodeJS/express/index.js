const express = require('express')
const app = express()

//route handler
app.get('/', function(req, res){
    res.send('Hello World!')
})

app.get('/user', function(req, res){
    res.send('username : ayush_maan_')
})

app.get('/profilePic', function(req, res){
    res.send("<img src='image.jpg'>")
})

app.listen(3000) // port

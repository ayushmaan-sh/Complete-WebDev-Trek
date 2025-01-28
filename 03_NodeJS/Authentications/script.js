const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const JWT_SECRET = 'ayushmaanshuklasecretpassword'

app.use(express.json())

const users = []

app.get("/", function(req, res){
    res.send('Understanding JSON Wen Token.')
})

app.post("/signup", function(req, res){
    const username = req.body.username
    const password = req.body.password

    const user = users.find(user => user.username === username && user.password === password)

    users.push({
        username: username,
        password: password
    })

    res.send({
        message: 'You are signed up!'
    })
})

app.post("/signin", function(req, res){
    const username = req.body.username
    const password = req.body.password

    const user = users.find(user => user.username === username && user.password === password)

    if(user){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET)

        res.send({
            token
        })
    } else {
        res.status(404).send({
            message: 'Invalid Credentials!'
        })
    }
})


app.get("/me", function(req, res){
    const token = req.headers.token
    const decodedInformation = jwt.verify(token, JWT_SECRET)
    const username = decodedInformation.username

    const user = users.find(user => user.username === username)

    if(user){
        res.send(`Welcome ${username}`)
    } else {
        res.status(404).send('User not Found')
    }

})

app.listen(3000)

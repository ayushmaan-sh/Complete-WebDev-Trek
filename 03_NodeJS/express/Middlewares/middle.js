const express = require('express')

const app = express()

const port = 3000

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age //taking input of age
    if(age >= 14){
        next();  //if condition met, route to next...
    }else{
        res.json({
            msg: "You are not old enough!"
        })
    }
}

app.get("/", function(req,res){
    res.json({
        msg: "Welcome to the ammusment park."
    })
})

app.use(isOldEnoughMiddleware);  //global middleware

app.get("/ride1", function(req,res){
        res.json({
            msg: "You have successfully riden the ride 1."
        })
})


app.get("/ride2", function(req,res){
        res.json({
            msg: "You have successfully riden the ride 2."
        })
})

app.listen(port)

const express = require('express')
const bodyParser= require('body-parser')
const routes = require('./routes/api')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/user')
monggose.Promise=global.Promise;

const app= express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(routes)
app.use(function(err,req,res,next){
  res.status(422).send({error: err.message})
})


app.listen(process.env.port||4000,function(){
  console.log('listening for requests')
})

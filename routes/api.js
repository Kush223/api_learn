const express= require('express')
const router = express.Router
const User = require('../models/user')

router.put('/user',function(req,res,next){
  User.findByIdAndUpdate({email:req.body.email},req.body).then(function(){
    User.findOne({email:req.body.email}).then(function(user){
      res.send(user)
    })
  })
})

router.post('/user/signup',function(req,res,next){
  var user = new User(req.body)
  user.save().then(function(user){
    res.send(user)
  }).catch(next)
})

router.post('/user/signin',function(req,res,next){
  User.findOne({email:req.body.email}).then(function(user){
    if(req.body.email== user.email && req.body.password== user.password){
      res.status(200).json({message:'user signed in'})
    }
    else{
      res.status(403).json({message:'invalid email or password'})
    }
  }).catch(next)
})

router.delete('/user',function(req,res,next){
  User.findByIdAndRemove({email:req.body.email}).then(function(user){
    res.send(user)
  }).catch(next)
})

module.exports=router

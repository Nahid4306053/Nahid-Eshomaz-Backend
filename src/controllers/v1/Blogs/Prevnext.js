const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const getPrevnext = async (req,res,next)=>{
 try{                 
  const next = await  Blogs.findOne({_id:{ $lt:req.params.id}}).sort({_id:-1})
  const prev = await  Blogs.findOne({_id:{ $gt:req.params.id}}).sort({_id:1})
  res.json({prev:prev,next:next});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
} 

module.exports = getPrevnext;


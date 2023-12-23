const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const getSingelBlogs = async (req,res,next)=>{
 try{                 
  const result = await  Blogs.findOne({_id:req.params.id}).populate({path:'author',select:'_id displayName photoURL'})
  res.json(result);

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 }
} 

module.exports = getSingelBlogs;


const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const MyBlogs = async (req,res,next)=>{
 try{
  const page = req.query.page || 1;
  const limit = req.query.limit || 8  ; 

  const totalData = await Blogs.countDocuments({author:req.CurrentUser._id});
 
  const result = await  Blogs.find({author:req.CurrentUser._id}).sort({createdAt: -1}).skip((page-1) * limit).limit(limit)
  res.json({totalData:totalData , Blogs : result});

 }catch(err){
   console.log(err);
   next(createError(500,'There is a server side errro'));                   
 } 
}

module.exports = MyBlogs;


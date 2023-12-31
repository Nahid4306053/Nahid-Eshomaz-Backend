const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const ViewCount = async (req, res, next) => {
  try {
    const user_id = req.CurrentUser._id
      const isExits = await Blogs.findOne({ _id: req.params.id , views: { $elemMatch: { user_id: user_id } }  });
      if(!isExits){
        const resi = await Blogs.findOneAndUpdate({_id: req.params.id },{ $push :{views:{user_id:user_id}}});
        res.send("got it")
      }
      else{
        res.send("got it") 
      }
 
  } catch (err) {
    console.log(err);
    next(createError(500, 'There is a server side errro'));
  }
}

module.exports = ViewCount;

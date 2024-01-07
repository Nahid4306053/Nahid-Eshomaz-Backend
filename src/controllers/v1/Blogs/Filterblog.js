const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const filterBlog = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 8;
    const query = {};
    const sort = {};

    if (req.query.categorey) {
      query.categorey = req.query.categorey;
    }

    if (req.query.categorey) {
       query.categorey = req.query.categorey;
    } else if (req.query.user) {
       query.author = req.query.user;
    } else if (req.query.search){
      query['$or'] = [
      {title:new RegExp( req.query.search , 'i' )},        
      {description:new RegExp( req.query.search , 'i' )}
      ]
    }

    if (req.query.sort) {
      sort.updatedAt = -1
    }

    const totalData = await Blogs.countDocuments(query);
    const result = await Blogs.find(query).skip((page - 1) * limit).sort(sort).limit(limit).populate({
      path: "author",
      select: "_id displayName photoURL"
    });
    res.json({
      totalData: totalData,
      Blogs: result
    });

  } catch (err) {
    console.log(err);
    next(createError(500, 'There is a server side errro'));
  }
}

module.exports = filterBlog;

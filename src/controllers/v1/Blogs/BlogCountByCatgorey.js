const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const getBlogCountByCatgorey = async (req, res, next) => {
  try {
    const result = await Blogs.aggregate([{
      $group: {
        _id: '$categorey',
        category: {
          $first: '$categorey'
        },
        count: {
          $sum: 1
        },
      },
    }, ])
    res.json(result);

  } catch (err) {
    console.log(err);
    next(createError(500, 'There is a server side errro'));
  }
}

module.exports = getBlogCountByCatgorey;

const router = require('express').Router();
const createError = require('http-errors');
const Blogs = require('../../../models/BlogModel');
const PopularBlog = async (req, res, next) => {
  try {

    const result = await Blogs.aggregate([{
        $project: {
          title: 1,
          content: 1,
          banner : 1,
          viewsCount: {
            $size: "$views"
          },
          createdAt: {
            $max: "$createdAt"
          }
        }
      },
      { 
        $sort: {
          viewsCount: -1,
          createdAt: -1
        }
      },
      {
        $limit: 5
      } 
    ]);
    res.json({
      Blogs: result
    });

  } catch (err) {
    console.log(err);
    next(createError(500, 'There is a server side errro'));
  }
}

module.exports = PopularBlog;

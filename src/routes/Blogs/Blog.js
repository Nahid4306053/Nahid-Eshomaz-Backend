const AddBlog = require('../../controllers/v1/Blogs/AddBlog');
const MyBlogs = require('../../controllers/v1/Blogs/MyBlogs');
const getBlogs = require('../../controllers/v1/Blogs/getBlogs');
const getSingelBlog = require('../../controllers/v1/Blogs/getSingelBlogs');
const VerifyUser = require('../../middlewares/Auth/Verifyuser');
const getPrevnext = require('../../controllers/v1/Blogs/Prevnext');
const getBlogCountByCatgorey = require('../../controllers/v1/Blogs/BlogCountByCatgorey');
const UpdateBlog = require('../../controllers/v1/Blogs/UpdateBlog');
const ViewCount = require('../../controllers/v1/Blogs/ViewCount');
const PopularBlog = require('../../controllers/v1/Blogs/PopularBlog');
const filterBlog = require('../../controllers/v1/Blogs/Filterblog');
// const VerifyTourGuide = require("../../middlewares/Auth/VerifyTourGuide");
// const ChangeStatus = require('../../controllers/v1/Blogs/ChangeStatus');
// const CancelBooking = require('../../controllers/v1/Blogs/CancelBooking');
// const CheckBooking = require('../../controllers/v1/Blogs/CheckBooking');
const Blog = require('express').Router();

Blog.post('/' , VerifyUser,  AddBlog);

Blog.get('/all' , getBlogs);

Blog.get('/singel/:id' , getSingelBlog );

Blog.get('/prevnext/:id' ,  getPrevnext);

Blog.get('/blogcountbycatgorey' ,  getBlogCountByCatgorey);

Blog.get('/my-blogs' , VerifyUser ,  MyBlogs );

Blog.get('/popular'  ,  PopularBlog );

Blog.get('/filter' , VerifyUser ,  filterBlog );

Blog.put('/update/:id' , VerifyUser ,  UpdateBlog );

Blog.put('/views/:id' , VerifyUser ,  ViewCount );







  
module.exports = Blog;  
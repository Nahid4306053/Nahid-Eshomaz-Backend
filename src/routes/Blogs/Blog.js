const AddBlog = require('../../controllers/v1/Blogs/AddBlog');
// const BookBlog = require('../../controllers/v1/Blogs/BookBlog');
// const MyBookings = require('../../controllers/v1/Blogs/MyBookings');
// const getBlogs = require('../../controllers/v1/Blogs/getBlogs');
// const getSingelBlog = require('../../controllers/v1/Blogs/getSingelBlog');
// const VerifyUser = require('../../middlewares/Auth/Verifyuser');
// const VerifyTourGuide = require("../../middlewares/Auth/VerifyTourGuide");
// const ChangeStatus = require('../../controllers/v1/Blogs/ChangeStatus');
// const CancelBooking = require('../../controllers/v1/Blogs/CancelBooking');
// const CheckBooking = require('../../controllers/v1/Blogs/CheckBooking');
const Blog = require('express').Router();

Blog.post('/' , AddBlog);

// Blog.get('/all' , getBlogs);

// Blog.get('/my-bookings' , VerifyUser ,  MyBookings );

// Blog.get('/booking/:id' , VerifyUser , CheckBooking );

// Blog.get('/singel/:id' , getSingelBlog );

// Blog.post('/book' , VerifyUser ,  BookBlog );
 
// Blog.patch('/booking/status/:id' , VerifyUser ,  VerifyTourGuide , ChangeStatus );

// Blog.delete('/booking/:id' , VerifyUser , CancelBooking );





  
module.exports = Blog;  
const express  = require('express');
const categories = require('../../routes/Categories/Catgories');
const User = require('../../routes/People/User');
const logOut = require('../../routes/auth/logOut');
const Blog = require('../../routes/Blogs/Blog');
const Comment = require('../../routes/comment/Comment');
const router = express.Router()
 
router.get("/",(req,res)=>{
      res.send("listennig api version 01...")              
})

//--- /api/v1/tour-types
router.use("/categories" , categories)

//--- /api/v1/user
router.use("/user" , User)

//--- /api/v1/logOut
router.use("/logout" , logOut)

//--- /api/v1/Blog
router.use("/blog" , Blog);

//--- /api/v1/comment
router.use("/comment" , Comment);









module.exports = router
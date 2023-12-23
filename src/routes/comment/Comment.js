const GetComment = require("../../controllers/v1/Comments/GetComment");
const PostComment = require("../../controllers/v1/Comments/PostComment");
const replay = require("../../controllers/v1/Comments/Replay");
const VerifyUser = require("../../middlewares/Auth/Verifyuser");

const review = require("express").Router()

review.post("/" , VerifyUser , PostComment)
review.get("/:id" ,  GetComment)
review.put("/replay/:id" , VerifyUser ,  replay)

module.exports = review; 
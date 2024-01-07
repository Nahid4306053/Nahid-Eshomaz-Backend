
const CreatePeople = require("../../controllers/v1/People/CreatePeople")
const CreateAccessToken = require("../../middlewares/Auth/CreateAccessToken")

const VerifyUser = require("../../middlewares/Auth/Verifyuser")

const User = require("express").Router()

User.post('/',CreatePeople , CreateAccessToken)



// User.patch('/set-addtional-info',VerifyUser , SetAddtionalInfo)



module.exports = User    
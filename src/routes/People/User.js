const ChangeRole = require("../../controllers/v1/People/ChangeRole")
const CreatePeople = require("../../controllers/v1/People/CreatePeople")
const SetAddtionalInfo = require("../../controllers/v1/People/SetAddtionalInfo")
const TourGuiderDetails = require("../../controllers/v1/People/TourGuiderDetails")
const getPeoples = require("../../controllers/v1/People/getPeoples")
const getTourGuiders = require("../../controllers/v1/People/getTourGuiders")
const CreateAccessToken = require("../../middlewares/Auth/CreateAccessToken")
const VerifyAdmin = require("../../middlewares/Auth/VerifyAdmin")
const VerifyUser = require("../../middlewares/Auth/Verifyuser")

const User = require("express").Router()

User.post('/',CreatePeople , CreateAccessToken)



// User.patch('/set-addtional-info',VerifyUser , SetAddtionalInfo)



module.exports = User    
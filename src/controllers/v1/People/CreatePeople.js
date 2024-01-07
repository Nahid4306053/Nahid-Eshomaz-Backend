const Peoples = require('../../../models/PeopleModel');
const createError = require('http-errors');


const CreatePeople = async (req, res, next) => {
  try {

    if (req.body.email) {  
      const {displayName,photoURL} = req.body;
      const isuserExits = await Peoples.findOne({email: req.body.email , uid:req.body.uid})

      if (isuserExits) {
        const result = await Peoples.findOneAndUpdate({
          email: req.body.email
        },{displayName:displayName,photoURL:photoURL},{ new: true })
        req.CurrentUser = result; 
      } else {  
        const result = await Peoples(req.body).save()
        req.CurrentUser = result;
      }    
      
      next()
    } else {
      next(createError(500, "There is Server side Error"))
    }
   
  } catch (err) {
    console.log(err)                
    next(createError(500, "There is Server side Error"))
  }
}



module.exports = CreatePeople;

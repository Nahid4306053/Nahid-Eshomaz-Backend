const { default: mongoose } = require("mongoose");
const categoreys = mongoose.connection.collection('categoreys')
const createError = require("http-errors");
const Catgories = async (req,res,next) =>{
    try{
     const categoreysDATA = await categoreys.find({}).toArray();
      res.send(categoreysDATA)
    }  
    catch(err){
      console.log(err)
      next(createError(500,'There is server side error'))                 
    }              
}



module.exports = Catgories;


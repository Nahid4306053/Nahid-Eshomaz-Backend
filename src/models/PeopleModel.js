const { Schema, model } = require("mongoose");


const PeopleModel = new Schema({
     uid:{
        type:String,
        required:true,
        
     },    
     displayName:{
        type:String,
        required:true
     },    
     email:{
       
        type:String,
        required:true,
        unique: true
     },    
     photoURL:{
        type:String,
        default : null
     }, 
     role:{
      type:String,
      enum:['user','admin'],
      default:"user"
     } ,
     additionalInfo :{
        type:String ,                  
     }            
},{
     timestamps:true
})

const Peoples = new model('Peoples',PeopleModel)

module.exports = Peoples;
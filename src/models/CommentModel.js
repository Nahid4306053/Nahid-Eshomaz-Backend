const { Schema, default: mongoose, model } = require("mongoose");


const commentModel = new Schema({
    commenter:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'Peoples'              
    },    
    blog_id:{
     type: mongoose.Types.ObjectId ,
     required: true,
     ref: 'blogs'              
    },
    comment:{
     type: String,
     required: true,            
    },
    replays:[
      {
        replayer:{
          type: mongoose.Types.ObjectId,
          ref: 'Peoples' 
        },
        replay:{
          type : String
        },
        date:{
          type : Date,
          default : Date.now
        }
      }
    ]               
},
{
  timestamps: true
})

const reviews = new model('comments',commentModel)

module.exports = reviews;
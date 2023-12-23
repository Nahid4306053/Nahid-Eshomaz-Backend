const mongoose = require('mongoose');

const BlogModel = new mongoose.Schema({
  banner: {
    type: String,
    required: true,
  },
  categorey: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref : 'Peoples',
    required: true,
  },
  views:[
    {
      user_id: mongoose.Types.ObjectId , 
    }
  ]
},{
  timestamps:true,
});

const Blogs = new mongoose.model('blogs', BlogModel);

module.exports = Blogs;

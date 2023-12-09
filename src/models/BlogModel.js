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
  views: {
    type: Number,
    required: true,
  },
  author: {
    type: mongoose.Types.ObjectId,
    ref : 'peoples',
    required: true,
  },
},{
  timestamps:true,
});

const Blogs = new mongoose.model('package', BlogModel);

module.exports = Blogs;

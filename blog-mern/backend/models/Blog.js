const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL or file path
    default: '',
  },
  category: {
    type: String,
    default: 'General',
  },
  tags: {
    type: [String],
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);

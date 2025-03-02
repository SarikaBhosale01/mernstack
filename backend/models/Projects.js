// const mongoose = require("mongoose");

// const ProjectSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true }
// });

// module.exports = mongoose.model("Project", ProjectSchema);
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    required: [true, 'Please add an end date']
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started'
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
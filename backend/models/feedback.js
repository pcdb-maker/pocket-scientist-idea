// src/backend/models/feedback.js
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  employeeId: String,
  engagement: Number,
  leadership: Number,
  workLifeBalance: Number,
  development: Number,
  recognition: Number,
  openFeedback: String,
  sentiment: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);
module.exports = Feedback;

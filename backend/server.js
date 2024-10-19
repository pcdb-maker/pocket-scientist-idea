// src/backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Feedback = require('./models/feedback');
const generateInsights = require('./models/insights');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pocket-scientist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API Route to get insights
app.get('/api/insights', async (req, res) => {
  try {
    const feedbacks = await Feedback.find(); // Fetch feedback from the database
    const insights = generateInsights(feedbacks); // Generate insights from feedback
    res.status(200).send(insights);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch insights' });
  }
});

// API Route to submit feedback
app.post('/api/feedback', async (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    await feedback.save();
    res.status(201).send(feedback);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

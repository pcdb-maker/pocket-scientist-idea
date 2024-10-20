import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Feedback from './models/feedback.js';
import generateInsights from './models/insights.js';
import axios from 'axios';
import { Router } from 'express';

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

// AI Writing Assistant Route
const router = Router();
router.post('/api/write-assistant', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    }, {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error communicating with AI');
  }
});

app.use(router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;

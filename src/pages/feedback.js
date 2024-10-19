// src/pages/feedback.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Sentiment from 'sentiment';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    role: '',
    department: '',
    engagement: 0,
    leadership: 0,
    workLifeBalance: 0,
    development: 0,
    recognition: 0,
    openFeedback: ''
  });
  const [allFeedback, setAllFeedback] = useState([
    {
      name: 'Alice Johnson',
      role: 'Software Engineer',
      department: 'Engineering',
      engagement: 4,
      leadership: 4,
      workLifeBalance: 3,
      development: 4,
      recognition: 5,
      openFeedback: 'Great environment, but workload could be better managed.',
      sentiment: 'Positive'
    },
    {
      name: 'Bob Smith',
      role: 'Product Manager',
      department: 'Product',
      engagement: 3,
      leadership: 2,
      workLifeBalance: 4,
      development: 3,
      recognition: 3,
      openFeedback: 'Leadership needs improvement, but work-life balance is good.',
      sentiment: 'Neutral'
    },
    {
      name: 'Charlie Brown',
      role: 'UX Designer',
      department: 'Design',
      engagement: 5,
      leadership: 5,
      workLifeBalance: 5,
      development: 5,
      recognition: 5,
      openFeedback: 'I am extremely happy with my role and the leadership here.',
      sentiment: 'Positive'
    },
    {
      name: 'Dana White',
      role: 'QA Engineer',
      department: 'Quality Assurance',
      engagement: 3,
      leadership: 3,
      workLifeBalance: 4,
      development: 3,
      recognition: 2,
      openFeedback: 'Recognition could be better, but overall satisfied.',
      sentiment: 'Neutral'
    },
    {
      name: 'Evelyn Green',
      role: 'Data Analyst',
      department: 'Data',
      engagement: 4,
      leadership: 4,
      workLifeBalance: 4,
      development: 4,
      recognition: 4,
      openFeedback: 'I feel valued and have good opportunities for growth.',
      sentiment: 'Positive'
    },
    {
      name: 'Frank Black',
      role: 'DevOps Engineer',
      department: 'Engineering',
      engagement: 2,
      leadership: 2,
      workLifeBalance: 3,
      development: 2,
      recognition: 2,
      openFeedback: 'There is a lack of clear direction and recognition.',
      sentiment: 'Negative'
    },
    {
      name: 'Grace Lee',
      role: 'HR Specialist',
      department: 'Human Resources',
      engagement: 5,
      leadership: 5,
      workLifeBalance: 5,
      development: 5,
      recognition: 5,
      openFeedback: 'I love working here, and I feel very supported by leadership.',
      sentiment: 'Positive'
    },
    {
      name: 'Henry Adams',
      role: 'Marketing Specialist',
      department: 'Marketing',
      engagement: 3,
      leadership: 3,
      workLifeBalance: 4,
      development: 3,
      recognition: 3,
      openFeedback: 'Marketing campaigns are great, but leadership could be more proactive.',
      sentiment: 'Neutral'
    },
    {
      name: 'Ivy Thompson',
      role: 'Sales Executive',
      department: 'Sales',
      engagement: 4,
      leadership: 3,
      workLifeBalance: 4,
      development: 4,
      recognition: 5,
      openFeedback: 'Happy with the role but would like more support from leadership.',
      sentiment: 'Positive'
    },
    {
      name: 'Jack Wilson',
      role: 'Finance Analyst',
      department: 'Finance',
      engagement: 3,
      leadership: 2,
      workLifeBalance: 3,
      development: 3,
      recognition: 3,
      openFeedback: 'The workload is manageable, but leadership could communicate better.',
      sentiment: 'Neutral'
    },

    {
        name: 'Samantha Turner',
        role: 'Sales Executive',
        department: 'Sales',
        engagement: 2,
        leadership: 1,
        workLifeBalance: 2,
        development: 2,
        recognition: 1,
        openFeedback: "The leadership lacks direction and there's little recognition for our efforts. The workload is overwhelming with no support",
        sentiment: 'Negative'
      },

      {
        name: 'Mark Peterson',
        role: 'Customer Service Specialist',
        department: 'Customer Support',
        engagement: 1,
        leadership: 1,
        workLifeBalance: 2,
        development: 1,
        recognition: 2,
        openFeedback: 'There is little to no support from management. Career growth seems non-existent and the expectations are unrealistic.',
        sentiment: 'Negative'
      }, 

      {
        name: 'Emily Johnson',
        role: 'Marketing Coordinator',
        department: 'Marketing',
        engagement: 2,
        leadership: 2,
        workLifeBalance: 1,
        development: 2,
        recognition: 1,
        openFeedback: "Management fails to recognize achievements, and work-life balance is a serious issue. I feel like I'm constantly under pressure without any direction.",
        sentiment: 'Negative'
    },

    {
        name: 'Julia Wright',
        role: 'Project Manager',
        department: 'Operations',
        engagement: 1,
        leadership: 1,
        workLifeBalance: 1,
        development: 1,
        recognition: 1,
        openFeedback: "There's no communication from leadership and no appreciation for the work we put in. The environment is exhausting, with no opportunity for growth.",
        sentiment: 'Negative'
    }


  ]);
  const [sentimentResult, setSentimentResult] = useState(null);

  const sentiment = new Sentiment();

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();

    // Analyze sentiment for open-ended feedback
    const result = sentiment.analyze(feedback.openFeedback);
    const sentimentScore = result.score > 0 ? 'Positive' : result.score < 0 ? 'Negative' : 'Neutral';

    // Store feedback and sentiment result
    setAllFeedback([...allFeedback, { ...feedback, sentiment: sentimentScore }]);
    setSentimentResult(sentimentScore);

    // Clear the form
    setFeedback({
      name: '',
      role: '',
      department: '',
      engagement: 0,
      leadership: 0,
      workLifeBalance: 0,
      development: 0,
      recognition: 0,
      openFeedback: ''
    });
  };

  return (
    <Layout>
      <section>
        <h1>Annual Employee Feedback</h1>
        <form onSubmit={handleFeedbackSubmit}>
          {/* Employee Name */}
          <label>
            Employee Name:
            <input
              type="text"
              name="name"
              value={feedback.name}
              onChange={handleFeedbackChange}
              required
            />
          </label>

          {/* Role */}
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={feedback.role}
              onChange={handleFeedbackChange}
              required
            />
          </label>

          {/* Department */}
          <label>
            Department:
            <input
              type="text"
              name="department"
              value={feedback.department}
              onChange={handleFeedbackChange}
              required
            />
          </label>

          {/* Engagement Question */}
          <label>
            How engaged are you with your work at the company? (1 = Not engaged, 5 = Highly engaged)
            <select name="engagement" value={feedback.engagement} onChange={handleFeedbackChange} required>
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          {/* Leadership Question */}
          <label>
            How satisfied are you with the leadership’s vision and communication? (1 = Not satisfied, 5 = Very satisfied)
            <select name="leadership" value={feedback.leadership} onChange={handleFeedbackChange} required>
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          {/* Work-Life Balance */}
          <label>
            How do you rate your work-life balance? (1 = Poor, 5 = Excellent)
            <select name="workLifeBalance" value={feedback.workLifeBalance} onChange={handleFeedbackChange} required>
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          {/* Development Opportunities */}
          <label>
            How satisfied are you with your personal development opportunities? (1 = Not satisfied, 5 = Very satisfied)
            <select name="development" value={feedback.development} onChange={handleFeedbackChange} required>
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          {/* Recognition */}
          <label>
            How often do you feel recognized for your work? (1 = Rarely, 5 = Often)
            <select name="recognition" value={feedback.recognition} onChange={handleFeedbackChange} required>
              <option value="0">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>

          {/* Open Feedback */}
          <label>
            Any additional comments or feedback you'd like to share?
            <textarea
              name="openFeedback"
              value={feedback.openFeedback}
              onChange={handleFeedbackChange}
              placeholder="Enter your comments..."
              rows="5"
              required
            ></textarea>
          </label>

          <button type="submit">Submit</button>
        </form>

        {/* Display Sentiment Analysis Result */}
        {sentimentResult && (
          <div>
            <h3>Sentiment Analysis Result: {sentimentResult}</h3>
          </div>
        )}

        {/* Display All Feedback */}
        <div>
          <h2>All Feedback:</h2>
          <ul>
            {allFeedback.map((entry, index) => (
              <li key={index}>
                <p><strong>Employee Name:</strong> {entry.name}</p>
                <p><strong>Role:</strong> {entry.role}</p>
                <p><strong>Department:</strong> {entry.department}</p>
                <p><strong>Engagement:</strong> {entry.engagement}/5</p>
                <p><strong>Leadership:</strong> {entry.leadership}/5</p>
                <p><strong>Work-Life Balance:</strong> {entry.workLifeBalance}/5</p>
                <p><strong>Development:</strong> {entry.development}/5</p>
                <p><strong>Recognition:</strong> {entry.recognition}/5</p>
                <p><strong>Comments:</strong> {entry.openFeedback}</p>
                <p><strong>Sentiment:</strong> {entry.sentiment}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;

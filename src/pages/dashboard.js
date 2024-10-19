// src/pages/dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [feedbackData, setFeedbackData] = useState([]);
  const [insights, setInsights] = useState({});

  useEffect(() => {
    async function fetchFeedback() {
      const response = await fetch('/api/feedback');
      const data = await response.json();
      setFeedbackData(data);

      // Calculate Insights
      const engagementIssues = data.filter(f => f.engagement < 3).length;
      const leadershipIssues = data.filter(f => f.leadership < 3).length;
      const developmentIssues = data.filter(f => f.development < 3).length;

      setInsights({ engagementIssues, leadershipIssues, developmentIssues });
    }
    fetchFeedback();
  }, []);

  return (
    <div>
      <h1>AI-Powered Insights</h1>
      <p>Employees with Engagement Issues: {insights.engagementIssues}</p>
      <p>Employees with Leadership Issues: {insights.leadershipIssues}</p>
      <p>Employees with Development Issues: {insights.developmentIssues}</p>
    </div>
  );
};

export default Dashboard;

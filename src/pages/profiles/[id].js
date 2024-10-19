// src/pages/profiles/[id].js
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Sentiment from 'sentiment';
import { Line } from 'react-chartjs-2';
import { profiles } from '../../data/profilesData'; // Data for employee profiles
// Import and register the necessary components from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EmployeeProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>;
  }

  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return <p>Profile not found</p>;
  }

  const analyzeSentiment = (comment) => {
    const sentiment = new Sentiment();
    const result = sentiment.analyze(comment);
    return result.score > 0 ? 'Positive' : result.score < 0 ? 'Negative' : 'Neutral';
  };

  return (
    <Layout>
      <h1>{profile.name}'s Profile</h1>
      <p><strong>Role:</strong> {profile.role}</p>
      <p><strong>Department:</strong> {profile.department}</p>

      {/* Display survey responses */}
      <p><strong>Engagement Score:</strong> {profile.surveyResponses.engagement}/5</p>
      <p><strong>Leadership Satisfaction:</strong> {profile.surveyResponses.leadership}/5</p>
      <p><strong>Work-Life Balance:</strong> {profile.surveyResponses.workLifeBlend}/5</p>
      <p><strong>Development Satisfaction:</strong> {profile.surveyResponses.development}/5</p>
      <p><strong>Recognition:</strong> {profile.surveyResponses.recognition}/5</p>

      {/* Feedback and Sentiment */}
      <h2>Feedback Comments</h2>
      <ul>
        {profile.feedbackComments.map((comment, index) => (
          <li key={index}>
            {comment} <br />
            <strong>Sentiment:</strong> {analyzeSentiment(comment)}
          </li>
        ))}
      </ul>

      {/* Performance trend chart */}
      <div className="performance-chart">
        <Line
          data={{
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
              {
                label: `${profile.name}'s Engagement Trend`,
                data: profile.trendData,
                borderColor: '#4CAF50',
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                fill: true,
                tension: 0.3,
                pointRadius: 5,
                pointHoverRadius: 7,
              },
            ],
          }}
          options={{
            scales: {
              x: { title: { display: true, text: 'Quarter' } },
              y: { title: { display: true, text: 'Engagement Score' }, beginAtZero: true, max: 5 },
            },
            plugins: { tooltip: { enabled: true, mode: 'index' }, legend: { position: 'top' } },
          }}
        />
      </div>
    </Layout>
  );
};

export default EmployeeProfile;
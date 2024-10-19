import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Line } from 'react-chartjs-2';
import { profiles } from '../data/profilesData';

const Insights = () => {
  const [insightsData, setInsightsData] = useState(null);
  const [selectedTab, setSelectedTab] = useState('summary');
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [filters, setFilters] = useState({ department: '', role: '', engagementLevel: '' });
  const [appliedFilters, setAppliedFilters] = useState(null);

  // Calculate insights data from profiles
  useEffect(() => {
    const calculateInsights = () => {
      let engagementIssues = profiles.filter(profile => profile.surveyResponses.engagement < 3).length;
      let leadershipIssues = profiles.filter(profile => profile.surveyResponses.leadership < 3).length;
      let developmentIssues = profiles.filter(profile => profile.surveyResponses.development < 3).length;
      let focusAreas = [];
      let reminders = [];
      let actionables = [];

      profiles.forEach((profile) => {
        focusAreas.push(...profile.feedbackComments.filter(comment => comment.includes('Focus Area')));
        reminders.push(...profile.feedbackComments.filter(comment => comment.includes('Reminder')));
        actionables.push(...profile.feedbackComments.filter(comment => comment.includes('Apply')));
      });

      setInsightsData({
        engagementIssues,
        leadershipIssues,
        developmentIssues,
        focusAreas,
        reminders,
        actionables,
      });
    };

    calculateInsights();
  }, []);

  if (!insightsData) {
    return <p>Loading insights...</p>;
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    setAppliedFilters(filters);
  };

  const clearFilters = () => {
    setFilters({ department: '', role: '', engagementLevel: '' });
    setAppliedFilters(null);
  };

  const getFilteredProfiles = () => {
    if (!appliedFilters) {
      return profiles;
    }
    const { department, role, engagementLevel } = appliedFilters;
    return profiles.filter((profile) => {
      let matchesDepartment = !department || profile.department === department;
      let matchesRole = !role || profile.role === role;
      let matchesEngagement =
        !engagementLevel ||
        (engagementLevel === 'High' && profile.surveyResponses.engagement > 3) ||
        (engagementLevel === 'Low' && profile.surveyResponses.engagement <= 3);
      return matchesDepartment && matchesRole && matchesEngagement;
    });
  };

  const filteredProfiles = getFilteredProfiles();

  const renderContent = () => {
    if (selectedIssue) {
      switch (selectedIssue) {
        case 'engagement':
          return (
            <div className="engagement-issues">
              <h2>Engagement Issues (Below 3):</h2>
              <ul>
                {filteredProfiles
                  .filter(profile => profile.surveyResponses.engagement < 3)
                  .map((profile, index) => (
                    <li key={index}>{profile.name}: Engagement Score - {profile.surveyResponses.engagement}</li>
                  ))}
              </ul>
            </div>
          );
        case 'leadership':
          return (
            <div className="leadership-issues">
              <h2>Leadership Issues (Below 3):</h2>
              <ul>
                {filteredProfiles
                  .filter(profile => profile.surveyResponses.leadership < 3)
                  .map((profile, index) => (
                    <li key={index}>{profile.name}: Leadership Score - {profile.surveyResponses.leadership}</li>
                  ))}
              </ul>
            </div>
          );
        case 'development':
          return (
            <div className="development-issues">
              <h2>Development Issues (Below 3):</h2>
    }

    switch (selectedTab) {
      case 'focusAreas':
        return (
          <div className="focus-areas">
            <h2>Focus Areas for Improvement:</h2>
            <ul>
              {insightsData.focusAreas.map((focus, index) => (
                <li key={index}>{focus}</li>
              ))}
            </ul>
          </div>
        );
      case 'reminders':
        return (
          <div className="reminders">
            <h2>Reminders for Managers:</h2>
            <ul>
              {insightsData.reminders.map((reminder, index) => (
                <li key={index}>{reminder}</li>
              ))}
            </ul>
          </div>
        );
      case 'actionables':
        return (
          <div className="actionables">
            <h2>Actionable Insights:</h2>
            <ul>
              {insightsData.actionables.map((actionable, index) => (
                <li key={index}>{actionable}</li>
              ))}
            </ul>
          </div>
        );
      case 'trends':
        return (
          <div className="charts">
            {profiles.map((profile) => (
              <div key={profile.id} className="profile-chart">
                <h3>{profile.name}'s Engagement Trend</h3>
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
                      x: {
                        title: {
                          display: true,
                          text: 'Quarter',
                        },
                      },
                      y: {
                        title: {
                          display: true,
                          text: 'Engagement Score',
                        },
                        beginAtZero: true,
                        max: 5,
                      },
                    },
                    plugins: {
                      tooltip: {
                        enabled: true,
                        mode: 'index',
                      },
                      legend: {
                        position: 'top',
                      },
                    },
                  }}
                />
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="insights-summary">
            <div className="issues-overview">
              <button onClick={() => setSelectedTab('focusAreas')} className="issue" style={{ backgroundColor: 'red', margin: '10px', padding: '10px' }}>
                <h2>Engagement Issues: {insightsData.engagementIssues}</h2>
              </button>
              <button onClick={() => setSelectedTab('reminders')} className="issue" style={{ backgroundColor: 'red', margin: '10px', padding: '10px' }}>
                <h2>Leadership Issues: {insightsData.leadershipIssues}</h2>
              </button>
              <button onClick={() => setSelectedTab('actionables')} className="issue" style={{ backgroundColor: 'red', margin: '10px', padding: '10px' }}>
                <h2>Development Issues: {insightsData.developmentIssues}</h2>
              </button>
            </div>
          </div>
        );
    }
  };

  const handleFilterChange = (filterType, value) => {
    setFilter({ ...filter, [filterType]: value });
  };

  const filteredProfiles = profiles.filter((profile) => {
    const { department, role, engagementLevel } = filter;
    let matchesDepartment = !department || profile.department === department;
    let matchesRole = !role || profile.role === role;
    let matchesEngagement =
      !engagementLevel ||
      (engagementLevel === 'High' && profile.surveyResponses.engagement > 3) ||
      (engagementLevel === 'Low' && profile.surveyResponses.engagement <= 3);
    return matchesDepartment && matchesRole && matchesEngagement;
  });

  return (
    <Layout>
      <h1>AI-Powered Insights</h1>
      <div className="tabs">
        <button onClick={() => setSelectedTab('summary')}>Summary</button>
        <button onClick={() => setSelectedTab('focusAreas')}>Focus Areas</button>
        <button onClick={() => setSelectedTab('reminders')}>Reminders</button>
        <button onClick={() => setSelectedTab('actionables')}>Actionable Insights</button>
        <button onClick={() => setSelectedTab('trends')}>Engagement Trends</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('department', 'Engineering')}>Filter by Engineering Department</button>
        <button onClick={() => handleFilterChange('role', 'Manager')}>Filter by Role: Manager</button>
        <button onClick={() => handleFilterChange('engagementLevel', 'High')}>Filter by High Engagement Level</button>
        <button onClick={() => handleFilterChange('engagementLevel', 'Low')}>Filter by Low Engagement Level</button>
            <option value="HR">HR</option>
        <button onClick={applyFilters} style={{ margin: '10px', padding: '10px' }}>Apply Filters</button>
        <button onClick={clearFilters} style={{ margin: '10px', padding: '10px' }}>Clear Filters</button>
      </div>
      {renderContent()}
    </Layout>
  );
};

export default Insights;

// src/pages/index.js
import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <section>
        <h1>Welcome to Pocket Scientist</h1>
        <p>AI-powered insights for performance management.</p>
        <button>Explore Employee Profiles</button>
        <button>View AI Insights</button>
      </section>
    </Layout>
  );
};

export default Home;

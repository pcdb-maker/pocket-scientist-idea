// src/pages/index.js
import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const Home = () => {
  return (
    <Layout>
      <section>
        <h1>Welcome to Pocket Scientist</h1>
        <p>AI-powered insights for performance management.</p>
        <Link href="/profiles" passHref>
          <button>Explore Employee Profiles</button>
        </Link>
        <Link href="/insights" passHref>
          <button>Employee AI Insights</button>
        </Link>
        
      </section>
    </Layout>
  );
};

export default Home;

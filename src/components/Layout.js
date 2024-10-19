// src/components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
        <ul className="navbar">
  <li><a href="/">Home</a></li>
  <li><a href="/profiles">Employee Profiles</a></li>
  <li><a href="/insights">AI Insights</a></li>
  <li><a href="/writing-assistant">Writing Assistant</a></li>
  <li><a href="/feedback">Submit Feedback</a></li> {/* New link for feedback page */}
</ul>

        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Pocket Scientist | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Layout;

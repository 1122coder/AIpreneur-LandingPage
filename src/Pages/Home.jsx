// HomeSection.jsx

import React from 'react';
import '../Style/HomeSection.css'; // Import the CSS file

const HomeSection = () => {
  return (
    <div className="home-section">
      <div className="overlay"></div>
      <div className="content">
        <h1 className="gradient-text">
          Welcome to <span className="fade-in-out">AIPrenuer</span>
        </h1>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default HomeSection;

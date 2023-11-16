// HomeSection.jsx

import React, {useState} from 'react';
import '../Style/HomeSection.css'; // Import the CSS file
import logoImage from '../Assets/logo.jpg'

const HomeSection = () => {
  const [lineStyles, setLineStyles] = useState({});

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Calculate the angle of the line based on mouse position
    const angle = Math.atan2(clientY, clientX);

    // Calculate the length of the line
    const length = Math.sqrt(Math.pow(clientX, 2) + Math.pow(clientY, 2));

    // Set line styles dynamically
    const newLineStyles = {
      left: `${clientX}px`,
      top: `${clientY}px`,
      width: `${length}px`,
      transform: `rotate(${angle}rad)`,
    };

    setLineStyles(newLineStyles);
  };

  const handleMouseLeave = () => {
    // Reset line styles when mouse leaves
    setLineStyles({});
  };

  return (
    <div className="home-section home-container" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>

      <div className="drawing-line" style={lineStyles}></div>
      <div className="overlay"></div>
      <div className="content">
        <div className="logo-container">
          <img src={logoImage} alt="Your Logo" className="logo" />
        </div>
        <h1 className="gradient-text">
          Welcome to <span className="fade-in-out">AIPrenuer</span>
        </h1>
        <button className="cta-button">Learn More</button>
      </div>
    </div>
  );
};

export default HomeSection;

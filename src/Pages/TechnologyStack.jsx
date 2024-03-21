import React from 'react';
import '../Style/TechnologyStack.css'; // Ensure this is the correct path to your CSS file

// Import your technology logo images
import ReactLogo from '../Assets/react.png';
import NodeLogo from '../Assets/nodejs.png';
import JS from '../Assets/js.jpeg';
import Html5 from '../Assets/html-5.png';
import CSS from '../Assets/social.png';
import GNAI from '../Assets/ai.jpg';
import Language from '../Assets/language.png';
import Mongodb from '../Assets/mongodb.png';
import Mysql from '../Assets/mysql.png';
import Scrapy from '../Assets/scrapy.jpeg';
import Flask from '../Assets/flask.png';
import Fastapi from '../Assets/fastapi.png';
// ... import other technology logos

const TechnologyStack = () => {
  return (
    <div className="tech-stack-section">
      <div className="tech-stack-container">
        <h1 className="tech-stack-title">Technology Stack</h1>
        <hr className="tech-stack-line" />
      </div>
      <div className="tech-stack-icons">
        {/* List of technology logos */}
        <img src={ReactLogo} alt="React" className="tech-stack-icon" />
        <img src={NodeLogo} alt="Node.js" className="tech-stack-icon" />
        <img src={JS} alt="Javascript" className="tech-stack-icon" />
        <img src={Html5} alt="HTML-5" className="tech-stack-icon" />
        <img src={CSS} alt="CSS" className="tech-stack-icon" />
        <img src={GNAI} alt="Illustrator" className="tech-stack-icon" />
        <img src={Language} alt="Language Model" className="tech-stack-icon" />
        <img src={Mongodb} alt="MongoDB" className="tech-stack-icon" />
        <img src={Mysql} alt="MySQL" className="tech-stack-icon" />
        <img src={Scrapy} alt="Scrapy" className="tech-stack-icon" />
        <img src={Flask} alt="Flask" className="tech-stack-icon" />
        <img src={Fastapi} alt="Fastapi" className="tech-stack-icon" />
        {/* ... more technology logos */}
      </div>
    </div>
  );
};

export default TechnologyStack;

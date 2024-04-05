// AboutUs.jsx
import React from 'react';
import '../Style/AboutUs.css';
import backgroundImage from '../Assets/comp.jpeg';
import { Element } from 'react-scroll';

const AboutUs = () => {
  return (
    <Element name="about-us" className="about-us-container">
      <div className="about-us-title-container">
        <h1 className="about-us-title">About Us</h1>
        <hr className="about-us-title-line" />
      </div>
      <div className="content-container">
        <div className="text">
          <div className="text-container" id="about-us-text">
            <p className='gradient-heading'>AIpreneur: Shaping the Future of Business with AI 🔮</p>
            <p>
              We're not just building AI solutions; we're shaping the way businesses will operate tomorrow. AIpreneur stays at the forefront of AI innovation, ensuring our clients benefit from the latest advancements. Our services include:
              <ul>
                <li>LLM and AI image model integration 💡</li>
                <li>Personalized chatbot development 💬</li>
                <li>Seamless API integration 🔗</li>
                <li>Custom web and app development 💻</li>
                <li>Intelligent web scraping 🌐</li>
              </ul>
              Partner with us and gain a competitive edge in the AI-driven landscape.
            </p>
          </div>
        </div>
        <div className="image">
          <div className="image-content">
            <img src={backgroundImage} alt="Your Image" />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutUs;

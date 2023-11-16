// AboutUs.jsx

import React from 'react';
import '../Style/AboutUs.css';
import backgroundImage from '../Assets/comp.jpg';
import { Element } from 'react-scroll';

const AboutUs = () => {
  return (
    <Element name="about-us" className="about-us-container">
      <div className="text">
        <div className="text-container" id="about-us-text">
          <h2 className="about-us-heading">About Us</h2>
          <hr className="about-us-line" />
          <p>
            We are a team of passionate individuals dedicated to providing innovative solutions in the field of
            artificial intelligence.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim
            sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a,
            semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a,
            enim. Pellentesque congue.
          </p>
        </div>
      </div>
      <div className="image">
        <div className="image-content">
          {/* Your image here */}
          <img src={backgroundImage} alt="Your Image" />
        </div>
      </div>
    </Element>
  );
};

export default AboutUs;

import React from 'react';
import '../Style/services.css'; // Import your CSS file
import {  Row, Col } from 'react-bootstrap';

const Services = () => {
  const services = [
    {
      title: 'LLMS Models API integration',
      description: 'We seamlessly integrate cutting-edge LLM models (like ChatGPT and Gemini) and AI image generation tools into your web and mobile applications. Unlock the power of conversational AI, advanced text generation, and stunning image creation to elevate your user experience.',
    },
    {
      title: 'Web Development',
      description: 'We craft modern, responsive, and user-centric websites that align perfectly with your brand vision. Our expertise in the latest web technologies ensures exceptional performance, search engine optimization, and a seamless experience across all devices.',
    },
    {
      title: 'App Development',
      description: 'We build intuitive and engaging mobile apps (Android and iOS) that solve real-world problems for your users. Our focus on polished design, robust functionality, and platform-specific optimization delivers an app experience that stands out.',
    },
    {
      title: 'Web Scraping',
      description: 'We extract valuable data from even the most complex websites, transforming it into actionable insights. Our custom web scraping solutions are tailored to your specific needs, providing you with the competitive edge you need.',
    },
  ];

  const titleStyle = {
    fontSize: '2.5rem', // Adjust the size as needed
    fontWeight: 'bold',
    margin: '0',
    color: '#4a4a4a' // Assuming you want a similar gray color
  };

  const lineStyle = {
    width: '50%', // Adjust the width as needed
    height: '2px', // Line thickness
    backgroundColor: 'black', // Line color
    margin: '20px auto' // Center the line horizontally and add vertical spacing
  };
  return (
    <div className="services-section">
      <Row className="justify-content-center mb-12">
        <Col md={12} className="text-center">
          <h2 style={titleStyle} className="font-semibold tracking-wide uppercase">
            Our Services
          </h2>
          <hr style={lineStyle} />
        </Col>
      </Row>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

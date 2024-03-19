import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// Make sure to import the Bootstrap CSS in your index.js or App.js
// import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../Assets/web.png';
import Img2 from '../Assets/R.jpg';
import Img3 from '../Assets/Fb.jpg';
const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1...', image: Img1 },
  { id: 2, title: 'Project 2', description: 'Description of Project 2...', image: Img2 },
  { id: 3, title: 'Project 3', description: 'Description of Project 3...', image: Img3 },
  { id: 4, title: 'Project 4', description: 'Description of Project 4...', image: "" },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const titleStyle = {
    fontSize: '2.5rem', // Adjust the size as needed
    fontWeight: 'bold',
    margin: '0'
  };

  const lineStyle = {
    width: '50%', // Adjust the width as needed
    border: '0',
    borderBottom: '2px solid black',
    margin: '20px auto', // Center the line
  };

  const subTitleStyle = {
    fontSize: '2rem', // Adjust the size as needed for the subtitle
    fontWeight: 'bold',
    color: 'gray', // Adjust the color as needed
    marginTop: '0.5rem', // Space between the line and subtitle
  };

  const nextCards = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % projects.length);
  };

  const cardStyle = {
    borderRadius: '20px', // Adjust this value to match the border-radius in your design
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // This adds a subtle shadow effect
    borderColor: '#007bff', // This should be the color of the border you want
  };

  const imgStyle = {
    height: '200px', // Adjust according to your design
    objectFit: 'cover',
    borderTopLeftRadius: '20px', // Match this with the card border radius
    borderTopRightRadius: '20px', // Match this with the card border radius
  };


  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-12">
        <Col md={12} className="text-center">
          <h2 style={titleStyle} className="text-indigo-600 font-semibold tracking-wide uppercase">
            Portfolio
          </h2>
          <hr style={lineStyle} />
          <p style={subTitleStyle}>Our Recent Projects</p>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projects.slice(currentIndex, currentIndex + 3).map((project) => (
          <Col key={project.id}>
            <Card style={cardStyle}>
              <Card.Img variant="top" src={project.image} alt={project.title} style={imgStyle} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                {/* Description can be added here if needed */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-4">
        <Col className="text-center">
          <Button variant="outline-success" onClick={nextCards}>Next</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;

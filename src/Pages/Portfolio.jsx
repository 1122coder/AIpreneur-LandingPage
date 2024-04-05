import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// Ensure you have imported the Bootstrap CSS in your project entry file (e.g., index.js or App.js)
// import 'bootstrap/dist/css/bootstrap.min.css';
import Img1 from '../Assets/web.png';
import Img2 from '../Assets/R.jpg';
import Img3 from '../Assets/Fb.jpg';

const projects = [
  { id: 1, title: 'Webwork Website', description: 'Description of Project 1...', image: Img1 },
  { id: 2, title: 'Bone Fractured Detection Model', description: 'Description of Project 2...', image: Img2 },
  { id: 3, title: 'Echo App', description: 'Description of Project 3...', image: Img3 },
  { id: 4, title: 'File Manager App', description: 'Description of Project 4...', image: "" },
  { id: 5, title: 'Practical Pro Website', description: 'Description of Project 5...', image: "" },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) { // Only proceed if not hovering
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }
    }, 1000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [isHovering]); // Effect depends on isHovering state

  // Calculate the projects to display
  const displayedProjects = [];
  for (let i = 0; i < 3; i++) {
    displayedProjects.push(projects[(currentIndex + i) % projects.length]);
  }

  // Styles
  const containerStyle = {
    backgroundColor: '#76ABAE', // Background color for the Portfolio section
    width: '100%', // Ensure the container is full-width
    padding: '0', // Remove default padding if necessary
    height: '600px'
  };


  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0',
    color: '#FFFFFF', // Adjusted for better visibility on the new background
    paddingTop: '30px'
  };

  const lineStyle = {
    width: '50%',
    border: '0',
    borderBottom: '2px solid #FFFFFF', // Adjusted for visibility
    margin: '20px auto',
  };

  const subTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#F0F0F0', // Adjusted for better visibility
    marginTop: '0.5rem',
  };

  const cardStyle = {
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderColor: '#007bff',
    margin: '0 20px', // Increased margin for left and right
    padding: '20px', // Added padding inside the card for content
  };
  const imgStyle = {
    height: '200px',
    objectFit: 'cover',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
  };

  return (
    <Container fluid style={containerStyle} className="px-0"> {/* Added fluid and removed padding for full width */}
      <Row className="justify-content-center mb-12">
        <Col md={12} className="text-center">
          <h2 style={titleStyle} className="font-semibold tracking-wide uppercase">
            Portfolio
          </h2>
          <hr style={lineStyle} />
          <p style={subTitleStyle}>Our Recent Projects</p>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4"
           onMouseEnter={() => setIsHovering(true)}
           onMouseLeave={() => setIsHovering(false)}>
        {displayedProjects.map((project, index) => (
          <Col key={index}>
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
    </Container>
  );
};

export default Portfolio;

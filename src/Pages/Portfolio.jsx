import React, {useState, useEffect, useRef} from 'react';
import '../Style/Portfolio.css'; // Import the CSS file

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Development',
      description: 'Description of Project 1...',
      image: '../Assets/lion.png',
      category: 'Web Development',
      industry: 'PracticalProServices',
      services: 'Front-end and Back-end',
      caseStudyLink: '',
    },
    {
      id: 2,
      title: 'Machine Learning',
      description: 'Description of Project 2...',
      image: '../Assets/lion.png',
      category: 'CNN model',
      industry: 'Eziline Software House Pvt lmt',
      services: 'Classifier Development',
      caseStudyLink: 'link/to/case/study2',
    },
    {
      id: 3,
      title: 'Computer Vision and AI',
      description: 'Description of Project 3...',
      image: '../Assets/lion.png',
      category: 'Wild Animal Detection',
      industry: 'Eziline Software House',
      services: 'Data Collection, Annotation and Model development',
      caseStudyLink: 'link/to/case/study3',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of Project 4...',
      image: '../Assets/lion.png',
      category: 'Category D',
      industry: 'Industry D',
      services: 'Service D',
      caseStudyLink: 'link/to/case/study4',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description of Project 5...',
      image: '../Assets/lion.png',
      category: 'Category E',
      industry: 'Industry E',
      services: 'Service E',
      caseStudyLink: 'link/to/case/study5',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description of Project 6...',
      image: '../Assets/lion.png',
      category: 'Category F',
      industry: 'Industry F',
      services: 'Service F',
      caseStudyLink: 'link/to/case/study6',
    },
    // Add more project objects as needed...
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const cardRef = useRef(null);

  const nextProject = () => {
    setCurrentProject((prevProject) => (prevProject === projects.length - 1 ? 0 : prevProject + 1));
  };

  const prevProject = () => {
    setCurrentProject((prevProject) => (prevProject === 0 ? projects.length - 1 : prevProject - 1));
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    });

    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
      resizeObserver.observe(cardRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentProject]);

  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="carousel">
        <button className="backward-button" onClick={prevProject}>{'<'}</button>
        <div className="project-showcase" style={{ transform: `translateX(${-currentProject * cardWidth}px)` }}>
          {projects.map((project, index) => (
            <div className={index === currentProject ? 'project-card active' : 'project-card'} key={project.id} ref={cardRef}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <button className="forward-button" onClick={nextProject}>{'>'}</button>
      </div>
    </div>
  );
};

export default Portfolio;
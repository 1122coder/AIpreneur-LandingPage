import React, { useState, useEffect } from 'react';
import '../Style/Portfolio.css'; // Import the CSS file

import Img1 from '../Assets/web.png';
import Img2 from '../Assets/R.jpg';
import Img3 from '../Assets/Fb.jpg';
const Card = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [cards] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1...',
      image: Img1, // Replace with your image URL
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2...',
      image: Img2, // Replace with your image URL
    },
    {
      id: 3,
      title: 'Project 2',
      description: 'Description of Project 2...',
      image: Img3, // Replace with your image URL
    },
    // Add more cards as needed...
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [cards.length]);

  const prevCard = () => {
    setCurrentCard((prevCard) => (prevCard === 0 ? cards.length - 1 : prevCard - 1));
  };

  const nextCard = () => {
    setCurrentCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
  };

  return (
    <div className="card-container">
      <div className="portfolio-heading">Portfolio</div>
      <div className="services-text">
        Our services to our Honorable clients
        <hr className="horizontal-line" />
      </div>
      <div className="card-section">
        <button className="backward-button" onClick={prevCard}>{'<'}</button>
        <div className="card">
          <img src={cards[currentCard].image} alt={cards[currentCard].title} className="card-image" />
          <div className="card-details">
            <h3>{cards[currentCard].title}</h3>
            <p>{cards[currentCard].description}</p>
          </div>
        </div>
        <button className="forward-button" onClick={nextCard}>{'>'}</button>
      </div>
    </div>
  );
};

export default Card;
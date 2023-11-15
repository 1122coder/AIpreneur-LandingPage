// Navbar.jsx

import React, { useState } from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* This is the hamburger icon */}
      </div>
      {isMenuOpen && (
        <div className="navbar-links-mobile">
          <a href="#home" onClick={toggleMenu}>
            Home
          </a>
          <a href="#about" onClick={toggleMenu}>
            About
          </a>
          <a href="#services" onClick={toggleMenu}>
            Services
          </a>
          <a href="#portfolio" onClick={toggleMenu}>
            Portfolio
          </a>
          <a href="#contact" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;

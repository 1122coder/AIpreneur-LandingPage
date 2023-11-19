// Navbar.jsx

import React, { useState } from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#services" onClick={closeMenu}>
          Services
        </a>
        <a href="#portfolio" onClick={closeMenu}>
          Portfolio
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      {isMenuOpen && (
        <div className="navbar-links-mobile">
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#services" onClick={closeMenu}>
            Services
          </a>
          <a href="#portfolio" onClick={closeMenu}>
            Portfolio
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
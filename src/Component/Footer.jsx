// Footer.js
import React from 'react';
import { TextField, Button } from '@mui/material';
import '../Style/Footer.css'; // Import CSS file for styling
import companyLogo from '../Assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="left-section">
        <h3 className="subscribe-heading">Weekly Subscription to Prompt Mails</h3>
        <div className="logo-container">
          <img src={companyLogo} alt="Company Logo" className="logo-image" />
        </div>
        <TextField
          label="Enter your email"
          variant="outlined"
          className="email-input"
          InputProps={{ className: 'input-field' }}
        />
        <Button variant="contained" className="subscribe-button">
          Subscribe
        </Button>
      </div>
      <div className="links-container">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Services</h4>
        <h4>Portfolio</h4>
        <h4>Contact</h4>
      </div>
      <div className="company-details">
        <h4>Company Details:</h4>
        <p>Email: example@example.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123, Street Name, City</p>
      </div>
    </footer>

  );
};

export default Footer;

// SocialMediaIcons.jsx

import React from 'react';
import '../Style/SocialMediaIcons.css'; // Your CSS file for social media icons
import Twitter from '../Assets/twitter.png';
import Telegram from '../Assets/telegram.png';
import Whatsapp from '../Assets/whatsapp.jpeg';

const SocialMediaIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://twitter.com/Bytes2Threads" target="_blank" rel="noopener noreferrer">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <img src={Whatsapp} alt="Whatsapp" />
      </a>
      <a href="https://web.telegram.org/k/#@Fishakkilam" target="_blank" rel="noopener noreferrer">
        <img src={Telegram} alt="Telegram" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;

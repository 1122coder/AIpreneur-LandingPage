// SmoothScroll.jsx

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === 'A' && event.target.hash) {
        event.preventDefault();
        const targetElement = document.querySelector(event.target.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return null;
};

export default SmoothScroll;

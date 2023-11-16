import React from 'react';
import '../Style/AboutUs.css'; // Create a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1>Our Company</h1>
        <p>Crafting Solutions, Inspiring Innovation</p>
      </header>

      <section className="company-story">
        <h2>Our Story</h2>
        <p>
          Welcome to our journey! Founded with a passion for excellence, our company strives to make a positive impact by delivering top-notch solutions.
        </p>
        <p>
          From our humble beginnings to our latest achievements, we are dedicated to providing value and innovation to our customers.
        </p>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="team-member-1.jpg" alt="Team Member 1" />
          <div className="member-info">
            <h3>John Doe</h3>
            <p>Lead Developer</p>
            <p>
              Connect with me on{' '}
              <a href="https://linkedin.com/johndoe" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Add more team members as needed */}
      </section>

      <section className="value-proposition">
        <h2>Our Value Proposition</h2>
        <p>
          At our core, we are problem solvers. We exist to make your life easier by providing innovative solutions that address your unique challenges.
        </p>
      </section>

      <section className="testimonials-awards">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"Working with this team has been a game-changer for our business. Their dedication and expertise are unparalleled!"</p>
          <p>- Happy Client</p>
        </div>

        {/* Add more testimonials as needed */}

        <h2>Awards and Recognitions</h2>
        <p>We are proud to have received the following awards:</p>
        <ul>
          <li>Best Innovation Award 2022</li>
          {/* Add more awards as needed */}
        </ul>
      </section>

      <section className="call-to-action">
        <h2>Ready to Elevate Your Business?</h2>
        <p>Contact us today for a consultation and discover how we can help you achieve your goals.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default AboutUs;

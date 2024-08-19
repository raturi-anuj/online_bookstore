import React, { useState } from 'react';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback taken successfully!');
    navigate('/'); // Redirect to home page after the alert
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Your Feedback/Problem:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

import React from 'react';
import './Footer.css';
import { IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are a leading online bookstore offering a wide variety of books for all ages and tastes.
            Our mission is to provide the best reading experience for book lovers worldwide.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3>Kitabae</h3>
          <p>Subscribe to our bookstore to get the latest updates and offers.</p>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Kitabae. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

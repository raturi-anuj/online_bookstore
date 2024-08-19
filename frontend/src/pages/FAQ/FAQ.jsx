import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className="content-wrapper">
        <h1>Frequently Asked Questions</h1>

        <div className="faq-item">
          <h3>What is Kitabae?</h3>
          <p>Kitabae is an online bookstore offering a wide variety of books across several genres, catering to all book lovers.</p>
        </div>

        <div className="faq-item">
          <h3>How do I place an order?</h3>
          <p>Placing an order is simple. Browse through our collection, add books to your cart, and proceed to checkout.</p>
        </div>

        <div className="faq-item">
          <h3>What payment methods do you accept?</h3>
          <p>We accept all major credit/debit cards, net banking, and popular e-wallets.</p>
        </div>

        <div className="faq-item">
          <h3>Do you offer international shipping?</h3>
          <p>Currently, we ship only within India. Stay tuned for updates on international shipping.</p>
        </div>

        <div className="faq-item">
          <h3>How can I track my order?</h3>
          <p>Once your order is shipped, you will receive an email with the tracking details.</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

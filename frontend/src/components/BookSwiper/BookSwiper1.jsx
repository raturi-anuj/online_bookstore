import React, { useState, useEffect } from "react"; 
import { Box, IconButton, Typography, Link } from "@mui/material";
import {
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import "./BookSwiper1.css";

const BookSwiper1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookUrls, setBookUrls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/swiper_1/")
      .then((response) => response.json())
      .then((data) => setBookUrls(data));
  }, []);

  const handleNext = () => {
    if (currentIndex + 6 < bookUrls.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleAddToCart = (event, bookId) => {
    event.preventDefault(); // Prevent triggering the RouterLink navigation
  
    // Define the API endpoint for adding to the cart
    const endpoint = `http://localhost:8000/cart/add/`;
    
    // Make the API request to add the book to the cart
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Include token if using authentication
      },
      body: JSON.stringify({ bookId: bookId })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log(`Book with ID ${bookId} added to cart successfully.`);
          // Optionally, update UI or show a success message
        } else {
          console.error('Failed to add book to cart:', data.message);
        }
      })
      .catch(error => {
        console.error('Error adding book to cart:', error);
      });
  };

  const visibleBooks = bookUrls.slice(currentIndex, currentIndex + 6);

  return (
    <Box className="book-swiper">
      <Box className="swiper-header">
        <Typography variant="h6" className="swiper-title">
          Blockbuster deals
        </Typography>
        <Link href="/all-books" className="see-all-link">
          See all deals
        </Link>
      </Box>
      <div className="swiper-container">
        <IconButton className="prev-button" onClick={handlePrev}>
          <ArrowBackIosIcon />
        </IconButton>
        <div className="swiper-wrapper">
          {visibleBooks.map((book, index) => (
            <RouterLink
              key={index}
              to={`/book-description/${book.id}`}
              className="swiper-slide"
            >
              <img src={book.image_url} alt={`Book ${index + 1}`} />
              <div className="book-details">
                <Typography variant="subtitle2" className="book-discount">
                  {`${Math.floor(Math.random() * 50) + 10}% off`}
                </Typography>
                <Typography variant="caption" className="sale-label">
                  Great Freedom Sale
                </Typography>
                <Typography variant="body2" className="book-price">
                  ₹{(Math.random() * 1000).toFixed(2)}
                  <span className="book-mrp">
                    ₹{(Math.random() * 2000).toFixed(2)}
                  </span>
                </Typography>
                <Typography variant="body2" className="book-title">
                  {book.title}
                </Typography>
                <IconButton
                  className="add-to-cart"
                  onClick={(event) => handleAddToCart(event, book.id)}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </RouterLink>
          ))}
        </div>
        <IconButton className="next-button" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default BookSwiper1;

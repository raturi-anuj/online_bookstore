import React, { useState, useEffect } from "react"; // Add useEffect
import { Box, IconButton, Typography, Link } from "@mui/material";
import {
  ArrowBackIos as ArrowBackIosIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Add as AddIcon 
} from "@mui/icons-material";
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink for internal navigation
import "./BookSwiper.css";

const BookSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookUrls, setBookUrls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/swiper-book-urls/")
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
                <IconButton className="add-to-cart">
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

export default BookSwiper;

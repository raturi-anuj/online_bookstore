import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import axios from 'axios';
import '../../components/BookDescription/BookDescription.css'

const BooksPage = () => {
  const { category } = useParams(); // category will be one of "finance", "kids", "motivation", "mythology"
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/${category}/`);
        setBooks(response.data);
      } catch (error) {
        console.error(`Error fetching books for category ${category}:`, error);
      }
    };

    fetchBooks();
  }, [category]);

  return (
    <Box className="books-page-container">
      {books.map(book => (
        <Box key={book.id} className="book-description-container">
          <Box className="book-image-container">
            <img src={book.image_url} alt={book.title} className="book-image" />
          </Box>
          <Box className="book-details-container">
            <Typography variant="h4" className="book-title">{book.title}</Typography>
            <Typography variant="subtitle1" className="book-release-date">
              Released: {book.release_date}
            </Typography>
            <Typography variant="body2" className="book-reviews">
              {book.reviews} Reviews
            </Typography>
            <Typography variant="h6" className="book-price">
              ₹{book.price} <span className="book-discount">({book.discount}% off)</span>
            </Typography>
            <Typography variant="body2" className="book-mrp">
              M.R.P: ₹{book.mrp}
            </Typography>
            <Typography variant="body2" className="book-shipping-info">
              Ships within 10-12 Business Days. Free Shipping in India.
            </Typography>
            <Typography variant="body1" className="book-summary">
              {book.summary}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BooksPage;

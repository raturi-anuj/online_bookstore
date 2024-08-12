import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography, Rating, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import './BookDescription.css';

const BookDescription = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:8000/book-description/${id}`)
      .then((response) => response.json())
      .then((data) => setBookData(data));
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  if (!bookData) {
    return <div>Loading...</div>;
  }

  return (
    <Box className="book-description-container">
      <Box className="book-image-container">
        <img src={bookData.image_url} alt={bookData.title} className="book-image" />
      </Box>
        <Box className="book-details-container">
          <Typography variant="h4" className="book-title">{bookData.title}</Typography>
          <Typography variant="subtitle1" className="book-release-date">
            Released: {bookData.release_date}
          </Typography>
          <Rating value={bookData.rating} readOnly />
          <Typography variant="body2" className="book-reviews">
            {bookData.reviews} Reviews
          </Typography>
          <Typography variant="h6" className="book-price">
            ₹{bookData.price} <span className="book-discount">({bookData.discount}% off)</span>
          </Typography>
          <Typography variant="body2" className="book-mrp">
            M.R.P: ₹{bookData.mrp}
          </Typography>
          <Typography variant="body2" className="book-shipping-info">
            Ships within 10-12 Business Days. Free Shipping in India.
          </Typography>
          <Typography variant="body1" className="book-summary">
            {bookData.summary}
          </Typography>
        </Box>
        <Box className="book-actions-container">
          <FormControl className="quantity-select">
            <InputLabel id="quantity-label">Quantity</InputLabel>
            <Select
              labelId="quantity-label"
              value={quantity}
              onChange={handleQuantityChange}
              label="Quantity"
            >
              {[...Array(10).keys()].map((num) => (
                <MenuItem sx = {{paddingBottom : "0px", paddingTop : "0px"}} key={num + 1} value={num + 1}>
                  {num + 1}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" className="add-to-cart-button">
            Add to Cart
          </Button>
          <Button variant="contained" color="secondary" className="buy-now-button">
            Buy Now
          </Button>
        </Box>
    </Box>
  );
};

export default BookDescription;

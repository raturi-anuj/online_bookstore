import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './OverlayContainers.css';

const booksDiscount = [
  { title: 'Book Title 1', imgSrc: '/path/to/book1.jpg' },
  { title: 'Book Title 2', imgSrc: '/path/to/book2.jpg' },
  { title: 'Book Title 3', imgSrc: '/path/to/book3.jpg' },
  { title: 'Book Title 4', imgSrc: '/path/to/book4.jpg' },
];

const personalGrowthBooks = [
  { title: 'Growth Book 1', imgSrc: '/path/to/growth1.jpg' },
  { title: 'Growth Book 2', imgSrc: '/path/to/growth2.jpg' },
  { title: 'Growth Book 3', imgSrc: '/path/to/growth3.jpg' },
  { title: 'Growth Book 4', imgSrc: '/path/to/growth4.jpg' },
];

const bookmarks = [
  { title: 'Bookmark 1', imgSrc: '/path/to/bookmark1.jpg' },
  { title: 'Bookmark 2', imgSrc: '/path/to/bookmark2.jpg' },
  { title: 'Bookmark 3', imgSrc: '/path/to/bookmark3.jpg' },
  { title: 'Bookmark 4', imgSrc: '/path/to/bookmark4.jpg' },
];

const OverlayContainers = () => {
  return (
    <Box className="overlay-containers">
      <Grid container spacing={2} className="overlay-grid">
        <Grid item xs={4}>
          <Link to="/discount-books" className="overlay-link">
            <Box className="overlay-box">
              <Typography variant="h6">50% Discount Books</Typography>
              <Grid container spacing={1}>
                {booksDiscount.map((book, index) => (
                  <Grid item xs={6} key={index}>
                    <Box className="item-box">
                      <img src={book.imgSrc} alt={book.title} className="item-img" />
                      <Typography variant="body2" className="item-title">{book.title}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/personal-growth" className="overlay-link">
            <Box className="overlay-box">
              <Typography variant="h6">Personal Growth</Typography>
              <Grid container spacing={1}>
                {personalGrowthBooks.map((book, index) => (
                  <Grid item xs={6} key={index}>
                    <Box className="item-box">
                      <img src={book.imgSrc} alt={book.title} className="item-img" />
                      <Typography variant="body2" className="item-title">{book.title}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link to="/bookmarks" className="overlay-link">
            <Box className="overlay-box">
              <Typography variant="h6">Bookmarks</Typography>
              <Grid container spacing={1}>
                {bookmarks.map((bookmark, index) => (
                  <Grid item xs={6} key={index}>
                    <Box className="item-box">
                      <img src={bookmark.imgSrc} alt={bookmark.title} className="item-img" />
                      <Typography variant="body2" className="item-title">{bookmark.title}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OverlayContainers;

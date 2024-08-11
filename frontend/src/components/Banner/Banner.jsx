import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './Banner.css';
import OverlayContainers from '../OverlayContainers/OverlayContainers';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // Fetch banners from the server
    const fetchBanners = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/banners/');
        setBanners(response.data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    // Automatically switch to the next banner every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [banners]);

  const handleNext = () => {
    // Go to the next banner
    setCurrentIndex((currentIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    // Go to the previous banner
    setCurrentIndex((currentIndex - 1 + banners.length) % banners.length);
  };

  return (
    <Box data-testid="banner-container" className="banner-container">
      {banners.map((banner, index) => (
        <Link to={banner.id === 1 ? '/sale-50%' : banner.id === 2 ? '/allBooks' : '/childrenBooks'} key={banner.id}>
          <img
            src={banner.src}
            alt={`Banner ${banner.id}`}
            className={`banner ${index === currentIndex ? 'active' : ''}`}
          />
        </Link>
      ))}
      <div data-testid="prev-button" className="prev-button" onClick={handlePrev}>
        <ArrowBackIosIcon />
      </div>
      <div data-testid="next-button" className="next-button" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </div>
      <OverlayContainers/>
    </Box>
  );
};

export default Banner;
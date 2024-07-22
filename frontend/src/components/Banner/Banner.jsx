import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import OverlayContainers from '../OverlayContainers/OverlayContainers'; // Import the OverlayContainers component
import './Banner.css';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get('http://localhost:8000/banners/');
        setBanners(response.data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners]);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % banners.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + banners.length) % banners.length);
  };

  return (
    <Box className="banner-container">
      {banners.map((banner, index) => (
        <img
          key={banner.id}
          src={banner.src}
          alt={`Banner ${banner.id}`}
          className={`banner ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
      <div className="prev-button" onClick={handlePrev}>
        <ArrowBackIosIcon />
      </div>
      <div className="next-button" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </div>
      <OverlayContainers /> {/* Include the OverlayContainers component */}
    </Box>
  );
};

export default Banner;

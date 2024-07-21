import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { ArrowBackIos as ArrowBackIosIcon, ArrowForwardIos as ArrowForwardIosIcon } from '@mui/icons-material';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import './Banner.css';
import OverlayContainers from '../OverlayContainers/OverlayContainers';

const banners = [
  { id: 1, src: banner1 },
  { id: 2, src: banner2 },
  { id: 3, src: banner3 },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <OverlayContainers />
      <div className="prev-button" onClick={handlePrev}>
        <ArrowBackIosIcon />
      </div>
      <div className="next-button" onClick={handleNext}>
        <ArrowForwardIosIcon />
      </div>
    </Box>
  );
};

export default Banner;

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './BookSwiper.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getBooks } from '../../utils/api';

const BookSwiper = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getBooks();
        setBooks(data);
      } catch (error) {
        console.error('Failed to fetch books', error);
      }
    };

    fetchBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <div className="nextArrow">Next</div>,
    prevArrow: <div className="prevArrow">Prev</div>,
  };

  return (
    <div className="book-swiper">
      <h2>Blockbuster Deals</h2>
      <a href="#see-all" className="see-all-deals">See all deals</a>
      <Slider {...settings}>
        {books.map(book => (
          <div key={book.id} className="book-item">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookSwiper;

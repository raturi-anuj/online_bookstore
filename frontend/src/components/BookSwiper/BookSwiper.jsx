import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './BookSwiper.css';

const BookSwiper = () => {
  const [books, setBooks] = useState([]);
  const swiperRef = useRef(null);

  // Fetch books from backend
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/books'); // Adjust the URL if needed
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    
    fetchBooks();
  }, []);

  // Handle continuous scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.scrollBy({
          left: 200, // Adjust the scroll speed as needed
          behavior: 'smooth',
        });

        // If the end is reached, scroll back to the start
        if (swiperRef.current.scrollLeft + swiperRef.current.clientWidth >= swiperRef.current.scrollWidth) {
          swiperRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [books]);

  return (
    <div className="book-swiper-container">
      <div className="book-swiper" ref={swiperRef}>
        {books.map((book, index) => (
          <div key={index} className="book-item">
            <img src={book.imageUrl} alt={book.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSwiper;

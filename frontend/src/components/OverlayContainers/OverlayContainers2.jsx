import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './OverlayContainers2.css';

const OverlayContainers2 = () => {
  const [discountBooks, setDiscountBooks] = useState([]);
  const [personalGrowthBooks, setPersonalGrowthBooks] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const fetchDiscountBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/finance/');
        setDiscountBooks(response.data);
      } catch (error) {
        console.error('Error fetching discount books:', error);
      }
    };

    const fetchPersonalGrowthBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/kids/');
        setPersonalGrowthBooks(response.data);
      } catch (error) {
        console.error('Error fetching personal growth books:', error);
      }
    };

    const fetchBookmarks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/motivation/');
        setBookmarks(response.data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
    };

    const fetchComics = async () => {
      try {
        const response = await axios.get('http://localhost:8000/mythology/');
        setComics(response.data);
      } catch (error) {
        console.error('Error fetching comics:', error);
      }
    };

    fetchDiscountBooks();
    fetchPersonalGrowthBooks();
    fetchBookmarks();
    fetchComics();
  }, []);

  return (
    <div className="overlay-container2">
      <div className="overlay-box2">
        <h2>Finance</h2>
        <div className="book-list2">
          {discountBooks.map(book => (
            <Link key={book.id} to={`/book-description/${book.id}`}>
              <img src={book.image_url} alt={book.title} />
            </Link>
          ))}
        </div>
        <Link className="see-all" to="/books/finance">See all offers</Link>
      </div>
      <div className="overlay-box2">
        <h2>Kids</h2>
        <div className="book-list2">
          {personalGrowthBooks.map(book => (
            <Link key={book.id} to={`/book-description/${book.id}`}>
              <img src={book.image_url} alt={book.title} />
            </Link>
          ))}
        </div>
        <Link className="see-all" to="/books/kids">See all offers</Link>
      </div>
      <div className="overlay-box2">
        <h2>Motivation</h2>
        <div className="book-list2">
          {bookmarks.map(bookmark => (
            <Link key={bookmark.id} to={`/book-description/${bookmark.id}`}>
              <img src={bookmark.image_url} alt={bookmark.title} />
            </Link>
          ))}
        </div>
        <Link className="see-all" to="/books/motivation">See all offers</Link>
      </div>
      <div className="overlay-box2">
        <h2>Mythology</h2>
        <div className="book-list2">
          {comics.map(book => (
            <Link key={book.id} to={`/book-description/${book.id}`}>
              <img src={book.image_url} alt={book.title} />
            </Link>
          ))}
        </div>
        <Link className="see-all" to="/books/mythology">See all offers</Link>
      </div>
    </div>
  );
};

export default OverlayContainers2;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OverlayContainers1.css';

const OverlayContainers1 = () => {
  const [discountBooks, setDiscountBooks] = useState([]);
  const [personalGrowthBooks, setPersonalGrowthBooks] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [comics, setComics] = useState([]);


  useEffect(() => {
    const fetchDiscountBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/discount-books/');
        setDiscountBooks(response.data);
      } catch (error) {
        console.error('Error fetching discount books:', error);
      }
    };

    const fetchPersonalGrowthBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/personal-growth-books/');
        setPersonalGrowthBooks(response.data);
      } catch (error) {
        console.error('Error fetching personal growth books:', error);
      }
    };

    const fetchBookmarks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/bookmarks/');
        setBookmarks(response.data);
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
      }
    };

    const fetchComics = async () => {
      try {
        const response = await axios.get('http://localhost:8000/comics/');
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
    <div className="overlay-container">
      <div className="overlay-box">
        <h2>50% Discount </h2>
        <div className="book-list">
          {discountBooks.map(book => (
            <a key={book.id} href={`/discount-books/${book.id}`}>
              <img src={book.image_url} alt={book.title} />
            </a>
          ))}
        </div>
        <a className="see-all" href="/discount-books">See all offers</a>
      </div>
      <div className="overlay-box">
        <h2>Personal Growth</h2>
        <div className="book-list">
          {personalGrowthBooks.map(book => (
            <a key={book.id} href={`/personal-growth-books/${book.id}`}>
              <img src={book.image_url} alt={book.title} />
            </a>
          ))}
        </div>
        <a className="see-all" href="/personal-growth-books">See all offers</a>
      </div>
      <div className="overlay-box">
        <h2>Bookmarks</h2>
        <div className="book-list">
          {bookmarks.map(bookmark => (
            <a key={bookmark.id} href={`/bookmarks/${bookmark.id}`}>
              <img src={bookmark.image_url} alt={bookmark.title} />
            </a>
          ))}
        </div>
        <a className="see-all" href="/bookmarks">See all offers</a>
      </div>
      <div className="overlay-box">
        <h2>Comics </h2>
        <div className="book-list">
          {discountBooks.map(book => (
            <a key={book.id} href={`/comics/${book.id}`}>
              <img src={book.image_url} alt={book.title} />
            </a>
          ))}
        </div>
        <a className="see-all" href="/comics">See all offers</a>
      </div>
    </div>
  );
};

export default OverlayContainers1;


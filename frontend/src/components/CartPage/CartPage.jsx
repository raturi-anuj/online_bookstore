import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';
import './CartPage.css';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [books, setBooks] = useState({});

  useEffect(() => {
    const cart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];
    setCartItems(cart);

    // Fetch details for each book in the cart
    Promise.all(
      cart.map(item =>
        fetch(`http://localhost:8000/book-description/${item.book_id}`)
          .then(response => response.json())
          .then(data => ({ ...item, ...data }))
          .catch(error => {
            console.error('Error fetching book data:', error);
            return item; // Return the item even if the fetch fails
          })
      )
    ).then(results => {
      const booksMap = results.reduce((acc, book) => {
        acc[book.id] = book;
        return acc;
      }, {});
      setBooks(booksMap);
    });
  }, []);

  const handleQuantityChange = (bookId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.book_id === bookId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    Cookies.set('cart', JSON.stringify(updatedCart), { expires: 7 });
  };

  return (
    <Box className="cart-page-container">
      <Typography variant="h4" className="cart-heading">Your Bag ({cartItems.length} items)</Typography>
      <TableContainer component={Paper} className="cart-table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map(item => {
              const book = books[item.book_id];
              if (!book) return null;

              const total = book.price * item.quantity;

              return (
                <TableRow key={item.book_id}>
                  <TableCell className="product-cell">
                    <Typography variant="body2" className="cart-book-title">{book.title}</Typography>
                    <img src={book.image_url} alt={book.title} className="cart-book-image" />
                  </TableCell>
                  <TableCell>₹{book.price}</TableCell>
                  <TableCell>
                    <Select
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.book_id, e.target.value)}
                      className="quantity-select"
                    >
                      {[...Array(10).keys()].map(num => (
                        <MenuItem key={num + 1} value={num + 1}>
                          {num + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>₹{total}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" className="cart-total">
        Total: ₹{cartItems.reduce((total, item) => {
          const book = books[item.book_id];
          return total + (book ? book.price * item.quantity : 0);
        }, 0)}
      </Typography>
      <Button variant="contained" color="primary" className="checkout-button">Checkout</Button>
    </Box>
  );
};

export default CartPage;

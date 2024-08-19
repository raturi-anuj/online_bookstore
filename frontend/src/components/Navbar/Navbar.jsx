import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, TextField, Menu, MenuItem } from '@mui/material';
import { Menu as MenuIcon, LocationOn as LocationOnIcon, Search as SearchIcon, Favorite as FavoriteIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import Tooltip from '@mui/material/Tooltip';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * Represents the navigation bar component of the website.
 * 
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
const Navbar = () => {
  // Define state to hold the cart count
  const [cartCount, setCartCount] = useState(0);

  // State for dropdown menu
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to handle focus
  const handleFocus = () => {
      document.body.classList.add('faded');
  };

  // Function to handle blur
  const handleBlur = () => {
      document.body.classList.remove('faded');
  };

  // Function to fetch cart count from the API
  const fetchCartCount = async () => {
      try {
          const response = await fetch('/cart/');
          if (response.ok) {
              const data = await response.json();
              setCartCount(data.item_count);
          } else {
              console.error('Failed to fetch cart count');
          }
      } catch (error) {
          console.error('Error fetching cart count:', error);
      }
  };

  useEffect(() => {
      fetchCartCount();
  }, []);

  // Function to handle menu click
  const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  // Function to handle menu close
  const handleMenuClose = () => {
      setAnchorEl(null);
  };

  return (
      <AppBar id="Navbar" data-testid="Navbar" position="fixed" className="AppBar" sx={{ bgcolor: "black" }}>
          <Toolbar className="Toolbar">
              <IconButton color="inherit" aria-label="menu" className="MenuIcon" onClick={handleMenuClick}>
                  <MenuIcon />
              </IconButton>
              <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  className="DropdownMenu"
              >
                  <MenuItem onClick={handleMenuClose} component={Link} to="/">Home</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/about">About Us</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact Us</MenuItem>
                  <MenuItem disabled>Genres</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/category/personal-growth">Personal Growth</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/category/mythology">Mythology</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/category/motivation">Motivation</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/category/kids">Kids</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/category/finance">Finance</MenuItem>
                  <MenuItem disabled>Other Categories</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/bookmarks">Bookmarks</MenuItem>
                  <MenuItem onClick={handleMenuClose} component={Link} to="/comics">Comics</MenuItem>
              </Menu>
              <Link id="Logo" data-testid="Logo" to="/" className="LogoLink">
                  <img src={logo} alt="Kitabae" className="Logo HoverButton" />
              </Link>
              <Box className="AddressButton HoverButton">
                  <LocationOnIcon id="AddressIcon" data-testid="AddressIcon" className="AddressButtonIcon" />
                  <Button color="inherit" className="AddressText">
                      <span>Deliver to</span>
                      <span>Location</span>
                  </Button>
              </Box>

              {/* Material ui Autocomplete search Bar */}
              <Autocomplete
                  freeSolo
                  options={[]}
                  renderInput={(params) => (
                      <TextField
                          {...params}
                          placeholder="Search"
                          InputProps={{
                              ...params.InputProps,
                              startAdornment: <SearchIcon id="SearchIcon" data-testid="SearchIcon" position="start" />,
                          }}
                          variant="outlined"
                          size="small"
                          className="SearchBar"
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          sx={{ display: 'flex', alignItems: 'center' }}
                      />
                  )}
                  className="Autocomplete"
              />
              <IconButton id="FavoriteIcon" data-testid="FavoriteIcon" color="inherit" className="IconButton" sx={{ border: "1px solid transparent" }} component={Link} to="/wishlist">
                  <FavoriteIcon id="FavoriteIcon1" data-testid="FavoriteIcon1" />
              </IconButton>
              <IconButton id="ShoppingCartIcon" data-testid="ShoppingCartIcon" color="inherit" className="IconButton" sx={{ border: "1px solid transparent" }} component={Link} to="/cart">
                  <ShoppingCartIcon id="ShoppingCartIcon1" data-testid="ShoppingCartIcon1" />
                  {cartCount > 0 && (
                      <span className="CartCount">{cartCount}</span>
                  )}
              </IconButton>
              <Tooltip arrow title="Sign in">
                  <IconButton id="AccountCircleIcon" data-testid="AccountCircleIcon" color="inherit" fontSize="large" className="IconButton" sx={{ border: "1px solid transparent" }} component={Link} to="/signin">
                      <AccountCircleIcon id="AccountCircleIcon1" data-testid="AccountCircleIcon1" />
                  </IconButton>
              </Tooltip>
          </Toolbar>
      </AppBar>
  );
};

export default Navbar;

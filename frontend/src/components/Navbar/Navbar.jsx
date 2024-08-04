import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, TextField } from '@mui/material';
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
    const handleFocus = () => {
        document.body.classList.add('faded');
    };

    const handleBlur = () => {
        document.body.classList.remove('faded');
    };

    return (
      <AppBar id="Navbar" data-testid="Navbar" position="fixed" className="AppBar" sx= {{bgcolor: "black"}}>
      <Toolbar className="Toolbar">
        <IconButton  color="inherit" aria-label="menu" className="MenuIcon">
        <MenuIcon/>
        </IconButton>
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
          /* Search Bar- custom styling */
          variant="outlined"
          size="small"
          className="SearchBar"
          onFocus={handleFocus}
          onBlur={handleBlur}
          sx={{ display: 'flex', alignItems: 'center' }}
          />
        )} className="Autocomplete"/>
        <IconButton id="FavoriteIcon" data-testid="FavoriteIcon" color="inherit" className="IconButton" sx={{border: "1px solid transparent"}} component ={Link} to="/wishlist">
          <FavoriteIcon  id="FavoriteIcon1" data-testid="FavoriteIcon1"/>
        </IconButton>
        <IconButton id="ShoppingCartIcon" data-testid="ShoppingCartIcon" color="inherit" className="IconButton" sx={{border: "1px solid transparent"}} component ={Link} to="/cart">
          <ShoppingCartIcon id="ShoppingCartIcon1" data-testid="ShoppingCartIcon1"/>
        </IconButton>
        <Tooltip arrow title="Sign in">
          <IconButton id="AccountCircleIcon" data-testid="AccountCircleIcon" color="inherit" fontSize="large" className="IconButton" sx={{border: "1px solid transparent"}} component={Link} to="/signin">
          <AccountCircleIcon id="AccountCircleIcon1" data-testid="AccountCircleIcon1"/>
          </IconButton>
        </Tooltip>
      </Toolbar>
      </AppBar>   
    );
};

export default Navbar;
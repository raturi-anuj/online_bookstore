import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, TextField } from '@mui/material';
import { Menu as MenuIcon, LocationOn as LocationOnIcon, Search as SearchIcon, Favorite as FavoriteIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    const handleFocus = () => {
        document.body.classList.add('faded');
    };

    const handleBlur = () => {
        document.body.classList.remove('faded');
    };

    return (
        <AppBar position="fixed" className="AppBar">
            <Toolbar className="Toolbar">
                <IconButton  color="inherit" aria-label="menu" className="MenuIcon">
                    <MenuIcon />
                </IconButton>
                <Link to="/" className="LogoLink">
                    <img src={logo} alt="Bookify Logo" className="Logo HoverButton" />
                </Link>
                <Box className="AddressButton HoverButton">
                    <LocationOnIcon className="AddressButtonIcon" />
                    <Button color="inherit" className="AddressText">
                        <span>Delivering to</span>
                        <span>Location</span>
                    </Button>
                </Box>
                <Autocomplete
                    freeSolo
                    options={[]}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            placeholder="Search"
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: <SearchIcon position="start" />,
                            }}
                            variant="outlined"
                            size="small"
                            className="SearchBar"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    )}
                    className="Autocomplete"/>
                    <IconButton color="inherit" className="IconButton" sx={{border: "1px solid transparent"}} component ={Link} to="/wishlist">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton color="inherit" className="IconButton" sx={{border: "1px solid transparent"}} component ={Link} to="/cart">
                        <ShoppingCartIcon />
                    </IconButton>
                    <Button color="inherit" startIcon={<AccountCircleIcon />} className="LoginButton" sx={{border: "1px solid transparent"}} component={Link} to="/signin">
                        Sign in
                    </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

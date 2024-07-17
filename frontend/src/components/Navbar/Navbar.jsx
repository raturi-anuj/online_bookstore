import React from 'react';
import './Navbar.css';
import { AppBar, Toolbar, IconButton, Button, Box, TextField } from '@mui/material';
import { Menu as MenuIcon, LocationOn as LocationOnIcon, Search as SearchIcon, Favorite as FavoriteIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const handleFocus = () => {
        document.body.classList.add('faded');
    };

    const handleBlur = () => {
        document.body.classList.remove('faded');
    };

    return (
        <AppBar position="fixed" className="AppBar" style={{ backgroundColor: '#000000' }}>
            <Toolbar className="Toolbar">
                <IconButton edge="start" color="inherit" aria-label="menu" className="HoverButton">
                    <MenuIcon />
                </IconButton>
                <Link to="/" className="LogoLink">
                    <img src={logo} alt="Bookify Logo" className="Logo HoverButton" />
                </Link>
                <Box className="AddressButton HoverButton">
                    <LocationOnIcon className="AddressButtonIcon" />
                    <Button
                        color="inherit"
                        className="AddressText"
                    >
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
                            className="SearchInput"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    )}
                    className="Autocomplete"
                /><div className="WishList">
                    <IconButton color="inherit" className="IconButton HoverButton" component ={Link} to="/wishlist">
                        <FavoriteIcon />
                    </IconButton>
                </div>
                <div className="Cart">
                    <IconButton color="inherit" className="IconButton HoverButton" component ={Link} to="/cart">
                        <ShoppingCartIcon />
                    </IconButton>
                </div>
                <div className="Profile">
                    <Button color="inherit" startIcon={<AccountCircleIcon />} className="LoginButton HoverButton" component={Link} to="/signin">
                        Sign in
                    </Button>
                </div>
                
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;

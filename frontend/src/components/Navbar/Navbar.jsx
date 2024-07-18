import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Box, TextField } from '@mui/material';
import { Menu as MenuIcon, LocationOn as LocationOnIcon, Search as SearchIcon, Favorite as FavoriteIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';
import Tooltip from '@mui/material/Tooltip';
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
        <AppBar position="fixed" className="AppBar" sx= {{bgcolor: "#232f3e"}}>
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
                        <span>Deliver to</span>
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
                            sx={{ display: 'flex', alignItems: 'center' }}
                        />
                    )} className="Autocomplete"/>
                    <IconButton color="inherit" className="IconButton" sx={{border: "1px solid transparent"}} component ={Link} to="/wishlist">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton color="inherit" className="IconButton" sx={{border: "1px solid transparent"}} component ={Link} to="/cart">
                        <ShoppingCartIcon />
                    </IconButton>
                    <Tooltip arrow title="Sign in">
                        <IconButton color="inherit" fontSize="large" className="IconButton" sx={{border: "1px solid transparent"}} component={Link} to="/signin">
                            <AccountCircleIcon />
                        </IconButton>
                    </Tooltip>
            </Toolbar>
        </AppBar>   
    );
};

export default Navbar;
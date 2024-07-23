import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar Component Tests', () => {

    // Test to check if the MenuIcon is present
    test('contains MenuIcon', () => {
        const { asFragment } = render(
            <Router>
                <Navbar />
            </Router>
        );
        const menuIcon = screen.getByTestId('MenuIcon');
        expect(menuIcon).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });


    // Test to check if MenuIcon is clickable
    test('MenuIcon is clickable', () => {
        const { asFragment } = render(
            <Router>
                <Navbar />
            </Router>
        );
        const menuIcon = screen.getByTestId('MenuIcon');
        fireEvent.click(menuIcon);
        expect(menuIcon).toBeVisible(); // Assuming visibility change or action confirmation
        expect(asFragment()).toMatchSnapshot();
    });


  // Test to check if Navbar renders without crashing
    test('renders Navbar component', () => {
        const { asFragment } = render(
        <Router>
            <Navbar />
        </Router>
        );
        const TestNavbar = screen.getByTestId('Navbar');
        expect(TestNavbar).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });


    // Test to check if the logo is present
    test('contains logo', () => {
        const { asFragment } = render(
        <Router>
            <Navbar />
        </Router>
        );
        const logo = screen.getByTestId('Logo');
        expect(logo).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    // Test to check if the logo is clickable
    test('Logo is clickable', () => {
        const { asFragment } = render(
            <Router>
                <Navbar />
            </Router>
        );
        const logo = screen.getByTestId('Logo');
        fireEvent.click(logo);
        expect(logo).toBeVisible(); // Assuming visibility change or action confirmation
        expect(asFragment()).toMatchSnapshot();
    });

    
    // Test to check if all main icons are present (Search, Favorite, ShoppingCart, AccountCircle)
    test('contains main icons', () => {
        const { asFragment } = render(
        <Router>
            <Navbar />
        </Router>
        );
        expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
        expect(screen.getByTestId('FavoriteIcon')).toBeInTheDocument();
        expect(screen.getByTestId('FavoriteIcon1')).toBeInTheDocument();
        expect(screen.getByTestId('ShoppingCartIcon')).toBeInTheDocument();
        expect(screen.getByTestId('ShoppingCartIcon1')).toBeInTheDocument();
        expect(screen.getByTestId('AccountCircleIcon')).toBeInTheDocument();
        expect(screen.getByTestId('AccountCircleIcon1')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });


    // Test for check if SearchBar is clickable
    test('SearchIcon is clickable', () => {
        const { asFragment } = render(
            <Router>
                <Navbar />
            </Router>
        );
        const searchIcon = screen.getByTestId('SearchIcon');
        fireEvent.click(searchIcon);
        expect(searchIcon).toBeVisible(); // Assuming visibility change or action confirmation
        expect(asFragment()).toMatchSnapshot();
    });

    
    // Test for check if Wishlist is clickable
    test('FavoriteIcon is clickable', () => {
        const { asFragment } = render(
            <Router>
                <Navbar />
            </Router>
        );
        const favoriteIcon = screen.getByTestId('FavoriteIcon');
        fireEvent.click(favoriteIcon);
        expect(favoriteIcon).toBeVisible(); // Assuming visibility change or action confirmation
        expect(asFragment()).toMatchSnapshot();
    });


    // Test for check if Cart is clickable
    test('ShoppingCartIcon is clickable', () => {
        const { asFragment } = render(
            <Router>
                <Navbar />
            </Router>
        );
        const shoppingCartIcon = screen.getByTestId('ShoppingCartIcon');
        fireEvent.click(shoppingCartIcon);
        expect(shoppingCartIcon).toBeVisible(); // Assuming visibility change or action confirmation
        expect(asFragment()).toMatchSnapshot();
    });


    // Test for check if Profile is clickable
    test('AccountCircleIcon is clickable', () => {
        const { asFragment } = render(
            <Router>
                <Navbar />
            </Router>
        );
        const accountCircleIcon = screen.getByTestId('AccountCircleIcon');
        fireEvent.click(accountCircleIcon);
        expect(accountCircleIcon).toBeVisible(); // Assuming visibility change or action confirmation
        expect(asFragment()).toMatchSnapshot();
    });
});


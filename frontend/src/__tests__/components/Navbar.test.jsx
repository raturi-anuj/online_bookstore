import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../../components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar Component Tests', () => {
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
});
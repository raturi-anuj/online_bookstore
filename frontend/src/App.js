import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import OverlayContainers1 from './components/OverlayContainers/OverlayContainers1';
import OverlayContainers2 from './components/OverlayContainers/OverlayContainers2';
import BookSwiper1 from './components/BookSwiper/BookSwiper1';
import BookSwiper2 from './components/BookSwiper/BookSwiper2';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ForgotPassword from './components/Auth/ForgotPassword';
import BookDescription from './components/BookDescription/BookDescription';
import Cart from './components/CartPage/CartPage'; 
import Footer from './components/Footer/Footer';
import AboutUs from './pages/AboutUs/AboutUs';
import FAQ from './pages/FAQ/FAQ';
import ContactUs from './pages/ContactUs/ContactUs';
import BooksPage from './components/BookPage/BookPage';
import './App.css';



function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <OverlayContainers1 />
            <BookSwiper1 />
            <BookSwiper2 />
            <OverlayContainers2 />
            <Footer />
          </>
        } />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword mobileNumber="1234567890" />} />
        <Route path="/book-description/:id" element={<BookDescription />} />
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/books/:category" element={<BooksPage />} />
      </Routes>
    </div>
  );
}

export default App;

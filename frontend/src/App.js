import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import BookSwiper from './components/BookSwiper/BookSwiper';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ForgotPassword from './components/Auth/ForgotPassword';
import BookDescription from './components/BookDescription/BookDescription'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <BookSwiper />
          </>
        } />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword mobileNumber="1234567890" />} />
        <Route path="/book-description/:id" element={<BookDescription />} /> 
      </Routes>
    </div>
  );
}

export default App;

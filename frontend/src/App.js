import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Update imports
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import ForgotPassword from './components/Auth/ForgotPassword';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} /> 
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/forgot-password" element={<ForgotPassword mobileNumber="1234567890" />} /> 
      </Routes>
    </div>
  );
}

export default App;

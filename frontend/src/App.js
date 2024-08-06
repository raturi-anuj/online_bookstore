import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Auth from './components/Auth/Auth'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/signin" element={<Auth />} /> 
      </Routes>
    </div>
  );
}

export default App;

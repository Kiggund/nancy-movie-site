import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Toggle from './Toggle';
import './App.css'; // Make sure to create and import your CSS file
import { Router, Route, Routes } from 'react-router-dom';
import SignupPage from './SignupPage';
import Login from './Login';
import MoviePage from './MoviePage';
import MovieList from './MovieList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
        <div className="content-container">
          <Toggle />
        </div>
          <Routes>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movielist" element={<MovieList />} />
          </Routes>
    </div>
  );
}

export default App;
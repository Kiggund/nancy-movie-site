import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import FeaturedContent from './FeaturedContent';
import MovieList from './MovieList';
import './App.css'; // Make sure to create and import your CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="container">
        <div className="content-container">
          <FeaturedContent />
          <MovieList />
        </div>
      </div>
    </div>
  );
}

export default App;
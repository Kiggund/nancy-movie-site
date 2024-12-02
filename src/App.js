import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MovieList from './MovieList';
import Toggle from './Toggle';
import './App.css'; // Make sure to create and import your CSS file

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
        <div className="content-container">
          <Toggle />
        </div>
    </div>
  );
}

export default App;
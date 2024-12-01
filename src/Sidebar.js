import React from 'react';
import './App.css'; // Make sure to create and import your CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">Home</li>
        <li className="sidebar-item">New Releases</li>
        <li className="sidebar-item">Popular</li>
        <li className="sidebar-item">Recommended</li>
      </ul>
    </div>
  );
};

export default Sidebar;
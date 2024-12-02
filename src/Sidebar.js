import React from 'react';
import './App.css'; // Make sure to create and import your CSS file

const Sidebar = () => {
  return (
    <div class="sidebar">
      <i class="left-menu-icon fas fa-search" alt="search"></i>
      <i class="left-menu-icon fas fa-home" alt="home"></i>
      <i class="left-menu-icon fas fa-users" alt="users"></i>
      <i class="left-menu-icon fas fa-bookmark" alt="bookmark"></i>
      <i class="left-menu-icon fas fa-tv" alt="tv"></i>
      <i class="left-menu-icon fas fa-hourglass-start" alt="fa-hourglass-start"></i>
      <i class="left-menu-icon fas fa-shopping-cart" alt="shopping-cart"></i>
  </div>
  );
};

export default Sidebar;
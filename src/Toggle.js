// eslint-disable-next-line
import React, { useEffect } from 'react';
import './App.css';

const Toggle = () => {
  useEffect(() => {
    const ball = document.querySelector('.toggle-ball');
    const items = document.querySelectorAll(
      '.container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle'
    );

    const handleToggle = () => {
      items.forEach((item) => {
        item.classList.toggle('active');
      });
      ball.classList.toggle('active');
    };

    ball.addEventListener('click', handleToggle);

    // Cleanup event listener on component unmount
    return () => {
      ball.removeEventListener('click', handleToggle);
    };
  }, []);

};

export default Toggle;
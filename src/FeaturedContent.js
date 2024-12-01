import React from 'react';
import './App.css'; // Make sure to create and import your CSS file

const FeaturedContent = () => {
  return (
    <div className="featured-content" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0), #151515), url('images/32.jpg')" }}>
      <img className="featured-title" src="images/f-t-2.png" alt="Featured Title" />
      <p className="featured-desc">
        When strange, supernatural murders suddenly become the talk of a peaceful town, two detectives must solve a deadly game. But will the myth of this game reveal secrets too close to home.
      </p>
      <button className="featured-button">WATCH</button>
    </div>
  );
};

export default FeaturedContent;
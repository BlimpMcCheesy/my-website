import React from 'react';
import './Home.css';
import meImage from '../assets/me.png';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src={meImage} alt="Kyle Whitman" className="home-image" />
        <div className="home-text">
          <h1 className="home-title">Hi, I'm Kyle Whitman</h1>
          <p className="home-intro">
            Welcome to my personal portfolio! I’m a passionate developer dedicated to crafting
            beautiful, functional web experiences. Here you'll find some of my projects, skills,
            and more about me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

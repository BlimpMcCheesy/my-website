import React from 'react';
import './Home.css';
import meImage from '../assets/me.png';
import ProjectPreview from './ProjectPreview';
import { Link } from 'react-router-dom'; // assuming you use react-router

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <img src={meImage} alt="Kyle Whitman" className="home-image" />
          <div className="home-text">
            <h1 className="home-title">Hi, I'm Kyle Whitman</h1>
            <p className="home-intro">
              Welcome to my personal portfolio! I'm a passionate developer dedicated to crafting
              beautiful, functional web experiences. Here you'll find some of my projects, skills,
              and more about me.
            </p>
          </div>
        </div>
      </div>

      <ProjectPreview />

      <div className="home-footer-row">
        <div className="footer-left">
          <p>Want to learn more about me?</p>
          <Link to="/about" className="footer-button">About Me</Link>
        </div>
        <div className="footer-right">
          <p>Interested in working together? Let's connect.</p>
          <Link to="/contact" className="footer-button">Contact</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
import React from 'react';
import './Home.css';
import meImage from '../assets/me.webp';
import ProjectPreview from './ProjectPreview';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Import resume files
import resumePreview from '../assets/resumePreview.webp';
import resumePDF from '../assets/Kyle_Whitman_Resume.pdf';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <LazyLoadImage src={meImage} alt="Kyle Whitman" className="home-image" effect="blur" />
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

      {/* Resume Section */}
      <div className="resume-section">
        <div className="resume-text">
          <h2>Check Out My Resume</h2>
          <p>
            If you're interested in learning more about my professional experience, you can preview 
            my resume here. Click below to view the full PDF version.
          </p>
          <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="footer-button">
            View Resume
          </a>
        </div>
        <div className="resume-image-container">
          <a href={resumePDF} target="_blank" rel="noopener noreferrer">
            <LazyLoadImage src={resumePreview} alt="Resume Preview" className="resume-image" effect="blur" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;

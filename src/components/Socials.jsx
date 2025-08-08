import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Socials.css';

function Socials() {
  return (
    <div className="socials-container">
      <a href="https://github.com/BlimpMcCheesy" className="social-button" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/kyle-whitman1" className="social-button" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}

export default Socials;

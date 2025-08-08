// src/components/FooterSocials.jsx
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import './FooterSocials.css';

function FooterSocials() {
  return (
    <div className="footer-socials-container">
      <a href="https://github.com/BlimpMcheesy" className="footer-social-button" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/in/kyle-whitman1" className="footer-social-button" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://facebook.com/kyle.whitman.336" className="footer-social-button" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <FaFacebook size={24} />
      </a>
      <a href="https://instagram.com/kewllkyle" className="footer-social-button" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={24} />
      </a>
    </div>
  );
}

export default FooterSocials;

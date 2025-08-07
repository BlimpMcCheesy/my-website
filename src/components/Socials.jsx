// src/components/Socials.jsx
import React from 'react';
import './Socials.css';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/BlimpMcCheesy' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/kyle-whitman1' },
];

function Socials() {
  return (
    <div className="socials-container">
      {socialLinks.map(social => (
        <a 
          key={social.name} 
          href={social.url}
          className="social-button"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
}

export default Socials;
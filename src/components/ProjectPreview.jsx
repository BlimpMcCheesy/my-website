import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectPreview.css';
import chessImage from '../assets/chess.png';
import blackjackImage from '../assets/blackjack.png';
import mywebsiteImage from '../assets/mywebsite.png';

const ProjectPreview = () => {
  // A smaller, curated list of projects for the home page
  const previewProjects = [
    {
      title: 'Perosonilized Chess App',
      description: 'A personal project of mine to enhnace my chess skills using AI to anylisis my play style and give me tips.',
      imageUrl: chessImage,
      liveUrl: '#',
      githubUrl: 'https://github.com/BlimpMcCheesy/Personilized_Chess',
    },
    {
      title: 'Blackjack Bootcamp',
      description: 'A project I did for my senior year at UCF, it teaches users blackjack. Simple web app deployed using AWS.',
      imageUrl: blackjackImage,
      liveUrl: 'http://blackjackbootcamp.live/',
      githubUrl: 'https://github.com/BlimpMcCheesy/FlashBlackjack',
    },
    {
      title: 'This website',
      description: 'My first peronal site using vite + react and deployed using AWS. It\'s fast, lightweight, and a great starting point for my future projects.',
      imageUrl: mywebsiteImage,
      liveUrl: 'http://kylewhitman.app',
      githubUrl: 'https://github.com/BlimpMcCheesy/my-website',
    },
  ];

  return (
    <section className="project-preview-section">
      <h2 className="project-preview-title">Recent Projects</h2>
      <div className="project-preview-grid">
        {previewProjects.map((project, index) => (
          <div className="project-card-preview" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description-preview">{project.description}</p>
              <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link preview">
                  Live Demo
                </a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link preview">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/projects" className="modern-button">
        View All Projects
      </Link>
    </section>
  );
};

export default ProjectPreview;
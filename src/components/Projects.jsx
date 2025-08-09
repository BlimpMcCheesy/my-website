import React from 'react';
import './Projects.css';
import chessImage from '../assets/chess.png';
import blackjackImage from '../assets/blackjack.png';
import mywebsiteImage from '../assets/mywebsite.png';
import workImage from '../assets/work.png';
import fuguImage from '../assets/fugu.png';
import ucfImage from '../assets/ucf.png';
import codeImage from '../assets/code.png';
import pcImage from '../assets/pc.png';
import vmImage from '../assets/vm.png';

const Projects = () => {
  // Placeholder data for projects
  const projects = [
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
      description: 'My first peronal site using vite + react and deployed using AWS. It\'s fast, lightweight, and optimized for mobile.',
      imageUrl: mywebsiteImage,
      liveUrl: 'http://kylewhitman.app',
      githubUrl: 'https://github.com/BlimpMcCheesy/my-website',
    },
    // Add more projects here
    {
      title: 'Interview Game',
      description: 'A personal project for a game that my cousin invented. Made with vite + react and deployed on AWS.',
      imageUrl: workImage,
      liveUrl: 'http://kylewhitman.app',
      githubUrl: 'https://github.com/BlimpMcCheesy/Interview-Game',
    },
    {
      title: 'Fugu Sushi Website',
      description: 'Built a responsive, user-friendly website for Fugu Sushi in Ormond Beach using WordPress and the Astra theme.',
      imageUrl: fuguImage,
      liveUrl: 'https://fugusushi-ob.com/',
      githubUrl: '#',
    },
    {
      title: 'UCF Survival Guide',
      description: 'A website I built on wordpress for a school project. It is helpful information for UCF students to hel them succeed',
      imageUrl: ucfImage,
      liveUrl: 'https://ucfsurvivalguide.wordpress.com/',
      githubUrl: '#',
    },
    {
      title: 'Coding Projects',
      description: 'I have experience solving challenging C programming problems and developing smaller-scale Java applications simulating enterprise environments. Practiced in front-end technologies including HTML, CSS, JavaScript, and React, with hands-on experience deploying projects on AWS. This blend of skills lets me build and deploy full-stack applications focused on scalability and real-world use.',
      imageUrl: codeImage,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Built Multiple High End Gaming PC Builds',
      description: 'In the picture is my personal PC, featuring an NVIDIA RTX 3090 Ti and Intel i7-12700K. I\'ve built four other high-end gaming rigs for friends, including two recent builds with RX 7800 XT GPUs and Ryzen 7 9800X3D processors. For each build, I handled everything from hardware assembly to installing and optimizing Windows for peak gaming performance.',
      imageUrl: pcImage,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'VM projects and Sunshine/Moonlight',
      description: 'I\'ve built a virtualized Windows network with multiple Windows Server VMs and set up Linux virtual machines to gain experience with the OS. For malware testing, I created isolated Windows environments to safely analyze threats. Additionally, I configured a low-latency remote game streaming system using Sunshine and Moonlight, secured by a custom router tunnel.',
      imageUrl: vmImage,
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    Live Demo
                  </a>
                )}
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
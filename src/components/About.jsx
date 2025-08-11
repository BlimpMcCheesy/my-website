import React from 'react';
import './About.css';
import aboutImg from '../assets/about.webp';
import mooseImg from '../assets/moose.webp';
import bikeIcon from '../assets/bike.webp';
import runIcon from '../assets/run.webp';
import musicIcon from '../assets/music.webp';
import gamesIcon from '../assets/games.webp';
import SpotifyCard from './Spotify';
import StravaCard from './Strava';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>

      <div className="about-hero">
        
        <div className="about-main-img-container">
          <img src={aboutImg} alt="About me" className="about-main-img" />
          <p className="about-caption">
            I recently graduated from the University of Central Florida with a degree in IT, building on hands-on experience from a variety of jobs. I began my career in the restaurant industry, quickly moving from dishwasher to server over four years. I also worked at a private golf club, combining service and IT responsibilities, and gained valuable leadership experience through a summer internship as an Area Manager at Amazon. Additionally, I've completed contract work on website development and coding projects, continuing to expand my skills in technology and problem-solving.
          </p>
        </div>

        <div className="about-intro">
          <p className="about-description">
            I'm a detail-oriented and disciplined individual who thrives on learning quickly and working diligently. While I'm focused and driven in my professional pursuits, I also have a relaxed and patient side that helps me stay calm under pressure and approach challenges with curiosity and openness. This balance allows me to grow both personally and professionally.
          </p>
          <div className="about-icons">
            <img src={bikeIcon} alt="Bike" title="Biking" />
            <img src={runIcon} alt="Running" title="Running" />
            <img src={musicIcon} alt="Music" title="Music" />
            <img src={gamesIcon} alt="Games" title="Games" />
          </div>

          <p className="about-description">
            Outside of work, I enjoy a variety of activities that keep me energized and inspired. Whether it's biking, running, calisthenics, or yoga, I love staying active and healthy. I'm passionate about music, especially house, reggae, hip-hop, funk, and rock, and I enjoy playing strategy, racing, and shooter video games. Cooking is another big part of my life, I love making tacos with guacamole, chicken wings, Greek salads, mashed potatoes with spicy gravy, and fried rice.
          </p>
          <div className="moose-section">
            <img src={mooseImg} alt="Moose the dog" className="moose-large-img" />
            <div className="moose-text">
              <p>
                I love spending time with my family, friends, and my dog Moose, along with watching movies and exploring new ideas in philosophy, technology, and exercise.
              </p>
              <p className="moose-caption">Meet Moose</p>
            </div>
          </div>

        </div>
      </div>

      <div className="about-previews">
        
        <StravaCard />
        <SpotifyCard />
          
      </div>
    </div>
  );
};

export default About;

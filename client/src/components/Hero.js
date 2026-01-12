import React from 'react';
import './Hero.css';
import SocialIcon, { GitHubIcon, LinkedInIcon, InstagramIcon, EmailIcon, PhoneIcon } from './SocialIcon';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hey! I'm <span className="highlight">Nihan</span>
            </h1>
            <p className="hero-subtitle">
              16-year-old Web Designer & Developer from Kerala
            </p>
            <p className="hero-description">
              I build websites that don't just work, they actually feel good to use! 
              Started coding at 13 because I was tired of boring websites. Now I'm that teenager 
              who gets way too excited about smooth animations and clean designs. 
              Let's create something amazing together!
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
            <div className="hero-links">
              <SocialIcon 
                href="https://github.com/nihan2010" 
                icon={<GitHubIcon />} 
                label="GitHub Profile"
              />
              <SocialIcon 
                href="https://www.linkedin.com/in/nihan-najeeb-b287b22b9/" 
                icon={<LinkedInIcon />} 
                label="LinkedIn Profile"
              />
              <SocialIcon 
                href="https://www.instagram.com/nhnneei/" 
                icon={<InstagramIcon />} 
                label="Instagram Profile"
              />
              <SocialIcon 
                href="mailto:nihannajeebpmkd@gmail.com" 
                icon={<EmailIcon />} 
                label="Send Email"
              />
              <SocialIcon 
                href="tel:+918547137703" 
                icon={<PhoneIcon />} 
                label="Call Phone"
              />
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="profile-image-wrapper">
                <img 
                  src="https://i.ibb.co/HLzPtDNQ/nihandp.png" 
                  alt="Nihan Najeeb P"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

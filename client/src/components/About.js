import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">Passionate about creating digital experiences</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a 16-year-old web developer and designer from Kerala, passionate about creating 
              clean, functional, and beautiful digital experiences. What started as curiosity during 
              the pandemic has evolved into a deep commitment to web development and user experience design.
            </p>
            <p>
              I focus on writing clean, maintainable code and creating intuitive user interfaces. 
              Every project is an opportunity to solve problems and learn something new. Currently 
              expanding my skills in React and modern web development practices.
            </p>
            <p>
              When I'm not coding, I'm studying design principles, exploring new technologies, 
              or working on personal projects that challenge my current skill set.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Passion Driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

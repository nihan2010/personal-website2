import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => ({
              ...prev,
              [entry.target.dataset.item]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-item]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: "Web Developer",
      company: "Freelance",
      period: "2022 - Present",
      description: "Building responsive websites and web applications for local businesses. Focus on clean, modern design and user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Figma"]
    },
    // {
    //   title: "Student",
    //   company: "NHSS Kolathur",
    //   period: "2025 - Present",
    //   description: "Pursuing Higher Secondary Education with Science stream while developing frontend development skills.",
    //   technologies: ["UI/UX Design", "Frontend Development", "Problem Solving"]
    // }
  ];

  const education = [
    {
      degree: "Lower Primary Education",
      institution: "AMLPS Moorkkanad",
      period: "2015 - 2019",
      description: "Focused on building core literacy and curiosity-driven learning as a foundation for future academic growth."
    },
    {
      degree: "Upper Primary Education",
      institution: "AEMUPS Moorkkanad",
      period: "2019 - 2022",
      description: "Developed strong analytical skills and a passion for logical reasoning and mathematics."
    },
    {
      degree: "High School Education",
      institution: "PTMYHSS EDAPPALAM",
      period: "2022 - 2025",
      description: "Achieved SSLC with Full A+ (10/10 GP), demonstrating consistent academic excellence and a disciplined approach to complex problem-solving."
    },
    {
      degree: "Higher Secondary Education",
      institution: "NHSS Kolathur",
      period: "2025 - Present",
      description: "Science stream with focus on mathematics and computer applications."
    }
    
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and education</p>
        </div>
        
        <div className="experience-grid">
          <div className="experience-column">
            <h3 className="column-title">Professional</h3>
            <div className="items-list">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`experience-item ${visibleItems[`exp-${index}`] ? 'visible' : ''}`}
                  data-item={`exp-${index}`}
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <div className="item-header">
                    <h4 className="item-title">{exp.title}</h4>
                    <span className="item-period">{exp.period}</span>
                  </div>
                  <p className="item-company">{exp.company}</p>
                  <p className="item-description">{exp.description}</p>
                  <div className="item-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="experience-column">
            <h3 className="column-title">Education</h3>
            <div className="items-list">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`experience-item ${visibleItems[`edu-${index}`] ? 'visible' : ''}`}
                  data-item={`edu-${index}`}
                  style={{ '--delay': `${(experiences.length + index) * 0.1}s` }}
                >
                  <div className="item-header">
                    <h4 className="item-title">{edu.degree}</h4>
                    <span className="item-period">{edu.period}</span>
                  </div>
                  <p className="item-company">{edu.institution}</p>
                  <p className="item-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

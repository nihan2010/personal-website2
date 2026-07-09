import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects(prev => ({
              ...prev,
              [entry.target.dataset.project]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-project]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

    const projects = [
    {
      title: "Interface IQ",
      description: "AI-powered UI analysis platform that provides instant feedback on hierarchy, spacing, contrast, and accessibility. Features a community 'UI Arena' for sharing and rating designs.",
      image: "/interface_iq_cover.png",
      technologies: ["Next.js", "Tailwind CSS", "Gemini AI", "Prisma"],
      liveUrl: "https://interfaceiq.vercel.app/",
      githubUrl: "https://github.com/nihan2010/interface-iq",
      category: "AI Web App"
    },
    {
      title: "StudyForge",
      description: "A smart SCERT syllabus tracking system for Kerala students with dynamic subject management, progress analytics, and customizable academic modes.",
      image: "https://i.ibb.co/kgf0nwTn/Screenshot-2026-02-16-035524.png",
      technologies: ["React", "Vite", "Tailwind CSS"],
      liveUrl: "https://studyforge-wheat.vercel.app//",
      githubUrl: "https://github.com/nihan2010/studyforge",
      category: "Frontend"
    },
    {
    title: "SVG Clean",
    description: "A privacy-first SVG optimization tool that cleans messy SVG code, removes unnecessary markup, generates responsive SVGs, and provides a live preview—all processed entirely in the browser.",
    image: "https://i.ibb.co/kgf0nwTn/Screenshot-2026-02-16-035524.png", // Replace with your SVG Clean screenshot
    technologies: ["React", "Vite", "Tailwind CSS", "SVGO"],
    liveUrl: "https://svg-cleaner-app.vercel.app/",
    githubUrl: "https://github.com/nihan2010/svg-clean",
    category: "Developer Tool"
    },
    {
      title: "BuildStack",
      description: "BuildStack analyzes any website URL and reveals its technology stack, frameworks, infrastructure, analytics tools, and scripts in seconds.",
      image: "https://i.ibb.co/Tqd0KWcS/buildstack-card-cover.png",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Lucide React",
        "Axios"
      ],
      liveUrl: "https://buildstack-kappa.vercel.app/",
      githubUrl: "https://github.com/nihan2010/BuildStack",
      category: "Full Stack"
    },
    {
      title: "Mechanical Flip Clock",
      description: "A high-fidelity, mechanical-style Flip Clock web application built with vanilla HTML, CSS, and JavaScript. Features a retro aesthetic with smooth, physics-based animations, \"glitch-free\" logic, and a fully responsive design.",
      image: "/flipclock_card_cover.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://flipclock-peach.vercel.app/",
      githubUrl: "https://github.com/nihan2010/flip-clock",
      category: "Frontend"
    },
    {
      title: "Royal Decorations",
      description: "Professional website for an event decoration business with responsive image galleries and modern design.",
      image: "/royal_events_card_cover.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      liveUrl: "https://royaldecorations.github.io/site/",
      githubUrl: "https://github.com/Royaldecorations/site",
      category: "Frontend"
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Recent Work</h2>
          <p className="section-subtitle">A selection of projects I've worked on</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${visibleProjects[index] ? 'visible' : ''}`}
              data-project={index}
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="image-fallback">
                  <span>{project.category}</span>
                </div>
                <div className="project-overlay">
                  <div className="overlay-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-link"
                      aria-label="View live project"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="overlay-link"
                      aria-label="View source code"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import './Services.css';

const Services = ({ onGetQuote }) => {


  const services = [
    {
      title: "Website Development",
      features: [
        "HTML, CSS, JavaScript",
        "Fast loading & SEO-ready",
        "Responsive across devices"
      ]
    },
    {
      title: "Website Fix & Redesign",
      features: [
        "Improve existing websites",
        "Speed & layout optimization",
        "UI/UX improvements"
      ]
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">What I can do for you</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button 
                className="service-cta"
                onClick={onGetQuote}
              >
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

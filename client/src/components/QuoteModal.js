import React, { useState, useEffect } from 'react';
import './QuoteModal.css';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    websiteType: '',
    purpose: '',
    message: ''
  });

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the WhatsApp message
    const whatsappMessage = `Hello, I want a website.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Website Type: ${formData.websiteType || 'Not specified'}
Purpose: ${formData.purpose || 'Not specified'}
Message: ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/918547137703?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      websiteType: '',
      purpose: '',
      message: ''
    });
    onClose();
  };

  const handleOverlayClick = (e) => {
    // Close modal if clicking on overlay (not the modal content)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="quote-modal-overlay" onClick={handleOverlayClick}>
      <div className="quote-modal-content">
        <button 
          className="quote-modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        
        <div className="quote-modal-header">
          <h2>Get a Quote</h2>
          <p>Tell us about your project and we'll get back to you</p>
        </div>

        <form onSubmit={handleSubmit} className="quote-modal-form">
          <div className="form-group">
            <label htmlFor="quote-name">Name *</label>
            <input
              type="text"
              id="quote-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-email">Email *</label>
            <input
              type="email"
              id="quote-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-phone">Phone</label>
            <input
              type="tel"
              id="quote-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 1234567890"
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-website-type">Website Type</label>
            <select
              id="quote-website-type"
              name="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select website type</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Business">Business</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Landing Page">Landing Page</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quote-purpose">Purpose of Website</label>
            <input
              type="text"
              id="quote-purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              placeholder="Brief description of your website's purpose"
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-message">Message / Project Details *</label>
            <textarea
              id="quote-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Tell us more about your project requirements..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;

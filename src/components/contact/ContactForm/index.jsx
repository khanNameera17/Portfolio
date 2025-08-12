'use client'
import React, { useState } from 'react';
import './style.scss';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', contact: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.email.trim()) newErrors.email = 'Please enter your email';
    if (!formData.contact.trim()) newErrors.contact = 'Please enter your contact';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSuccessMessage('✅ Your query has been sent!');
      setFormData({ name: '', email: '', contact: '' });

      setTimeout(() => {
        setSuccessMessage('');
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-form" onClick={(e) => e.stopPropagation()}>
        <h2>Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              className={errors.contact ? 'error' : ''}
            />
            {errors.contact && <span className="error-text">{errors.contact}</span>}
          </div>

          <button type="submit">Submit</button>
          {successMessage && <p className="success-text">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

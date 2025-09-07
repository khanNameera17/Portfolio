'use client'
import React, { useState } from 'react';
import './style.scss';
import { Info } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleInfoClick = () => {
    const audio = new Audio('/click.mp3');
    audio.play();
    setIsFormOpen(prev => !prev);
  };

  return (
    <section className="contact-section">
      <div className="top-bar">
        <div className="left"></div>
        <div className="center">
  Alphora-Tech &copy; {new Date().getFullYear()}
</div>

        <div className="right"></div>
      </div>

      <h1 className="main-heading">Connect</h1>

      <a href="mailto:nameerakhan54@gmail.com" className="contact-bubble contact-email">Mail Us</a>
      <a href="tel:8502007811" className="contact-bubble contact-call">Call Us</a>

      <div className="contact-pop phrase-1">Hey!</div>
      <div className="contact-pop phrase-2">Ping!</div>
      <div className="contact-pop phrase-3">Knock Knock!</div>
      <div className="contact-pop phrase-5">Let's Talk</div>

      <div className="info-button" onClick={handleInfoClick}>
        <Info size={28} color="#000" />
      </div>

      {isFormOpen && <ContactForm onClose={handleInfoClick} />}
    </section>
  );
};

export default ContactSection;

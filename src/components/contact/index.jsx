// components/ContactSection.jsx
import React from 'react';
import './style.scss';
import { Info } from 'lucide-react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="top-bar">
        <div className="left">
          {/* <p>hello@yourdomain.com</p> */}
          {/* <p> India</p> */}
        </div>
        <div className="center">White-Cinette @2025</div>
        <div className="right">
          {/* <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a> */}
        </div>
      </div>

      <h1 className="main-heading">Connect</h1>

      {/* <div className="bubble bubble-1">Allez, viens !</div>
      <div className="bubble bubble-2">On est bien</div> */}
      {/* <a href="mailto:nameerakhan54@gmail.com" className="bubble bubble-1">
  📧 Mail Us
</a>

<a href="tel:8502007811" className="bubble bubble-2">
  📞 Call Us
</a> */}
<a href="mailto:nameerakhan54@gmail.com" className="contact-bubble contact-email">
  Mail Us
</a>

<a href="tel:8502007811" className="contact-bubble contact-call">
  Call Us
</a>

{/* Fun Phrases */}
<div className="contact-pop phrase-1">Hey!</div>
<div className="contact-pop phrase-2">Ping!</div>
<div className="contact-pop phrase-3">Knock Knock!</div>
{/* <div className="contact-pop phrase-4">Touch?</div> */}
<div className="contact-pop phrase-5">Let's Talk</div>

      <div className="info-button">
        <Info size={28} color="#000" />
      </div>
    </section>
  );
};

export default Contact;

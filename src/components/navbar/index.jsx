'use client'
import { useState, useEffect } from 'react';
import './style.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Listen for scroll and set active section
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'services', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2; // center of screen

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">ALT</div>

      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>

      <ul className={`navLinks ${isOpen ? 'active' : ''}`}>
        {['home', 'about', 'projects', 'services'].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className={`contactBtn ${activeSection === 'contact' ? 'active' : ''}`}>
        Contact Us
      </a>
    </nav>
  );
}

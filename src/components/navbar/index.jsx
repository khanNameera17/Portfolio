'use client'
import { useState } from 'react';
import './style.scss';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo">ALT</div>

      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>

      <ul className={`navLinks ${isOpen ? 'active' : ''}`}>
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#services" className="nav-link">Services</a></li>
      </ul>

      <a href="#contact" className="contactBtn">Contact Us</a>
    </nav>
  );
}

import React from 'react';
import './HeroSection.css';
import Moku from '../assets/Moku.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div>
        <div className="hero-background-dot hero-background-dot1"></div>
        <div className="hero-background-dot hero-background-dot2"></div>
        <div className="hero-background-dot hero-background-dot3"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">SHAPING THE FUTURE</h1>
        <h2 className="hero-subtitle">Innovative solutions for a digital tomorrow</h2>
        <div className="buttons">
          <a href="#services" className="button-primary">Let's Explore</a>
          <a href="#contact" className="button-secondary">Contact Us</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#services" aria-label="Scroll down">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

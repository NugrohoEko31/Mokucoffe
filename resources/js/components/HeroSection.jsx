import React from 'react';
import './HeroSection.css';
import Moku from '../assets/welcome.png';

const HeroSection = () => {
  return (
    <section id='hero' className="hero-section">
      <div className="hero-slider">
        <div
          className="hero-slide"
          style={{
            backgroundImage: `url(${Moku})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            width: '100vw',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default HeroSection;
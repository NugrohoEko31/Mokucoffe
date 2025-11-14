import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import Moku from '../assets/welcome.png';
import Slide2 from '../assets/visimisi.png';
import Slide3 from '../assets/tentangkami.png';

const slides = [
  { image: Moku },
  { image: Slide2 },
  { image: Slide3 },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(current => (current + 1) % slides.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i) => {
    setIndex(i); // set slide ke i sesuai klik
  };

  return (
    <section className="hero-section">
      <div className="hero-slider">
        {slides.map((slide, i) => (
          <div
            className="hero-slide"
            style={{
              transform: `translateX(${(i - index) * 100}%)`,
              transition: 'transform 0.9s cubic-bezier(.5,0,.4,1)',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '100vh',
              width: '100vw',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            key={i}
          />
        ))}
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot${index === i ? ' active' : ''}`}
            onClick={() => handleDotClick(i)}
            style={{
              width: 15,
              height: 15,
              borderRadius: '50%',
              margin: '0 5px',
              display: 'inline-block',
              background: index === i ? '#805438' : '#dedede',
              border: '2.5px solid #fff',
              transition: 'background .3s',
              cursor: 'pointer', // kasih tanda bisa diklik
              border: 'none',
              padding: 0,
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};


export default HeroSection;

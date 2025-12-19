import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import Slide2 from '../assets/visimisi.png';
import Slide3 from '../assets/tentangkami.png';

const tentangSlides = [
    { 
    image: Slide2
    },
    { 
    image: Slide3
    },
];

const AboutUs = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex === tentangSlides.length - 1 ? 0 : prevIndex + 1
        );
    }, 3800);
    
    return () => clearInterval(timer);
}, []);

const handleDotClick = (index) => {
    setCurrentIndex(index);
};

    return (
        <section id='aboutus' className="aboutus-section">
        <div className="aboutus-slider">
            {tentangSlides.map((slide, index) => (
            <div
                key={index}
                className="aboutus-slide"
                style={{
                transform: `translateX(${(index - currentIndex) * 100}%)`,
                transition: 'transform 1.2s ease-in-out',
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100vw',
                position: 'absolute',
                top: 0,
                left: 0,
                }}
            />
            ))}
        </div>
        <div className="aboutus-overlay"></div>
        <div className="aboutus-background-dot aboutus-background-dot1"></div>
        <div className="aboutus-background-dot aboutus-background-dot2"></div>
        <div className="aboutus-background-dot aboutus-background-dot3"></div>

        <div className="aboutus-dots">
            {tentangSlides.map((_, index) => (
            <button
                key={index}
                className={`aboutus-dot ${currentIndex === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Pindah ke slide ${index + 1}`}
            />
            ))}
        </div>
        </section>
    );
};

export default AboutUs;
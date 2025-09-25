import React, { useState, useEffect } from 'react';
import logo from '../assets/LOGOMOKU.png';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
        <div className="nav-left">
            <img src={logo} alt="LOGOMOKU" className="logo" />
            <a href="#" className="logo-text">Moku Coffe</a>
        </div>
        <div className="nav-links">
            <a href="#home" className="nav-link">HOME</a>
            <a href="#services" className="nav-link">SERVICES</a>
            <a href="#menu" className="nav-link">MENU</a>
            <a href="#portfolio" className="nav-link">LOCATION</a>
            <a href="#contact" className="nav-link">CONTACT</a>
        </div>
        <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
        >
          {/* Hamburger/garis 3 */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--kopi-light) " strokeWidth="2">
            <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
            <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
            <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
            </svg>
        </button>
        </div>
        {mobileMenuOpen && (
        <div className="mobile-menu open">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>HOME</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>SERVICES</a>
            <a href="#menu" onClick={() => setMobileMenuOpen(false)}>MENU</a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>LOCATION</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
        </div>
        )}
    </nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import logo from '../assets/LOGOPUTIH.jpg';
import './Navbar.css';

const headerNavBar = [
    { title: 'Beranda', href: '/' },
    { title: 'Tentang Kami', href: '/#aboutus' },
    { title: 'Menu', href: '/#menu' },
    { title: 'Lokasi', href: '/#location' },
    { title: 'Kontak', href: '/#footer' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

  // Fungsi scroll smooth ke id section
const smoothScrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};


const [activeLink, setActiveLink] = useState(window.location.hash || '/');

const handleAnchorClick = (e, href) => {
    e.preventDefault();
    const hashIndex = href.indexOf('#');
    let linkKey = href;

    if (hashIndex !== -1) {
    const path = href.substring(0, hashIndex);
    const id = href.substring(hashIndex + 1);

    // Update active link state
    linkKey = '#' + id;
    setActiveLink(linkKey);

    if (
        window.location.pathname === path ||
        (path === '/' && (window.location.pathname === '/' || window.location.pathname === '/home'))
        ) {
        window.history.pushState(null, '', '#' + id);
        smoothScrollToId(id);
        } else {
        window.location.href = path + '#' + id;
        }
    } else {
        setActiveLink(href);
        window.location.href = href;
    }
    setMobileMenuOpen(false);
};

const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = '/';
    setMobileMenuOpen(false);
};

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
            <div className="nav-left">
            <a href="/" className="logo-brand" onClick={handleLogoClick}>
                <img src={logo} alt="LOGOMOKU" className="logo" />
                <span className="logo-text">Moku Coffe</span>
            </a>
            </div>
            <div className="nav-links">
            {headerNavBar.map((item) => (
                <a
                key={item.title}
                href={item.href}
                className={`nav-link${activeLink === item.href || activeLink === item.href.replace(/.*#/, '#') ? ' active' : ''}`}
                onClick={(e) => handleAnchorClick(e, item.href)}
                >
                {item.title}
                </a>
            ))}
            </div>
            <button className="mobile-menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--kopi-light)" strokeWidth="2">
                <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
            </svg>
            </button>
        </div>
        {mobileMenuOpen && (
            <div className="mobile-menu open">
            {headerNavBar.map((item) => (
            <a
                key={item.title}
                href={item.href}
                className={`mobile-nav-link${activeLink === item.href || activeLink === item.href.replace(/.*#/, '#') ? ' active' : ''}`}
                onClick={(e) => handleAnchorClick(e, item.href)}
            >
                {item.title}
            </a>
            ))}
            </div>
        )}
        </nav>
    );
};

export default Navbar;

import React from 'react';
import './Footer.css';
import logo from '../assets/LOGOMOKU.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-column-title">Jam Buka</h3>
          <div className="footer-col-text">
            <div>Senin  Minggu: 16.00  23.00</div>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-column-title">Partnership</h3>
          <div className="footer-col-text">
            <div>moku@gmail.com</div>
            <div>+62 812 561 7980</div>
          </div>
        </div>
        <div className="footer-column">
          <h3 className="footer-column-title">Kunjungi Media Sosial Kami</h3>
          <div className="footer-social-row">
            <a href="https://www.instagram.com/kedaikopi.moku/" aria-label="Instagram" className="footer-social-link" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook" className="footer-social-link"><i className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer"></i></a>
            <a href="#" aria-label="TikTok" className="footer-social-link"><i className="fab fa-tiktok" target="_blank" rel="noopener noreferrer"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

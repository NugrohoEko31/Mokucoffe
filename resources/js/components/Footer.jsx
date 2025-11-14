import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer id="footer" className="footer">
    <div className="footer-container">
      <div className="footer-column">
        <h3 className="footer-column-title">Jam Buka</h3>
        <div className="footer-col-text">
          <div>Buka Setiap Hari</div>
          <div style={{ marginTop: 14 }}>16.00 - 23.00</div>
        </div>
      </div>
      <div className="footer-column">
        <h3 className="footer-column-title">Kontak</h3>
        <div className="footer-col-text">
          <div>0989 2232 xxxx</div>
          <div style={{ marginTop: 8 }}>mokuc​offe.gmail.con</div>
        </div>
      </div>
      <div className="footer-column footer-column-social">
        <h3 className="footer-column-title">Kunjungi Media Sosial Kami</h3>
        <div className="footer-social-row">
          <div className="footer-social">
            <a href="https://www.instagram.com/kedaikopi.moku/" aria-label="Instagram" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="TikTok" className="footer-social-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;

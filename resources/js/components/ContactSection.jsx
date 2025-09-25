import React, { useState } from 'react';
import './ContactSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactSection = () => {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses kirim ke backend atau API di sini
    console.log("Form submitted:", formData);
    setFormStatus("success");
    setTimeout(() => setFormStatus(""), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">GET IN TOUCH</h2>
          <p className="contact-desc">
            Ready to discuss your next project? We'd love to hear from you.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                {/* Phone Icon */}
                <svg width={24} height={24} fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="contact-info-title">Phone</h3>
                <p className="contact-info-data">+62 858 4902 8119</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                {/* Email Icon */}
                <svg width={24} height={24} fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="contact-info-title">Email</h3>
                <p className="contact-info-data">moku@gmail.com</p>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">
                {/* Address Icon */}
                <svg width={24} height={24} fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="contact-info-title">Address</h3>
                <p className="contact-info-data">Gg. Purnama 2A No.19, Akcaya, Kec. Pontianak Sel., Kota Pontianak, Kalimantan Barat 78113</p>
              </div>
            </div>
            <div className="social-links">
              <h3 className="social-links-title">Kunjungi Media Sosial Kami</h3>
              <div className="social-links-list">
                <a href="https://www.instagram.com/kedaikopi.moku/" target="_blank" rel="noopener" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook.com/kamu" target="_blank" rel="noopener" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.tiktok.com/@kamu" target="_blank" rel="noopener" className="social-link" aria-label="TikTok">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-box">
            <h3 className="contact-form-title">Send Us A Message</h3>
            {formStatus === "success" && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            <form onSubmit={handleSubmit} autoComplete="off">
              <label htmlFor="name" className="contact-form-label">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact-form-input"
                required
              />
              <label htmlFor="email" className="contact-form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact-form-input"
                required
              />
              <label htmlFor="message" className="contact-form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="contact-form-textarea"
                required
              />
              <button
                type="submit"
                className="contact-form-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

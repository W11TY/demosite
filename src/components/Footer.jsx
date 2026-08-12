import React from 'react';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer-section">
      <RevealOnScroll className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Voxi Logo" className="footer-logo-image" style={{ height: '32px', marginBottom: '1rem', display: 'block' }} />
            </Link>
            <p className="footer-tagline text-muted">
              One Ecosystem. One Platform. Unlimited Possibilities.
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Subscribe for product updates and research" className="newsletter-input" />
              <button className="newsletter-btn" aria-label="Subscribe">→</button>
            </div>
            <div className="footer-socials">
              <a href="#twitter" className="social-icon-link">TW</a>
              <a href="#linkedin" className="social-icon-link">LI</a>
              <a href="#github" className="social-icon-link">GH</a>
            </div>
          </div>

          <div className="footer-links-wrapper">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#platform">Platform</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#insights">Insights</a></li>
                <li><a href="#pricing">Pricing</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#founding">Founding Team</a></li>
                <li><a href="#life">Life at Voxi</a></li>
                <li><a href="#why">Why Voxi</a></li>
                <li><a href="#demo">Request a Demo</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Policies</h4>
              <ul>
                <li><a href="#terms">Terms & Conditions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <h1 className="footer-massive-logo">VOXI</h1>
        </div>
      </RevealOnScroll>
    </footer>
  );
}

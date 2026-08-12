import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { platforms } from '../data/platform';
import { solutions } from '../data/solutions';
import './Navbar.css';

const navLinks = [
  { 
    label: 'Platform', 
    href: '/platform',
    items: platforms.map(p => ({ label: p.title, href: `/platform/${p.id}` }))
  },
  { 
    label: 'Solutions', 
    href: '/solutions',
    items: solutions.map(s => ({ label: s.industry, href: `/solutions/${s.id}` }))
  },
  { 
    label: 'Research', 
    href: '/research' 
  },
  { 
    label: 'Company', 
    href: '#company' 
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Left Pill (Logo + Links) */}
        <div className="navbar-left-pill">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src="/logo.png" alt="VOXI Logo" className="logo-image" />
          </Link>

          {/* Desktop nav links */}
          <ul className="navbar-links desktop-only">
            {navLinks.map((link) => (
              <li key={link.href} className={link.items ? "has-dropdown" : ""}>
                {link.href.startsWith('/') ? (
                  <Link to={link.href} className="nav-main-link">
                    {link.label} {link.items && <span className="dropdown-caret">▾</span>}
                  </Link>
                ) : (
                  <a href={link.href} className="nav-main-link">{link.label}</a>
                )}
                
                {link.items && (
                  <div className="dropdown-menu">
                    {link.items.map(subItem => (
                      <Link key={subItem.href} to={subItem.href} className="dropdown-item">
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-right">
          <a href="#demo" className="navbar-cta desktop-only">
            <div className="cta-icon-wrapper">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
            Hire Team
          </a>

          {/* Mobile hamburger */}
          <button
            className="mobile-menu-toggle mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-dropdown"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} onClick={() => setMenuOpen(false)} className="mobile-main-link">{link.label}</Link>
                  ) : (
                    <a href={link.href} onClick={() => setMenuOpen(false)} className="mobile-main-link">{link.label}</a>
                  )}
                  {link.items && (
                    <ul className="mobile-sub-links">
                      {link.items.map(sub => (
                        <li key={sub.href}>
                          <Link to={sub.href} onClick={() => setMenuOpen(false)}>— {sub.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <a href="#demo" className="navbar-cta mobile-cta" onClick={() => setMenuOpen(false)}>
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero.png';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      <div 
        className="hero-background-image" 
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <div className="hero-container">
        {/* Left column */}
        <div className="hero-left">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gray">Scale your ideas.</span><br/>
            <span className="text-black">Build with AI.</span>
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Deploy custom neural agents, LLMs, and automation in<br/>
            one seamless flow.
          </motion.p>
          
          <motion.button 
            className="hero-btn-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="btn-icon-wrapper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </div>
            <span>Start Build</span>
          </motion.button>
        </div>
        
        {/* Right column */}
        <div className="hero-right">
          <motion.div 
            className="floating-card"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.4 }}
          >
            <div className="card-image-wrapper">
              <img src="/digital_brain.png" alt="Digital Brain" className="card-image" />
            </div>
            <div className="card-footer">
              <div className="card-footer-text">
                <span className="card-title">Digital Brain</span>
                <span className="card-subtitle">// Model v4.0.2</span>
              </div>
              <div className="card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}

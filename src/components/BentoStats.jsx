import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './shared/RevealOnScroll';
import { AnimatedCounter } from './shared/AnimatedCounter';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import './BentoStats.css';

// Avatars for the dashed card
const avatars = [
  'https://i.pravatar.cc/100?img=68',
  'https://i.pravatar.cc/100?img=47',
  'https://i.pravatar.cc/100?img=32',
  'https://i.pravatar.cc/100?img=12',
];

export function BentoStats() {
  const { ref: darkCardRef, isVisible: darkCardVisible } = useRevealOnScroll({ threshold: 0.2 });

  // Generate radial lines for the graphic
  const lines = Array.from({ length: 24 }).map((_, i) => (
    <div
      key={i}
      className="radial-line"
      style={{ transform: `translate(-50%, -50%) rotate(${i * 15}deg)` }}
    />
  ));

  return (
    <section className="bento-section section-padding">
      <div className="container">
        <RevealOnScroll className="bento-header" delay={0}>
          <h2 className="bento-headline">
            Automate the manual, accelerate the future. Our autonomous AI solutions deliver measurable growth and operational <span className="fade-text">excellence.</span>
          </h2>
          <p className="bento-subtitle">
            Empowering teams with intelligent tools that turn complex data into actionable business outcomes daily.
          </p>
        </RevealOnScroll>

        <RevealOnScroll className="bento-grid" delay={0.2}>

          {/* Card 1: Dark */}
          <div className="bento-card bento-dark" ref={darkCardRef}>
            <div className="dark-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
            </div>
            <div>
              <div className="dark-stat">
                <AnimatedCounter to={100} suffix="%" isVisible={darkCardVisible} duration={1.5} />
              </div>
              <p className="dark-text">Call audit coverage with AI — every interaction reviewed, not just a sample.</p>
            </div>
          </div>

          {/* Card 2: Stacked */}
          <div className="bento-stack">
            <div className="bento-card bento-dashed">
              <div className="avatar-stack">
                {avatars.map((src, i) => (
                  <img key={i} src={src} className="avatar" alt="" style={{ zIndex: avatars.length - i }} />
                ))}
              </div>
              <p style={{ fontWeight: 500, fontSize: '0.875rem' }}><strong>24/7</strong> active agents</p>
            </div>
            <div className="bento-card bento-solid-light">
              <div className="bento-stat-inline">
                <span className="bento-stat-number">
                  <AnimatedCounter to={3} suffix="x" isVisible={darkCardVisible} duration={1.5} />
                </span>
                <span className="bento-stat-label">Lower CAC</span>
              </div>
            </div>
          </div>

          {/* Card 3: Radial */}
          <div className="bento-card bento-radial">
            <motion.div
              className="radial-graphic"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              <div className="radial-lines">{lines}</div>
              <div className="radial-center" style={{ rotate: "-360deg" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M12 2v20" /><path d="M4.93 4.93l14.14 14.14" /><path d="M19.07 4.93L4.93 19.07" /></svg>
              </div>
            </motion.div>
            <div style={{ zIndex: 1, position: 'relative', marginTop: 'auto' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', fontWeight: 500 }}>Low latency</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Real-time processing for enterprise-grade deployments.</p>
            </div>
          </div>

          {/* Card 4: Testimonial */}
          <div className="bento-card bento-white">
            <div className="quote-header">
              <div className="quote-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M10 11l-3 4V7h4v4zm10 0l-3 4V7h4v4z" /></svg>
              </div>
              <div className="company-logo" style={{ fontSize: '1.5rem', fontFamily: 'serif', letterSpacing: '-0.05em' }}>acme corp</div>
            </div>
            <p className="bento-quote-text">"The custom LLM and agents they built for us reduced our support tickets by 80% while increasing user satisfaction."</p>
            <p className="bento-quote-author">CTO, Acme Corp</p>
          </div>

        </RevealOnScroll>
      </div>
    </section>
  );
}

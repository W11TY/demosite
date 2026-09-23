import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer } from './shared/Motion';
import heroVideo from '../assets/hero.mp4';

export default function Footer() {
  return (
    <footer className="w-full mt-auto relative" style={{ background: '#f5f5f3', fontFamily: 'Inter, sans-serif' }}>
      {/* Animated Background Illustration */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/70" /> {/* Overlay for text readability */}
      </div>

      <div className="relative z-10 flex flex-col w-full h-full min-h-[400px]">
        {/* Top Content Section */}
        <StaggerContainer>
          <div className="w-full px-8 lg:px-14 pt-14 pb-10">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-6">

              {/* Left: Brand */}
              <FadeInUp className="lg:w-[220px] shrink-0">
                <div style={{ fontSize: '32px', fontWeight: 700, letterSpacing: '-0.03em', color: '#111', lineHeight: 1, marginBottom: '8px' }}>voxi</div>
                <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.18em', color: '#666', textTransform: 'uppercase', lineHeight: 1.4, marginBottom: '20px' }}>
                  Customer Orchestration<br />Platform
                </div>
                <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.5 }}>
                  Conversations<br />that move the world forward.
                </p>
              </FadeInUp>

              {/* Nav Columns */}
              <div className="flex-1 grid grid-cols-2 gap-8 sm:flex sm:flex-row sm:gap-10 lg:gap-0 lg:justify-around w-full">

                {/* Product */}
                <FadeInUp delay={0.1} className="min-w-[120px]">
                  <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#111', marginBottom: '16px' }}>Product</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { label: 'Features', to: '/platform' },
                      { label: 'Use Cases', to: '/solutions' },
                    ].map(({ label, to }) => (
                      <li key={label}>
                        <Link to={to} style={{ fontSize: '13px', color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.target.style.color = '#111'}
                          onMouseLeave={e => e.target.style.color = '#666'}
                        >{label}</Link>
                      </li>
                    ))}
                  </ul>
                </FadeInUp>

                {/* Company */}
                <FadeInUp delay={0.15} className="min-w-[100px]">
                  <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#111', marginBottom: '16px' }}>Company</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { label: 'About', to: '/company' },
                      { label: 'Careers', to: '/company/careers' },
                      { label: 'Contact', to: '/contact' },
                    ].map(({ label, to }) => (
                      <li key={label}>
                        <Link to={to} style={{ fontSize: '13px', color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.target.style.color = '#111'}
                          onMouseLeave={e => e.target.style.color = '#666'}
                        >{label}</Link>
                      </li>
                    ))}
                  </ul>
                </FadeInUp>

                {/* Legal */}
                <FadeInUp delay={0.2} className="min-w-[130px]">
                  <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#111', marginBottom: '16px' }}>Legal</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                      { label: 'Privacy Policy', to: '/company/privacy' },
                      { label: 'Terms of Service', to: '/company/terms' },
                      { label: 'Security', to: '/company/security' },
                      { label: 'Responsible AI', to: '/research' },
                    ].map(({ label, to }) => (
                      <li key={label}>
                        <Link to={to} style={{ fontSize: '13px', color: '#666', textDecoration: 'none', transition: 'color 0.2s' }}
                          onMouseEnter={e => e.target.style.color = '#111'}
                          onMouseLeave={e => e.target.style.color = '#666'}
                        >{label}</Link>
                      </li>
                    ))}
                  </ul>
                </FadeInUp>

              </div>

              {/* Right: Newsletter + Socials */}
              <FadeInUp delay={0.25} className="lg:w-[280px] shrink-0" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#111', marginBottom: '4px' }}>Stay in the loop</h4>
                  <p style={{ fontSize: '12px', color: '#777', marginBottom: '14px' }}>Get product updates, new features and more.</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      style={{
                        flex: 1,
                        background: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px 12px',
                        fontSize: '13px',
                        color: '#111',
                        outline: 'none',
                      }}
                      onFocus={e => e.target.style.borderColor = '#999'}
                      onBlur={e => e.target.style.borderColor = '#ddd'}
                    />
                    <button
                      aria-label="Subscribe"
                      style={{
                        width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: '#111', borderRadius: '8px', color: 'white', border: 'none', cursor: 'pointer',
                        flexShrink: 0, transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#333'}
                      onMouseLeave={e => e.currentTarget.style.background = '#111'}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Social Icons + tagline */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[
                      { label: 'X', path: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" /> },
                      { label: 'LinkedIn', path: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" fill="currentColor" /><circle cx="4" cy="4" r="2" fill="currentColor" /></> },
                      { label: 'YouTube', path: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" fill="currentColor" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" /></> },
                      {
                        label: 'Discord', path: <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" fill="currentColor" />,
                      },
                    ].map(({ label, path }) => (
                      <a key={label} href="#" aria-label={label}
                        style={{
                          width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                          background: 'white', border: '1px solid #e0e0e0', borderRadius: '8px', color: '#555',
                          textDecoration: 'none', transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.color = '#111'; e.currentTarget.style.borderColor = '#aaa'; }}
                        onMouseLeave={e => { e.currentTarget.style.color = '#555'; e.currentTarget.style.borderColor = '#e0e0e0'; }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24">{path}</svg>
                      </a>
                    ))}
                  </div>
                  <p style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.12em', color: '#aaa', textTransform: 'uppercase', lineHeight: 1.5, textAlign: 'right' }}>
                    Built for<br />a more<br />human future.
                  </p>
                </div>
              </FadeInUp>

            </div>
          </div>
        </StaggerContainer>

        {/* Bottom Copyright Section */}
        <div className="w-full flex flex-col-reverse sm:flex-row justify-between items-start sm:items-end gap-8 sm:gap-0 px-8 lg:px-14 pb-8 lg:pb-12 mt-auto pt-12">
          <p style={{ fontSize: '10px', color: '#555', lineHeight: 1.6 }}>
            © {new Date().getFullYear()} Voxi.<br />All rights reserved.
          </p>
          <p className="text-left sm:text-right" style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.18em', color: '#555', textTransform: 'uppercase', lineHeight: 1.5 }}>
            Conversations<br />without limits.
          </p>
        </div>

      </div>
    </footer>
  );
}

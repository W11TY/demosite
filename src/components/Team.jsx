import React from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './Team.css';

export function Team() {
  const founders = [
    { name: 'Manish Joshi', role: 'CEO', image: 'https://framerusercontent.com/images/kTrlBtbYEhj5t3kiNx7FPJ2asdI.png' },
    { name: 'Rakesh Kanugula', role: 'COO', image: 'https://framerusercontent.com/images/qA80rXn5OyEhaPlYKJ8gIEE6Ds.png' },
    { name: 'Abhinash Khare', role: 'CTO', image: 'https://framerusercontent.com/images/yV2zGDqTwUzGafOnvA53MLQkM.png' },
  ];

  const culture = [
    { title: 'Customer Success Begins After the Sale', body: 'We don’t celebrate signed contracts — we celebrate customers achieving measurable business outcomes.' },
    { title: 'Think Like a Founder', body: 'Don’t wait for permission. If you see an opportunity to improve something, own it and make it happen.' },
    { title: 'Family Before Everything', body: 'Every employee receives dedicated Family Leave and a monthly Voxi-sponsored Family Dinner to celebrate life beyond work.' },
    { title: 'Never Stop Learning', body: 'Every team member receives a dedicated monthly learning budget for books — empowering continuous growth and innovation.' },
  ];

  return (
    <section className="team-section section-padding" id="company">
      <div className="container">

        {/* About */}
        <RevealOnScroll style={{ marginBottom: 'var(--space-xl)' }}>
          <span className="eyebrow">COMPANY</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', marginBottom: 'var(--space-md)', maxWidth: '800px', lineHeight: 1.1 }}>
            One Ecosystem. One Platform. Every Customer Conversation.
          </h2>
          <p className="text-lg" style={{ maxWidth: '680px', marginBottom: 'var(--space-md)', color: 'var(--text-muted)' }}>
            At VoxiFlow AI, we believe customer communication shouldn’t be managed through disconnected tools and isolated touchpoints. That’s why we built the Voxi CX Operating System — an AI-powered platform that unifies Voice AI, WhatsApp, Contact Center, Telephony, Workflow Automation, Quality Management, CRM Integration, and Customer Journey Orchestration into a single intelligent ecosystem.
          </p>
          <p className="text-lg" style={{ maxWidth: '680px', color: 'var(--text-muted)' }}>
            Our mission: to help businesses deliver exceptional customer experiences while improving operational efficiency, increasing conversions, and reducing communication costs.
          </p>
        </RevealOnScroll>

        {/* Founding Team */}
        <RevealOnScroll style={{ marginBottom: 'var(--space-xl)' }}>
          <span className="eyebrow">FOUNDING TEAM</span>
          <div style={{ display: 'flex', gap: 'var(--space-lg)', flexWrap: 'wrap', marginTop: 'var(--space-md)' }}>
            {founders.map(f => (
              <div key={f.name} className="founder-card" style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem', minWidth: '240px', flex: 1, position: 'relative', overflow: 'hidden' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--bg-color)', marginBottom: '1rem', overflow: 'hidden', position: 'relative' }}>
                  <img src={f.image} alt={f.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="img-fade loaded" />
                </div>
                <p style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{f.name}</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{f.role}</p>
                
                <motion.div 
                  className="bio-icon"
                  style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-primary)" strokeWidth="2"><path d="M12 5v14m-7-7h14"/></svg>
                </motion.div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Why Voxi */}
        <RevealOnScroll style={{ marginBottom: 'var(--space-xl)' }}>
          <span className="eyebrow">WHY VOXI</span>
          <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em', marginBottom: 'var(--space-md)', maxWidth: '700px', lineHeight: 1.2 }}>
            Technology Alone Doesn’t Deliver Success. Implementation Does.
          </h3>
          <p style={{ maxWidth: '640px', color: 'var(--text-muted)', marginBottom: 'var(--space-md)' }}>
            Our structured Enterprise Implementation &amp; Success Framework ensures every deployment delivers measurable business outcomes — not just a successful go-live. Our engagement doesn’t end after deployment. That’s where it truly begins.
          </p>
          <p style={{ fontWeight: 600, marginBottom: 'var(--space-sm)' }}>Our 90-Day Success Framework</p>
          <ol style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            <li>Discovery &amp; Business Process Assessment</li>
            <li>Solution Design &amp; AI Configuration</li>
            <li>Implementation &amp; System Integration</li>
            <li>User Training &amp; Change Management</li>
            <li>Go-Live &amp; Hypercare Support</li>
            <li>Performance Monitoring &amp; Optimization</li>
            <li>Success Measurement Against Business KPIs</li>
          </ol>
        </RevealOnScroll>

        {/* Life at Voxi */}
        <RevealOnScroll>
          <span className="eyebrow">LIFE AT VOXI</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
            {culture.map(c => (
              <div key={c.title} style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '1.5rem' }}>
                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{c.title}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

import React from 'react';
import { Marquee } from './shared/Marquee';
import { AnimatedCounter } from './shared/AnimatedCounter';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './StatsBar.css';

export function StatsBar() {
  return (
    <section className="stats-section section-padding">
      <div className="stats-marquee-container">
        <Marquee speed={25}>
          <span className="stats-headline">Automate the manual, accelerate the outcome. Voxi's AI agents handle the conversations, so your team can handle the growth. </span>
        </Marquee>
      </div>

      <RevealOnScroll className="stats-grid">
        <div className="stat-item">
          <p className="stats-support-text">
            Empowering teams with intelligent voice, chat, and workflow automation that turns every customer interaction into a measurable business outcome.
          </p>
        </div>
        <div className="stat-item">
          <div className="stats-number">
            <AnimatedCounter from={0} to={100} suffix="%" duration={1.5} />
          </div>
          <p className="stats-desc">Call audit coverage with AI — every interaction reviewed, not just a sample.</p>
        </div>
        <div className="stat-item">
          <div className="stats-number">
            <AnimatedCounter from={0} to={3} prefix="" suffix="x" duration={1.5} />
          </div>
          <p className="stats-desc">Lower CAC through AI-qualified, high-connectivity outbound campaigns.</p>
        </div>
      </RevealOnScroll>
    </section>
  );
}

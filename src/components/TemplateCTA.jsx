import React from 'react';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './TemplateCTA.css';

export function TemplateCTA() {
  return (
    <section className="section-padding">
      <RevealOnScroll className="container">
        <div className="template-cta-container glass" style={{ backgroundColor: 'var(--surface-color)' }}>
          <h2 className="template-cta-text">
            See what Voxi can automate for you — try the AI ROI & Efficiency Calculator.
          </h2>
          <button className="btn-primary" style={{ flexShrink: 0, padding: '1rem 2rem', fontSize: 'var(--text-base)' }}>
            Calculate My ROI
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
}

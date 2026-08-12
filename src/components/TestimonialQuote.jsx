import React from 'react';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './TestimonialQuote.css';

export function TestimonialQuote() {
  return (
    <section className="quote-section section-padding">
      <RevealOnScroll className="container quote-container">
        <h2 className="quote-text">
          "Our promise-to-pay rate went up and our cost to collect dropped — Voxi's AI calling handled EMI reminders and follow-ups we used to do manually."
        </h2>
        <p className="quote-author">— Head of Collections, NBFC client</p>
      </RevealOnScroll>
    </section>
  );
}

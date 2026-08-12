import React from 'react';
import { Marquee } from './shared/Marquee';
import './LogoTicker.css';

export function LogoTicker() {
  const industries = [
    "Real Estate",
    "Automobile",
    "Consumer Durable",
    "Fintech",
    "Healthcare",
    "Utilities",
  ];

  return (
    <section className="logo-ticker-section">
      <div className="ticker-inner">
        <span className="ticker-label">Trusted across industries</span>
        <div className="ticker-marquee-wrap">
          <Marquee speed={25}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {industries.map((ind, index) => (
                <span key={index} className="ticker-logo">{ind}</span>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

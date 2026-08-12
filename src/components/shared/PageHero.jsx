import React from 'react';
import './PageHero.css';

export function PageHero({ title, subtitle, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        {children}
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
}

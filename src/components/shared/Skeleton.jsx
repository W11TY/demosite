import React from 'react';
import './Skeleton.css';

/**
 * Category 5 — Skeleton screens
 * Shared pulsing skeleton primitives used as Suspense fallbacks.
 * Respects prefers-reduced-motion (pulse CSS is disabled via media query in Skeleton.css).
 */

function SkeletonBox({ width = '100%', height = '1rem', borderRadius = '8px', style = {} }) {
  return (
    <div
      className="skeleton-box"
      style={{ width, height, borderRadius, ...style }}
      aria-hidden="true"
    />
  );
}

// Card-grid skeleton — for Works / Insights / Pricing
export function SkeletonCardGrid({ cards = 3, aspectRatio = '4/3' }) {
  return (
    <div className="skeleton-card-grid" aria-label="Loading content..." role="status">
      {Array.from({ length: cards }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <SkeletonBox height="0" style={{ aspectRatio, height: undefined, paddingBottom: '0' }} />
          <div className="skeleton-card-image" style={{ aspectRatio }} />
          <div className="skeleton-card-body">
            <SkeletonBox height="0.75rem" width="40%" />
            <SkeletonBox height="1.1rem" width="85%" />
            <SkeletonBox height="1.1rem" width="65%" />
            <SkeletonBox height="0.85rem" width="50%" style={{ marginTop: '0.5rem' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

// Text-block skeleton — for Vision / FAQ
export function SkeletonTextBlock() {
  return (
    <div className="skeleton-text-block section-padding" aria-label="Loading content..." role="status">
      <div className="container">
        <SkeletonBox height="0.75rem" width="80px" borderRadius="999px" />
        <div style={{ marginTop: '1.5rem' }}>
          <SkeletonBox height="2.5rem" width="70%" />
          <SkeletonBox height="2.5rem" width="55%" style={{ marginTop: '0.5rem' }} />
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <SkeletonBox height="1rem" width="90%" />
          <SkeletonBox height="1rem" width="80%" style={{ marginTop: '0.5rem' }} />
          <SkeletonBox height="1rem" width="60%" style={{ marginTop: '0.5rem' }} />
        </div>
      </div>
    </div>
  );
}

// Hero skeleton
export function SkeletonHero() {
  return (
    <div className="skeleton-hero" aria-label="Loading hero..." role="status">
      <div className="skeleton-hero-inner">
        <SkeletonBox height="2rem" width="60%" />
        <SkeletonBox height="2rem" width="45%" style={{ marginTop: '0.5rem' }} />
        <SkeletonBox height="1rem" width="55%" style={{ marginTop: '1.5rem' }} />
        <SkeletonBox height="44px" width="160px" borderRadius="999px" style={{ marginTop: '1.5rem' }} />
      </div>
    </div>
  );
}

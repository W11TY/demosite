import React from 'react';
import './StatCallout.css';

export function StatCallout({ stats }) {
  if (!stats || stats.length === 0) return null;
  return (
    <div className="stat-callout-grid">
      {stats.map((stat, i) => (
        <div key={i} className="stat-card">
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

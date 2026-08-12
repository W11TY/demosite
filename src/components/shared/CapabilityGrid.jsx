import React from 'react';
import './CapabilityGrid.css';

export function CapabilityGrid({ capabilities }) {
  if (!capabilities || capabilities.length === 0) return null;
  return (
    <div className="capability-grid">
      {capabilities.map((cap, i) => (
        <div key={i} className="capability-card">
          <h3 className="capability-name">{cap.name}</h3>
          <p className="capability-def">{cap.definition}</p>
        </div>
      ))}
    </div>
  );
}

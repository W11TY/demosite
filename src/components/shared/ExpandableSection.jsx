import React, { useState } from 'react';
import './ExpandableSection.css';

export function ExpandableSection({ title, summary, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`expandable-section ${isExpanded ? 'expanded' : ''}`}>
      <div className="expandable-header" onClick={() => setIsExpanded(!isExpanded)}>
        <h3 className="expandable-title">{title}</h3>
        <button className="expand-toggle" aria-expanded={isExpanded}>
          {isExpanded ? '−' : '+'}
        </button>
      </div>
      
      {summary && !isExpanded && (
        <p className="expandable-summary">{summary}</p>
      )}

      <div className="expandable-content">
        {children}
      </div>
    </div>
  );
}

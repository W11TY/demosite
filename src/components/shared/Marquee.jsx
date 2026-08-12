import React from 'react';
import './Marquee.css';

export function Marquee({ children, speed = 30, direction = 'left', className = '' }) {
  return (
    <div className={`marquee-container ${className}`}>
      <div 
        className={`marquee-content ${direction}`} 
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}

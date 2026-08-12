import React from 'react';
import { Marquee } from './shared/Marquee';
import './AnnouncementTicker.css';

export function AnnouncementTicker({ text }) {
  return (
    <div className="announcement-ticker">
      <div className="announcement-inner">
        <div className="announcement-badge">
          <span className="announcement-badge-dot" />
          <span className="announcement-badge-label">Live</span>
        </div>
        <div className="announcement-marquee-wrap">
          <Marquee speed={25}>
            <span className="announcement-text">{text}</span>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

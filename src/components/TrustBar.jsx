import React from 'react';
import { FadeInUp, StaggerContainer } from './shared/Motion';

const industries = [
  "Real Estate",
  "Fintech",
  "Healthcare",
  "Automobile",
  "Utilities",
  "Consumer Durable"
];

export default function TrustBar() {
  return (
    <section className="w-full border-t border-b border-border bg-surface/30 backdrop-blur-sm py-5 overflow-hidden flex items-center relative"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}
    >
      <div 
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: 'marquee 40s linear infinite' }}
      >
        {[...Array(4)].map((_, trackIndex) => (
          <div key={trackIndex} className="flex items-center gap-[40px] pr-[40px]">
            <div className="text-eyebrow whitespace-nowrap opacity-60 flex items-center h-full">
              Powering conversations across industries
            </div>
            {industries.map((industry) => (
              <div
                key={industry}
                className="px-5 py-2.5 rounded-[12px] border border-border bg-white text-[13px] font-medium text-text-secondary whitespace-nowrap"
              >
                {industry}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { FadeInUp, StaggerContainer } from './shared/Motion';

const industries = [
  { name: "Real Estate", color: "bg-blue-400", tint: "bg-blue-50/50", border: "border-blue-100/50" },
  { name: "Fintech", color: "bg-emerald-400", tint: "bg-emerald-50/50", border: "border-emerald-100/50" },
  { name: "Healthcare", color: "bg-rose-400", tint: "bg-rose-50/50", border: "border-rose-100/50" },
  { name: "Automobile", color: "bg-amber-400", tint: "bg-amber-50/50", border: "border-amber-100/50" },
  { name: "Utilities", color: "bg-indigo-400", tint: "bg-indigo-50/50", border: "border-indigo-100/50" },
  { name: "Consumer Durable", color: "bg-cyan-400", tint: "bg-cyan-50/50", border: "border-cyan-100/50" }
];

export default function TrustBar() {
  return (
    <section className="w-full border-t border-b border-border bg-surface/30 backdrop-blur-sm py-5 overflow-hidden flex items-center relative"
      style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}
    >
      <div 
        className="flex w-max hover:[animation-play-state:paused]"
        style={{ animation: 'marquee 70s linear infinite' }}
      >
        {[...Array(4)].map((_, trackIndex) => (
          <div key={trackIndex} className="flex items-center gap-[40px] pr-[40px]">
            <div className="text-eyebrow whitespace-nowrap opacity-60 flex items-center h-full">
              Powering conversations across industries
            </div>
            {industries.map((ind) => (
              <div
                key={ind.name}
                className={`px-4 py-2 rounded-[12px] border ${ind.border} ${ind.tint} text-[13px] font-medium text-[#111111]/70 whitespace-nowrap flex items-center gap-2`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${ind.color}`} />
                {ind.name}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

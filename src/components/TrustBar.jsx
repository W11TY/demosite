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
    <section className="w-full border-t border-b border-border bg-surface/30 backdrop-blur-sm py-6">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-12">
        <FadeInUp className="text-eyebrow whitespace-nowrap">
          Powering conversations across industries
        </FadeInUp>
        
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
          {industries.map((industry, i) => (
            <FadeInUp
              key={industry}
              yOffset={10}
              delay={i * 0.05}
              className="px-4 py-2 rounded-pill border border-border bg-surface text-[13px] font-medium text-text-primary opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-default"
            >
              {industry}
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

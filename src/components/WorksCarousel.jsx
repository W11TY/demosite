import React from 'react';
import { FadeInUp } from './shared/Motion';
import SectionMarquee from './shared/SectionMarquee';

const works = [
  {
    industry: "Real Estate",
    logo: "Real Estate Co",
    stats: [
      { label: "Connectivity", value: "90%" },
      { label: "More Conversions", value: "40%" },
      { label: "Lower CAC", value: "3x" },
      { label: "Missed Follow-ups", value: "Zero" }
    ]
  },
  {
    industry: "Consumer Durable",
    logo: "Durable Brands",
    stats: [
      { label: "Automation", value: "80%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Faster Resolution", value: "2x" },
      { label: "CSAT Increase", value: "3x" }
    ]
  },
  {
    industry: "Fintech",
    logo: "Fintech Global",
    stats: [
      { label: "Right Party Conn.", value: "90%" },
      { label: "Promise-To-Pay", value: "+50%" },
      { label: "Cost to Collect", value: "-75%" },
      { label: "Recovery Cycle", value: "-40%" }
    ]
  },
  {
    industry: "Healthcare",
    logo: "Healthcare Partners",
    stats: [
      { label: "Lead Connectivity", value: "90%" },
      { label: "More Conversions", value: "40%" },
      { label: "Lower CAC", value: "3x" },
      { label: "No-Shows", value: "-80%" }
    ]
  },
  {
    industry: "Utilities",
    logo: "City Utilities",
    stats: [
      { label: "Query Resolution", value: "85%" },
      { label: "Support Costs", value: "-45%" },
      { label: "Bill Reminders", value: "Auto" },
      { label: "CSAT Score", value: "4.8/5" }
    ]
  },
  {
    industry: "Automobile",
    logo: "Auto Motors",
    stats: [
      { label: "Survey Completion", value: "65%" },
      { label: "Lead Qualification", value: "Instant" },
      { label: "Conversion Rate", value: "+30%" },
      { label: "Service Booking", value: "Auto" }
    ]
  }
];

export default function WorksCarousel() {
  return (
    <section className="w-full pt-[100px] lg:pt-[180px] pb-[80px] lg:pb-[120px] border-b border-border bg-background overflow-hidden relative">
      
      {/* Massive Marquee */}
      <SectionMarquee title="Our Works" />

      {/* Grid / Carousel Layout */}
      <div className="w-full px-6 lg:px-[58px] pb-12 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-[16px] overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar pr-6 md:pr-0">
        {works.map((work, i) => (
            <FadeInUp 
              key={i}
              delay={(i % 3) * 0.1}
              className="w-[85vw] md:w-full min-w-[85vw] md:min-w-0 snap-center group shrink-0"
            >
              {/* Card Content */}
              <div className="flex flex-col border border-border rounded-[24px] overflow-hidden h-[420px] bg-surface group-hover:bg-[#111111] transition-colors duration-300">
                
                {/* Visual Top */}
                <div className="relative w-full flex-grow flex items-center justify-center p-8 border-b border-border bg-background group-hover:bg-[#1a1a1a] transition-colors duration-300">
                  <div className="absolute top-6 left-6 px-3 py-1.5 rounded-pill border border-border group-hover:border-white/20 bg-surface group-hover:bg-white/5 transition-colors duration-300">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-text-primary group-hover:text-white transition-colors duration-300">
                      {work.industry} AI
                    </span>
                  </div>
                  
                  {/* Centered Logo text fallback */}
                  <span className="text-[28px] font-bold tracking-tight transition-colors duration-300 text-text-secondary group-hover:text-white">
                    {work.logo}
                  </span>
                </div>

                {/* Bottom 2x2 Stats Grid */}
                <div className="grid grid-cols-2">
                  {work.stats.map((stat, idx) => {
                    // Add bottom border for top row, right border for left column
                    const isTopRow = idx < 2;
                    const isLeftCol = idx % 2 === 0;
                    
                    return (
                      <div 
                        key={idx} 
                        className={`p-6 flex flex-col justify-center ${isTopRow ? 'border-b border-border' : ''} ${isLeftCol ? 'border-r border-border' : ''} bg-surface group-hover:bg-[#111111] transition-colors duration-300`}
                      >
                        <span className="text-[18px] md:text-[20px] font-semibold text-text-primary group-hover:text-white transition-colors duration-300 mb-1">
                          {stat.value}
                        </span>
                        <span className="text-[12px] text-text-secondary group-hover:text-white/70 transition-colors duration-300 font-medium">
                          {stat.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                
              </div>
            </FadeInUp>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { FadeInUp } from './shared/Motion';
import SectionMarquee from './shared/SectionMarquee';
import cr1 from '../assets/cards/cr1.png';
import cr2 from '../assets/cards/cr2.png';
import cr3 from '../assets/cards/cr3.png';
import cr4 from '../assets/cards/cr4.png';
import cr5 from '../assets/cards/cr5.png';
import cr6 from '../assets/cards/cr6.png';
import { Globe, Smartphone, Code2, ShieldCheck, Zap, Car } from 'lucide-react';

const works = [
  {
    industry: "Real Estate AI",
    icon: Globe,
    image: cr1,
    desc: "Automated follow-ups and lead qualification to ensure zero missed opportunities and 3x lower CAC."
  },
  {
    industry: "Consumer Durable",
    icon: Smartphone,
    image: cr2,
    desc: "Automate 80% of support queries while tripling customer satisfaction and cutting costs."
  },
  {
    industry: "Fintech Solutions",
    icon: ShieldCheck,
    image: cr3,
    desc: "Cut cost-to-collect by 75% using AI agents that outperform human collectors on every metric."
  },
  {
    industry: "Healthcare Systems",
    icon: Code2,
    image: cr4,
    desc: "Reduce patient no-shows by 80% with intelligent scheduling and fully automated reminders."
  },
  {
    industry: "Utilities AI",
    icon: Zap,
    image: cr5,
    desc: "Achieve a 4.8/5 CSAT score with query resolution and bill reminders running on autopilot."
  },
  {
    industry: "Automobile Tech",
    icon: Car,
    image: cr6,
    desc: "Boost conversion by 30% with instant lead qualification and automated service booking."
  }
];

export default function WorksCarousel() {
  return (
    <section className="w-full pt-[100px] lg:pt-[180px] pb-[80px] lg:pb-[120px] border-b border-border bg-[#F7F7F7] overflow-hidden relative">

      {/* Massive Marquee */}
      <SectionMarquee title="Our Works" />

      <div className="w-full px-6 lg:px-[58px] mb-12 mt-12">
        <h2 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight leading-[1.1] text-[#111111] max-w-[800px]">
          Everything you need, from one team, on a fixed deadline
        </h2>
      </div>

      {/* Auto-scrolling Carousel Layout */}
      <div className="w-full pb-12 overflow-hidden group/marquee">
        <div className="flex w-max gap-[24px] animate-[marquee_50s_linear_infinite] group-hover/marquee:[animation-play-state:paused] px-6 lg:px-[58px]">
          {[...works, ...works].map((work, i) => {
            const Icon = work.icon;
            return (
              <div
                key={i}
                className="w-[300px] md:w-[340px] shrink-0 group"
              >
                {/* Card */}
                <div className="relative flex flex-col bg-white overflow-hidden h-[480px] md:h-[520px] rounded-[24px] border border-black/10 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  
                  {/* Background Image */}
                  <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105">
                    <img src={work.image} alt={work.industry} className="w-full h-full object-cover" />
                  </div>

                  {/* White gradient overlay (pushing it lower so the image is incredibly clear) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent to-70%" />

                  {/* Top Left Icon */}
                  <div className="relative z-10 p-6">
                    <div className="w-8 h-8 rounded-md bg-white/80 shadow-sm flex items-center justify-center">
                      <Icon size={16} className="text-black" strokeWidth={2} />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 mt-auto p-6 pt-20">
                    <h3 className="text-[22px] font-semibold text-[#111111] tracking-tight mb-2">
                      {work.industry}
                    </h3>
                    <p className="text-[14px] text-black/60 leading-relaxed">
                      {work.desc}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

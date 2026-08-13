import React from 'react';
import { TrendingUp, Rocket, Quote, User } from 'lucide-react';
import { FadeInUp, StaggerContainer, ScrollWordReveal } from './shared/Motion';

export default function BentoSection() {
  return (
    <section className="w-full pt-[100px] lg:pt-[180px] pb-[80px] lg:pb-[120px] bg-[#F7F7F7]">
      <div className="w-full px-6 lg:px-[58px]">
        
        {/* Header Text */}
        <div className="max-w-[1100px] mb-[48px]">
          <ScrollWordReveal 
            as="h2" 
            className="text-[clamp(36px,10vw,72px)] font-medium tracking-[-0.04em] leading-[1.0] text-[#111111] mb-[24px]"
            text="Automate the manual, accelerate the future. Our custom AI solutions deliver measurable growth and operational excellence."
          />
          <FadeInUp as="p" delay={0.1} className="text-[17px] text-black/60 max-w-[650px] leading-relaxed">
            Empowering teams with intelligent tools that turn complex data into actionable business outcomes daily.
          </FadeInUp>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.16fr_1fr_1.16fr_1.16fr] gap-[12px]">
          
          {/* Card 1: $45M */}
          <FadeInUp 
            className="bg-[#1a1a1a] rounded-[24px] p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-[450px]"
          >
            <div className="w-12 h-12 bg-white rounded-[12px] flex items-center justify-center mb-8">
              <TrendingUp size={24} className="text-black" />
            </div>
            
            <div className="mt-auto">
              <div className="text-[48px] md:text-[64px] text-white font-medium tracking-tight leading-none mb-4">
                $45M
              </div>
              <p className="text-[14px] text-white/60 leading-relaxed max-w-[90%]">
                Revenue generated for our clients through AI-led optimizations.
              </p>
            </div>
          </FadeInUp>

          {/* Column 2: Stacked Cards */}
          <div className="flex flex-col gap-[12px] h-[450px]">
            {/* Card 2a: Agents */}
            <FadeInUp 
              delay={0.1}
              className="bg-transparent border border-dashed border-border/80 rounded-[24px] p-8 flex-1 flex flex-col items-center justify-center gap-4 relative overflow-hidden"
            >
              {/* Overlapping Avatars */}
              <div className="flex -space-x-4 mb-2">
                {[
                  { bg: "bg-blue-100", c: "text-blue-600" },
                  { bg: "bg-green-100", c: "text-green-600" },
                  { bg: "bg-yellow-100", c: "text-yellow-600" },
                  { bg: "bg-purple-100", c: "text-purple-600" }
                ].map((item, i) => (
                  <div key={i} className={`w-12 h-12 rounded-full border-[3px] border-white flex items-center justify-center ${item.bg} ${item.c} shadow-sm z-${40-i*10}`}>
                    <User size={20} />
                  </div>
                ))}
              </div>
              <div className="text-[13px] font-medium text-text-primary flex items-center gap-2">
                <span className="font-bold">15,400</span> active agents
              </div>
            </FadeInUp>

            {/* Card 2b: 5x */}
            <FadeInUp 
              delay={0.2}
              className="bg-[#EBEBEB] rounded-[24px] p-6 flex items-end gap-4 h-[120px] shrink-0"
            >
              <div className="text-[40px] md:text-[48px] font-medium tracking-tight leading-none text-text-primary">
                5x
              </div>
              <div className="text-[14px] text-text-secondary leading-snug pb-1.5">
                Faster speed to market.
              </div>
            </FadeInUp>
          </div>

          {/* Card 3: Rocket */}
          <FadeInUp 
            delay={0.3}
            className="bg-[#EBEBEB] rounded-[24px] p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-[450px]"
          >
            <div className="flex-1 flex items-center justify-center w-full relative">
              {/* Sunburst Lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-px h-[100px] bg-gradient-to-t from-transparent via-text-secondary/40 to-transparent"
                    style={{ transform: `rotate(${i * 15}deg)` }}
                  />
                ))}
              </div>
              {/* Center Circle */}
              <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center relative z-10 shadow-lg">
                <Rocket size={24} className="text-white" />
              </div>
            </div>

            <div className="mt-8">
              <div className="text-[18px] font-medium tracking-tight text-text-primary mb-2">
                Inference speed
              </div>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                Real-time processing for enterprise-grade deployments.
              </p>
            </div>
          </FadeInUp>

          {/* Card 4: Testimonial */}
          <FadeInUp 
            delay={0.4}
            className="bg-white rounded-[24px] p-8 flex flex-col justify-between aspect-square md:aspect-auto md:h-[450px] shadow-sm"
          >
            <div className="flex items-start justify-between mb-8">
              <Quote size={28} className="text-text-primary" fill="currentColor" />
              <div className="font-bold text-[18px] tracking-tight text-text-primary">
                Cigna
              </div>
            </div>

            <div className="mt-auto">
              <p className="text-[18px] text-text-primary leading-relaxed font-medium mb-6">
                The custom LLM they built for us reduced our support tickets by 80% while increasing user satisfaction.
              </p>
              <div className="flex items-center gap-3 text-[14px] text-text-secondary">
                <div className="w-1 h-1 bg-text-secondary rounded-full" />
                CTO, Cigna
              </div>
            </div>
          </FadeInUp>

        </div>
      </div>
    </section>
  );
}

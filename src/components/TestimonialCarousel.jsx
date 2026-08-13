import React from 'react';
import { FadeInUp, ScrollWordReveal } from './shared/Motion';

export default function TestimonialCarousel() {
  return (
    <section className="w-full pt-[100px] pb-[100px] md:pt-[200px] md:pb-[200px] bg-[#181818] overflow-hidden">
      <div className="w-full px-6 lg:px-[58px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative">
        
        {/* Left Column: Visual Quiet / Restrained Space */}
        <div className="hidden lg:flex lg:col-span-5 h-full relative border-r border-white/5 items-start">
          {/* Subtle graphic treatment */}
          <FadeInUp className="absolute top-0 right-0 w-8 h-px bg-white/10" />
          <FadeInUp delay={0.1} className="w-[70%] xl:w-[60%] aspect-[4/5] border border-white/5 rounded-[24px] bg-white/[0.01] mt-8 flex items-center justify-center relative overflow-hidden">
             {/* Faint crosshairs indicating empty identity slot */}
             <div className="w-px h-6 bg-white/10 absolute" />
             <div className="w-6 h-px bg-white/10 absolute" />
          </FadeInUp>
        </div>

        {/* Right Column: Editorial Typographic Monument */}
        <div className="flex flex-col lg:col-span-7 relative z-10 lg:pl-16">
          
          {/* Eyebrow Capsule */}
          <FadeInUp className="flex items-center gap-4 mb-16 lg:mb-20 w-full">
            <span className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase shrink-0">
              Trusted by innovators
            </span>
            <div className="h-px bg-white/10 flex-grow max-w-[120px]" />
            <div className="w-10 h-6 rounded-full border border-white/20 flex items-center justify-center bg-transparent shrink-0" />
          </FadeInUp>

          {/* Huge Editorial Quote */}
          <div className="relative mb-16 max-w-[850px]">
            {/* Restrained decorative element */}
            <span className="absolute -left-12 -top-12 text-[140px] leading-none font-serif text-white/[0.03] pointer-events-none select-none">
              “
            </span>
            <ScrollWordReveal 
              as="h2" 
              className="text-[clamp(32px,8vw,54px)] md:text-[clamp(48px,5vw,68px)] font-medium tracking-[-0.045em] leading-[1.02] text-[#F5F5F5]"
              text="We deployed the Voxi Collections OS and saw a 50% increase in promise-to-pay within the first month. The AI handles objections just like our best human agents."
            />
          </div>

          {/* Technical Attribution */}
          <FadeInUp delay={0.2} className="flex flex-col gap-2 relative z-10">
            <div className="w-6 h-px bg-white/20 mb-3" />
            <span className="text-[12px] font-mono tracking-[0.15em] text-white/80 uppercase">
              Placeholder Name
            </span>
            <span className="text-[14px] text-white/40">
              Head of Collections, FinTech
            </span>
          </FadeInUp>

        </div>
      </div>
    </section>
  );
}

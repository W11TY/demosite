import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';
import { FadeInUp } from './shared/Motion';

export default function Hero() {
  const headlineLines = [
    "One Ecosystem.",
    "Every Conversation."
  ];

  return (
    <section className="relative w-full pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden flex flex-col items-center">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-black/[0.02] blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-[1200px] w-full mx-auto px-6 md:px-16 flex flex-col items-center text-center relative z-10">
        
        {/* Top Label */}
        <FadeInUp
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface shadow-sm mb-8"
        >
          <Sparkles size={14} className="text-text-primary" />
          <span className="text-[13px] font-medium text-text-primary tracking-wide">Voxi Engine // Live v2.4</span>
        </FadeInUp>

        {/* Headline Block */}
        <div className="flex flex-col items-center mb-6">
          {headlineLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <FadeInUp 
                as="h1"
                delay={i * 0.1 + 0.1}
                className="text-[56px] sm:text-[72px] md:text-[96px] lg:text-[110px] font-bold leading-[0.9] tracking-tight text-text-primary"
              >
                {line}
              </FadeInUp>
            </div>
          ))}
        </div>

        {/* Subheading */}
        <FadeInUp
          as="p"
          delay={headlineLines.length * 0.1 + 0.2}
          className="text-[18px] md:text-[20px] text-text-secondary max-w-[640px] leading-relaxed mb-10"
        >
          Unify Voice AI, WhatsApp, and Cloud Telephony into a single intelligent platform. Deliver exceptional customer experiences at scale.
        </FadeInUp>

        {/* CTAs */}
        <FadeInUp
          delay={headlineLines.length * 0.1 + 0.3}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20"
        >
          <a
            href="#demo"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-cta-fill text-cta-text rounded-full px-8 py-4 text-[16px] font-medium transition-transform hover:scale-[1.02] shadow-xl"
          >
            Book a Demo
            <ArrowRight size={18} />
          </a>
          <a
            href="#platform"
            className="flex items-center justify-center w-full sm:w-auto bg-surface text-text-primary border border-border rounded-full px-8 py-4 text-[16px] font-medium transition-all hover:bg-black/5 hover:scale-[1.02]"
          >
            Explore Platform
          </a>
        </FadeInUp>

        {/* Giant Visual Card */}
        <FadeInUp
          delay={0.5}
          yOffset={40}
          className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-2xl border border-border bg-surface"
        >
          <img src={heroImg} alt="Voxi Platform Interface" className="w-full h-full object-cover" />
          
          {/* Inner glossy reflection */}
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[24px] md:rounded-[32px] pointer-events-none" />
        </FadeInUp>

      </div>
    </section>
  );
}

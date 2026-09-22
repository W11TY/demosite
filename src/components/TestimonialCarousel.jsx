import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, ScrollWordReveal } from './shared/Motion';

export default function TestimonialCarousel() {
  return (
    <section className="w-full pt-[100px] pb-[100px] md:pt-[200px] md:pb-[200px] bg-[#181818] overflow-hidden">
      <div className="w-full px-6 lg:px-[58px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative">
        
        {/* Left Column: Illustration */}
        <div className="flex flex-col lg:col-span-5 h-full relative lg:border-r lg:border-white/5 items-start order-2 lg:order-1 mt-12 lg:mt-0">
          <FadeInUp delay={0.1} className="w-full sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mt-8 mx-auto lg:mx-0">
            {/* AI Collections Illustration */}
            <div className="relative rounded-[24px] border border-white/10 bg-white/[0.03] overflow-hidden p-6 flex flex-col gap-4">

              {/* Header row */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">AI Agent · Live Call</span>
              </div>

              {/* Chat bubbles */}
              <div className="flex flex-col gap-3">
                {/* Agent bubble */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="4" r="2" fill="rgba(255,255,255,0.6)"/>
                      <path d="M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="bg-white/8 border border-white/10 rounded-[12px] rounded-tl-[4px] px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-[11px] text-white/70 leading-relaxed">Hi, this is Voxi. I'm calling regarding your outstanding balance of <span className="text-white font-medium">₹24,500</span>. Can we work out a payment today?</p>
                  </div>
                </motion.div>

                {/* Customer bubble */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="flex items-start gap-2 justify-end"
                >
                  <div className="bg-white/5 border border-white/8 rounded-[12px] rounded-tr-[4px] px-3 py-2 max-w-[80%] shadow-sm">
                    <p className="text-[11px] text-white/50 leading-relaxed">I can't pay the full amount right now, times are tough.</p>
                  </div>
                </motion.div>

                {/* Agent response */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className="flex items-start gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="4" r="2" fill="rgba(255,255,255,0.6)"/>
                      <path d="M2 10c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="bg-white/8 border border-white/10 rounded-[12px] rounded-tl-[4px] px-3 py-2 max-w-[85%] shadow-sm">
                    <p className="text-[11px] text-white/70 leading-relaxed">Totally understand. How about a <span className="text-emerald-400 font-medium">₹8,000 promise-to-pay</span> by Friday? I can send a link right now.</p>
                  </div>
                </motion.div>

                {/* Customer agrees */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.4 }}
                  className="flex items-start gap-2 justify-end"
                >
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-[12px] rounded-tr-[4px] px-3 py-2 max-w-[80%] shadow-sm">
                    <p className="text-[11px] text-emerald-400 leading-relaxed font-medium">Yes, that works. Send it over.</p>
                  </div>
                </motion.div>
              </div>

              {/* Waveform */}
              <div className="flex items-center gap-[3px] h-6 mt-1 px-1 overflow-hidden">
                {[3,6,10,7,12,5,9,14,6,4,11,8,13,5,7,3,9,12,6,8,4,10,7,5].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [Math.max(2, h * 0.4), h, Math.max(2, h * 0.4)] }}
                    transition={{ repeat: Infinity, duration: 0.6 + (i % 4) * 0.2, ease: "easeInOut", delay: i * 0.05 }}
                    className="w-[3px] rounded-full bg-emerald-400/50"
                    style={{ opacity: 0.3 + (i % 4) * 0.15 }}
                  />
                ))}
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1] }} 
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-[9px] text-white/30 font-mono ml-2"
                >
                  0:42
                </motion.span>
              </div>

              {/* Promise-to-Pay Badge */}
              <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-1">
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-widest font-mono mb-0.5">Promise-to-Pay</div>
                  <div className="text-[22px] font-semibold text-white tracking-tight">+50% <span className="text-[12px] text-emerald-400 font-normal">this month</span></div>
                </div>
                <div className="w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 13 L8 8 L11 11 L15 5" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Right Column: Editorial Typographic Monument */}
        <div className="flex flex-col lg:col-span-7 relative z-10 lg:pl-16 order-1 lg:order-2">
          
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

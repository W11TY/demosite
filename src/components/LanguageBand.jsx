import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, FadeIn } from './shared/Motion';

const languages = [
  "Hindi", "English", "Tamil", "Telugu", "Marathi", "Gujarati", 
  "Bengali", "Kannada", "Malayalam", "Punjabi", "Spanish", "Arabic", "French"
];

export default function LanguageBand() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#171717] to-[#181818] overflow-hidden">
      <div className="w-full px-6 lg:px-[58px] mb-12 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div>
          <FadeInUp as="h2" className="text-[20px] md:text-[24px] font-medium text-[#F5F5F5] tracking-tight mb-2">
            Native Speech Capabilities
          </FadeInUp>
          <FadeInUp as="p" delay={0.1} className="text-[14px] text-white/50">
            Engage customers seamlessly in multiple Indian and Global languages.
          </FadeInUp>
        </div>
        <FadeInUp delay={0.2} className="hidden md:flex px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02]">
          <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
            Real-time switching supported
          </span>
        </FadeInUp>
      </div>

      {/* Marquee Loop with Mask */}
      <div 
        className="relative w-full flex overflow-hidden group"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >
        <motion.div 
          animate={{ x: [0, -1035] }} // Approximate width of one set
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-4 whitespace-nowrap pl-6"
        >
          {/* Double array to create seamless loop */}
          {[...languages, ...languages, ...languages].map((lang, i) => (
            <div 
              key={i}
              className="flex-shrink-0 px-6 py-3 rounded-full bg-white/[0.02] border border-white/5 text-[14px] font-medium text-white/60 hover:text-white hover:border-white/20 transition-colors"
            >
              {lang}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

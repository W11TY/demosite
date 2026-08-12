import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, FadeIn } from './shared/Motion';

const languages = [
  "Hindi", "English", "Tamil", "Telugu", "Marathi", "Gujarati", 
  "Bengali", "Kannada", "Malayalam", "Punjabi", "Spanish", "Arabic", "French"
];

export default function LanguageBand() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface/30 border-b border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 mb-8 text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <FadeInUp as="h2" className="text-[20px] md:text-[24px] font-medium text-text-primary tracking-tight mb-2">
            Native Speech Capabilities
          </FadeInUp>
          <FadeInUp as="p" delay={0.1} className="text-[14px] text-text-secondary">
            Engage customers seamlessly in multiple Indian and Global languages.
          </FadeInUp>
        </div>
        <FadeInUp delay={0.2} className="hidden md:flex px-3 py-1 rounded-pill border border-border bg-background">
          <span className="text-[11px] font-mono tracking-wider text-text-secondary uppercase">
            Real-time switching supported
          </span>
        </FadeInUp>
      </div>

      {/* Marquee Loop */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: [0, -1035] }} // Approximate width of one set
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-4 whitespace-nowrap pl-6"
        >
          {/* Double array to create seamless loop */}
          {[...languages, ...languages, ...languages].map((lang, i) => (
            <div 
              key={i}
              className="flex-shrink-0 px-6 py-3 rounded-pill bg-background border border-border text-[14px] font-medium text-text-primary hover:border-text-secondary transition-colors"
            >
              {lang}
            </div>
          ))}
        </motion.div>

        {/* Right Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      </div>
    </section>
  );
}

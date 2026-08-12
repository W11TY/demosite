import React from 'react';
import { motion } from 'framer-motion';

export default function SectionMarquee({ title }) {
  return (
    <div className="w-full overflow-hidden flex whitespace-nowrap mb-12 md:mb-20 py-4 relative">
      
      {/* We use two identical blocks animating from 0 to -100% */}
      <motion.div 
        className="flex w-max items-center whitespace-nowrap will-change-transform"
        animate={{ x: [0, "-50%"] }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {/* We need enough repetitions to ensure it fills the screen twice, 
            so that -50% translates exactly one full visual cycle without empty space.
            8 items guarantee it for almost any title length. */}
        {Array.from({ length: 8 }).map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-[12vw] leading-none font-bold tracking-tighter text-text-primary px-8 md:px-12">
              {title}
            </span>
            <svg viewBox="0 0 100 100" className="w-[8vw] h-[8vw] text-text-primary/20 shrink-0" fill="currentColor">
              <path d="M50 0L55 40L95 20L65 50L95 80L55 60L50 100L45 60L5 80L35 50L5 20L45 40Z" />
            </svg>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CapabilityPills({ capabilities }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isAnyHovered = hoveredIndex !== null;

  const getStatusColor = (status) => {
    const s = status?.toLowerCase() || '';
    if (s === 'live') return 'text-emerald-500';
    if (s.includes('futur')) return 'text-purple-500';
    return 'text-blue-500';
  };

  return (
    <div className="w-full flex flex-col">
      {/* Pills Container */}
      <div className="flex flex-wrap gap-3 md:gap-4 relative">
        {capabilities.map((cap, idx) => {
          const isHovered = hoveredIndex === idx;
          const isBlurred = isAnyHovered && !isHovered;

          return (
            <button
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${idx * 0.15}s` }}
              className={`relative group flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 border cursor-pointer ${
                isHovered 
                  ? 'bg-black border-black text-white shadow-lg shadow-black/10 scale-[1.02] z-40' 
                  : 'bg-transparent border-black/10 text-text-secondary animate-blue-wave'
              } ${
                isBlurred ? 'blur-[3px] opacity-40 scale-[0.98] z-0' : 'z-10'
              }`}
            >
              <span className={`text-[14px] md:text-[15px] tracking-tight text-left ${isHovered ? 'font-medium' : 'font-normal'}`}>
                {cap.title || cap.name}
              </span>
              
              {cap.status && (
                <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider transition-opacity ${getStatusColor(cap.status)} ${
                  isBlurred ? 'opacity-0' : 'opacity-100'
                }`}>
                  • {cap.status}
                </span>
              )}

              {/* Tooltip Card on Hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute bottom-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[320px] bg-white/95 backdrop-blur-xl border border-black/10 shadow-[0_24px_48px_rgba(0,0,0,0.12)] rounded-2xl p-5 pointer-events-none text-left flex flex-col gap-2"
                  >
                    <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 backdrop-blur-xl border-b border-r border-black/10 rotate-45 shadow-sm" />
                    <h4 className="text-[16px] font-semibold text-black tracking-tight leading-snug relative z-10">
                      {cap.title || cap.name}
                    </h4>
                    <p className="text-[14px] text-black/70 leading-relaxed font-normal normal-case relative z-10">
                      {cap.definition || cap.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
}

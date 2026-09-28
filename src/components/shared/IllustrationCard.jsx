import React from 'react';
import { motion } from 'framer-motion';
import { GridBg, Motifs } from './Motifs';
import { FadeInUp } from './Motion';

export default function IllustrationCard({ name, desc, motifIndex, idx, delay = 0, metricRow }) {
  const hoverVariant = {
    rest: { scale: 1, rotate: 0, y: 0 },
    hover: { scale: 1.03, rotate: idx % 2 === 0 ? 1.5 : -1.5, y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }
  };
  const iconHover = {
    rest: { scale: 1 },
    hover: { scale: 1.15, transition: { type: 'spring', stiffness: 400, damping: 15 } }
  };
  
  const Motif = Motifs[motifIndex % Motifs.length];

  return (
    <FadeInUp delay={delay} className="h-full">
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        variants={hoverVariant}
        className="rounded-[16px] bg-[#16130F] flex flex-col overflow-hidden h-full cursor-pointer shadow-lg hover:shadow-2xl outline-none focus-visible:ring-1 focus-visible:ring-[#1283a9]/60"
      >
        <div className="relative w-full h-[140px] bg-[#EAE4D8] overflow-hidden">
          <svg viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet" className="w-full h-full">
            <GridBg />
            <Motif hoverAccent={iconHover} />
          </svg>
        </div>
        <div className="p-6 flex-1 transition-all duration-300 flex flex-col" style={{ 
          background: 'linear-gradient(180deg, #16130F 0%, #16130F 55%, color-mix(in srgb, var(--global-accent) 28%, #16130F) 100%)',
          borderTop: '2px solid color-mix(in srgb, var(--global-accent) 80%, transparent)'
        }}>
          <h3 className="text-[18px] font-medium text-white mb-2">{name}</h3>
          <p className="text-[14px] text-white/70 mb-4 flex-1">{desc}</p>
          {metricRow && (
            <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-[11px] text-[var(--global-accent)] uppercase tracking-widest">{metricRow.label}</span>
              <span className="font-mono text-[14px] text-white">{metricRow.value}</span>
            </div>
          )}
        </div>
      </motion.div>
    </FadeInUp>
  );
}

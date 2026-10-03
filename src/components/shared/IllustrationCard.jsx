import React from 'react';
import { motion } from 'framer-motion';
import { GridBg, Motifs } from './Motifs';
import { FadeInUp } from './Motion';
import logo from '../../assets/logo.png';

export default function IllustrationCard({ name, desc, motifIndex, idx, delay = 0, metricRow }) {
  const cardId = `card-${motifIndex}-${idx}`;

  const Motif = Motifs[motifIndex % Motifs.length];

  return (
    <FadeInUp delay={delay} className="h-full">
      <div
        className="relative rounded-[24px] bg-white flex flex-col overflow-hidden h-full cursor-pointer group outline-none border border-black/5 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_color-mix(in_srgb,var(--global-accent)_25%,rgba(0,0,0,0.1))]"
        style={{
          boxShadow: '0 8px 30px rgba(0,0,0,0.03)'
        }}
      >
        {/* Subtle accent glow behind the whole card on hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--global-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* ── Illustration zone ── */}
        <div
          className="relative w-full overflow-hidden flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]"
          style={{
            height: '240px',
            background: 'radial-gradient(ellipse 120% 100% at 50% 100%, color-mix(in srgb, var(--global-accent) 15%, transparent) 0%, #FAFAFA 100%)',
          }}
        >
          {/* subtle top shine */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)' }}
          />

          {/* corner label */}
          <div
            className="absolute top-4 left-5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-black/5"
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--global-accent)' }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-black/70">
              Live Module
            </span>
          </div>

          {/* SVG illustration */}
          <svg
            viewBox="0 0 200 100"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          >
            <GridBg id={cardId} />
            <Motif />
          </svg>

          {/* Center Logo overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-black/5 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
            <img src={logo} alt="Logo" className="w-9 h-9 object-contain opacity-90" />
          </div>

          {/* bottom fade to blend smoothly with the white card body */}
          <div
            className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, white)' }}
          />
        </div>

        {/* ── Info zone ── */}
        <div className="p-7 flex-1 flex flex-col bg-white relative z-10">
          <h3 className="text-[20px] font-semibold text-[#111111] mb-3 leading-tight tracking-tight group-hover:text-[var(--global-accent)] transition-colors duration-300">{name}</h3>

          {desc && (
            <p className="text-[14px] text-black/60 leading-relaxed font-light flex-1">{desc}</p>
          )}

          {metricRow && (
            <div className="mt-6 pt-5 flex items-center justify-between border-t border-black/5">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-black/40">
                {metricRow.label}
              </span>
              <div className="flex items-center gap-2">
                <span className="font-sans text-[13px] font-medium" style={{ color: 'var(--global-accent)' }}>
                  {metricRow.value}
                </span>
                <div className="w-4 h-4 rounded-full flex items-center justify-center bg-[var(--global-accent)]/10">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--global-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </FadeInUp>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { GridBg, Motifs } from './Motifs';
import { FadeInUp } from './Motion';

export default function IllustrationCard({ name, desc, motifIndex, idx, delay = 0, metricRow }) {
  const cardId = `card-${motifIndex}-${idx}`;

  const Motif = Motifs[motifIndex % Motifs.length];

  return (
    <FadeInUp delay={delay} className="h-full">
      <div
        className="rounded-[20px] bg-[#16130F] flex flex-col overflow-hidden h-full cursor-pointer group outline-none"
        style={{
          boxShadow: '0 4px 32px rgba(20,17,15,0.22), 0 1.5px 0 0 color-mix(in srgb, var(--global-accent) 40%, transparent) inset'
        }}
      >
        {/* ── Illustration zone ── */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            height: '200px',
            background: 'radial-gradient(ellipse 80% 70% at 50% 60%, color-mix(in srgb, var(--global-accent) 18%, #1C1814) 0%, #16130F 100%)',
          }}
        >
          {/* subtle top shine */}
          <div
            className="absolute inset-x-0 top-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, color-mix(in srgb, var(--global-accent) 60%, transparent), transparent)' }}
          />

          {/* corner label */}
          <div
            className="absolute top-3 left-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{ background: 'color-mix(in srgb, var(--global-accent) 15%, transparent)', border: '1px solid color-mix(in srgb, var(--global-accent) 30%, transparent)' }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: 'var(--global-accent)' }}
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <span className="font-mono text-[9px] uppercase tracking-[0.18em]" style={{ color: 'var(--global-accent)' }}>
              Live
            </span>
          </div>

          {/* SVG illustration */}
          <svg
            viewBox="0 0 200 100"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-full"
          >
            <GridBg id={cardId} />
            <Motif />
          </svg>

          {/* bottom fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-12 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #16130F)' }}
          />
        </div>

        {/* ── Info zone ── */}
        <div
          className="p-6 flex-1 flex flex-col"
          style={{
            borderTop: '1px solid color-mix(in srgb, var(--global-accent) 25%, transparent)',
          }}
        >
          <h3 className="text-[17px] font-semibold text-white mb-2 leading-snug">{name}</h3>

          {desc && (
            <p className="text-[13px] text-white/55 leading-relaxed font-light flex-1">{desc}</p>
          )}

          {metricRow && (
            <div
              className="mt-5 pt-4 flex items-center justify-between"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <span
                className="font-mono text-[10px] uppercase tracking-[0.18em]"
                style={{ color: 'var(--global-accent)' }}
              >
                {metricRow.label}
              </span>
              <span
                className="font-mono text-[13px] font-semibold"
                style={{ color: 'var(--global-accent)' }}
              >
                {metricRow.value}
              </span>
            </div>
          )}
        </div>
      </div>
    </FadeInUp>
  );
}

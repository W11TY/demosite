import React from 'react';
import { motion } from 'framer-motion';
import { research } from '../data/research';

export default function ResearchOverview() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Cinematic Header */}
      <div className="w-full flex justify-center p-3 lg:p-[12px]">
        <section className="relative w-full max-w-[1600px] min-h-[50vh] lg:min-h-[400px] rounded-[24px] overflow-hidden bg-[#0a0a0a] shadow-sm isolate flex flex-col justify-end pb-16 lg:pb-20 px-6 lg:px-[58px]">
          {/* Abstract Dark Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          </div>

          <div className="relative z-20 max-w-[800px] mt-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase mb-6 block"
            >
              Voxi Research
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(44px,8vw,72px)] font-medium tracking-[-0.04em] leading-[1.05] text-white"
            >
              Pioneering the next generation of conversational AI.
            </motion.h1>
          </div>
        </section>
      </div>

      {/* Grid Section */}
      <section className="w-full pt-[60px] pb-[120px] bg-[#F7F7F7]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">

        {/* Research Themes */}
        <div className="flex flex-col gap-32">
          {Object.entries(
            research.reduce((acc, theme) => {
              const cat = theme.category || 'OTHER';
              if (!acc[cat]) acc[cat] = [];
              acc[cat].push(theme);
              return acc;
            }, {})
          ).map(([category, themes]) => (
            <div key={category} className="mb-8">
              <div className="mb-16 border-b border-black/10 pb-4">
                <h2 className="text-[12px] font-mono tracking-[0.2em] text-text-secondary uppercase">
                  {category}
                </h2>
              </div>
              <div className="flex flex-col gap-32">
                {themes.map((theme, i) => (
                  <motion.div 
                    key={theme.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row gap-12 md:gap-24"
                  >
                    {/* Theme Header */}
                    <div className="md:w-[400px] shrink-0">
                      <div className="sticky top-32">
                        <span className="text-[14px] font-mono text-text-secondary block mb-4">
                          {(i + 1).toString().padStart(2, '0')} // Theme
                        </span>
                        <h2 className="text-[32px] font-semibold tracking-tight leading-tight text-text-primary mb-6">
                          {theme.title}
                        </h2>
                        <p className="text-[16px] text-text-secondary leading-relaxed whitespace-pre-line">
                          {theme.description}
                        </p>
                      </div>
                    </div>

                    {/* Sub Items */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {theme.subItems && theme.subItems.length > 0 ? (
                        theme.subItems.map((item, idx) => (
                          <div 
                            key={idx}
                            className="p-6 rounded-[16px] bg-surface/40 border border-border hover:bg-surface hover:border-black/10 transition-colors"
                          >
                            <h3 className="text-[18px] font-medium text-text-primary mb-2">
                              {item.name}
                            </h3>
                            <p className="text-[14px] text-text-secondary">
                              {item.desc}
                            </p>
                          </div>
                        ))
                      ) : (
                        <div className="p-6 rounded-[16px] bg-surface/20 border border-border border-dashed flex items-center justify-center col-span-full">
                          <span className="text-[14px] text-text-secondary">
                            Research in progress. Details coming soon.
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        </div>
      </section>
    </div>
  );
}

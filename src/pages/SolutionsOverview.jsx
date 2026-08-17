import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { solutions } from '../data/solutions';

const gradients = [
  'from-blue-500/20 to-indigo-900/40',
  'from-green-500/20 to-emerald-900/40',
  'from-purple-500/20 to-fuchsia-900/40',
  'from-orange-500/20 to-red-900/40',
  'from-cyan-500/20 to-blue-900/40',
  'from-amber-500/20 to-yellow-900/40'
];

export default function SolutionsOverview() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Cinematic Header */}
      <div className="w-full flex justify-center p-3 lg:p-[12px]">
        <section className="relative w-full max-w-[1600px] min-h-[50vh] lg:min-h-[400px] rounded-[24px] overflow-hidden bg-[#0a0a0a] shadow-sm isolate flex flex-col justify-end pb-16 lg:pb-20 px-6 lg:px-[58px]">
          {/* Abstract Dark Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          </div>

          <div className="relative z-20 max-w-[800px] mt-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase mb-6 block"
            >
              Industry Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(44px,8vw,72px)] font-medium tracking-[-0.04em] leading-[1.05] text-white"
            >
              Tailored AI orchestration for every industry.
            </motion.h1>
          </div>
        </section>
      </div>

      {/* Grid Section */}
      <section className="w-full pt-[60px] pb-[120px] bg-[#F7F7F7]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/solutions/${solution.id}`} className="block group h-full">
                <div className="flex flex-col bg-surface border border-border rounded-card overflow-hidden h-full">
                  {/* Visual Top */}
                  <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center p-6 border-b border-border overflow-hidden`}>
                    <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-pill border border-black/10">
                      <span className="text-[11px] font-medium text-text-primary uppercase tracking-wider">
                        {solution.industry}
                      </span>
                    </div>
                    
                    <div className="w-[120px] h-[120px] rounded-[24px] bg-black/5 border border-black/10 backdrop-blur-md shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center">
                       <div className="w-12 h-12 rounded-full bg-black/20 animate-pulse" />
                    </div>
                  </div>

                  {/* Content Bottom */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-[20px] font-semibold tracking-tight text-text-primary mb-6">
                      {solution.area || 'Customer Intelligence'}
                    </h3>
                    
                    {/* Stat Row */}
                    {solution.stats && solution.stats.length > 0 ? (
                      <div className="grid grid-cols-2 gap-4 mt-auto">
                        {solution.stats.slice(0, 4).map((stat, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-[20px] font-medium text-text-primary tabular-nums tracking-tight">
                              {stat.value === 0 && stat.label === 'Missed Follow-Ups' 
                                ? 'Zero' 
                                : `${stat.prefix || ''}${stat.value}${stat.suffix || ''}`
                              }
                            </span>
                            <span className="text-[11px] text-text-secondary uppercase tracking-wider font-medium mt-1">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <span className="inline-flex items-center text-[14px] font-medium text-text-primary group-hover:opacity-70 transition-opacity">
                          View Use Cases &rarr;
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}

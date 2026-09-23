import React from 'react';
import { motion } from 'framer-motion';
import { research } from '../data/research';
import { FadeInUp, SlideInLeft } from '../components/shared/Motion';

const darkGradients = [
  'bg-gradient-to-t from-blue-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-indigo-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-sky-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-cyan-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-violet-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y'
];

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
              <SlideInLeft className="mb-16 border-b border-black/10 pb-4">
                <h2 className="text-[12px] font-mono tracking-[0.2em] text-text-secondary uppercase">
                  {category}
                </h2>
              </SlideInLeft>
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
                          <FadeInUp 
                            key={idx}
                            delay={idx * 0.08}
                            className="rounded-[16px] bg-surface/40 border border-border hover:bg-surface hover:border-black/10 transition-colors brutalist-card flex flex-col overflow-hidden"
                          >
                            <div className="p-6 pb-4">
                              {/* Mini illustration */}
                              <div className="w-full h-[90px] rounded-[10px] bg-[#f4f4f4] border border-black/5 flex items-center justify-center overflow-hidden">
                                <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <defs>
                                  <filter id={`glow-r${idx}`} x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="2" result="blur"/>
                                    <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                                  </filter>
                                </defs>
                                {idx % 4 === 0 && (
                                  /* Neural network nodes */
                                  <g>
                                    {[[20,30],[45,15],[45,45],[75,20],[75,40],[100,30]].map(([x,y],k)=>(
                                      <circle key={k} cx={x} cy={y} r={k===0||k===5?5:3.5} fill="#111" opacity={0.7+(k*0.05)} filter={`url(#glow-r${idx})`}/>
                                    ))}
                                    {[[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[1,4],[2,3]].map(([a,b],k)=>{
                                      const pts=[[20,30],[45,15],[45,45],[75,20],[75,40],[100,30]];
                                      return <line key={k} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="#111" strokeOpacity="0.15" strokeWidth="1"/>;
                                    })}
                                    <circle cx="100" cy="30" r="2" fill="#3b82f6" filter={`url(#glow-r${idx})`} opacity="0.9"/>
                                  </g>
                                )}
                                {idx % 4 === 1 && (
                                  /* Waveform */
                                  <g>
                                    <path d="M10 30 Q20 10 30 30 T50 30 T70 30 T90 30 T110 30" stroke="#111" strokeWidth="1.5" fill="none" opacity="0.15"/>
                                    <path d="M10 30 Q20 10 30 30 T50 30 T70 30" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.8" filter={`url(#glow-r${idx})`}/>
                                    {[30,50,70].map((x,k)=>(<circle key={k} cx={x} cy="30" r="2.5" fill="#6366f1" opacity={0.6+k*0.15}/>))}
                                  </g>
                                )}
                                {idx % 4 === 2 && (
                                  /* Bar chart */
                                  <g>
                                    {[20,35,28,42,38,48].map((h,k)=>(
                                      <rect key={k} x={12+k*17} y={50-h} width="10" height={h} rx="2"
                                        fill={k===5?"#10b981":"#111"} opacity={k===5?0.9:0.12+(k*0.05)} filter={k===5?`url(#glow-r${idx})`:""}/>
                                    ))}
                                    <line x1="10" y1="50" x2="110" y2="50" stroke="#111" strokeOpacity="0.1" strokeWidth="1"/>
                                  </g>
                                )}
                                {idx % 4 === 3 && (
                                  /* Radial / Circular graph */
                                  <g>
                                    {[0,60,120,180,240,300].map((deg,k)=>{
                                      const r=(deg*Math.PI)/180,cx=60+22*Math.cos(r),cy=30+22*Math.sin(r);
                                      return(<g key={k}><line x1="60" y1="30" x2={cx} y2={cy} stroke="#111" strokeOpacity="0.15" strokeWidth="1"/><circle cx={cx} cy={cy} r="3" fill="#111" opacity="0.5"/></g>);
                                    })}
                                    <circle cx="60" cy="30" r="8" fill="#111" opacity="0.08"/>
                                    <circle cx="60" cy="30" r="3" fill="#f59e0b" filter={`url(#glow-r${idx})`}/>
                                  </g>
                                )}
                              </svg>
                              </div>
                            </div>
                            <div className={`p-6 pt-4 flex-1 ${darkGradients[idx % darkGradients.length]}`}>
                              <h3 className="text-[18px] font-medium text-white mb-2">
                                {item.name}
                              </h3>
                              <p className="text-[14px] text-white/70">
                                {item.desc}
                              </p>
                            </div>
                          </FadeInUp>
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

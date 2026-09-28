import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { research } from '../data/research';
import { SlideInLeft, SlideInRight, FadeInUp } from '../components/shared/Motion';

const darkGradients = [
  'bg-gradient-to-t from-brand-blue via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-indigo-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-sky-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-brand-blue via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-violet-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y'
];

const VisualResearchHero = () => {
  const nodes = Array.from({ length: 20 }).map((_, i) => ({
    x: 5 + Math.random() * 90,
    y: 5 + Math.random() * 90,
    size: 3 + Math.random() * 6,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100" />
      
      {/* Animated Concentric Rings & Constellations */}
      <motion.svg 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" stroke="currentColor" fill="none"
        className="absolute inset-0"
      >
        <motion.g animate={{ rotate: 360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "500px 300px" }}>
          <circle cx="500" cy="300" r="250" strokeWidth="1.5" className="text-brand-blue/50" strokeDasharray="4 12" />
          <circle cx="500" cy="300" r="400" strokeWidth="1.5" className="text-emerald-500/40" strokeDasharray="10 10" />
          <circle cx="500" cy="300" r="550" strokeWidth="1.5" className="text-purple-500/30" strokeDasharray="2 8" />
          
          {/* Geometric Abstract Lines */}
          <path d="M500 50 L850 450 L150 450 Z" strokeWidth="1" className="text-black/20" />
          <path d="M250 150 L750 150 L500 550 Z" strokeWidth="1" className="text-black/20" />
        </motion.g>
      </motion.svg>

      {/* Floating Neural Nodes */}
      <div className="absolute inset-0">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-blue/80"
            style={{
              width: node.size,
              height: node.size,
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Ambient Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-tr from-brand-blue/20 to-brand-blue/20 blur-[100px] rounded-full mix-blend-multiply" 
      />
    </div>
  );
};

export default function ResearchDetail() {
  const { id } = useParams();
  const theme = research.find(r => r.id === id);

  if (!theme) {
    return <Navigate to="/research" replace />;
  }

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-[#14110F] overflow-hidden selection:bg-[var(--global-accent)]/20">
      
      {/* 01 — HERO */}
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-[rgba(20,17,15,0.05)] bg-transparent isolate">
        <VisualResearchHero />
        
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 z-10">
          <Link 
            to="/research"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#14110F]/40 hover:text-[var(--global-accent)] transition-colors mb-12 uppercase font-bold"
          >
            <ArrowLeft size={16} />
            BACK TO RESEARCH
          </Link>
          
          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-[var(--global-accent)] uppercase font-bold transition-colors duration-300">
                {theme.category}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(40px,7vw,84px)] font-medium tracking-tighter leading-[1.05] text-[#14110F] mb-8"
            >
              {theme.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] md:text-[24px] text-[#14110F]/60 leading-[1.6] max-w-[700px] font-light"
            >
              {theme.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 02 — SUB ITEMS LIST */}
      <section className="w-full py-24 md:py-40 relative">
        <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 text-[clamp(100px,20vw,300px)] font-bold text-black/[0.02] tracking-tighter pointer-events-none select-none">
          EXPLORE.
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* Sticky Sidebar */}
            <SlideInLeft className="md:w-[320px] shrink-0">
              <div className="sticky top-32">
                 <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-[var(--global-dark-accent)] uppercase font-bold mb-6 block transition-colors duration-300">01 / Focus Areas</span>
                <h2 className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight leading-tight text-[#14110F] mb-6">
                  Key Capabilities
                </h2>
                <p className="text-[16px] text-[#14110F]/60 leading-[1.6] font-light">
                  Explore the specific architectures, models, and technologies we are developing under the {theme.title} theme.
                </p>
              </div>
            </SlideInLeft>

            {/* SVG Illustration Cards Grid */}
            <SlideInRight delay={0.1} className="flex-1 w-full">
              {theme.subItems && theme.subItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                  {theme.subItems.map((item, idx) => (
                    <FadeInUp 
                      key={idx}
                      delay={idx * 0.08}
                      className="rounded-[16px] bg-[#111] hover:bg-[#1a1a1a] transition-colors flex flex-col overflow-hidden shadow-lg border border-black/5 min-h-[350px]"
                    >
                      <div className="p-6 pb-4 bg-white border-b border-black/5">
                        {/* Mini illustration SVG */}
                        <div className="w-full h-[120px] rounded-[10px] bg-[#FAFAFA] border border-black/5 flex items-center justify-center overflow-hidden">
                          <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <defs>
                              <filter id={`glow-rd-${idx}`} x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="2" result="blur"/>
                                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                              </filter>
                            </defs>
                            {idx % 4 === 0 && (
                              <g>
                                {[[20,30],[45,15],[45,45],[75,20],[75,40],[100,30]].map(([x,y],k)=>(
                                  <circle key={k} cx={x} cy={y} r={k===0||k===5?5:3.5} fill="#111" opacity={0.7+(k*0.05)} filter={`url(#glow-rd-${idx})`}/>
                                ))}
                                {[[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[1,4],[2,3]].map(([a,b],k)=>{
                                  const pts=[[20,30],[45,15],[45,45],[75,20],[75,40],[100,30]];
                                  return <line key={k} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="#111" strokeOpacity="0.15" strokeWidth="1"/>;
                                })}
                                <circle cx="100" cy="30" r="2" fill="#1283a9" filter={`url(#glow-rd-${idx})`} opacity="0.9"/>
                              </g>
                            )}
                            {idx % 4 === 1 && (
                              <g>
                                <path d="M10 30 Q20 10 30 30 T50 30 T70 30 T90 30 T110 30" stroke="#111" strokeWidth="1.5" fill="none" opacity="0.15"/>
                                <path d="M10 30 Q20 10 30 30 T50 30 T70 30" stroke="#1283a9" strokeWidth="1.5" fill="none" opacity="0.8" filter={`url(#glow-rd-${idx})`}/>
                                {[30,50,70].map((x,k)=>(<circle key={k} cx={x} cy="30" r="2.5" fill="#1283a9" opacity={0.6+k*0.15}/>))}
                              </g>
                            )}
                            {idx % 4 === 2 && (
                              <g>
                                {[20,35,28,42,38,48].map((h,k)=>(
                                  <rect key={k} x={12+k*17} y={50-h} width="10" height={h} rx="2"
                                    fill={k===5?"#10b981":"#111"} opacity={k===5?0.9:0.12+(k*0.05)} filter={k===5?`url(#glow-rd-${idx})`:""}/>
                                ))}
                                <line x1="10" y1="50" x2="110" y2="50" stroke="#111" strokeOpacity="0.1" strokeWidth="1"/>
                              </g>
                            )}
                            {idx % 4 === 3 && (
                              <g>
                                {[0,60,120,180,240,300].map((deg,k)=>{
                                  const r=(deg*Math.PI)/180,cx=60+22*Math.cos(r),cy=30+22*Math.sin(r);
                                  return(<g key={k}><line x1="60" y1="30" x2={cx} y2={cy} stroke="#111" strokeOpacity="0.15" strokeWidth="1"/><circle cx={cx} cy={cy} r="3" fill="#111" opacity="0.5"/></g>);
                                })}
                                <circle cx="60" cy="30" r="8" fill="#111" opacity="0.08"/>
                                <circle cx="60" cy="30" r="3" fill="#f59e0b" filter={`url(#glow-rd-${idx})`}/>
                              </g>
                            )}
                          </svg>
                        </div>
                      </div>
                      <div className={`p-8 pt-6 flex-1 flex flex-col justify-center ${darkGradients[idx % darkGradients.length]}`}>
                        <h3 className="text-[20px] font-medium text-white mb-3">
                          {item.name || item.title}
                        </h3>
                        <p className="text-[15px] text-white/70 leading-relaxed font-light">
                          {item.desc || item.definition}
                        </p>
                      </div>
                    </FadeInUp>
                  ))}
                </div>
              ) : (
                <div className="rounded-[16px] overflow-hidden flex flex-col items-center justify-center border border-black/5 bg-[#FAFAFA] min-h-[350px] relative">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-20 h-20 flex items-center justify-center mb-8">
                      <motion.svg 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        viewBox="0 0 100 100" 
                        className="absolute inset-0 w-full h-full text-black/10" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <circle cx="50" cy="50" r="40" strokeDasharray="10 10" />
                        <circle cx="50" cy="50" r="30" strokeDasharray="4 12" />
                      </motion.svg>
                      <motion.svg 
                        animate={{ rotate: -360 }} 
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        viewBox="0 0 100 100" 
                        className="absolute inset-0 w-full h-full text-brand-blue/30" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="1.5"
                      >
                        <path d="M50 10 A40 40 0 0 1 90 50" strokeDasharray="5 5" />
                        <path d="M50 90 A40 40 0 0 1 10 50" strokeDasharray="5 5" />
                      </motion.svg>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} 
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4 h-4 bg-brand-blue rounded-full shadow-[0_0_20px_rgba(18,131,169,0.5)]"
                      />
                    </div>
                    
                    <span className="font-mono text-[13px] text-brand-blue font-bold tracking-[0.2em] uppercase text-center mb-3">Details coming soon</span>
                    <span className="text-[15px] text-black/40 font-light text-center max-w-[400px]">Our applied AI labs are currently exploring this frontier.</span>
                  </div>
                </div>
              )}
            </SlideInRight>
            
          </div>
        </div>
      </section>

      {/* 03 — FINAL CTA */}
      <section className="relative w-full py-40 md:py-64 bg-[#16130F] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: `color-mix(in srgb, var(--global-accent) 20%, transparent)` }} />
        
        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,72px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Ready to innovate?
            </h2>
            <h3 className="text-[clamp(20px,4vw,32px)] font-light tracking-tight text-white/50 leading-[1.2] mb-16">
              Connect with our research team to learn more.
            </h3>
            
            <div className="flex justify-center w-full">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 bg-[#F5F1EA] text-[#14110F] rounded-[24px] text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[var(--global-accent)]/60"
              >
                CONTACT RESEARCH LABS
              </motion.button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}

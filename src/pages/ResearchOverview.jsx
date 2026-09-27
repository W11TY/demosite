import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { research } from '../data/research';
import { FadeInUp, SlideInLeft } from '../components/shared/Motion';

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

const bgWords = ['INNOVATE.', 'REASON.', 'AUTONOMY.', 'SCALE.', 'EDGE.', 'INFRA.', 'GEN AI.'];
const bgColors = ['bg-white', 'bg-[#FAFAFA]', 'bg-white', 'bg-[#FAFAFA]', 'bg-white', 'bg-[#FAFAFA]', 'bg-white'];

export default function ResearchOverview() {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
       const sections = research.map((_, i) => document.getElementById(`chapter-${i}`));
       const scrollY = window.scrollY;
       const viewportHeight = window.innerHeight;
       
       sections.forEach((sec, i) => {
         if (sec) {
           const rect = sec.getBoundingClientRect();
           if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
             setActiveChapter(i);
           }
         }
       });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToChapter = (i) => {
    const el = document.getElementById(`chapter-${i}`);
    if (el) {
       const y = el.getBoundingClientRect().top + window.scrollY - 100;
       window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white min-h-screen text-[#111]">
      {/* 01 — HERO */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden border-b border-black/5 bg-[#FAFAFA] isolate pt-20">
        <VisualResearchHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10">
          <FadeInUp>
            <h1 className="text-[clamp(40px,8vw,100px)] font-medium tracking-tighter text-[#111] leading-[1]">
              PIONEERING THE NEXT.<br/>
              <span className="text-brand-blue">GENERATION OF AI.</span>
            </h1>
            <p className="mt-8 md:mt-12 text-[18px] md:text-[24px] text-black/60 max-w-[700px] mx-auto leading-relaxed font-light">
              We're pushing the boundaries of speech, reasoning, and autonomous agents to transform enterprise communication.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 02 — NAVIGATION */}
      <div className="sticky top-[100px] z-40 w-full bg-white/90 backdrop-blur-md border-b border-black/[0.05] py-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-start md:justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
           {research.map((ch, i) => (
             <button 
               key={i} 
               onClick={() => scrollToChapter(i)}
               className={`flex items-center gap-2 font-mono text-[11px] md:text-[13px] tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${activeChapter === i ? 'text-brand-blue font-bold' : 'text-black/40 hover:text-black/80'}`}
             >
               <span className="opacity-50">0{i+1}</span> {ch.title.split(' ')[0].toUpperCase()}
             </button>
           ))}
        </div>
      </div>

      {/* 03 — RESEARCH THEMES AS CHAPTERS */}
      <div className="w-full relative bg-white">
         {research.map((theme, i) => (
           <section id={`chapter-${i}`} key={theme.id} className={`w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 border-b border-black/5 ${bgColors[i % bgColors.length]} relative overflow-hidden`}>
              <div className={`absolute top-1/2 ${i % 2 === 0 ? 'left-[-10%]' : 'right-[-10%]'} -translate-y-1/2 text-[clamp(100px,20vw,300px)] font-bold text-black/[0.02] tracking-tighter pointer-events-none select-none`}>
                {bgWords[i % bgWords.length]}
              </div>
              <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">
                 
                 {/* Theme Header */}
                 <div className="md:w-[400px] shrink-0">
                   <div className="sticky top-32">
                     <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-brand-blue uppercase font-bold mb-6 md:mb-8 block">0{i+1} / {theme.category}</span>
                     <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#111] leading-[1.2] mb-6">
                       {theme.title}
                     </h2>
                     <p className="text-[16px] md:text-[20px] text-black/60 leading-relaxed font-light mb-8 max-w-[700px]">
                       {theme.description}
                     </p>
                     
                     <Link to={`/research/${theme.id}`} className="font-mono text-[12px] tracking-widest text-brand-blue hover:text-[#1283a9]/80 uppercase font-bold flex items-center gap-2">
                       Explore Detail →
                     </Link>
                   </div>
                 </div>

                 {/* Sub Items */}
                 <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {theme.subItems && theme.subItems.length > 0 ? (
                      theme.subItems.map((item, idx) => (
                        <FadeInUp 
                          key={idx}
                          delay={idx * 0.08}
                          className="rounded-[16px] bg-[#111] hover:bg-[#1a1a1a] transition-colors brutalist-card flex flex-col overflow-hidden"
                        >
                          <div className="p-6 pb-4 bg-white border-b border-black/5">
                            {/* Mini illustration */}
                            <div className="w-full h-[90px] rounded-[10px] bg-[#f4f4f4] border border-black/5 flex items-center justify-center overflow-hidden">
                              <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                              <defs>
                                <filter id={`glow-r${idx}-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                                  <feGaussianBlur stdDeviation="2" result="blur"/>
                                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                                </filter>
                              </defs>
                              {idx % 4 === 0 && (
                                <g>
                                  {[[20,30],[45,15],[45,45],[75,20],[75,40],[100,30]].map(([x,y],k)=>(
                                    <circle key={k} cx={x} cy={y} r={k===0||k===5?5:3.5} fill="#111" opacity={0.7+(k*0.05)} filter={`url(#glow-r${idx}-${i})`}/>
                                  ))}
                                  {[[0,1],[0,2],[1,3],[2,4],[3,5],[4,5],[1,4],[2,3]].map(([a,b],k)=>{
                                    const pts=[[20,30],[45,15],[45,45],[75,20],[75,40],[100,30]];
                                    return <line key={k} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="#111" strokeOpacity="0.15" strokeWidth="1"/>;
                                  })}
                                  <circle cx="100" cy="30" r="2" fill="#1283a9" filter={`url(#glow-r${idx}-${i})`} opacity="0.9"/>
                                </g>
                              )}
                              {idx % 4 === 1 && (
                                <g>
                                  <path d="M10 30 Q20 10 30 30 T50 30 T70 30 T90 30 T110 30" stroke="#111" strokeWidth="1.5" fill="none" opacity="0.15"/>
                                  <path d="M10 30 Q20 10 30 30 T50 30 T70 30" stroke="#1283a9" strokeWidth="1.5" fill="none" opacity="0.8" filter={`url(#glow-r${idx}-${i})`}/>
                                  {[30,50,70].map((x,k)=>(<circle key={k} cx={x} cy="30" r="2.5" fill="#1283a9" opacity={0.6+k*0.15}/>))}
                                </g>
                              )}
                              {idx % 4 === 2 && (
                                <g>
                                  {[20,35,28,42,38,48].map((h,k)=>(
                                    <rect key={k} x={12+k*17} y={50-h} width="10" height={h} rx="2"
                                      fill={k===5?"#10b981":"#111"} opacity={k===5?0.9:0.12+(k*0.05)} filter={k===5?`url(#glow-r${idx}-${i})`:""}/>
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
                                  <circle cx="60" cy="30" r="3" fill="#f59e0b" filter={`url(#glow-r${idx}-${i})`}/>
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
                      <div className="rounded-[16px] overflow-hidden flex flex-col items-center justify-center col-span-full border border-black/5 bg-[#FAFAFA] min-h-[250px] relative">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />
                        
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="relative w-16 h-16 flex items-center justify-center mb-6">
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
                              className="w-3 h-3 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(18,131,169,0.5)]"
                            />
                          </div>
                          
                          <span className="font-mono text-[12px] text-brand-blue font-bold tracking-[0.2em] uppercase text-center mb-2">Research in progress</span>
                          <span className="text-[14px] text-black/40 font-light text-center max-w-[300px]">Our applied AI labs are currently exploring this frontier.</span>
                        </div>
                      </div>
                    )}
                 </div>
              </div>
           </section>
         ))}
      </div>

      {/* 04 — FINAL CTA */}
      <section className="relative w-full py-40 md:py-64 bg-[#050505] text-white flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,96px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Research with impact.
            </h2>
            <h3 className="text-[clamp(20px,4vw,48px)] font-light tracking-tight text-white/50 leading-[1.2] mb-24">
              Join us in shaping the future of enterprise AI.
            </h3>
            
            <div className="flex flex-col gap-6 items-center">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-white/30 uppercase">Partner with our labs</span>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-4 bg-white text-[#111] rounded-full text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)]"
                >
                  CONTACT RESEARCH
                </motion.button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}

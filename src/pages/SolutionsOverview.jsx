import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useScroll, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { solutions } from '../data/solutions';
import { FadeInUp } from '../components/shared/Motion';
import { ParallaxText, MagneticElement } from '../components/shared/Interactive';
import { BRAND, BRAND_TEXT, ACCENTS } from '../data/accents';
import { useChapterColor } from '../hooks/useChapterColor';
import ChapterNav from '../components/shared/ChapterNav';
import IllustrationCard from '../components/shared/IllustrationCard';

const NAV_LABELS = ['Real Estate', 'Automobile', 'Durables', 'Fintech', 'Healthcare', 'Utilities'];

// Start interpolation at Blue (index 2) to give Solutions a distinct flavor from Research
const accentColors = [BRAND, ...solutions.map((_, i) => ACCENTS[(i + 2) % ACCENTS.length].accent), BRAND];
const tintColors = [ACCENTS[0].tint, ...solutions.map((_, i) => ACCENTS[(i + 2) % ACCENTS.length].tint), ACCENTS[0].tint];
const darkAccentColors = [BRAND_TEXT, ...solutions.map((_, i) => ACCENTS[(i + 2) % ACCENTS.length].dark), BRAND_TEXT];

const bgWords = ['CONVERT.', 'ENGAGE.', 'SUPPORT.', 'RECOVER.', 'SCHEDULE.', 'RESPOND.'];

const MOTIF_MAP = {
  'real-estate': [1, 2, 3, 5],
  'automobile': [5, 4, 0, 6],
  'consumer-durables': [7, 6, 0, 4],
  'fintech': [3, 2, 1, 0],
  'healthcare': [4, 5, 2, 1],
  'utilities': [6, 7, 0, 3]
};

const getMotif = (id, idx) => {
  const arr = MOTIF_MAP[id] || [0, 1, 2, 3];
  return arr[idx % arr.length];
};

const VisualSolutionsHero = () => {
  // Deterministic nodes converging to center
  const nodes = Array.from({ length: 45 }).map((_, i) => {
    const angle = ((i * 137.5) % 360) * (Math.PI / 180); // Golden angle distribution
    const radius = 250 + (i % 3) * 80;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size: 2 + (i % 4) * 1.5,
      delay: (i % 8) * 0.4
    };
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), { damping: 25, stiffness: 100 });
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), { damping: 25, stiffness: 100 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center" style={{ perspective: 1000 }}>
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100" />

      {/* Central Core Connection */}
      <motion.div 
        style={{ x: moveX, y: moveY, transformStyle: "preserve-3d" }} 
        className="absolute inset-0 flex justify-center items-center"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-[150px] h-[150px] rounded-full border border-[var(--global-accent)] flex justify-center items-center"
        >
          <div className="w-[80px] h-[80px] rounded-full border border-[var(--global-accent)] opacity-50" />
        </motion.div>
      </motion.div>

      {/* Converging Nodes */}
      <motion.div style={{ x: moveX, y: moveY }} className="absolute inset-0 flex justify-center items-center">
        {nodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full transition-colors duration-300"
            style={{
              width: node.size,
              height: node.size,
              backgroundColor: 'var(--global-accent)'
            }}
            animate={{
              x: [node.x, node.x * 0.2, node.x],
              y: [node.y, node.y * 0.2, node.y],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + (i % 3) * 2,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Connecting Lines to Center */}
      <motion.div style={{ x: moveX, y: moveY }} className="absolute inset-0 flex justify-center items-center">
        <svg width="100%" height="100%" viewBox="-500 -500 1000 1000" className="absolute inset-0 opacity-20">
          {nodes.filter((_, i) => i % 3 === 0).map((node, i) => (
            <motion.line
              key={`line-${i}`}
              x1={node.x}
              y1={node.y}
              x2="0"
              y2="0"
              stroke="var(--global-accent)"
              strokeWidth="1"
              strokeDasharray="4 8"
              animate={{
                strokeDashoffset: [0, 24]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Ambient Glow */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full mix-blend-multiply pointer-events-none transition-colors duration-300"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--global-accent) 40%, transparent), transparent)` }}
      />
    </div>
  );
};

const Cursor = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const cursorVariants = {
    rest: {
      left: ["20%", "60%", "20%", "60%", "20%"],
      top: ["30%", "45%", "60%", "45%", "30%"],
      transition: prefersReducedMotion ? { duration: 0 } : {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    hover: {
      left: ["20%", "60%", "20%", "60%", "20%"],
      top: ["30%", "45%", "60%", "45%", "30%"],
      transition: prefersReducedMotion ? { duration: 0 } : {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (prefersReducedMotion) {
    return (
      <div className="absolute z-50 pointer-events-none" style={{ top: '30%', left: '20%' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 3L18.5 11.5L12 13L9.5 21L5.5 3Z" fill="#14110F" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  return (
    <motion.div
      variants={cursorVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="absolute z-50 pointer-events-none"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 3L18.5 11.5L12 13L9.5 21L5.5 3Z" fill="#14110F" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    </motion.div>
  );
};

const SolutionCard = ({ solution, index }) => {
  const containerRef = React.useRef(null);
  const [scale, setScale] = React.useState(1);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScale(entry.contentRect.width / 640);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const layoutType = ['real-estate', 'healthcare', 'utilities'].includes(solution.id) ? 'list' 
    : ['automobile'].includes(solution.id) ? 'stat' 
    : 'chat';

  // Deterministic animation for rows
  const rowVariants = {
    animate: (i) => ({
      scale: [1, 1.02, 1],
      backgroundColor: ["#ffffff", "color-mix(in srgb, var(--global-accent) 10%, #ffffff)", "#ffffff"],
      transition: {
        duration: 8,
        repeat: Infinity,
        times: [0, 0.1, 1],
        delay: i * 2, // offset for each row
        ease: "easeInOut"
      }
    })
  };

  const getIndustryIcon = (id) => {
    switch(id) {
      case 'real-estate': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>;
      case 'automobile': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 16H9m10 0h3v-3.15a1 1 0 00-.84-.99L16 11l-2.7-3.6a2 2 0 00-1.6-.8H9.3a2 2 0 00-1.6.8L5 11l-5.16.86a1 1 0 00-.84.99V16h3m10 0a2 2 0 100 4 2 2 0 000-4zm-10 0a2 2 0 100 4 2 2 0 000-4z"></path></svg>;
      case 'fintech': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
      case 'healthcare': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>;
      case 'utilities': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
      case 'consumer-durables': return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
      default: return <div className="w-2 h-2 rounded-full bg-current" />;
    }
  };

  return (
    <motion.div 
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      variants={{ rest: { scale: 1, y: 0 }, hover: { scale: 1.02, y: -4 } }}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className="rounded-[20px] md:rounded-[24px] overflow-hidden flex flex-col border border-[#14110F]/10 shadow-[0_12px_40px_rgba(20,17,15,0.10)] focus-visible:ring-1 focus-visible:ring-[#1283a9]/60 outline-none cursor-pointer group bg-[#16130F] w-full max-w-[720px] mx-auto"
    >
      <Link to={`/solutions/${solution.id}`} className="flex flex-col h-full outline-none">
        
        {/* STAGE: Top Half */}
        <div className="bg-[#EAE4D8] relative p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center overflow-visible">
          {/* Blueprint Dot Grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxNDExMEYiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjwvc3ZnPg==')] overflow-hidden" />
          
          {/* Radial Pool */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] blur-[60px] rounded-full pointer-events-none" style={{ backgroundColor: 'color-mix(in srgb, var(--global-accent) 18%, transparent)' }} />
          
          {/* LAPTOP */}
          <div className="relative w-full max-w-[520px] flex flex-col z-10 mt-2 mx-auto">
            
            {/* Lid */}
            <div className="aspect-[16/10] w-full rounded-t-[14px] bg-[#0E0C0A] p-[10px] border border-white/10 relative flex flex-col z-10">
              {/* Camera Dot */}
              <div className="absolute top-[3px] left-1/2 -translate-x-1/2 w-[4px] h-[4px] rounded-full bg-white/20" />
              
              {/* Screen Container (Scales inner content) */}
              <div ref={containerRef} className="flex-1 rounded-[6px] overflow-hidden relative w-full h-full" style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--global-accent) 22%, #F5F1EA), #F5F1EA 60%)' }}>
                <div className="absolute inset-0 pointer-events-none z-20" style={{ background: 'linear-gradient(115deg, rgba(255,255,255,0.18), transparent 40%)' }} />
                
                {/* 640x400 Canvas for OS */}
                <div 
                  className="absolute top-0 left-0 w-[640px] h-[400px] origin-top-left"
                  style={{ transform: `scale(${scale})` }}
                >
                  <Cursor />

                  <div className="absolute inset-0 flex flex-col z-10">
                    {/* Menu bar */}
                    <div className="h-7 bg-white/60 backdrop-blur-md px-3 flex items-center justify-between text-[12px] font-medium text-[#14110F]/80">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-[18px] h-[18px] rounded-md shadow-sm text-white" style={{ backgroundColor: 'var(--global-accent)' }}>
                          {getIndustryIcon(solution.id)}
                        </div>
                        <span className="font-bold">{solution.industry}</span>
                        <span className="text-[#14110F]/50">File</span>
                        <span className="text-[#14110F]/50">View</span>
                      </div>
                      <span>9:41</span>
                    </div>

                    {/* Window */}
                    <div className="absolute inset-x-6 top-12 bottom-[64px] rounded-lg bg-white shadow-[0_10px_30px_rgba(20,17,15,0.18)] overflow-hidden flex flex-col">
                      {/* Title bar */}
                      <div className="h-7 border-b border-[#14110F]/5 flex items-center px-3 bg-[#F5F1EA]/50 gap-2">
                        <div className="flex gap-1.5 flex-none">
                          <div className="w-[8px] h-[8px] rounded-full bg-[#F28B82]" />
                          <div className="w-[8px] h-[8px] rounded-full bg-[#FBD34D]" />
                          <div className="w-[8px] h-[8px] rounded-full bg-[#81D99A]" />
                        </div>
                        <span className="flex-1 truncate min-w-0 pl-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#14110F]/50">
                          {solution.title || solution.area}
                        </span>
                      </div>

                      {/* Window Body */}
                      <div className="flex-1 overflow-hidden p-3 bg-[#FAFAFA]">
                        {layoutType === 'list' && (
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-1 px-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-[10px] font-mono text-[#14110F]/40 uppercase tracking-widest">Active System</span>
                            </div>
                            {solution.useCases.slice(0,3).map((uc, idx) => (
                              <motion.div 
                                key={idx}
                                custom={idx}
                                variants={rowVariants}
                                animate="animate"
                                className="flex items-center gap-3 px-3 h-[34px] rounded-md shadow-sm border border-[#14110F]/5 origin-left"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                <span className="text-[13px] text-[#14110F]/80 flex-1 truncate">{uc}</span>
                                {solution.stats?.[idx] && (
                                  <span className="text-[13px] font-semibold text-emerald-600 whitespace-nowrap">
                                    {solution.stats[idx].prefix || ''}{solution.stats[idx].value}{solution.stats[idx].suffix || ''}
                                  </span>
                                )}
                              </motion.div>
                            ))}
                            {solution.useCases.length < 3 && Array.from({ length: 3 - solution.useCases.length }).map((_, i) => (
                               <div key={`empty-${i}`} className="h-[34px]" />
                            ))}
                          </div>
                        )}

                        {layoutType === 'stat' && (
                          <div className="flex flex-col gap-2">
                            <div className="grid grid-cols-3 gap-2 mb-2">
                              {solution.stats?.slice(0,3).map((stat, idx) => (
                                <div key={idx} className="bg-white rounded-md p-2 shadow-sm border border-[#14110F]/5 flex flex-col items-center text-center">
                                  <span className="text-[14px] font-semibold" style={{ color: 'var(--global-accent)' }}>{stat.prefix || ''}{stat.value}{stat.suffix || ''}</span>
                                  <span className="text-[8px] text-[#14110F]/40 block mt-1 uppercase tracking-wider truncate w-full">{stat.label}</span>
                                </div>
                              ))}
                            </div>
                            {solution.useCases.slice(0,2).map((uc, idx) => (
                              <motion.div 
                                key={idx}
                                custom={idx}
                                variants={rowVariants}
                                animate="animate"
                                className="flex items-center gap-3 px-3 h-[34px] rounded-md shadow-sm border border-[#14110F]/5 origin-left"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                <div className="flex flex-col overflow-hidden justify-center">
                                  <span className="text-[12px] font-medium text-[#14110F]/80 truncate">{uc}</span>
                                  <span className="text-[9px] text-[#14110F]/40 mt-[1px]">Automated by AI</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {layoutType === 'chat' && (
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-center gap-2 mb-2 px-3 py-1.5 rounded-md w-fit mx-auto border shadow-sm bg-[var(--global-accent)] border-[var(--global-accent)] bg-opacity-10 border-opacity-20">
                              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--global-accent)' }} />
                              <span className="text-[10px] font-medium" style={{ color: 'var(--global-accent)' }}>AI Active</span>
                            </div>
                            <div className="flex flex-col gap-2 px-1">
                              {solution.useCases.slice(0,2).map((uc, idx) => (
                                <React.Fragment key={idx}>
                                  <div className="self-end px-3 py-2 rounded-md rounded-tr-sm bg-white border border-[#14110F]/10 text-[12px] text-[#14110F]/60 max-w-[85%] shadow-sm truncate w-fit">
                                    Query regarding {uc.toLowerCase()}
                                  </div>
                                  <div className="self-start px-3 py-2 rounded-md rounded-tl-sm border text-[12px] max-w-[90%] shadow-sm truncate w-fit text-[#14110F]/80 bg-[var(--global-accent)] border-[var(--global-accent)] bg-opacity-10 border-opacity-20">
                                    I can help you with {uc.toLowerCase()}.
                                  </div>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Dock */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 h-10 px-3 rounded-2xl bg-white/50 backdrop-blur-md border border-white/60 flex items-center gap-2.5 shadow-sm">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-[22px] h-[22px] rounded-lg shadow-sm opacity-90 flex items-center justify-center text-white" style={{ 
                          backgroundColor: i === 2 ? 'var(--global-accent)' : `color-mix(in srgb, var(--global-accent) ${20 + i * 15}%, #F5F1EA)` 
                        }}>
                          {i === 2 && getIndustryIcon(solution.id)}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Base */}
            <div className="absolute -bottom-[12px] left-[-4%] w-[108%] h-[12px] rounded-b-[12px] bg-gradient-to-b from-[#CFC8BB] to-[#B8B0A2] shadow-[0_18px_30px_-12px_rgba(20,17,15,0.35)] z-0 flex justify-center">
              {/* Notch */}
              <div className="w-[60px] h-[4px] rounded-b-md bg-[#A69E90]" />
            </div>
            
          </div>
        </div>

        {/* INFO STRIP: Dark Panel */}
        <div 
          className="p-5 md:p-8 flex flex-col relative z-10 flex-1"
          style={{ 
            background: 'linear-gradient(180deg, #16130F 0%, #16130F 60%, color-mix(in srgb, var(--global-accent) 26%, #16130F) 100%)' 
          }}
        >
          <h3 className="text-[20px] md:text-[22px] font-medium tracking-tight text-white mb-2 leading-tight">
            {solution.area}
          </h3>
          <p className="text-[14px] text-white/65 font-light leading-relaxed line-clamp-3 md:line-clamp-2">
            {solution.benefits}
          </p>

          {solution.stats && solution.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 md:gap-4 mt-5">
              {solution.stats.slice(0, 4).map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-[24px] md:text-[22px] font-normal text-white tabular-nums tracking-tight leading-none">
                    {stat.value === 0 && stat.label === 'Missed Follow-Ups' 
                      ? 'Zero' 
                      : `${stat.prefix || ''}${stat.value}${stat.suffix || ''}`
                    }
                  </span>
                  <span className="font-mono uppercase tracking-[0.12em] text-[10px] text-white/60 mt-1.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold text-[#6CC4E0] group-hover:opacity-80 transition-opacity">
              Explore Detail →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default function SolutionsOverview() {
  const heroRef = useRef(null);
  
  const { activeChapter, scrollY } = useChapterColor(
    solutions.length,
    accentColors,
    tintColors,
    darkAccentColors
  );

  return (
    <div className="w-full min-h-screen text-[#14110F] relative">
      <div 
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-300"
        style={{ backgroundImage: 'linear-gradient(180deg, #F5F1EA 0%, var(--global-tint, #F5F1EA) 100%)' }}
      />

      {/* 01 — HERO */}
      <section ref={heroRef} className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden isolate pt-0 pb-10 z-0 bg-transparent">
        <VisualSolutionsHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 mt-16">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-8 block text-center">
              Industry Solutions
            </span>
            <h1 className="text-[clamp(44px,8vw,72px)] font-medium tracking-tight text-[#14110F] leading-[1.05]">
              Tailored AI orchestration for every <span style={{ color: BRAND }}>industry.</span>
            </h1>
          </FadeInUp>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
      </section>

      {/* 02 — NAVIGATION */}
      <ChapterNav 
        items={NAV_LABELS} 
        activeChapter={activeChapter} 
        scrollY={scrollY} 
      />

      {/* 03 — SOLUTIONS AS CHAPTERS */}
      <div className="w-full relative z-10">
        {solutions.map((solution, i) => (
          <section id={`chapter-${i}`} key={solution.id} className="w-full py-24 md:py-40 px-4 sm:px-6 md:px-16 lg:px-20 relative overflow-x-clip bg-transparent">
            <ParallaxText text={bgWords[i % bgWords.length]} alignLeft={i % 2 === 0} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
            
            <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center gap-8 md:gap-12">
              {/* Theme Header */}
              <div className="w-full max-w-[720px] text-left">
                <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold block whitespace-normal text-[var(--global-dark-accent)] transition-colors duration-300">
                  0{i + 1} / {solution.industry}
                </span>
              </div>

              {/* One Big Solution Card */}
              <div className="w-full flex justify-center z-10">
                <SolutionCard solution={solution} index={i} />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
          </section>
        ))}
      </div>

      {/* 04 — FINAL CTA */}
      <section id="final-cta" className="relative w-full py-40 md:py-64 bg-[#050505] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: `color-mix(in srgb, ${BRAND} 20%, transparent)` }} />

        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,96px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Ready to transform your industry?
            </h2>
            <h3 className="text-[clamp(20px,4vw,48px)] font-light tracking-tight text-white/50 leading-[1.2] mb-24">
              See tailored orchestration in action.
            </h3>

            <div className="flex flex-col gap-6 items-center">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-white/30 uppercase">Get Started</span>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <MagneticElement>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-4 bg-[#F5F1EA] text-[#14110F] rounded-full text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#1283a9]/60"
                  >
                    BOOK A DEMO
                  </motion.button>
                </MagneticElement>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}

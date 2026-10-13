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
import { Building2, Car, Tv, Wallet, HeartPulse, Zap } from 'lucide-react';
import { RealEstateScene, AutomobileScene, ConsumerDurablesScene, FintechScene, HealthcareScene, UtilitiesScene } from '../components/shared/SolutionScenes';
import voxiLogo from '../assets/logo.png';
import AntiMetalButton from '../components/shared/AntiMetalButton';

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
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1000);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize(); // Init
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [mouseX, mouseY]);

  // Smoother parallax
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), { damping: 40, stiffness: 60 });
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-25, 25]), { damping: 40, stiffness: 60 });

  const icons = [Building2, Car, Tv, Wallet, HeartPulse, Zap];
  const labels = ['Real Estate', 'Automobile', 'Durables', 'Fintech', 'Healthcare', 'Utilities'];

  // On smaller screens, scale the whole diagram so it doesn't overflow horizontally
  const scale = windowWidth < 768 ? Math.max(0.48, windowWidth / 740) : (windowWidth < 1024 ? 0.88 : 1);

  // Calculate positions for 6 nodes in a wide ellipse
  const nodes = icons.map((Icon, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180); 
    const rx = 330;
    const ry = 165;
    return {
      x: Math.cos(angle) * rx,
      y: Math.sin(angle) * ry,
      Icon,
      label: labels[i]
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center select-none" style={{ perspective: 1000 }}>
      {/* Blueprint Dot Grid spanning the entire section */}
      <motion.div 
        className="absolute inset-[0%] w-[200%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxNDExMEYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100"
        animate={{ x: [0, -20], y: [0, -20] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Full-bleed Ambient Page Glow */}
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[700px] md:h-[1000px] blur-[120px] md:blur-[160px] rounded-full mix-blend-multiply pointer-events-none transition-colors duration-300"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--global-accent) 60%, transparent), transparent)` }}
      />

      {/* Responsive Scaling Wrapper for the entire diagram */}
      <div className="absolute inset-0 flex justify-center items-center pt-24 md:pt-32" style={{ transform: `scale(${scale})` }}>
        
        {/* ── 1. SVG Data Streams (Background layer) ── */}
        <motion.div style={{ x: moveX, y: moveY }} className="absolute inset-0 flex justify-center items-center z-0">
          <svg width="1000" height="800" viewBox="-500 -400 1000 800" className="overflow-visible">
            {nodes.map((n, i) => {
              const controlX = n.x * 0.4;
              const controlY = n.y * 0.1;
              const d = `M 0 0 Q ${controlX} ${controlY} ${n.x} ${n.y}`;
              return (
                <g key={`stream-${i}`}>
                  {/* Static faint path */}
                  <path d={d} fill="none" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.15" />
                  
                  {/* Animated data packets (marching ants) */}
                  <motion.path 
                    d={d}
                    fill="none" 
                    stroke="var(--global-accent)" 
                    strokeWidth="2"
                    strokeOpacity="0.8"
                    strokeDasharray="4 28"
                    strokeLinecap="round"
                    animate={{ strokeDashoffset: i % 2 === 0 ? [32, 0] : [0, 32] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />
                </g>
              );
            })}
          </svg>
        </motion.div>

        {/* ── 2. Peripheral Industry Nodes ── */}
        <motion.div style={{ x: moveX, y: moveY }} className="absolute inset-0 flex justify-center items-center z-10">
          {nodes.map((n, i) => (
            <div 
              key={`node-${i}`} 
              className="absolute flex items-center gap-3 px-4 py-2.5 rounded-xl backdrop-blur-md"
              style={{ 
                left: `calc(50% + ${n.x}px)`, 
                top: `calc(50% + ${n.y}px)`,
                transform: 'translate(-50%, -50%)',
                background: 'rgba(255,255,255,0.75)',
                border: '1px solid rgba(255,255,255,0.9)',
                boxShadow: '0 4px 20px rgba(20,17,15,0.05), inset 0 1px 0 rgba(255,255,255,0.9)'
              }}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[var(--global-accent)] opacity-10" />
                <n.Icon size={16} strokeWidth={1.8} style={{ color: 'var(--global-dark-accent)' }} />
              </div>
              <span className="text-[12px] font-medium tracking-tight text-[#14110F]">{n.label}</span>
            </div>
          ))}
        </motion.div>

        {/* ── 3. Central AI Orchestration Core ── */}
        <motion.div style={{ x: moveX, y: moveY }} className="absolute z-20 flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            
            {/* Core Pulsing Glow */}
            <motion.div 
              animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.4, 0.15] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-30px] rounded-full bg-[var(--global-accent)] blur-2xl"
            />

            {/* Core Glass Hub */}
            <div className="w-[120px] h-[120px] rounded-full flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl"
                 style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 8px 32px rgba(20,17,15,0.08)' }}>
              
              {/* Spinning tech rings */}
              <motion.div 
                animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-dashed border-[var(--global-accent)] opacity-30" 
              />
              <motion.div 
                animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[14px] rounded-full border border-[var(--global-accent)] opacity-15" 
              />
              
              <div className="absolute inset-0 bg-[var(--global-accent)] opacity-10 mix-blend-multiply" />
              
              {/* Core Icon */}
              <div className="flex flex-col items-center gap-2 z-10 mt-1">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[var(--global-accent)] blur-md opacity-40" />
                  <div className="relative w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden shadow-[0_0_15px_var(--global-accent)]">
                    <img src={voxiLogo} alt="Voxi AI" className="w-[65%] h-[65%] object-contain" />
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-[var(--global-dark-accent)] uppercase">Engine</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
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

const getIndustryBgIcon = (id) => {
  const props = { 
    size: 320, 
    strokeWidth: 0.5, 
    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none mix-blend-multiply",
    style: { color: 'var(--global-dark-accent, #14110F)' }
  };
  switch(id) {
    case 'real-estate': return <Building2 {...props} />;
    case 'automobile': return <Car {...props} />;
    case 'consumer-durables': return <Tv {...props} />;
    case 'fintech': return <Wallet {...props} />;
    case 'healthcare': return <HeartPulse {...props} />;
    case 'utilities': return <Zap {...props} />;
    default: return null;
  }
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

const VoxiVisual = ({ solution }) => {
  return (
    <div className="w-full h-[70px] shrink-0 mb-3 rounded-lg bg-white border border-[#14110F]/5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center justify-between px-6 relative overflow-visible">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxNDExMEYiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjwvc3ZnPg==')] opacity-50" />
      
      {/* Animated Path */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
        <motion.path 
          d="M 0 35 C 50 35, 80 15, 150 35 C 220 55, 250 35, 400 35"
          fill="none" 
          stroke="var(--global-accent)" 
          strokeWidth="1.5" 
          strokeOpacity="0.3"
          strokeDasharray="4 4"
          animate={{ strokeDashoffset: [20, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Input / Data source */}
      <div className="relative z-10 w-8 h-8 rounded-full bg-[#FAFAFA] border border-[#14110F]/10 flex items-center justify-center shadow-sm text-[var(--global-accent)]">
        <div className="w-3 h-3 rounded-full bg-current opacity-40" />
      </div>

      {/* Voxi AI Core */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        <div className="w-10 h-10 rounded-full border border-[var(--global-accent)] bg-white flex items-center justify-center shadow-md relative">
          <div className="absolute inset-0 rounded-full bg-[var(--global-accent)] opacity-10 animate-ping" />
          <div className="w-4 h-4 rounded-full bg-[var(--global-accent)]" />
        </div>
        <span className="absolute -bottom-4 z-20 text-[8px] font-bold tracking-widest uppercase bg-white px-1 rounded-sm shadow-sm border border-[#14110F]/5" style={{ color: 'var(--global-accent)' }}>VOXI AI</span>
      </motion.div>

      {/* Output / Industry Action */}
      <div className="relative z-10 w-8 h-8 rounded-lg bg-[var(--global-accent)] text-white flex items-center justify-center shadow-md">
        {getIndustryIcon(solution.id)}
      </div>
    </div>
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

  return (
    <motion.div 
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      variants={{ rest: { scale: 1, y: 0 }, hover: { scale: 1.02, y: -4 } }}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      className="rounded-[16px] md:rounded-[24px] overflow-hidden flex flex-col border border-[#14110F]/10 shadow-[0_8px_30px_rgba(20,17,15,0.10)] focus-visible:ring-1 focus-visible:ring-[#0d83a9]/60 outline-none cursor-pointer group bg-[#16130F] w-full max-w-[560px] md:max-w-[720px] mx-auto"
    >
      <Link to={`/solutions/${solution.id}`} className="flex flex-col h-full outline-none">
        
        {/* STAGE: Top Half */}
        <div className="bg-[#EAE4D8] relative flex flex-col justify-center items-center overflow-hidden" style={{ minHeight: 'clamp(200px, 35vw, 290px)' }}>
          {/* Blueprint Dot Grid */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxNDExMEYiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjwvc3ZnPg==')] overflow-hidden" />

          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] blur-[60px] rounded-full pointer-events-none" style={{ backgroundColor: 'color-mix(in srgb, var(--global-accent) 12%, transparent)' }} />

          {/* Scene area — glass card */}
          <div className="relative z-10 w-full h-full" style={{ padding: '8px 8px 14px 8px' }}>
            <div className="w-full h-full rounded-xl overflow-hidden relative"
              style={{ background: 'rgba(255,255,255,0.72)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.9)', boxShadow: '0 4px 20px rgba(20,17,15,0.07), inset 0 1px 0 rgba(255,255,255,0.8)', minHeight: 'clamp(180px, 32vw, 255px)', maxHeight: '255px', overflow: 'hidden' }}>
              {solution.id === 'real-estate'       && <RealEstateScene />}
              {solution.id === 'automobile'         && <AutomobileScene />}
              {solution.id === 'consumer-durables'  && <ConsumerDurablesScene />}
              {solution.id === 'fintech'            && <FintechScene />}
              {solution.id === 'healthcare'         && <HealthcareScene />}
              {solution.id === 'utilities'          && <UtilitiesScene />}
            </div>
          </div>
        </div>


        {/* INFO STRIP: Dark Panel */}
        <div 
          className="p-4 md:p-6 flex flex-col relative z-10 flex-1"
          style={{ 
            background: 'linear-gradient(180deg, #16130F 0%, #16130F 60%, color-mix(in srgb, var(--global-accent) 26%, #16130F) 100%)' 
          }}
        >
          <h3 className="text-[17px] md:text-[20px] font-medium tracking-tight text-white mb-1.5 leading-tight">
            {solution.area}
          </h3>
          <p className="text-[12px] md:text-[14px] text-white/60 font-normal leading-relaxed line-clamp-2">
            {solution.benefits}
          </p>

          {solution.stats && solution.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 mt-4">
              {solution.stats.slice(0, 4).map((stat, idx) => (
                <div key={idx} className={`flex flex-col ${idx >= 2 ? 'hidden md:flex' : ''}`}>
                  <span className="text-[20px] md:text-[22px] font-normal text-white tabular-nums tracking-tight leading-none">
                    {stat.value === 0 && stat.label === 'Missed Follow-Ups' 
                      ? 'Zero' 
                      : `${stat.prefix || ''}${stat.value}${stat.suffix || ''}`
                    }
                  </span>
                  <span className="font-mono uppercase tracking-[0.1em] text-[9px] md:text-[10px] text-white/55 mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 md:mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold text-[#6CC4E0] group-hover:opacity-80 transition-opacity">
              Explore Detail →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ArchitectureDiagram = () => {
  return (
    <section className="w-full py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-x-clip bg-white border-y border-[#14110F]/10 z-10">
      <div className="max-w-[1550px] mx-auto relative z-10 flex flex-col items-center">
        <FadeInUp className="flex flex-col items-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-[#FAFAF8] shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-8">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: BRAND }} />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#14110F]/60 uppercase">The Orchestration Backbone</span>
          </div>

          <h2 className="text-[clamp(32px,5vw,56px)] font-normal tracking-[-0.04em] text-[#14110F] mb-6 text-center leading-[1.1]">
            Unified Platform <br className="md:hidden" /><span className="font-semibold" style={{ color: BRAND }}>Architecture</span>
          </h2>

          <p className="text-[16px] md:text-[20px] text-[#14110F]/60 font-normal text-center max-w-[660px] mx-auto mb-16 md:mb-20 leading-relaxed">
            A seamless orchestration layer connecting every module across your customer experience.
          </p>
        </FadeInUp>

        {/* Telephony & Command Center Orchestration Scene */}
        <div className="w-full">
          <div className="tcc-scene">
            <svg className="tcc-wires" viewBox="0 0 1440 640" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <marker id="solArrowBlue" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,1 L8,4.5 L0,8 Z" fill="#1684f8"/>
                </marker>
                <marker id="solArrowTeal" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,1 L8,4.5 L0,8 Z" fill="#0ca9bd"/>
                </marker>
                <marker id="solArrowPurple" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,1 L8,4.5 L0,8 Z" fill="#823ee8"/>
                </marker>
                <marker id="solArrowOrange" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,1 L8,4.5 L0,8 Z" fill="#f18a13"/>
                </marker>
              </defs>

              {/* Exact Node-to-Card SVG Paths */}
              <path id="solPathBlue" d="M 555 320 H 490 Q 450 320 450 280 V 120"
                    fill="none" stroke="#1684f8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#solArrowBlue)"/>
              <path id="solPathTeal" d="M 720 155 V 80 Q 720 50 750 50 H 950 Q 990 50 990 85 V 120"
                    fill="none" stroke="#0ca9bd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#solArrowTeal)"/>
              <path id="solPathPurple" d="M 720 485 V 550 Q 720 585 685 585 H 490 Q 450 585 450 555 V 520"
                    fill="none" stroke="#823ee8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#solArrowPurple)"/>
              <path id="solPathOrange" d="M 885 320 H 945 Q 990 320 990 365 V 520"
                    fill="none" stroke="#f18a13" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#solArrowOrange)"/>

              {/* Animated Flow Dots */}
              <g fill="#1684f8" filter="drop-shadow(0 0 5px rgba(22, 132, 248, 0.6))">
                <circle r="4.5">
                  <animateMotion dur="3.6s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#solPathBlue"/>
                  </animateMotion>
                </circle>
              </g>
              <g fill="#0ca9bd" filter="drop-shadow(0 0 5px rgba(12, 169, 189, 0.6))">
                <circle r="4.5">
                  <animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#solPathTeal"/>
                  </animateMotion>
                </circle>
              </g>
              <g fill="#823ee8" filter="drop-shadow(0 0 5px rgba(130, 62, 232, 0.6))">
                <circle r="4.5">
                  <animateMotion dur="4.0s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#solPathPurple"/>
                  </animateMotion>
                </circle>
              </g>
              <g fill="#f18a13" filter="drop-shadow(0 0 5px rgba(241, 138, 19, 0.6))">
                <circle r="4.5">
                  <animateMotion dur="3.8s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#solPathOrange"/>
                  </animateMotion>
                </circle>
              </g>
            </svg>

            <div className="tcc-layout">
              {/* Card 1: AI Voice Agents */}
              <section className="tcc-panel voice">
                <div className="tcc-orb">
                  <div className="tcc-orb-inner">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 26v-7a13 13 0 0 1 26 0v7"/>
                      <rect x="13" y="24" width="38" height="27" rx="12" fill="#e9f6ff" stroke="#b8e1ff"/>
                      <rect x="18" y="29" width="28" height="16" rx="8" fill="#102b55" stroke="#2c9dfb"/>
                      <circle cx="26" cy="37" r="2.5" fill="#36d7ff" stroke="none"/>
                      <circle cx="38" cy="37" r="2.5" fill="#36d7ff" stroke="none"/>
                      <path d="M28 42h8M8 31v10M56 31v10M25 51v5h14v-5" stroke="#1684f8"/>
                    </svg>
                  </div>
                </div>
                <div className="tcc-panel-content">
                  <h3>AI Voice Agents</h3>
                  <p className="tcc-sub">Human-like conversations at scale</p>
                  <div className="tcc-features">
                    <div className="tcc-feature">
                      <span className="tcc-dot-mini bg-[#1684f8]" />
                      <span>Inbound &amp; Outbound Autonomous Calling</span>
                    </div>
                    <div className="tcc-feature">
                      <span className="tcc-dot-mini bg-[#1684f8]" />
                      <span>Real-Time Indian &amp; Global Languages</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Card 2: Quality Management */}
              <section className="tcc-panel quality">
                <div className="tcc-orb">
                  <div className="tcc-orb-inner">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 12h30a5 5 0 0 1 5 5v31a5 5 0 0 1-5 5H17a5 5 0 0 1-5-5V17a5 5 0 0 1 5-5Z" fill="#FFFFFF" stroke="#FFFFFF"/>
                      <path d="M22 23h20M22 31h15M22 39h12" stroke="#8b4de8" strokeWidth="4"/>
                      <circle cx="44" cy="44" r="12" fill="#FFFFFF" stroke="#8b4de8"/>
                      <path d="m38 44 4 4 8-9" stroke="#8b4de8" strokeWidth="3"/>
                    </svg>
                  </div>
                </div>
                <div className="tcc-panel-content">
                  <h3>Quality Management</h3>
                  <p className="tcc-sub">AI-powered monitoring &amp; compliance</p>
                  <div className="tcc-features">
                    <div className="tcc-feature">
                      <span className="tcc-dot-mini bg-[#8b5cf6]" />
                      <span>100% Interaction Auditing &amp; Scoring</span>
                    </div>
                    <div className="tcc-feature">
                      <span className="tcc-dot-mini bg-[#8b5cf6]" />
                      <span>Automatic PII Redaction &amp; Compliance</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Center Hub: Telephony & Command Center */}
              <section className="tcc-center">
                <span className="tcc-dot d1"></span>
                <span className="tcc-dot d2"></span>
                <span className="tcc-dot d3"></span>
                <span className="tcc-dot d4"></span>
                <div className="tcc-center-inner">
                  <div className="tcc-cloud">
                    <svg viewBox="0 0 120 82" fill="none">
                      <path d="M31 65C15 65 7 54 7 42c0-12 10-22 23-22 5-13 17-19 29-16 12 2 20 11 22 23 14-2 28 8 28 22 0 10-8 16-20 16H31Z" fill="#1684f8"/>
                      <path d="M50 24c-4 2-5 8-3 13 4 10 12 18 22 21 5 2 10-1 11-5l-10-7-5 5c-5-3-9-7-11-12l4-4-8-11Z" fill="#FFFFFF"/>
                    </svg>
                  </div>
                  <h2>Telephony &amp;<br />Command Center</h2>
                  <p>Unified Communication Hub<br />for Seamless Orchestration</p>
                  <div className="tcc-chips">
                    <span className="tcc-chip">SIP / PSTN</span>
                    <span className="tcc-chip">WebRTC</span>
                    <span className="tcc-chip">CRM Sync</span>
                  </div>
                </div>
              </section>

              {/* Card 3: WhatsApp Business */}
              <section className="tcc-panel whatsapp">
                <div className="tcc-orb">
                  <div className="tcc-orb-inner">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 50l3-10a23 23 0 1 1 9 10l-12 0Z" fill="#10b981" stroke="#FFFFFF"/>
                      <path d="M25 20c-3 2-3 6-1 10 3 6 8 10 14 12 3 1 7-1 7-4l-7-4-4 4c-4-2-7-5-9-9l3-3-3-6Z" fill="#FFFFFF" stroke="#FFFFFF"/>
                    </svg>
                  </div>
                </div>
                <div className="tcc-panel-content">
                  <h3>WhatsApp Business</h3>
                  <p className="tcc-sub">Automated messaging &amp; campaigns</p>
                  <div className="tcc-features">
                    <div className="tcc-feature">
                      <span className="tcc-dot-mini bg-[#10b981]" />
                      <span>Meta Cloud API Official Partner</span>
                    </div>
                    <div className="tcc-feature">
                      <span className="tcc-dot-mini bg-[#10b981]" />
                      <span>Interactive Catalogs &amp; Quick Replies</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Card 4: Customer Engagement */}
              <section className="tcc-panel engagement">
                <div className="tcc-orb">
                  <div className="tcc-orb-inner">
                    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="32" cy="19" r="10" fill="#FFFFFF" stroke="#FFFFFF"/>
                      <circle cx="13" cy="27" r="7" fill="#FFFFFF" stroke="#FFFFFF"/>
                      <circle cx="51" cy="27" r="7" fill="#FFFFFF" stroke="#FFFFFF"/>
                      <path d="M13 53v-5c0-9 8-15 19-15s19 6 19 15v5H13Z" fill="#FFFFFF" stroke="#FFFFFF"/>
                      <path d="M4 50v-5c0-5 4-9 10-10M60 50v-5c0-5-4-9-10-10" stroke="#FFFFFF"/>
                    </svg>
                  </div>
                </div>
                <div className="tcc-panel-content">
                  <h3>Customer Engagement</h3>
                  <p className="tcc-sub">Personalized omnichannel journeys</p>
                  <div className="tcc-features">
                    <div className="tcc-feature">
                      <span className="tcc-dot-mini bg-[#f59e0b]" />
                      <span>Cross-Channel Unified Customer Context</span>
                    </div>
                    <div className="tcc-feature">
                      <span className="tcc-dot-mini bg-[#f59e0b]" />
                      <span>Event-Triggered Lifecycle Automations</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      <section ref={heroRef} className="relative w-full min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden isolate pt-24 md:pt-32 pb-8 md:pb-12 z-0 bg-transparent">
        {/* Full-bleed Hero Visual & Background */}
        <VisualSolutionsHero />

        {/* Top Text Content */}
        <div className="max-w-[1200px] w-full mx-auto px-6 text-center relative z-20 shrink-0">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-4 block text-center">
              Industry Solutions
            </span>
            <h1 className="text-[clamp(32px,5.5vw,68px)] font-medium tracking-tight text-[#14110F] leading-[1.08] sm:whitespace-nowrap">
              Tailored AI For Every <span style={{ color: BRAND }}>Industry.</span>
            </h1>
          </FadeInUp>
        </div>

        {/* Spacer to give visual breathing room for the background diagram */}
        <div className="w-full flex-1 min-h-[400px] md:min-h-[480px] pointer-events-none select-none" />

        <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
      </section>

      {/* 02 — NAVIGATION */}
      <ChapterNav 
        items={NAV_LABELS} 
        activeChapter={activeChapter} 
        scrollY={scrollY} 
      />

      {/* 03 — SOLUTIONS AS CHAPTERS (2 CARDS PER SECTION) */}
      <div className="w-full relative z-10">
        {Array.from({ length: Math.ceil(solutions.length / 2) }).map((_, rowIndex) => {
          const rowSolutions = solutions.slice(rowIndex * 2, rowIndex * 2 + 2);
          return (
            <section key={rowIndex} className="w-full py-24 md:py-40 px-4 sm:px-6 md:px-16 lg:px-20 relative overflow-x-clip bg-transparent">
              <ParallaxText text={bgWords[rowIndex % bgWords.length]} alignLeft={rowIndex % 2 === 0} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
              
              <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {rowSolutions.map((solution, colIndex) => {
                  const i = rowIndex * 2 + colIndex;
                  return (
                    <div id={`chapter-${i}`} key={solution.id} className="flex flex-col items-center gap-6 md:gap-8">
                      {/* Theme Header */}
                      <div className="w-full max-w-[720px] text-left">
                        <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold block whitespace-normal text-[var(--global-dark-accent)] transition-colors duration-300">
                          0{i + 1} / {solution.industry}
                        </span>
                      </div>

                      {/* Solution Card */}
                      <div className="w-full flex justify-center z-10 h-full">
                        <SolutionCard solution={solution} index={i} />
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
            </section>
          );
        })}
      </div>

      <ArchitectureDiagram />

      {/* 04 — FINAL CTA */}
      <section id="final-cta" className="relative w-full py-40 md:py-64 bg-[#050505] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: `color-mix(in srgb, ${BRAND} 20%, transparent)` }} />

        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,96px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Ready to transform your industry?
            </h2>
            <h3 className="text-[clamp(20px,4vw,48px)] font-normal tracking-tight text-white/50 leading-[1.2] mb-24">
              See tailored orchestration in action.
            </h3>

            <div className="flex flex-col gap-6 items-center">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-white/30 uppercase">Get Started</span>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <MagneticElement>
                  <Link to="/contact">
                    <AntiMetalButton label="Contact Us" />
                  </Link>
                </MagneticElement>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}

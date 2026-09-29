import React, { useRef, useState, useEffect } from 'react';
import { useParams, Navigate, Link as RouterLink } from 'react-router-dom';
import AntiMetalButton from '../components/shared/AntiMetalButton';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useSpring, useMotionValue } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem, ScrollWordReveal } from '../components/shared/Motion';
import { MagneticElement, ParallaxText } from '../components/shared/Interactive';
import IllustrationCard from '../components/shared/IllustrationCard';
import { BRAND, BRAND_TEXT, ACCENTS } from '../data/accents';
import { useChapterColor } from '../hooks/useChapterColor';
import ChapterNav from '../components/shared/ChapterNav';
import { company } from '../data/company';
import heroImg from '../assets/hero.png';
import aboutMission from '../assets/about_platform.png';
import aboutPlatform from '../assets/about_platform.png';
import patternImg from '../assets/pattern.png';
import logoImg from '../assets/logo.png';
import { 
  IllustrationIntelligentAgents, IllustrationAgentNetwork, IllustrationInnovation, IllustrationImpact, 
  IllustrationReliability, IllustrationHealthcare, IllustrationFintech, IllustrationConsumerDurable, 
  IllustrationRealEstate, IllustrationUtilities,
  IllustrationAgentNetwork_Tile, IllustrationReliability_Tile, IllustrationImpact_Tile,
  IllustrationInnovation_Tile, IllustrationInnovation_Full
} from '../components/shared/CardIllustrations';
import { Mic, MessageCircle, Phone, Smartphone, Zap, CheckCircle, Link, Map, Briefcase, ShieldCheck, BarChart3, User, Network, Database, Cpu, ArrowRight, ArrowDown, Activity, Compass, Sliders, Users, Rocket, Target, Sparkles } from 'lucide-react';

// ─── Culture Manifesto: data ───────────────────────────────────────────────────
const THEMES = [
  {
    id: 0,
    label: 'Work',
    full: 'How We Work',
    principles: [
      { title: 'Customer Success Begins After the Sale', desc: "We don't celebrate signed contracts — we celebrate customers achieving measurable business outcomes." },
      { title: 'We Measure Impact, Not Attendance', desc: 'We believe great work is measured by impact, not by the number of hours you spend working.' },
      { title: 'Trust is Given, Ownership is Expected', desc: 'We trust every team member to make the right decisions and take complete ownership of their work.' },
      { title: 'Think Like a Founder', desc: "Don't wait for permission. If you see an opportunity to improve something, own it and make it happen." },
    ],
  },
  {
    id: 1,
    label: 'Grow',
    full: 'How We Grow',
    principles: [
      { title: 'Never Stop Learning', desc: 'Every team member receives a dedicated monthly learning budget for books, empowering them to continuously learn, grow, and innovate.' },
      { title: 'Rewards That Improve Your Life', desc: "We don't reward you with gadgets — we reward you with books, plants, family experiences, wellness activities, and opportunities to grow." },
      { title: 'Building Wealth Together', desc: 'We sponsor a monthly SIP contribution for our employees because financial well-being is just as important as professional growth.' },
    ],
  },
  {
    id: 2,
    label: 'Connect',
    full: 'How We Connect',
    principles: [
      { title: 'Sports Build Better Teams', desc: 'Every month we play together because stronger teams are built through shared experiences, not just shared projects.' },
      { title: 'Stay Close to Nature', desc: 'Every quarter, we organize a team mountain retreat to recharge, reconnect, and rediscover the creativity that nature inspires.' },
      { title: 'Work From Hometown', desc: "Every six months, we take Voxi to one teammate's hometown to experience their culture, meet their family, and strengthen our bonds as one team." },
    ],
  },
  {
    id: 3,
    label: 'Live',
    full: 'How We Live',
    principles: [
      { title: 'Family Before Everything', desc: "We believe success is truly meaningful only when it's shared with loved ones. That's why every employee receives one dedicated Family Leave and a monthly Voxi-sponsored Family Dinner." },
      { title: 'Health is Our Greatest Investment', desc: 'We provide health insurance for every employee and their immediate family because peace of mind creates better work.' },
      { title: 'Build a Healthy Lifestyle', desc: "Complete 10,000 steps for at least 15 days in a month and we'll reward your commitment to a healthier life." },
      { title: 'Less Mobile. More Life.', desc: 'Employees who achieve the monthly mobile screen-time goals will be recognized and rewarded for promoting a healthier and more balanced digital lifestyle.' },
      { title: 'Start with Wellness', desc: 'Every workday begins with a 15-minute team yoga and mindfulness session because great work starts with a healthy mind and body.' },
    ],
  },
];



const TypographicWall = () => {
  const words = [
    { word: 'PURPOSE', desc: 'We build technology because something meaningful can happen when it works.' },
    { word: 'CURIOSITY', desc: 'We never stop asking "Why?" and "What if?".' },
    { word: 'OWNERSHIP', desc: 'Trust is given, ownership is expected.' },
    { word: 'EMPATHY', desc: 'Technology moves forward, but people come first.' },
    { word: 'CRAFT', desc: 'Sweat the details. Precision is our baseline.' },
    { word: 'COURAGE', desc: 'Make bold decisions quickly.' },
    { word: 'COLLABORATION', desc: 'Different paths, one shared direction.' },
    { word: 'BALANCE', desc: 'Great work makes room for a great life.' },
  ];
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full py-24 md:py-32 bg-transparent text-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
         <div className="mb-12 md:mb-20">
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase">Culture Principles Wall</span>
         </div>
         <div className="flex flex-wrap gap-x-8 gap-y-2 md:gap-y-4">
            {words.map((w, i) => (
              <motion.div 
                key={i}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                className="relative cursor-crosshair group"
              >
                <span className={`text-[clamp(28px,8vw,120px)] font-medium tracking-tighter leading-none transition-colors duration-500 break-all sm:break-normal ${hovered === i ? 'text-white' : hovered !== null ? 'text-white/10' : 'text-white/40'}`}>
                  {w.word}.
                </span>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-4 w-[200px] md:w-[300px] bg-white text-black p-3 md:p-4 rounded-xl shadow-2xl z-20 pointer-events-none"
                    >
                      <p className="text-[12px] md:text-[14px] font-medium">{w.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
         </div>
      </div>
    </section>
  );
};

const PracticeSection = () => (
  <section className="w-full py-24 md:py-32 bg-[#FAFAFA]">
    <div className="max-w-[900px] mx-auto px-6 md:px-16 lg:px-20">
      <h3 className="text-[clamp(28px,5vw,56px)] font-medium tracking-tight text-[#111] leading-[1.1] mb-16 md:mb-20">
        Beliefs are only useful when they change how we work.
      </h3>
      <div className="flex flex-col gap-10 md:gap-12 border-l border-black/10 pl-6 md:pl-12 ml-3 md:ml-4">
         {[
           { title: 'FLEXIBLE WORK', reason: "because great ideas don't follow office hours." },
           { title: 'FAMILY FIRST', reason: "because life doesn't pause for work." },
           { title: 'OWNERSHIP', reason: "because decisions should move quickly." },
           { title: 'LEARNING', reason: "because technology never stops changing." },
           { title: 'CUSTOMER OBSESSION', reason: "because the work matters when it creates impact." },
         ].map((item, i) => (
           <div key={i} className="relative">
             <div className="absolute -left-[33px] md:-left-[57px] top-1 md:top-2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#FAFAFA] border-2 border-black/20" />
             <h4 className="font-mono text-[12px] md:text-[14px] tracking-[0.1em] text-[#111] font-bold mb-2">{item.title}</h4>
             <p className="text-[18px] md:text-[28px] text-black/50 font-light leading-snug">→ {item.reason}</p>
           </div>
         ))}
      </div>
    </div>
  </section>
);


const VisualCompanyHero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), { damping: 30, stiffness: 100 });
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-50, 50]), { damping: 30, stiffness: 100 });
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 30, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 30, stiffness: 100 });
  
  const moveX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [25, -25]), { damping: 40, stiffness: 80 });
  const moveY2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [25, -25]), { damping: 40, stiffness: 80 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center" style={{ perspective: 1200 }}>
      {/* Premium subtle dot grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100 z-0" />

      {/* Background massive glowing aura */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[120px] rounded-full mix-blend-multiply pointer-events-none transition-colors duration-500 z-0"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, var(--global-accent) 50%, transparent), transparent)`
        }}
      />

      <motion.div 
        style={{ x: moveX, y: moveY, rotateX, rotateY, transformStyle: "preserve-3d" }} 
        className="absolute inset-0 flex justify-center items-center z-10"
      >
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" stroke="currentColor" fill="none"
          className="absolute inset-0"
        >
          {/* Base Grid Lines (Systems diagram style) */}
          <g className="text-[var(--global-dark-accent)] opacity-[0.08]">
            {Array.from({ length: 13 }).map((_, i) => (
              <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" strokeWidth="1" />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`h-${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} strokeWidth="1" />
            ))}
          </g>

          {/* Core Orbital Rings */}
          <motion.g style={{ transformOrigin: "600px 400px" }} animate={{ rotate: 360 }} transition={{ duration: 150, repeat: Infinity, ease: "linear" }}>
            <circle cx="600" cy="400" r="300" strokeWidth="1" className="text-[var(--global-accent)] opacity-20" strokeDasharray="2 10" />
            <circle cx="600" cy="400" r="450" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-15" />
            <circle cx="600" cy="400" r="600" strokeWidth="1" className="text-[var(--global-accent)] opacity-10" strokeDasharray="10 20" />
            
            {/* Orbital Nodes */}
            <circle cx="600" cy="100" r="4" className="text-[var(--global-accent)] opacity-60" fill="currentColor" />
            <circle cx="900" cy="400" r="6" className="text-[var(--global-accent)] opacity-40" fill="currentColor" />
            <circle cx="300" cy="400" r="3" className="text-[var(--global-accent)] opacity-50" fill="currentColor" />
          </motion.g>

          {/* Inner Counter-Rotating Ring */}
          <motion.g style={{ transformOrigin: "600px 400px" }} animate={{ rotate: -360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }}>
            <circle cx="600" cy="400" r="200" strokeWidth="1" className="text-[var(--global-accent)] opacity-30" strokeDasharray="20 40 10 40" />
            <circle cx="600" cy="200" r="5" className="text-[var(--global-accent)] opacity-80" fill="currentColor" />
          </motion.g>

          {/* Sweeping Bezier Connections */}
          <path d="M 0 200 C 400 200, 400 600, 1200 600" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-[0.15]" />
          <path d="M 0 600 C 400 600, 800 200, 1200 200" strokeWidth="1" className="text-[var(--global-dark-accent)] opacity-[0.15]" />
          <path d="M 600 0 C 600 300, 800 500, 800 800" strokeWidth="1" className="text-[var(--global-accent)] opacity-[0.1]" />

          {/* Data Particles moving along Paths */}
          <motion.circle r="3" fill="var(--global-accent)" style={{ filter: 'drop-shadow(0 0 8px var(--global-accent))' }}
            animate={{
              cx: [0, 400, 800, 1200],
              cy: [200, 400, 500, 600],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle r="4" fill="var(--global-accent)" style={{ filter: 'drop-shadow(0 0 10px var(--global-accent))' }}
            animate={{
              cx: [1200, 800, 400, 0],
              cy: [200, 350, 500, 600],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ duration: 6, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>

      {/* Interactive foreground glass layers */}
      <motion.div style={{ x: moveX2, y: moveY2, rotateX, rotateY, transformStyle: "preserve-3d" }} className="absolute inset-0 flex justify-center items-center pointer-events-none z-20">
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-[var(--global-accent)]/10 bg-white/[0.02] backdrop-blur-[2px] absolute" style={{ transform: "translateZ(100px)" }} />
        <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] rounded-full border border-[var(--global-accent)]/20 bg-[var(--global-accent)]/[0.02] backdrop-blur-[4px] absolute" style={{ transform: "translateZ(200px)" }} />
        <div className="w-4 h-4 rounded-full bg-[var(--global-accent)] absolute shadow-[0_0_20px_var(--global-accent)]" style={{ transform: "translateZ(300px)" }} />
      </motion.div>
    </div>
  );
};


const VisualIntersection = () => (
  <div className="w-full max-w-[500px] mx-auto py-12 relative flex items-center justify-center h-[300px] md:h-[400px]">
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border-2 border-[var(--global-accent)]/60 bg-[var(--global-accent)]/5 -translate-x-8 -translate-y-8 md:-translate-x-10 md:-translate-y-10 flex items-center justify-center shadow-[0_0_15px_color-mix(in_srgb,var(--global-accent)_20%,transparent)]">
         <span className="font-mono font-bold text-[10px] tracking-widest text-[var(--global-accent)]/90 absolute top-4">WORK</span>
      </div>
      <div className="absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border-2 border-[var(--global-accent)]/60 bg-[var(--global-accent)]/5 translate-x-8 -translate-y-8 md:translate-x-10 md:-translate-y-10 flex items-center justify-center shadow-[0_0_15px_color-mix(in_srgb,var(--global-accent)_20%,transparent)]">
         <span className="font-mono font-bold text-[10px] tracking-widest text-[var(--global-accent)]/90 absolute top-4">LIFE</span>
      </div>
      <div className="absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border-2 border-[var(--global-accent)]/60 bg-[var(--global-accent)]/5 -translate-x-8 translate-y-8 md:-translate-x-10 md:translate-y-10 flex items-center justify-center shadow-[0_0_15px_color-mix(in_srgb,var(--global-accent)_20%,transparent)]">
         <span className="font-mono font-bold text-[10px] tracking-widest text-[var(--global-accent)]/90 absolute bottom-4">FAMILY</span>
      </div>
      <div className="absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border-2 border-[var(--global-accent)]/60 bg-[var(--global-accent)]/5 translate-x-8 translate-y-8 md:translate-x-10 md:translate-y-10 flex items-center justify-center shadow-[0_0_15px_color-mix(in_srgb,var(--global-accent)_20%,transparent)]">
         <span className="font-mono font-bold text-[10px] tracking-widest text-[var(--global-accent)]/90 absolute bottom-4">AMBITION</span>
      </div>
    </motion.div>
    <div className="w-4 h-4 md:w-5 md:h-5 rounded-full z-10 shadow-[0_0_20px_var(--global-accent)] bg-[var(--global-accent)] transition-colors duration-300" />
  </div>
);

const VisualCuriosity = () => (
  <div className="flex flex-col gap-6 max-w-[400px] mx-auto py-12 pl-12 border-l border-[var(--global-accent)]/20">
     {['WHY?', 'WHAT IF?', 'HOW?', 'BUILD', 'LEARN', 'REPEAT'].map((q, i) => (
       <motion.div 
         key={q}
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.5, delay: i*0.1 }}
         className="flex items-center gap-4 relative"
       >
         <div className="absolute -left-12 w-6 h-px bg-[var(--global-accent)]/30" />
         <span className="font-mono text-[24px] md:text-[32px] tracking-widest font-light text-[var(--global-dark-accent)] transition-colors duration-300">{q}</span>
       </motion.div>
     ))}
  </div>
);

const VisualLifeBalance = () => (
  <div className="w-full max-w-[360px] mx-auto py-12 relative flex flex-col gap-5 z-10 isolate">
     
     {/* Premium Aurora Glow */}
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-[-2] pointer-events-none">
       <motion.div 
         animate={{ 
           rotate: [0, 90, 0],
           scale: [1, 1.1, 1],
           filter: ['hue-rotate(0deg)', 'hue-rotate(40deg)', 'hue-rotate(0deg)']
         }}
         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
         className="absolute top-0 left-0 w-[80%] h-[80%] bg-[var(--global-accent)] blur-[50px] opacity-20 rounded-full mix-blend-screen"
       />
       <motion.div 
         animate={{ 
           rotate: [0, -90, 0],
           scale: [1.1, 1, 1.1],
           filter: ['hue-rotate(0deg)', 'hue-rotate(-40deg)', 'hue-rotate(0deg)']
         }}
         transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
         className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-[var(--global-dark-accent)] blur-[50px] opacity-20 rounded-full mix-blend-screen"
       />
     </div>

     <motion.div 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       animate={{ y: [0, -3, 0] }}
       transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.6 } }}
       viewport={{ once: true }}
       className="w-full bg-white/70 backdrop-blur-md border border-[var(--global-accent)]/20 rounded-2xl p-5 flex items-center justify-between shadow-[0_8px_30px_rgba(20,17,15,0.03)] hover:border-[var(--global-accent)]/40 transition-colors"
     >
       <div className="flex items-center gap-4">
         <div className="w-10 h-10 rounded-full bg-[var(--global-accent)]/10 flex items-center justify-center">
           <Activity size={18} className="text-[var(--global-accent)]" />
         </div>
         <div className="flex flex-col">
           <span className="text-[10px] font-mono tracking-[0.15em] text-[var(--global-dark-accent)]/60 uppercase font-bold mb-0.5">Daily Steps</span>
           <span className="text-[18px] font-medium text-[#14110F] leading-none">10,000<span className="text-[var(--global-accent)]">+</span></span>
         </div>
       </div>
       <div className="w-[60px] h-7 rounded-full bg-[var(--global-accent)]/10 relative overflow-hidden flex items-center justify-center">
          <motion.div 
             initial={{ width: 0 }} 
             whileInView={{ width: "100%" }} 
             transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
             className="absolute left-0 top-0 bottom-0 bg-[var(--global-accent)] opacity-20" 
          />
          <span className="relative z-10 text-[9px] font-mono font-bold text-[var(--global-accent)] tracking-widest">GOAL</span>
       </div>
     </motion.div>

     <motion.div 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       animate={{ y: [0, -4, 0] }}
       transition={{ y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }, opacity: { duration: 0.6, delay: 0.15 } }}
       viewport={{ once: true }}
       className="w-full bg-white/70 backdrop-blur-md border border-[var(--global-accent)]/20 rounded-2xl p-5 flex items-center justify-between shadow-[0_8px_30px_rgba(20,17,15,0.03)] ml-4 hover:border-[var(--global-accent)]/40 transition-colors"
     >
       <div className="flex items-center gap-4">
         <div className="w-10 h-10 rounded-full bg-[var(--global-accent)]/10 flex items-center justify-center">
           <Smartphone size={18} className="text-[var(--global-accent)]" />
         </div>
         <div className="flex flex-col">
           <span className="text-[10px] font-mono tracking-[0.15em] text-[var(--global-dark-accent)]/60 uppercase font-bold mb-0.5">Screen Time</span>
           <span className="text-[18px] font-medium text-[#14110F] leading-none">-40%</span>
         </div>
       </div>
       <div className="w-8 h-8 rounded-full border-[1.5px] border-[var(--global-accent)]/40 flex items-center justify-center bg-[var(--global-accent)]/5">
         <ArrowDown size={14} className="text-[var(--global-accent)]" />
       </div>
     </motion.div>

     <motion.div 
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       animate={{ y: [0, -3, 0] }}
       transition={{ y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }, opacity: { duration: 0.6, delay: 0.3 } }}
       viewport={{ once: true }}
       className="w-full bg-gradient-to-r from-[var(--global-accent)] to-[var(--global-dark-accent)] rounded-2xl p-5 flex items-center justify-between shadow-[0_12px_40px_color-mix(in_srgb,var(--global-accent)_35%,transparent)] mt-2 -ml-2"
     >
       <div className="flex items-center gap-4">
         <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner">
           <Users size={18} className="text-white" />
         </div>
         <div className="flex flex-col">
           <span className="text-[10px] font-mono tracking-[0.15em] text-white/70 uppercase font-bold mb-0.5">Priority</span>
           <span className="text-[18px] font-medium text-white leading-none">Family & Life</span>
         </div>
       </div>
       <CheckCircle size={22} className="text-white drop-shadow-md" />
     </motion.div>
  </div>
);

const VisualWorkProcess = () => {
  const steps = ['Success', 'Measure Impact', 'Ownership', 'Founder'];
  return (
    <div className="w-full py-16 relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--global-accent)] to-transparent opacity-30 -translate-y-1/2" />
      <div className="max-w-[800px] mx-auto relative z-10">
        <div className="flex justify-between items-center">
          {steps.map((step, i) => (
            <motion.div 
               key={step}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15, duration: 0.6 }}
               className="flex flex-col items-center gap-4"
            >
              <div className={`w-3 h-3 rounded-full shrink-0 transition-colors duration-300 ${i === steps.length - 1 ? 'bg-[var(--global-accent)] scale-150 shadow-[0_0_15px_var(--global-accent)]' : 'bg-[#F5F1EA] border-2 border-[var(--global-accent)]/40'}`} />
              <span className={`font-mono uppercase text-[10px] tracking-[0.2em] transition-colors duration-300 text-center ${i === steps.length - 1 ? 'text-[var(--global-accent)] font-bold' : 'text-[#14110F]/40'}`}>{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CULTURE_NAV_LABELS = ['Work', 'Grow', 'Connect', 'Live'];
const cultureAccentColors = [BRAND, ACCENTS[1].accent, ACCENTS[2].accent, ACCENTS[3].accent, BRAND, BRAND];
const cultureTintColors = [ACCENTS[0].tint, ACCENTS[1].tint, ACCENTS[2].tint, ACCENTS[3].tint, ACCENTS[0].tint, ACCENTS[0].tint];
const cultureDarkColors = [BRAND_TEXT, ACCENTS[1].dark, ACCENTS[2].dark, ACCENTS[3].dark, BRAND_TEXT, BRAND_TEXT];

const CulturePage = () => {
  const { activeChapter, scrollY } = useChapterColor(
    CULTURE_NAV_LABELS.length,
    cultureAccentColors,
    cultureTintColors,
    cultureDarkColors
  );

  return (
    <div className="w-full min-h-screen text-[#14110F] relative selection:bg-[var(--global-accent)]/20">
      <div 
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-300"
        style={{ backgroundImage: 'linear-gradient(180deg, #F5F1EA 0%, var(--global-tint, #F5F1EA) 100%)' }}
      />
      
      {/* HERO */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden isolate pt-0 pb-10 z-0 bg-transparent">
        <VisualCompanyHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 mt-32">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-6 block">
              Culture Manifesto
            </span>
            <h1 className="text-[clamp(40px,7vw,100px)] font-medium tracking-tighter text-[#14110F] leading-[1.05]">
              Work that matters,<br/>
              <span className="text-[var(--global-accent)] italic transition-colors duration-300">Life that counts.</span>
            </h1>
            <p className="mt-8 text-[18px] md:text-[24px] text-[#14110F]/60 leading-[1.6] font-light max-w-[700px] mx-auto">
              We're building technology that moves customer conversations forward — without losing sight of the people building it.
            </p>
          </FadeInUp>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
      </section>

      <ChapterNav items={CULTURE_NAV_LABELS} activeChapter={activeChapter} scrollY={scrollY} />

      <div className="w-full relative z-10">
        {THEMES.map((theme, idx) => (
          <section key={idx} id={`chapter-${idx}`} className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex flex-col items-center justify-center">
            <ParallaxText text={theme.label.toUpperCase() + "."} alignLeft={idx % 2 === 0} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
            <div className="max-w-[1200px] mx-auto relative z-10 w-full">
               
               <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-24">
                 <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-6 text-[var(--global-dark-accent)] transition-colors duration-300">
                   0{idx + 1} / {theme.full}
                 </span>
                 <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.2]">
                   {idx === 0 ? "We don't build technology because it can be built. We build it because something meaningful can happen when it works." :
                    idx === 1 ? "Curiosity is our engine. We are empowered to continuously learn, grow, and innovate." :
                    idx === 2 ? "Stronger teams are built through shared experiences, not just shared projects." :
                    "Great work should make room for a great life."}
                 </h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-t border-[rgba(20,17,15,0.1)] pt-12">
                 
                 <div className={`flex items-center justify-center ${idx % 2 !== 0 ? 'lg:col-span-5 lg:order-2' : 'lg:col-span-5 lg:order-1'}`}>
                    <div className="w-full h-full min-h-[300px] flex items-center justify-center">
                      {idx === 0 ? <VisualWorkProcess /> :
                       idx === 1 ? <VisualCuriosity /> :
                       idx === 2 ? <VisualIntersection /> :
                       <VisualLifeBalance />
                      }
                    </div>
                 </div>

                 <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:col-span-7 lg:order-1' : 'lg:col-span-7 lg:order-2'}`}>
                   {theme.principles.map((principle, j) => (
                     <div key={j} className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 border-b border-gradient-to-r from-[rgba(20,17,15,0.1)] via-[rgba(20,17,15,0.05)] to-transparent group last:border-b-0">
                       <div className="font-mono text-[13px] md:text-[14px] font-bold text-[var(--global-accent)] opacity-50 w-6 shrink-0 transition-colors duration-300">
                         {(j + 1).toString().padStart(2, '0')}
                       </div>
                       <div className="flex-1">
                         <h3 className="text-[20px] md:text-[22px] font-medium text-[#14110F] tracking-tight mb-2 group-hover:text-[var(--global-dark-accent)] transition-colors duration-300">
                           {principle.title}
                         </h3>
                         <p className="text-[15px] md:text-[16px] text-[#14110F]/70 leading-[1.6] font-light max-w-[600px]">
                           {principle.desc}
                         </p>
                       </div>
                     </div>
                   ))}
                 </div>

               </div>
            </div>
          </section>
        ))}

      </div>

      {/* TYPOGRAPHIC WALL */}
      <div className="bg-[#16130F] text-white">
        <TypographicWall />
      </div>

      {/* FINAL CTA */}
      <section className="relative w-full py-40 md:py-64 bg-[#16130F] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: `color-mix(in srgb, var(--global-accent) 20%, transparent)` }} />
        
        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <span className="font-mono text-[12px] md:text-[14px] tracking-[0.2em] text-[var(--global-accent)] uppercase font-bold mb-8 block transition-colors duration-300">
              The Voxi Promise
            </span>
            <h2 className="text-[clamp(32px,5vw,72px)] font-medium tracking-tighter text-white leading-[1.1] mb-16 max-w-[900px] mx-auto">
              At Voxi, you're not joining a company — you're joining a mission to build world-class AI while living a healthier, happier, and more meaningful life.
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <MagneticElement>
                <button className="w-full sm:w-auto px-10 py-4 bg-[#F5F1EA] text-[#14110F] rounded-[24px] text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#1283a9]/60 inline-block">
                  JOIN VOXI
                </button>
              </MagneticElement>
              <MagneticElement>
                <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white rounded-[24px] text-[15px] font-medium transition-all duration-300 cursor-pointer hover:bg-white/5">
                  EXPLORE OPEN ROLES
                </button>
              </MagneticElement>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

const FOUNDERS = [
  { name: 'Manish Joshi', role: 'CEO', image: '' },
  { name: 'Rakesh Kanugula', role: 'COO', image: '' }
];

const SOLUTION_POINTERS = [
  {
    title: "Unified Platform",
    desc: "A single intelligent ecosystem for all customer interactions.",
    illustration: IllustrationAgentNetwork_Tile
  },
  {
    title: "Scalable Architecture",
    desc: "Designed to handle millions of interactions with zero downtime.",
    illustration: IllustrationReliability_Tile
  },
  {
    title: "Continuous Innovation",
    desc: "Self-learning models that improve with every conversation.",
    illustration: IllustrationInnovation_Tile
  },
  {
    title: "Measurable Impact",
    desc: "Clear ROI and business outcomes for every deployment.",
    illustration: IllustrationImpact_Tile
  }
];

const STATS = [
  { value: '10M+', label: 'Conversations/Month' },
  { value: '98%', label: 'Resolution Rate' },
  { value: '4.8★', label: 'Average CSAT' },
  { value: '75%', label: 'Cost Reduction' }
];

const FRAMEWORK_STAGES = [
  {
    step: '01',
    timeline: 'Days 1-5',
    title: 'Discovery & Design',
    description: 'We map out your current customer journey, identify bottlenecks, and design a unified AI workflow tailored to your specific business goals.'
  },
  {
    step: '02',
    timeline: 'Days 6-10',
    title: 'Integration & Pilot',
    description: 'Our engineering team integrates Voxi with your existing CRM and telephony systems, deploying a pilot to test real-world scenarios.'
  },
  {
    step: '03',
    timeline: 'Days 11-15',
    title: 'Optimization & Scaling',
    description: 'We analyze the pilot data to fine-tune the AI models, ensuring maximum ROI before scaling the solution across your entire customer base.'
  }
];

const ABOUT_NAV_LABELS = ['Story', 'Intelligence', 'Implementation', 'Team', 'Mission'];
const aboutAccentColors = [BRAND, ACCENTS[0].accent, ACCENTS[1].accent, ACCENTS[2].accent, ACCENTS[3].accent, ACCENTS[0].accent, BRAND];
const aboutTintColors = [ACCENTS[0].tint, ACCENTS[0].tint, ACCENTS[1].tint, ACCENTS[2].tint, ACCENTS[3].tint, ACCENTS[0].tint, ACCENTS[0].tint];
const aboutDarkColors = [BRAND_TEXT, ACCENTS[0].dark, ACCENTS[1].dark, ACCENTS[2].dark, ACCENTS[3].dark, ACCENTS[0].dark, BRAND_TEXT];


const DynamicFrameworkIllustration = ({ activeStage }) => {
  return (
    <div className="w-full h-full relative flex items-center justify-center isolate">
      {/* Main SVG Orchestrator */}
      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" className="overflow-visible">
        {/* Stage 0: Discovery & Design */}
        <motion.g
          animate={{ opacity: activeStage === 0 ? 1 : 0, scale: activeStage === 0 ? 1 : 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-[var(--global-accent)] opacity-40" />
          <motion.path 
            animate={{ pathLength: activeStage === 0 ? [0, 1] : 0 }} 
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            d="M50 100 C 50 50, 150 50, 150 100 C 150 150, 50 150, 50 100" stroke="currentColor" strokeWidth="1.5" className="text-[var(--global-accent)]" fill="none" 
          />
          <circle cx="50" cy="100" r="4" fill="currentColor" className="text-[var(--global-accent)]" />
          <circle cx="150" cy="100" r="4" fill="currentColor" className="text-[var(--global-accent)]" />
          <circle cx="100" cy="50" r="4" fill="currentColor" className="text-[var(--global-accent)] opacity-50" />
        </motion.g>

        {/* Stage 1: Integration & Pilot */}
        <motion.g
          animate={{ opacity: activeStage === 1 ? 1 : 0, rotate: activeStage === 1 ? 360 : 0 }}
          transition={{ opacity: { duration: 0.6 }, rotate: { duration: 15, repeat: Infinity, ease: "linear" } }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-20" />
          <polygon points="100,60 135,120 65,120" stroke="currentColor" strokeWidth="1.5" className="text-[var(--global-accent)]" fill="none" />
          <motion.circle 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} 
            transition={{ duration: 2, repeat: Infinity }}
            cx="100" cy="100" r="8" fill="currentColor" className="text-[var(--global-accent)]" 
          />
          <circle cx="100" cy="50" r="3" fill="currentColor" className="text-[var(--global-accent)]" />
          <circle cx="143" cy="125" r="3" fill="currentColor" className="text-[var(--global-accent)]" />
          <circle cx="57" cy="125" r="3" fill="currentColor" className="text-[var(--global-accent)]" />
        </motion.g>

        {/* Stage 2: Optimization & Scaling */}
        <motion.g
          animate={{ opacity: activeStage === 2 ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.circle 
            animate={{ r: activeStage === 2 ? [20, 80] : 20, opacity: activeStage === 2 ? [0.6, 0] : 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            cx="100" cy="100" stroke="currentColor" strokeWidth="2" className="text-[var(--global-accent)]" fill="none"
          />
          <motion.circle 
            animate={{ r: activeStage === 2 ? [20, 80] : 20, opacity: activeStage === 2 ? [0.6, 0] : 0 }}
            transition={{ duration: 2, repeat: Infinity, delay: 1, ease: "easeOut" }}
            cx="100" cy="100" stroke="currentColor" strokeWidth="2" className="text-[var(--global-accent)]" fill="none"
          />
          <circle cx="100" cy="100" r="20" fill="currentColor" className="text-[var(--global-accent)] opacity-20" />
          <circle cx="100" cy="100" r="10" fill="currentColor" className="text-[var(--global-accent)]" />
          <rect x="70" y="90" width="8" height="20" rx="4" fill="currentColor" className="text-[var(--global-accent)] opacity-40" />
          <rect x="90" y="75" width="8" height="35" rx="4" fill="currentColor" className="text-[var(--global-accent)] opacity-60" />
          <rect x="110" y="60" width="8" height="50" rx="4" fill="currentColor" className="text-[var(--global-accent)] opacity-80" />
          <rect x="130" y="40" width="8" height="70" rx="4" fill="currentColor" className="text-[var(--global-accent)]" />
        </motion.g>
      </svg>
    </div>
  );
};

const AboutPage = () => {
  const { activeChapter, scrollY } = useChapterColor(
    ABOUT_NAV_LABELS.length,
    aboutAccentColors,
    aboutTintColors,
    aboutDarkColors
  );

  const [activeFrameworkStage, setActiveFrameworkStage] = useState(0);

  return (
    <div className="w-full min-h-screen text-[#14110F] relative selection:bg-[var(--global-accent)]/20">
      <div 
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-300"
        style={{ backgroundImage: 'linear-gradient(180deg, #F5F1EA 0%, var(--global-tint, #F5F1EA) 100%)' }}
      />
      
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden isolate pt-0 pb-10 z-0 bg-transparent">
        <VisualCompanyHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 mt-32">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-6 block">
              About VoxiFlow AI
            </span>
            <h1 className="text-[clamp(40px,7vw,84px)] font-medium tracking-tighter text-[#14110F] leading-[1.05]">
              Every customer conversation. <br />
              <span className="text-[var(--global-accent)] italic transition-colors duration-300">Connected.</span>
            </h1>
            <p className="mt-8 text-[18px] md:text-[22px] text-[#14110F]/60 leading-[1.6] font-light max-w-[600px] mx-auto">
              Thousands of isolated interactions transformed into one intelligent, self-learning infrastructure.
            </p>
          </FadeInUp>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
      </section>

      <ChapterNav items={ABOUT_NAV_LABELS} activeChapter={activeChapter} scrollY={scrollY} />

      <div className="w-full relative z-10">
        
        {/* CHAPTER 1: STORY */}
        <section id="chapter-0" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex items-center justify-center">
          <ParallaxText text="CONNECT." alignLeft={true} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 w-full">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">01 / STORY</span>
             
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
               <div className="lg:col-span-7 flex flex-col justify-center">
                 <h2 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.1] mb-8">
                   Customer conversations don't happen in one place. They happen everywhere.
                 </h2>
                 <p className="text-[18px] md:text-[20px] text-[#14110F]/70 leading-relaxed font-light">
                   Fragmented tools create broken journeys, isolated context, and frustrated customers. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent ecosystem. That's why we built the Voxi CX Operating System.
                 </p>
               </div>
               <div className="lg:col-span-5 flex items-center justify-center">
                 <div className="w-full aspect-[4/3] rounded-[24px] bg-[var(--global-accent)]/5 flex items-center justify-center p-8 border border-[rgba(20,17,15,0.05)] shadow-[0_10px_40px_rgba(20,17,15,0.02)] transition-colors duration-300">
                   <div className="w-full h-full text-[var(--global-accent)] [&>svg]:!text-[var(--global-accent)] transition-colors duration-300 flex items-center justify-center">
                     <IllustrationInnovation_Full />
                   </div>
                 </div>
               </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SOLUTION_POINTERS.slice(0, 4).map((item, i) => {
                  const Illus = item.illustration;
                  return (
                    <div key={i} className="p-6 border border-[rgba(20,17,15,0.1)] rounded-2xl bg-white/50 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-xl bg-[var(--global-accent)]/10 flex items-center justify-center mb-4 transition-colors duration-300">
                        <Illus className="w-6 h-6 text-[var(--global-accent)] transition-colors duration-300" />
                      </div>
                      <h4 className="text-[16px] font-medium text-[#14110F] mb-2">{item.title}</h4>
                      <p className="text-[14px] text-[#14110F]/60">{item.desc}</p>
                    </div>
                  );
                })}
             </div>
          </div>
        </section>

        {/* CHAPTER 2: INTELLIGENCE */}
        <section id="chapter-1" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex items-center justify-center">
          <ParallaxText text="THINK." alignLeft={false} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 w-full">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">02 / INTELLIGENCE</span>
             
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 flex flex-col justify-center">
                   <h2 className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight text-[#14110F] leading-[1.15] mb-6">
                     Our AI Voice Agents don't just automate calls—they understand context, adapt in real time, and communicate naturally like a human.
                   </h2>
                   <p className="text-[17px] text-[#14110F]/70 leading-[1.8] font-light mb-12">
                     Every interaction is personalized, every conversation is meaningful, and every customer journey is intelligently orchestrated.
                   </p>
                   
                   <div className="grid grid-cols-2 gap-8">
                     {STATS.map((stat, i) => (
                       <div key={i}>
                         <div className="text-[clamp(36px,4vw,48px)] font-bold text-[#14110F] tracking-tight leading-none mb-2">
                           {stat.value}
                         </div>
                         <div className="text-[12px] text-[#14110F]/50 font-mono uppercase tracking-[0.2em]">{stat.label}</div>
                       </div>
                     ))}
                   </div>
                </div>
                <div className="lg:col-span-5 flex items-center justify-center">
                   <div className="w-full aspect-[4/3] rounded-[24px] bg-[var(--global-accent)]/5 flex items-center justify-center p-8 border border-[rgba(20,17,15,0.05)] shadow-[0_10px_40px_rgba(20,17,15,0.02)] transition-colors duration-300">
                   <div className="w-full h-full text-[var(--global-accent)] [&>svg]:!text-[var(--global-accent)] transition-colors duration-300 flex items-center justify-center">
                     <IllustrationIntelligentAgents />
                   </div>
                 </div>
                </div>
             </div>
          </div>
        </section>

        {/* CHAPTER 3: IMPLEMENTATION */}
        <section id="chapter-2" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative bg-transparent min-h-[80vh] flex items-center justify-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <ParallaxText text="SHIP." alignLeft={true} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300" />
          </div>
          <div className="max-w-[1000px] mx-auto relative z-10 w-full">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">03 / IMPLEMENTATION</span>
             
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
               <div className="lg:col-span-7">
                 <div className="mb-16">
                   <ScrollWordReveal 
                     text="Technology Alone Doesn't Deliver Success. Implementation Does."
                     as="h2"
                     className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.08] mb-6"
                   />
                   <ScrollWordReveal 
                     text="Our Customer Success and Implementation teams work closely with customers through every stage. Our 15-Day Success Framework ensures every deployment delivers measurable business outcomes."
                     as="p"
                     className="text-[18px] text-[#14110F]/70 leading-[1.75] font-light max-w-[800px]"
                   />
                 </div>

                 <div className="relative pl-6 md:pl-10">
                   <div className="absolute top-0 bottom-0 left-[11px] md:left-[19px] w-px bg-[rgba(20,17,15,0.1)]" />
                   
                   {FRAMEWORK_STAGES.map((stage, idx) => (
                     <div key={idx} className="relative mb-16 last:mb-0 group">
                       <motion.div 
                         className="absolute -left-[30px] md:-left-[38px] top-1 w-4 h-4 rounded-full border-2 border-[#F5F1EA] bg-[rgba(20,17,15,0.2)] transition-all duration-300"
                         whileInView={{ 
                           backgroundColor: "#10b981",
                           borderColor: "#10b981",
                           boxShadow: "0 0 15px 4px rgba(16, 185, 129, 0.4)"
                         }}
                         viewport={{ margin: "-50% 0px -50% 0px" }}
                         onViewportEnter={() => setActiveFrameworkStage(idx)}
                       />
                       
                       <div className="flex flex-col">
                         <div className="flex items-center gap-3 mb-2">
                           <span className="font-mono text-[12px] font-bold text-[var(--global-dark-accent)] tracking-widest uppercase">
                             Stage {stage.step}
                           </span>
                           <span className="text-[#14110F]/20">•</span>
                           <span className="font-mono text-[12px] text-[#14110F]/50 tracking-wider">
                             {stage.timeline}
                           </span>
                         </div>
                         <h3 className="text-[20px] md:text-[26px] font-medium text-[#14110F] tracking-tight mb-3">
                           {stage.title}
                         </h3>
                         <p className="text-[16px] text-[#14110F]/70 leading-[1.6] font-light max-w-[700px]">
                           {stage.description}
                         </p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
               
               <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-40 h-fit">
                 <div className="w-full aspect-[4/3] rounded-[24px] bg-[var(--global-accent)]/5 flex items-center justify-center p-8 border border-[rgba(20,17,15,0.05)] shadow-[0_10px_40px_rgba(20,17,15,0.02)] transition-colors duration-300">
                   <DynamicFrameworkIllustration activeStage={activeFrameworkStage} />
                 </div>
               </div>
             </div>
          </div>
        </section>

        {/* CHAPTER 4: TEAM */}
        <section id="chapter-3" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex items-center justify-center">
          <ParallaxText text="TEAM." alignLeft={true} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 w-full flex flex-col items-center">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">04 / TEAM</span>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-16 w-full max-w-[900px]">
                {FOUNDERS.map((founder, i) => (
                  <div key={i} className="group relative flex flex-col items-center cursor-pointer w-full">
                    {/* Portrait card */}
                    <div className="w-full aspect-[3/4] bg-transparent mb-6 overflow-hidden relative flex items-center justify-center border border-[#14110F]/10 transition-colors duration-300">
                      {founder.image ? (
                        <img src={founder.image} alt={founder.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                      ) : (
                        <span className="font-mono text-[48px] text-[#14110F]/30 tracking-widest uppercase">
                          {founder.name.split(' ').map(n => n[0]).join('').substring(0,2)}
                        </span>
                      )}
                    </div>
                    
                    {/* Ink text */}
                    <h3 className="text-[20px] font-medium text-[#14110F] mb-2 text-center">{founder.name}</h3>
                    <p className="text-[14px] font-mono text-[var(--global-dark-accent)] uppercase tracking-widest text-center transition-colors duration-300">
                      {founder.role}
                    </p>

                    {/* Accent underline on hover */}
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-px bg-[var(--global-accent)] group-hover:w-full transition-all duration-500" />
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* CHAPTER 5: MISSION */}
        <section id="chapter-4" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex items-center justify-center">
          <ParallaxText text="IMPACT." alignLeft={false} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 w-full flex flex-col items-center text-center">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">05 / MISSION</span>
             
             <h2 className="text-[clamp(28px,4vw,48px)] font-medium tracking-tight text-[#14110F] leading-[1.25] mb-8">
               “For us, the sale is just the beginning. <br className="hidden sm:block" />
               <span className="text-[var(--global-dark-accent)]">
                 Success is measured only when our customers achieve their business goals.”
               </span>
             </h2>
             <div className="flex flex-wrap items-center justify-center gap-3 text-[#14110F]/50 font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase">
                <span>Structured Framework</span>
                <span>•</span>
                <span>Measurable ROI</span>
                <span>•</span>
                <span>Continuous Optimization</span>
             </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section id="final-cta" className="relative w-full py-40 md:py-64 bg-[#16130F] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: `color-mix(in srgb, var(--global-accent) 20%, transparent)` }} />
        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,72px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Ready to automate your workflows?
            </h2>
            <div className="mt-12 flex justify-center">
              <MagneticElement>
                <RouterLink to="/contact">
                  <AntiMetalButton label="Start Your Pilot" />
                </RouterLink>
              </MagneticElement>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

export default function CompanyDetail() {
  const { id } = useParams();

  const pageData = company.find(item => item.id === id);

  if (!pageData) {
    return <Navigate to="/company" replace />;
  }

  // Specifically rendering the About Us layout if the id is 'about'
  if (id === 'about') {
    return <AboutPage />;
  }
  // Render the Culture Manifesto layout if the id is 'culture'
  if (id === 'culture') {
    return <CulturePage />;
  }

  // Fallback layout for other company pages
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 text-center">
        <StaggerContainer>
          <FadeInUp as="h1" className="text-[48px] md:text-[64px] font-semibold tracking-tight text-text-primary mb-8">
            {pageData.title}
          </FadeInUp>
          <FadeInUp delay={0.1} as="p" className="text-[18px] md:text-[22px] text-text-secondary leading-relaxed max-w-[800px] mx-auto">
            {pageData.description}
          </FadeInUp>
        </StaggerContainer>
      </div>
    </div>
  );
}

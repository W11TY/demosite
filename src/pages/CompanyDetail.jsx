import React, { useRef, useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem, ScrollWordReveal } from '../components/shared/Motion';
import { company } from '../data/company';
import heroImg from '../assets/hero.png';
import aboutMission from '../assets/about_platform.png';
import aboutPlatform from '../assets/about_platform.png';
import patternImg from '../assets/pattern.png';
import logoImg from '../assets/logo.png';
import { 
  IllustrationIntelligentAgents, IllustrationAgentNetwork, IllustrationInnovation, IllustrationImpact, 
  IllustrationReliability, IllustrationHealthcare, IllustrationFintech, IllustrationConsumerDurable, 
  IllustrationRealEstate, IllustrationUtilities 
} from '../components/shared/CardIllustrations';
import { Mic, MessageCircle, Phone, Smartphone, Zap, CheckCircle, Link, Map, Briefcase, ShieldCheck, BarChart3, User, Network, Database, Cpu, ArrowRight, ArrowDown, Activity } from 'lucide-react';

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


// ─── Visual Components for Manifesto ──────────────────────────────────────────

const VisualLinesHero = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 flex justify-center items-center">
    <svg width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" stroke="currentColor" fill="none">
       {/* Beautiful intersecting bezier curves representing Ideas, People, Conversations, Work, Life */}
       <path d="M-100,300 C200,400 300,100 500,300 S800,200 1100,300" strokeWidth="1" className="text-[#111]" strokeDasharray="10 10" />
       <path d="M-100,200 C300,100 400,500 500,300 S700,500 1100,100" strokeWidth="1.5" className="text-blue-500" />
       <path d="M-100,400 C100,200 300,500 500,300 S800,400 1100,200" strokeWidth="0.5" className="text-emerald-500" />
       <path d="M200,-100 C100,200 600,400 500,700" strokeWidth="1" className="text-purple-500/50" />
    </svg>
  </div>
);

const VisualWorkProcess = () => {
  const steps = ['PROBLEM', 'IDEA', 'BUILD', 'TEST', 'SHIP', 'IMPACT'];
  return (
    <div className="w-full max-w-[800px] mx-auto py-12 relative overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="min-w-[500px] md:min-w-0 flex flex-col items-center justify-center relative px-4 md:px-0">
        <div className="absolute top-[24px] left-4 right-4 md:left-0 md:right-0 h-px bg-black/10" />
        <div className="flex justify-between w-full relative z-10">
          {steps.map((step, i) => (
            <motion.div 
               key={step}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15, duration: 0.6 }}
               className="flex flex-col items-center gap-4"
            >
              <div className={`w-3 h-3 rounded-full shrink-0 ${i === steps.length - 1 ? 'bg-blue-600 scale-150' : 'bg-white border-2 border-black/20'}`} />
              <span className={`font-mono text-[10px] tracking-[0.2em] ${i === steps.length - 1 ? 'text-blue-600 font-bold' : 'text-black/40'}`}>{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VisualIntersection = () => (
  <div className="w-full max-w-[600px] mx-auto py-16 relative flex items-center justify-center h-[300px] md:h-[400px]">
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-black/10 -translate-x-8 -translate-y-8 md:-translate-x-12 md:-translate-y-12 flex items-center justify-center">
         <span className="font-mono text-[10px] tracking-widest text-black/30 absolute top-4">WORK</span>
      </div>
      <div className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-black/10 translate-x-8 -translate-y-8 md:translate-x-12 md:-translate-y-12 flex items-center justify-center">
         <span className="font-mono text-[10px] tracking-widest text-black/30 absolute top-4">LIFE</span>
      </div>
      <div className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-black/10 -translate-x-8 translate-y-8 md:-translate-x-12 md:translate-y-12 flex items-center justify-center">
         <span className="font-mono text-[10px] tracking-widest text-black/30 absolute bottom-4">FAMILY</span>
      </div>
      <div className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-black/10 translate-x-8 translate-y-8 md:translate-x-12 md:translate-y-12 flex items-center justify-center">
         <span className="font-mono text-[10px] tracking-widest text-black/30 absolute bottom-4">AMBITION</span>
      </div>
    </motion.div>
    <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-600 rounded-full z-10 shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
  </div>
);

const VisualCuriosity = () => (
  <div className="flex flex-col gap-6 max-w-[400px] mx-auto py-12">
     {['WHY?', 'WHAT IF?', 'HOW?', 'BUILD', 'LEARN', 'REPEAT'].map((q, i) => (
       <motion.div 
         key={q}
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.5, delay: i*0.1 }}
         className="flex items-center gap-4"
       >
         <div className="w-10 h-px bg-black/20" />
         <span className="font-mono text-[20px] md:text-[24px] tracking-widest text-[#111] font-light">{q}</span>
       </motion.div>
     ))}
  </div>
);

const VisualTogether = () => (
  <div className="w-full h-[200px] md:h-[300px] flex items-center justify-center relative overflow-hidden">
     <svg width="100%" height="100%" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid slice" fill="none" stroke="currentColor" className="text-black/10">
        <path d="M0,50 Q300,50 300,150 T600,150" />
        <path d="M0,100 Q200,100 300,150 T600,150" />
        <path d="M0,150 Q100,150 300,150 T600,150" strokeWidth="2" className="text-purple-600" />
        <path d="M0,200 Q200,200 300,150 T600,150" />
        <path d="M0,250 Q300,250 300,150 T600,150" />
     </svg>
  </div>
);

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
    <section className="w-full py-24 md:py-32 bg-[#111] text-white">
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

const CulturePage = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapters = ['WORK', 'GROW', 'CONNECT', 'LIVE'];

  useEffect(() => {
    const handleScroll = () => {
       const sections = chapters.map((_, i) => document.getElementById(`chapter-${i}`));
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
        <VisualLinesHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10">
          <FadeInUp>
            <h1 className="text-[clamp(40px,8vw,100px)] font-medium tracking-tighter text-[#111] leading-[1]">
              WORK THAT MATTERS.<br/>
              <span className="text-blue-600">LIFE THAT COUNTS.</span>
            </h1>
            <p className="mt-8 md:mt-12 text-[18px] md:text-[24px] text-black/60 max-w-[700px] mx-auto leading-relaxed font-light">
              We're building technology that moves customer conversations forward — without losing sight of the people building it.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* 02 — MANIFESTO NAVIGATION */}
      <div className="sticky top-[72px] z-50 w-full bg-white/90 backdrop-blur-md border-b border-black/[0.05] py-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-center gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
           {chapters.map((ch, i) => (
             <button 
               key={i} 
               onClick={() => scrollToChapter(i)}
               className={`flex items-center gap-2 font-mono text-[11px] md:text-[13px] tracking-[0.15em] whitespace-nowrap transition-all duration-300 ${activeChapter === i ? 'text-blue-600 font-bold' : 'text-black/40 hover:text-black/80'}`}
             >
               <span className="opacity-50">0{i+1}</span> {ch}
             </button>
           ))}
        </div>
      </div>

      {/* 03 — THE MANIFESTO ITSELF */}
      <div className="w-full relative bg-white">
         
         {/* Chapter 01: WORK */}
         <section id="chapter-0" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 border-b border-black/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(100px,20vw,300px)] font-bold text-black/[0.02] tracking-tighter pointer-events-none select-none">BUILD.</div>
            <div className="max-w-[900px] mx-auto relative z-10">
               <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-blue-600 uppercase font-bold mb-6 md:mb-8 block">01 / Work With Purpose</span>
               <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#111] leading-[1.2] mb-12 md:mb-16">
                 We don't build technology because it can be built.<br/>
                 <span className="text-blue-600">We build it because something meaningful can happen when it works.</span>
               </h2>
               
               <VisualWorkProcess />

               <div className="mt-24 md:mt-32">
                 <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-blue-600 uppercase font-bold mb-6 md:mb-8 block">02 / Own The Outcome</span>
                 <p className="text-[18px] md:text-[24px] text-black/60 leading-relaxed font-light mb-8 md:mb-16 max-w-[700px]">
                   Trust is given, ownership is expected. Don't wait for permission. If you see an opportunity to improve something, own it and make it happen.
                 </p>
               </div>
            </div>
         </section>

         {/* Chapter 02: GROW */}
         <section id="chapter-1" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 border-b border-black/5 bg-[#FAFAFA] relative overflow-hidden">
            <div className="absolute top-1/2 right-[-10%] text-[clamp(100px,20vw,300px)] font-bold text-black/[0.02] tracking-tighter pointer-events-none select-none">LEARN.</div>
            <div className="max-w-[900px] mx-auto relative z-10">
               <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-emerald-600 uppercase font-bold mb-6 md:mb-8 block">03 / Stay Curious</span>
               <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#111] leading-[1.2] mb-12 md:mb-16 max-w-[800px]">
                 Every team member is empowered to continuously learn, grow, and innovate. Curiosity is our engine.
               </h2>

               <VisualCuriosity />
            </div>
         </section>

         {/* Chapter 03: CONNECT */}
         <section id="chapter-2" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 border-b border-black/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-[-10%] text-[clamp(100px,20vw,300px)] font-bold text-black/[0.02] tracking-tighter pointer-events-none select-none">CONNECT.</div>
            <div className="max-w-[900px] mx-auto relative z-10">
               <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-purple-600 uppercase font-bold mb-6 md:mb-8 block">04 / Build Together</span>
               <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#111] leading-[1.2] mb-12 md:mb-16">
                 Stronger teams are built through shared experiences, not just shared projects.
               </h2>

               <VisualTogether />

               <div className="mt-16 md:mt-20">
                 <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-purple-600 uppercase font-bold mb-6 md:mb-8 block">05 / People Before Process</span>
                 <p className="text-[18px] md:text-[24px] text-black/60 leading-relaxed font-light mb-12 md:mb-16 max-w-[700px]">
                   Work is human. We play sports together, retreat to nature to recharge, and occasionally work from a teammate's hometown to understand who we are beyond the screen.
                 </p>
                 <VisualIntersection />
               </div>
            </div>
         </section>

         {/* Chapter 04: LIVE */}
         <section id="chapter-3" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 bg-[#FAFAFA] relative overflow-hidden">
            <div className="max-w-[900px] mx-auto relative z-10 text-center">
               <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-amber-600 uppercase font-bold mb-6 md:mb-8 block">06 / Life Is Part Of The Work</span>
               <h2 className="text-[clamp(28px,5vw,72px)] font-medium tracking-tight text-[#111] leading-[1.1] mb-8 md:mb-12">
                 Great work should make room for a great life.
               </h2>
               <p className="text-[16px] md:text-[22px] text-black/50 leading-relaxed font-light max-w-[700px] mx-auto mb-16 md:mb-20">
                 We believe success is truly meaningful only when it's shared with loved ones. Health, family, and peace of mind are the foundations of excellent work.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
                  <div className="p-6 md:p-8 border border-black/5 bg-white rounded-2xl hover:shadow-xl transition-all duration-300">
                     <h4 className="font-mono text-[12px] md:text-[13px] tracking-widest text-[#111] font-bold mb-3 md:mb-4">FAMILY LEAVE</h4>
                     <p className="text-[14px] md:text-[15px] text-black/60 leading-relaxed">Dedicated time off strictly to be present with your family when they need you most.</p>
                  </div>
                  <div className="p-6 md:p-8 border border-black/5 bg-white rounded-2xl hover:shadow-xl transition-all duration-300">
                     <h4 className="font-mono text-[12px] md:text-[13px] tracking-widest text-[#111] font-bold mb-3 md:mb-4">HEALTH PROMISE</h4>
                     <p className="text-[14px] md:text-[15px] text-black/60 leading-relaxed">Comprehensive insurance for you and your immediate family. Peace of mind matters.</p>
                  </div>
                  <div className="p-6 md:p-8 border border-black/5 bg-white rounded-2xl hover:shadow-xl transition-all duration-300">
                     <h4 className="font-mono text-[12px] md:text-[13px] tracking-widest text-[#111] font-bold mb-3 md:mb-4">DIGITAL BALANCE</h4>
                     <p className="text-[14px] md:text-[15px] text-black/60 leading-relaxed">Rewards for stepping away from the screen, walking 10,000 steps, and living offline.</p>
                  </div>
               </div>
            </div>
         </section>
      </div>

      <TypographicWall />

      <PracticeSection />

      {/* 09 — FINAL MANIFESTO & 10 — CTA */}
      <section className="relative w-full py-40 md:py-64 bg-[#050505] text-white flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4d7aff]/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,96px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Build something worth being proud of.
            </h2>
            <h3 className="text-[clamp(20px,4vw,48px)] font-light tracking-tight text-white/50 leading-[1.2] mb-24">
              And build a life worth coming home to.
            </h3>
            
            <div className="flex flex-col gap-6 items-center">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-white/30 uppercase">Want to build with us?</span>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-4 bg-white text-[#111] rounded-full text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)]"
                >
                  JOIN VOXI
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white rounded-full text-[15px] font-medium transition-all duration-300"
                >
                  EXPLORE OPEN ROLES
                </motion.button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};


// ─── About Page Redesign ─────────────────────────────────────────────────────────────

// Data for Ecosystem
const ECOSYSTEM_NODES = [
  { id: 'voice', label: 'Voice AI', desc: 'Human-like conversations that understand context, intent and history.', icon: Mic, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', angle: -90 },
  { id: 'whatsapp', label: 'WhatsApp', desc: 'Rich conversational journeys across the channel customers already use.', icon: MessageCircle, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', angle: -45 },
  { id: 'cc', label: 'Contact Center', desc: 'Intelligent routing, queuing & agent assist in one place.', icon: Phone, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', angle: 0 },
  { id: 'telephony', label: 'Telephony', desc: 'Cloud telephony with IVR, recording & real-time transcription.', icon: Smartphone, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', angle: 45 },
  { id: 'automation', label: 'Automation', desc: 'Zero-code journey builders for any customer scenario.', icon: Zap, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', angle: 90 },
  { id: 'qa', label: 'Quality Mgmt', desc: 'Automated QA scoring and compliance monitoring.', icon: CheckCircle, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', angle: 135 },
  { id: 'crm', label: 'CRM Sync', desc: 'Deep integrations with Salesforce, HubSpot, Zoho & more.', icon: Link, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', angle: 180 },
  { id: 'journey', label: 'Journey Orch.', desc: 'End-to-end customer lifecycle management across all touchpoints.', icon: Map, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20', angle: 225 },
];

const JOURNEY_STAGES = [
  { stage: 'Discover', snippet: 'I have a question about pricing.' },
  { stage: 'Engage', snippet: 'Can you show me the enterprise plan?' },
  { stage: 'Converse', snippet: 'Does it integrate with Salesforce?' },
  { stage: 'Resolve', snippet: 'Yes, integration is complete.' },
  { stage: 'Convert', snippet: 'I am ready to upgrade.' },
  { stage: 'Retain', snippet: 'My policy renewal is due.' },
];

const STATS = [
  { value: '3×', label: 'Faster Resolution' },
  { value: '60%', label: 'Cost Reduction' },
  { value: '94.8%', label: 'CSAT Score' },
  { value: '10M+', label: 'Conversations' },
];

const AboutPage = () => {
  const [activeNode, setActiveNode] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const isMobile = windowWidth < 768;

  // Parallax hooks for Problem section
  const problemRef = useRef(null);
  const { scrollYProgress: problemScroll } = useScroll({
    target: problemRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for fragmented boxes pulling together
  const maxSpreadX = isMobile ? 60 : 120;
  const maxSpreadY = isMobile ? 50 : 80;
  const spreadY = useTransform(problemScroll, [0, 0.4, 0.6, 1], [-maxSpreadY, 0, 0, maxSpreadY]);
  const spreadX = useTransform(problemScroll, [0, 0.4, 0.6, 1], [-maxSpreadX, 0, 0, maxSpreadX]);
  const pullOpacity = useTransform(problemScroll, [0.2, 0.4, 0.6], [0, 1, 1]);

  return (
    <div className="w-full bg-[#FAFAFA] text-[#111] overflow-hidden relative font-sans selection:bg-blue-500/30">
      
      {/* ──────────────────────────────────────────────────────────────
          01 — CINEMATIC HERO
          ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full h-[90vh] min-h-[700px] bg-[#050505] overflow-hidden flex items-center justify-center pt-20">
        {/* Abstract Conversation Network Background */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4d7aff" stopOpacity="0" />
                <stop offset="50%" stopColor="#4d7aff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Animated lines representing infrastructure */}
            {[...Array(20)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${-100 + i * 80},${800 - i * 30} Q${400 + i * 20},${300 + (i % 2 === 0 ? 100 : -100)} ${1600},${i * 50}`}
                fill="none"
                stroke="url(#line-grad)"
                strokeWidth={1}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            ))}
          </svg>
        </div>
        
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-[#4d7aff]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-[#9333ea]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px bg-white/20 w-8" />
              <span className="font-mono text-[11px] tracking-[0.25em] text-white/50 uppercase font-medium">One Ecosystem. One Platform.</span>
              <div className="h-px bg-white/20 w-8" />
            </div>
            
            <h1 className="text-[clamp(42px,7vw,84px)] font-medium tracking-[-0.04em] leading-[1.05] text-white mb-8 max-w-[900px] mx-auto">
              Every customer <br className="hidden md:block" /> conversation. <span className="text-white/40 italic">Connected.</span>
            </h1>
            
            <p className="text-[18px] md:text-[22px] text-white/40 leading-[1.6] font-light max-w-[600px] mx-auto mb-12">
              Thousands of isolated interactions transformed into one intelligent, self-learning infrastructure.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-[#111] rounded-full text-[15px] font-medium hover:bg-gray-50 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 mx-auto"
            >
              Start Your Pilot <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-white uppercase">Scroll</span>
          <ArrowDown size={14} className="text-white" />
        </motion.div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          02 — THE PROBLEM (Visual Fragmentation)
          ────────────────────────────────────────────────────────────── */}
      <section ref={problemRef} className="relative w-full py-32 md:py-48 bg-[#FAFAFA] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 text-center relative z-10">
          <FadeInUp>
            <h2 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-[#111] leading-[1.1] mb-6 max-w-[800px] mx-auto">
              Customer conversations don't happen in one place.
            </h2>
            <p className="text-[18px] md:text-[20px] text-black/50 leading-relaxed font-light max-w-[600px] mx-auto mb-20">
              They happen everywhere. Fragmented tools create broken journeys, isolated context, and frustrated customers.
            </p>
          </FadeInUp>

          {/* Interactive pulling together visual */}
          <div className="relative h-[300px] md:h-[400px] w-full max-w-[800px] mx-auto flex items-center justify-center">
            {/* The fragmented pieces */}
            <motion.div style={{ x: spreadX, y: spreadY, opacity: 1 }} className="absolute -top-4 md:-top-10 left-0 md:-left-10 rotate-[-12deg]">
              <motion.div 
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="p-3 md:p-4 bg-white border border-black/[0.08] rounded-2xl shadow-xl flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                  <Mic size={18} className="text-blue-600" />
                </div>
                <div className="flex flex-col pr-2 text-left">
                  <span className="text-[13px] md:text-[15px] font-semibold text-[#111] leading-tight">Voice AI</span>
                  <span className="text-[10px] md:text-[12px] text-black/40">Inbound & Outbound</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div style={{ x: spreadX, y: spreadY, opacity: 1 }} className="absolute top-4 md:top-10 right-0 rotate-[8deg]">
              <motion.div 
                animate={{ y: [0, -15, 0], x: [0, -5, 0] }} 
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="p-3 md:p-4 bg-white border border-black/[0.08] rounded-2xl shadow-xl flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MessageCircle size={18} className="text-emerald-600" />
                </div>
                <div className="flex flex-col pr-2 text-left">
                  <span className="text-[13px] md:text-[15px] font-semibold text-[#111] leading-tight">WhatsApp</span>
                  <span className="text-[10px] md:text-[12px] text-black/40">Conversational Journeys</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div style={{ x: spreadX, y: spreadY, opacity: 1 }} className="absolute bottom-4 md:bottom-10 left-4 md:left-10 rotate-[15deg]">
              <motion.div 
                animate={{ y: [0, -10, 0], x: [0, 8, 0] }} 
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="p-3 md:p-4 bg-white border border-black/[0.08] rounded-2xl shadow-xl flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                  <Database size={18} className="text-indigo-600" />
                </div>
                <div className="flex flex-col pr-2 text-left">
                  <span className="text-[13px] md:text-[15px] font-semibold text-[#111] leading-tight">CRM Systems</span>
                  <span className="text-[10px] md:text-[12px] text-black/40">Salesforce, HubSpot</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div style={{ x: spreadX, y: spreadY, opacity: 1 }} className="absolute -bottom-2 md:-bottom-5 right-10 md:right-20 rotate-[-5deg]">
              <motion.div 
                animate={{ y: [0, -14, 0], x: [0, -6, 0] }} 
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="p-3 md:p-4 bg-white border border-black/[0.08] rounded-2xl shadow-xl flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                  <Phone size={18} className="text-purple-600" />
                </div>
                <div className="flex flex-col pr-2 text-left">
                  <span className="text-[13px] md:text-[15px] font-semibold text-[#111] leading-tight">Contact Center</span>
                  <span className="text-[10px] md:text-[12px] text-black/40">Live Agent Handoff</span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* The Unified State */}
            <motion.div style={{ opacity: pullOpacity }} className="relative z-20 flex flex-col items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-600/30">
                <Network className="text-white" size={isMobile ? 24 : 32} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1 text-center scale-90 md:scale-100">
                <span className="font-mono text-[10px] md:text-[12px] tracking-[0.2em] text-blue-600 uppercase font-bold">One Customer</span>
                <span className="font-mono text-[10px] md:text-[12px] tracking-[0.2em] text-black/40 uppercase">One Conversation</span>
                <span className="font-mono text-[10px] md:text-[12px] tracking-[0.2em] text-black/40 uppercase">One Intelligent Journey</span>
              </div>
            </motion.div>
            
            {/* Connection lines that fade in */}
            <motion.svg style={{ opacity: pullOpacity }} className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50%" cy="50%" r={isMobile ? "100" : "140"} fill="none" stroke="currentColor" className="text-blue-500/20" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="50%" cy="50%" r={isMobile ? "150" : "200"} fill="none" stroke="currentColor" className="text-blue-500/10" strokeWidth="1" strokeDasharray="4 4" />
            </motion.svg>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          03 & 04 — WHO WE ARE & THE ECOSYSTEM (Layered Visual Story)
          ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-32 bg-[#0c0c0c] text-white overflow-hidden isolate">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] pointer-events-none" />
        
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
          
          {/* Editorial Copy */}
          <div className="lg:col-span-5 lg:pr-10">
            <FadeInUp>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase font-medium">The Solution</span>
              </div>
              <h2 className="text-[clamp(32px,4vw,48px)] font-medium tracking-tight text-white leading-[1.15] mb-8">
                At VoxiFlow AI, we believe customer communication shouldn't be managed through disconnected tools and isolated touchpoints.
              </h2>
              <p className="text-[17px] text-white/60 leading-[1.8] font-light mb-8">
                Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent, connected ecosystem.<br/><br/>
                That's why we built the Voxi CX Operating System—an AI-powered platform that unifies Voice AI, WhatsApp, Contact Center, Telephony, Workflow Automation, Quality Management, CRM Integration, and Customer Journey Orchestration into a single intelligent ecosystem.
              </p>
              <div className="w-full h-px bg-white/10 mb-8" />
              
              {/* Dynamic Description based on Ecosystem Hover */}
              <div className="min-h-[120px]">
                <AnimatePresence mode="wait">
                  {activeNode ? (
                    <motion.div
                      key={activeNode.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <activeNode.icon size={20} className={activeNode.color} />
                        <h4 className="text-[18px] font-medium text-white">{activeNode.label}</h4>
                      </div>
                      <p className="text-[15px] text-white/50 leading-relaxed font-light">{activeNode.desc}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col justify-center h-full"
                    >
                      <p className="text-[15px] font-mono text-white/30 tracking-widest uppercase">
                        Interactive System Map<br/>Hover over nodes to explore
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInUp>
          </div>

          {/* Interactive Ecosystem Visualization */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[400px] md:min-h-[600px] lg:min-h-[700px] mt-10 lg:mt-0 overflow-visible lg:overflow-visible overflow-x-clip">
            {/* Center Core */}
            <div className="relative z-20 w-24 h-24 md:w-32 md:h-32 bg-[#111] border border-white/10 rounded-full flex flex-col items-center justify-center shadow-[0_0_60px_rgba(77,122,255,0.2)]">
              <img src={logoImg} alt="Voxi CX OS" className="w-12 md:w-16 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]" />
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            </div>

            {/* Orbital Rings */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-[240px] h-[240px]' : 'w-[340px] h-[340px] md:w-[440px] md:h-[440px]'} border border-white/5 rounded-full pointer-events-none`} />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-[320px] h-[320px]' : 'w-[480px] h-[480px] md:w-[620px] md:h-[620px]'} border border-white/5 rounded-full pointer-events-none border-dashed`} />

            {/* Orbital Nodes */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              {ECOSYSTEM_NODES.map((node, i) => {
                const radius = isMobile ? (i % 2 === 0 ? 120 : 160) : 220; // smaller and alternating on mobile
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                const isActive = activeNode?.id === node.id;
                
                return (
                  <motion.div
                    key={node.id}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    style={{ x, y }}
                    onMouseEnter={() => setActiveNode(node)}
                    onMouseLeave={() => setActiveNode(null)}
                    onClick={() => setActiveNode(isActive ? null : node)}
                    animate={{ 
                      scale: isActive ? 1.1 : 1,
                      zIndex: isActive ? 30 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Connecting line to center */}
                    <svg className="absolute top-1/2 left-1/2 pointer-events-none" style={{ width: radius*2, height: radius*2, transform: 'translate(-50%, -50%)', zIndex: -1 }}>
                      <line 
                        x1={radius} y1={radius} 
                        x2={radius - x} y2={radius - y} 
                        stroke="currentColor" 
                        className={isActive ? node.color : 'text-white/5'} 
                        strokeWidth={isActive ? 1.5 : 1}
                        style={{ transition: 'all 0.3s ease' }}
                      />
                    </svg>

                    <div className={`relative flex flex-col items-center gap-2 md:gap-3 cursor-pointer group`}>
                      <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center border backdrop-blur-md transition-all duration-300 ${isActive ? `${node.bg} ${node.border} shadow-[0_0_30px_rgba(0,0,0,0.5)]` : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                        <node.icon size={isMobile ? 18 : 22} className={isActive ? node.color : 'text-white/40'} strokeWidth={1.5} />
                      </div>
                      <span className={`absolute top-full mt-2 md:mt-3 whitespace-nowrap text-[10px] md:text-[12px] font-mono tracking-wider transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/30'}`}>
                        {node.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          05 — FROM CONVERSATION TO JOURNEY (Timeline)
          ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden border-b border-black/[0.04]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 mb-16">
          <FadeInUp>
            <h2 className="text-[clamp(28px,3.5vw,42px)] font-medium tracking-tight text-[#111] leading-[1.15] mb-4">
              From singular conversations <br className="hidden md:block"/> to continuous journeys.
            </h2>
            <p className="text-[17px] text-black/50 leading-relaxed font-light max-w-[500px]">
              VoxiFlow orchestrates the entire lifecycle, retaining context at every touchpoint.
            </p>
          </FadeInUp>
        </div>

        {/* Horizontal scrollable or overflowing timeline */}
        <div className="w-full overflow-x-auto pb-12 hide-scrollbar">
          <div className="w-max min-w-full px-6 md:px-16 lg:px-20 flex items-center">
            {JOURNEY_STAGES.map((item, i) => (
              <div key={i} className="flex items-center shrink-0">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="w-[240px] flex flex-col gap-4"
                >
                  <span className="font-mono text-[11px] tracking-[0.2em] text-blue-600 uppercase font-semibold">{item.stage}</span>
                  
                  {/* Conversation snippet card */}
                  <div className="bg-[#f8f9fa] border border-black/5 rounded-2xl p-5 shadow-sm relative isolate overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full pointer-events-none" />
                    <div className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                        <User size={12} className="text-blue-600" />
                      </div>
                      <p className="text-[14px] text-black/70 leading-[1.6] font-light">
                        "{item.snippet}"
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Connector line */}
                {i < JOURNEY_STAGES.length - 1 && (
                  <div className="w-[60px] md:w-[100px] h-px bg-gradient-to-r from-blue-200 to-transparent mx-4 relative">
                    <motion.div 
                      className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 rounded-full bg-blue-400"
                      animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          06 & 08 — THE INTELLIGENCE LAYER & HUMAN + AI
          ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 md:py-32 bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Diagram / Visual side */}
            <FadeInUp className="order-2 lg:order-1">
              <div className="bg-[#050505] rounded-[32px] border border-black/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.1)] relative overflow-hidden isolate h-[350px] md:h-[450px] flex items-center justify-center p-6 md:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
                <IllustrationIntelligentAgents />
              </div>
            </FadeInUp>
            
            {/* Copy side */}
            <FadeInUp delay={0.1} className="order-1 lg:order-2">
              <h3 className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight text-[#111] leading-[1.15] mb-6">
                Our AI Voice Agents don't just automate calls—they understand context, remember conversations, adapt in real time, and communicate naturally like a human.
              </h3>
              <p className="text-[17px] text-black/60 leading-[1.8] font-light mb-8">
                Every interaction is personalized, every conversation is meaningful, and every customer journey is intelligently orchestrated.
              </p>
              <ul className="flex flex-col gap-4">
                {['Zero context loss between channels', 'Empowered agents, happier customers', 'Massive reduction in operational cost'].map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <CheckCircle size={12} className="text-blue-600" />
                    </div>
                    <span className="text-[15px] text-black/70 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeInUp>
            
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          07 — PROOF / IMPACT (Metrics)
          ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-16 md:py-20 border-y border-black/[0.04] bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 divide-x-0 md:divide-x divide-black/[0.04]">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center px-4"
              >
                <div className="text-[clamp(36px,5vw,56px)] font-bold text-[#111] tracking-tight leading-none mb-3">
                  {stat.value}
                </div>
                <div className="text-[12px] text-black/40 font-mono uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          09 — THE MISSION (Oversized Typography)
          ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-32 md:py-48 bg-[#FAFAFA] flex flex-col items-center justify-center text-center overflow-hidden isolate">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 blur-[100px] rounded-full pointer-events-none -z-10" />
        
        <FadeInUp>
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 text-blue-600">
            <IllustrationInnovation />
          </div>
          <div className="font-mono text-[14px] tracking-[0.2em] text-blue-600 uppercase font-semibold mb-6">Our mission is simple:</div>
          <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#111] leading-[1.1] max-w-[1000px] mx-auto px-6">
            To help businesses deliver exceptional customer experiences while improving operational efficiency, increasing conversions, and reducing communication costs.
          </h2>
        </FadeInUp>
      </section>

      {/* ──────────────────────────────────────────────────────────────
          10 — FINAL CTA
          ────────────────────────────────────────────────────────────── */}
      <section className="relative w-full py-24 md:py-32 bg-[#0c0c0c] text-white overflow-hidden flex items-center justify-center text-center isolate border-t border-white/10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4d7aff]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] h-[600px] opacity-[0.03] pointer-events-none -z-10 mix-blend-screen">
          <IllustrationAgentNetwork />
        </div>
        
        <div className="relative z-10 max-w-[800px] mx-auto px-6">
          <FadeInUp>
            <span className="inline-block font-mono text-[12px] tracking-[0.25em] text-white/40 uppercase mb-6">
              One Ecosystem. One Platform. Every Customer Conversation.
            </span>
            <h2 className="text-[clamp(24px,4vw,42px)] font-medium tracking-tight text-white leading-[1.3] mb-8 max-w-[800px] mx-auto">
              Whether it's sales, customer support, collections, appointment booking, or proactive customer engagement, Voxi enables enterprises to manage every customer conversation through one unified AI platform.
            </h2>
            <p className="text-[18px] text-white/60 leading-relaxed font-light mb-10 max-w-[520px] mx-auto">
              Start your pilot today and experience the future of customer engagement.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-[#111] rounded-full text-[15px] font-medium hover:bg-gray-50 transition-colors duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.12)] flex items-center justify-center gap-2 mx-auto"
            >
              Start Your Pilot <ArrowRight size={16} />
            </motion.button>
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

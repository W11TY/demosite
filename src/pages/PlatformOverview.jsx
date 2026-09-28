import React, { useRef, useEffect, useState } from 'react';
import { motion, useSpring, useTransform, useScroll, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { platforms } from '../data/platform';
import { FadeInUp } from '../components/shared/Motion';
import { ParallaxText, MagneticElement } from '../components/shared/Interactive';
import { BRAND, BRAND_TEXT, ACCENTS } from '../data/accents';
import { useChapterColor } from '../hooks/useChapterColor';
import ChapterNav from '../components/shared/ChapterNav';
import IllustrationCard from '../components/shared/IllustrationCard';

const NAV_LABELS = ['Voice', 'WhatsApp', 'Command', 'Quality', 'Engagement'];

const accentColors = [BRAND, ...platforms.map((_, i) => ACCENTS[(i + 1) % ACCENTS.length].accent), BRAND];
const tintColors = [ACCENTS[1].tint, ...platforms.map((_, i) => ACCENTS[(i + 1) % ACCENTS.length].tint), ACCENTS[1].tint];
const darkAccentColors = [BRAND_TEXT, ...platforms.map((_, i) => ACCENTS[(i + 1) % ACCENTS.length].dark), BRAND_TEXT];

const bgWords = ['ORCHESTRATE.', 'CONNECT.', 'DEPLOY.', 'OBSERVE.', 'ENGAGE.'];
const motifMapping = [0, 5, 4, 1, 3];

const VisualPlatformHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 80]);
  const y2 = useTransform(scrollY, [0, 600], [0, 40]);
  const y3 = useTransform(scrollY, [0, 600], [0, 0]);

  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScale(Math.min(1, entry.contentRect.width / 600));
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100" />
      
      <div style={{ transform: `scale(${scale})` }} className="relative w-[600px] h-[600px] flex justify-center items-center origin-center">
        {/* Layer 1 (Base) */}
        <motion.div style={{ y: y1 }} className="absolute">
          <svg width="400" height="200" viewBox="0 0 400 200">
            <path d="M200,170 L30,85 L200,0 L370,85 Z" fill="rgba(20,17,15,0.03)" stroke="rgba(20,17,15,0.1)" strokeWidth="1" />
            <path d="M200,170 L30,85 L30,95 L200,180 L370,95 L370,85 Z" fill="rgba(20,17,15,0.06)" />
          </svg>
        </motion.div>
        
        {/* Layer 2 (Middle) */}
        <motion.div style={{ y: y2 }} className="absolute">
          <svg width="400" height="200" viewBox="0 0 400 200">
            <path d="M200,130 L60,60 L200,0 L340,60 Z" fill="rgba(20,17,15,0.05)" stroke="rgba(20,17,15,0.15)" strokeWidth="1" />
            <path d="M200,130 L60,60 L60,70 L200,140 L340,70 L340,60 Z" fill="rgba(20,17,15,0.08)" />
          </svg>
        </motion.div>
        
        {/* Layer 3 (Top - Accent) */}
        <motion.div style={{ y: y3 }} className="absolute">
          <svg width="400" height="200" viewBox="0 0 400 200">
            <path d="M200,90 L90,35 L200,0 L310,35 Z" fill="color-mix(in srgb, var(--global-accent) 15%, transparent)" stroke="var(--global-accent)" strokeWidth="2" className="transition-colors duration-300" />
            <path d="M200,90 L90,35 L90,45 L200,100 L310,45 L310,35 Z" fill="color-mix(in srgb, var(--global-accent) 25%, transparent)" className="transition-colors duration-300" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-[100px] rounded-full mix-blend-multiply transition-colors duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--global-accent) 30%, transparent), transparent)` }}
      />
    </div>
  );
};

const ArchitectureDiagram = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setScale(Math.min(1, entry.contentRect.width / 800));
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full py-24 md:py-40 px-4 sm:px-6 md:px-16 lg:px-20 relative overflow-x-clip bg-transparent">
      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
        <FadeInUp>
          <h2 className="text-[clamp(28px,4vw,48px)] font-medium tracking-tight text-[#14110F] mb-6 text-center">
            Unified Platform Architecture
          </h2>
          <p className="text-[16px] md:text-[20px] text-[#14110F]/75 font-light text-center max-w-[600px] mx-auto mb-16 md:mb-24">
            A seamless orchestration layer connecting every module across your customer experience.
          </p>
        </FadeInUp>

        <div ref={containerRef} className="w-full max-w-[800px] flex justify-center">
          <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }} className="w-[800px] h-[450px] relative">
            
            <svg width="800" height="450" viewBox="0 0 800 450" className="absolute inset-0 overflow-visible">
              <defs>
                <linearGradient id="line-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#14110F" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="var(--global-accent)" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="line-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#14110F" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="var(--global-accent)" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="line-grad-3" x1="50%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--global-accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#14110F" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="line-grad-4" x1="50%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--global-accent)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#14110F" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Connecting Lines */}
              <motion.path 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 200 130 L 200 165 L 400 165 L 400 200" fill="none" stroke="url(#line-grad-1)" strokeWidth="2" strokeDasharray="6 6"
              />
              <motion.path 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 600 130 L 600 165 L 400 165 L 400 200" fill="none" stroke="url(#line-grad-2)" strokeWidth="2" strokeDasharray="6 6"
              />
              <motion.path 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                d="M 400 260 L 400 295 L 250 295 L 250 330" fill="none" stroke="url(#line-grad-3)" strokeWidth="2" strokeDasharray="6 6"
              />
              <motion.path 
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                d="M 400 260 L 400 295 L 550 295 L 550 330" fill="none" stroke="url(#line-grad-4)" strokeWidth="2" strokeDasharray="6 6"
              />

              {/* Animated Dots */}
              <circle r="3" fill="var(--global-accent)" className="transition-colors duration-300">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 200 130 L 200 165 L 400 165 L 400 200" />
              </circle>
              <circle r="3" fill="var(--global-accent)" className="transition-colors duration-300">
                <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 200 130 L 200 165 L 400 165 L 400 200" />
              </circle>
              <circle r="3" fill="var(--global-accent)" className="transition-colors duration-300">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 600 130 L 600 165 L 400 165 L 400 200" />
              </circle>
              <circle r="3" fill="var(--global-accent)" className="transition-colors duration-300">
                <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 600 130 L 600 165 L 400 165 L 400 200" />
              </circle>
              <circle r="3" fill="var(--global-accent)" className="transition-colors duration-300">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 400 260 L 400 295 L 250 295 L 250 330" />
              </circle>
              <circle r="3" fill="var(--global-accent)" className="transition-colors duration-300">
                <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 400 260 L 400 295 L 250 295 L 250 330" />
              </circle>
              <circle r="3" fill="var(--global-accent)" className="transition-colors duration-300">
                <animateMotion dur="4s" repeatCount="indefinite" path="M 400 260 L 400 295 L 550 295 L 550 330" />
              </circle>
              <circle r="3" fill="var(--global-accent)" className="transition-colors duration-300">
                <animateMotion dur="4s" begin="2s" repeatCount="indefinite" path="M 400 260 L 400 295 L 550 295 L 550 330" />
              </circle>
            </svg>

            {/* Nodes */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
              className="absolute left-[100px] top-[70px] w-[200px] h-[60px] bg-white/70 backdrop-blur-xl rounded-[16px] border border-black/5 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="font-mono text-[13px] tracking-wide text-black/80 font-medium">AI Voice Agents</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }}
              className="absolute left-[500px] top-[70px] w-[200px] h-[60px] bg-white/70 backdrop-blur-xl rounded-[16px] border border-black/5 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="font-mono text-[13px] tracking-wide text-black/80 font-medium">WhatsApp Business</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.4 }}
              style={{ 
                backgroundColor: 'color-mix(in srgb, var(--global-accent) 5%, transparent)',
                borderColor: 'var(--global-accent)'
              }}
              className="absolute left-[250px] top-[200px] w-[300px] h-[60px] rounded-[16px] border flex items-center justify-center shadow-[0_10px_40px_-10px_var(--global-accent)] hover:shadow-[0_20px_50px_-10px_var(--global-accent)] hover:scale-[1.02] transition-all duration-300 cursor-default backdrop-blur-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] animate-[shimmer_3s_infinite]" />
              <span style={{ color: 'var(--global-dark-accent)' }} className="font-sans text-[16px] font-semibold transition-colors duration-300 tracking-tight relative z-10">
                Telephony & Command Center
              </span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.6 }}
              className="absolute left-[150px] top-[330px] w-[200px] h-[60px] bg-white/70 backdrop-blur-xl rounded-[16px] border border-black/5 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="font-mono text-[13px] tracking-wide text-black/80 font-medium">Quality Management</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.8 }}
              className="absolute left-[450px] top-[330px] w-[200px] h-[60px] bg-white/70 backdrop-blur-xl rounded-[16px] border border-black/5 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <span className="font-mono text-[13px] tracking-wide text-black/80 font-medium">Customer Engagement</span>
            </motion.div>

          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
    </section>
  );
};

export default function PlatformOverview() {
  const heroRef = useRef(null);
  
  const { activeChapter, scrollY } = useChapterColor(
    platforms.length,
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
        <VisualPlatformHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 mt-32">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-6 block">
              The Platform
            </span>
            <h1 className="text-[clamp(40px,8vw,80px)] font-medium tracking-tighter text-[#14110F] leading-[1.05]">
              The complete toolkit for <br />
              <span style={{ color: BRAND }}>autonomous orchestration.</span>
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

      {/* 03 — PLATFORM MODULES AS CHAPTERS */}
      <div className="w-full relative z-10">
        {platforms.map((platform, i) => (
          <section id={`chapter-${i}`} key={platform.id} className="w-full py-24 md:py-40 px-4 sm:px-6 md:px-16 lg:px-20 relative overflow-x-clip bg-transparent">
            <ParallaxText text={bgWords[i % bgWords.length]} alignLeft={i % 2 === 0} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
            
            <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
              
              {/* Theme Header */}
              <div className="md:w-[400px] shrink-0">
                <div className="md:sticky md:top-32">
                  <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold block whitespace-normal mb-6 md:mb-8 text-[var(--global-dark-accent)] transition-colors duration-300">
                    0{i + 1} / MODULE
                  </span>
                  <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.2] mb-6">
                    {platform.shortName}
                  </h2>
                  <p className="text-[16px] md:text-[20px] text-[#14110F]/75 leading-relaxed font-light mb-8 max-w-[700px]">
                    {platform.tagline}
                  </p>

                  <MagneticElement className="inline-block mt-4">
                    <Link to={`/platform/${platform.id}`} style={{ color: BRAND_TEXT }} className="font-mono text-[12px] tracking-widest uppercase font-bold flex items-center gap-2 py-3 px-4 -ml-4 rounded-xl hover:bg-black/5 transition-colors">
                      Explore Layer →
                    </Link>
                  </MagneticElement>
                </div>
              </div>

              {/* One Illustration Card per Module */}
              <div className="flex-1 w-full flex md:justify-end">
                <div className="w-full md:max-w-[480px]">
                  <IllustrationCard 
                    name={platform.name}
                    desc={platform.description}
                    motifIndex={motifMapping[i]}
                    idx={i}
                    delay={0.1}
                    metricRow={{ label: 'STATUS', value: 'LIVE' }}
                  />
                </div>
              </div>

            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
          </section>
        ))}
      </div>

      <ArchitectureDiagram />

      {/* 04 — FINAL CTA */}
      <section id="final-cta" className="relative w-full py-40 md:py-64 bg-[#16130F] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: `color-mix(in srgb, ${BRAND} 20%, transparent)` }} />

        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,72px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Ready to transform your business?
            </h2>
            <h3 className="text-[clamp(20px,4vw,32px)] font-light tracking-tight text-white/50 leading-[1.2] mb-16">
              Deploy our autonomous platform today.
            </h3>

            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <MagneticElement>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-4 bg-[#F5F1EA] text-[#14110F] rounded-[24px] text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#1283a9]/60"
                  >
                    CONTACT SALES
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

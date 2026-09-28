import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeInUp } from '../components/shared/Motion';
import { ParallaxText, MagneticElement } from '../components/shared/Interactive';
import { BRAND, BRAND_TEXT, ACCENTS } from '../data/accents';
import { useChapterColor } from '../hooks/useChapterColor';
import ChapterNav from '../components/shared/ChapterNav';

const NAV_LABELS = ['Story', 'Values'];

// 2 chapters: use ACCENTS[0] and ACCENTS[2] for distinct colors
const accentColors = [BRAND, ACCENTS[0].accent, ACCENTS[2].accent, BRAND];
const tintColors = [ACCENTS[0].tint, ACCENTS[0].tint, ACCENTS[2].tint, ACCENTS[0].tint];
const darkAccentColors = [BRAND_TEXT, ACCENTS[0].dark, ACCENTS[2].dark, BRAND_TEXT];

const VALUES_DATA = [
  { title: "Innovation", desc: "We constantly push the boundaries of AI capabilities to deliver state-of-the-art solutions." },
  { title: "Reliability", desc: "Built on a high-performance architecture trusted by global enterprises for zero-downtime operations." },
  { title: "Impact", desc: "Our core metric is customer success, driving tangible business outcomes over abstract capabilities." }
];

const staticNodes = [
  { x: 20, y: 30, size: 3, delay: 0.1, duration: 14 },
  { x: 80, y: 20, size: 4, delay: 2.2, duration: 18 },
  { x: 40, y: 60, size: 5, delay: 1.5, duration: 12 },
  { x: 25, y: 80, size: 3, delay: 3.1, duration: 15 },
  { x: 75, y: 70, size: 4, delay: 4.8, duration: 16 },
  { x: 50, y: 40, size: 3, delay: 0.5, duration: 13 },
  { x: 90, y: 50, size: 4, delay: 1.8, duration: 17 },
  { x: 10, y: 60, size: 3, delay: 3.5, duration: 14 },
  { x: 60, y: 15, size: 5, delay: 2.7, duration: 11 },
  { x: 30, y: 15, size: 3, delay: 0.8, duration: 15 }
];
const staticConnections = [
  [0, 5], [5, 2], [2, 3], [5, 1], [1, 6], [6, 4], [2, 4], [0, 7], [8, 1], [8, 5]
];

const VisualCompanyHero = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100" />
      
      <div className="absolute inset-0 flex justify-center items-center">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 opacity-30">
          {staticConnections.map(([n1, n2], i) => (
             <motion.line 
               key={i}
               x1={`${staticNodes[n1].x}%`} y1={`${staticNodes[n1].y}%`}
               x2={`${staticNodes[n2].x}%`} y2={`${staticNodes[n2].y}%`}
               stroke="var(--global-accent)" strokeWidth="0.15"
               initial={{ opacity: 0 }}
               animate={{ opacity: [0.1, 0.4, 0.1] }}
               transition={{ duration: 10, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
             />
          ))}
        </svg>

        {staticNodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full transition-colors duration-300"
            style={{
              width: node.size,
              height: node.size,
              left: `${node.x}%`,
              top: `${node.y}%`,
              backgroundColor: 'var(--global-accent)'
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full mix-blend-multiply pointer-events-none transition-colors duration-300"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--global-accent) 40%, transparent), transparent)` }}
      />
    </div>
  );
};

export default function CompanyOverview() {
  const heroRef = useRef(null);
  
  const { activeChapter, scrollY } = useChapterColor(
    NAV_LABELS.length,
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
        <VisualCompanyHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 mt-32">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-6 block">
              Company
            </span>
            <h1 className="text-[clamp(40px,8vw,90px)] font-medium tracking-tighter text-[#14110F] leading-[1.05]">
              Automate the manual, <br />
              <span className="text-[var(--global-accent)] transition-colors duration-300">accelerate the future.</span>
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

      {/* 03 — CHAPTERS */}
      <div className="w-full relative z-10">
        
        {/* STORY */}
        <section id="chapter-0" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[60vh] flex items-center justify-center">
          <ParallaxText text="BUILD." alignLeft={true} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center text-center">
            <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold block mb-6 md:mb-8 text-[var(--global-dark-accent)] transition-colors duration-300">
              01 / STORY
            </span>
            <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.2] mb-8">
              Empowering teams with intelligent tools.
            </h2>
            <p className="text-[18px] md:text-[24px] text-[#14110F]/75 leading-relaxed font-light max-w-[800px]">
              Our custom AI solutions deliver measurable growth and operational excellence, turning complex challenges into simple workflows.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
        </section>

        {/* VALUES */}
        <section id="chapter-1" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent">
          <ParallaxText text="CARE." alignLeft={false} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          
          <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-start">
            <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold block mb-12 md:mb-16 text-[var(--global-dark-accent)] transition-colors duration-300">
              02 / VALUES
            </span>

            <div className="flex flex-col w-full">
              {VALUES_DATA.map((val, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row gap-4 md:gap-16 py-12 md:py-16 group">
                  <div className="absolute top-0 left-0 w-full h-px bg-[linear-gradient(90deg,rgba(20,17,15,0.15),transparent)]" />
                  <span className="font-mono text-[12px] text-[var(--global-dark-accent)] md:w-16 transition-colors duration-300 pt-2">0{idx + 1}</span>
                  <h3 className="text-[24px] md:text-[32px] font-medium text-[#14110F] md:w-[250px] shrink-0">{val.title}</h3>
                  <p className="text-[16px] md:text-[20px] text-[#14110F]/75 font-light leading-relaxed flex-1">{val.desc}</p>
                </div>
              ))}
              <div className="w-full h-px bg-[linear-gradient(90deg,rgba(20,17,15,0.15),transparent)]" />
            </div>
          </div>
        </section>

      </div>

      {/* FINAL CTA */}
      <section id="final-cta" className="relative w-full py-40 md:py-64 bg-[#16130F] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: `color-mix(in srgb, ${BRAND} 20%, transparent)` }} />
        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,72px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Ready to accelerate the future?
            </h2>
            <div className="mt-12 flex justify-center">
              <MagneticElement>
                <Link to="/contact" className="px-10 py-4 bg-[#F5F1EA] text-[#14110F] rounded-[24px] text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#1283a9]/60 inline-block">
                  CONTACT US
                </Link>
              </MagneticElement>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}

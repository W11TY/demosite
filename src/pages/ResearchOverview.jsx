import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useScroll, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { research } from '../data/research';
import { FadeInUp } from '../components/shared/Motion';
import { ParallaxText, MagneticElement } from '../components/shared/Interactive';
import { BRAND, BRAND_TEXT, ACCENTS } from '../data/accents';
import { useChapterColor } from '../hooks/useChapterColor';
import ChapterNav from '../components/shared/ChapterNav';
import IllustrationCard from '../components/shared/IllustrationCard';

const NAV_LABELS = ['Speech', 'Agents', 'Reasoning', 'Agentic', 'Small', 'AI', 'LLM'];

const accentColors = [BRAND, ...research.map((_, i) => ACCENTS[i % ACCENTS.length].accent), BRAND];
const tintColors = [ACCENTS[0].tint, ...research.map((_, i) => ACCENTS[i % ACCENTS.length].tint), ACCENTS[0].tint];
const darkAccentColors = [BRAND_TEXT, ...research.map((_, i) => ACCENTS[i % ACCENTS.length].dark), BRAND_TEXT];

const bgWords = ['INNOVATE.', 'REASON.', 'AUTONOMY.', 'SCALE.', 'EDGE.', 'INFRA.', 'GEN AI.'];

const VisualResearchHero = () => {
  const nodes = Array.from({ length: 30 }).map((_, i) => ({
    x: 5 + Math.random() * 90,
    y: 5 + Math.random() * 90,
    size: 3 + Math.random() * 6,
    delay: Math.random() * 5
  }));

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

  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), { damping: 25, stiffness: 100 });
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), { damping: 25, stiffness: 100 });
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 100 });
  
  const moveX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), { damping: 25, stiffness: 100 });
  const moveY2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), { damping: 25, stiffness: 100 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center" style={{ perspective: 1000 }}>
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100" />

      {/* Animated Concentric Rings & Constellations (Parallax Layer 1) */}
      <motion.div 
        style={{ x: moveX, y: moveY, rotateX, rotateY, transformStyle: "preserve-3d" }} 
        className="absolute inset-0 flex justify-center items-center"
      >
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" stroke="currentColor" fill="none"
          className="absolute inset-0"
        >
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "500px 300px" }}>
            <circle cx="500" cy="300" r="250" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-50 transition-colors duration-300" strokeDasharray="4 12" />
            <circle cx="500" cy="300" r="400" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-30 transition-colors duration-300" strokeDasharray="10 10" />
            <circle cx="500" cy="300" r="550" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-20 transition-colors duration-300" strokeDasharray="2 8" />

            {/* Geometric Abstract Lines */}
            <path d="M500 50 L850 450 L150 450 Z" strokeWidth="1" className="text-[#14110F]/20" />
            <path d="M250 150 L750 150 L500 550 Z" strokeWidth="1" className="text-[#14110F]/20" />
          </motion.g>
        </motion.svg>
      </motion.div>

      {/* Floating Neural Nodes (Parallax Layer 2) */}
      <motion.div style={{ x: moveX2, y: moveY2 }} className="absolute inset-0">
        {nodes.map((node, i) => (
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
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] blur-[100px] rounded-full mix-blend-multiply pointer-events-none transition-colors duration-300"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, var(--global-accent) 40%, transparent), transparent)`
        }}
      />
    </div>
  );
};

export default function ResearchOverview() {
  const heroRef = useRef(null);
  
  const { activeChapter, scrollY } = useChapterColor(
    research.length,
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
        <VisualResearchHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10">
          <FadeInUp>
            <h1 className="text-[clamp(40px,8vw,100px)] font-medium tracking-tighter text-[#14110F] leading-[1]">
              Pioneering the next<br />
              <span style={{ color: BRAND }}>Generation of AI.</span>
            </h1>
            <p className="mt-8 md:mt-12 text-[18px] md:text-[24px] text-[#14110F]/75 max-w-[700px] mx-auto leading-relaxed font-light">
              We're pushing the boundaries of speech, reasoning, and autonomous agents to transform enterprise communication.
            </p>
          </FadeInUp>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
      </section>

      {/* 02 — NAVIGATION */}
      <ChapterNav 
        items={research.map((ch, i) => NAV_LABELS[i] || ch.title.split(' ')[0])} 
        activeChapter={activeChapter} 
        scrollY={scrollY} 
      />

      {/* 03 — RESEARCH THEMES AS CHAPTERS */}
      <div className="w-full relative z-10">
        {research.map((theme, i) => (
          <section id={`chapter-${i}`} key={theme.id} className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent">
            <ParallaxText text={bgWords[i % bgWords.length]} alignLeft={i % 2 === 0} className="text-[var(--global-accent)] opacity-[0.06] transition-colors duration-300" />
            <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row gap-12 md:gap-24">

              {/* Theme Header */}
              <div className="md:w-[400px] shrink-0">
                <div className="sticky top-32">
                  <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase font-bold mb-6 md:mb-8 block text-[var(--global-dark-accent)] transition-colors duration-300">0{i + 1} / {theme.category}</span>
                  <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.2] mb-6">
                    {theme.title}
                  </h2>
                  <p className="text-[16px] md:text-[20px] text-[#14110F]/75 leading-relaxed font-light mb-8 max-w-[700px]">
                    {theme.description}
                  </p>

                  <MagneticElement className="inline-block mt-4">
                    <Link to={`/research/${theme.id}`} style={{ color: BRAND_TEXT }} className="font-mono text-[12px] tracking-widest uppercase font-bold flex items-center gap-2 py-3 px-4 -ml-4 rounded-xl hover:bg-black/5 transition-colors">
                      Explore Detail →
                    </Link>
                  </MagneticElement>
                </div>
              </div>

              {/* Sub Items */}
              <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                {theme.subItems && theme.subItems.length > 0 ? (
                  theme.subItems.map((item, idx) => (
                    <IllustrationCard 
                      key={idx}
                      name={item.name}
                      desc={item.desc}
                      motifIndex={(i * 3 + idx) % 8}
                      idx={idx}
                      delay={idx * 0.08}
                    />
                  ))
                ) : (
                  <div className="rounded-[16px] overflow-hidden flex flex-col items-center justify-center col-span-full border border-[#14110F]/10 bg-[#F5F1EA] min-h-[250px] relative">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center transition-colors duration-300">
                      <div className="relative w-16 h-16 flex items-center justify-center mb-6">
                        <motion.svg
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          viewBox="0 0 100 100"
                          className="absolute inset-0 w-full h-full text-[#14110F]/10"
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
                          className="absolute inset-0 w-full h-full text-[var(--global-accent)]"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          style={{ opacity: 0.3 }}
                        >
                          <path d="M50 10 A40 40 0 0 1 90 50" strokeDasharray="5 5" />
                          <path d="M50 90 A40 40 0 0 1 10 50" strokeDasharray="5 5" />
                        </motion.svg>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: 'var(--global-accent)', boxShadow: '0 0 15px var(--global-accent)' }}
                        />
                      </div>

                      <span className="font-mono text-[12px] font-bold tracking-[0.2em] uppercase text-center mb-2 text-[var(--global-dark-accent)]">Research in progress</span>
                      <span className="text-[14px] text-[#14110F]/40 font-light text-center max-w-[300px]">Our applied AI labs are currently exploring this frontier.</span>
                    </div>
                  </div>
                )}
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
              Research with impact.
            </h2>
            <h3 className="text-[clamp(20px,4vw,48px)] font-light tracking-tight text-white/50 leading-[1.2] mb-24">
              Join us in shaping the future of enterprise AI.
            </h3>

            <div className="flex flex-col gap-6 items-center">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-white/30 uppercase">Partner with our labs</span>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <MagneticElement>
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(255,255,255,0.1)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-10 py-4 bg-[#F5F1EA] text-[#14110F] rounded-full text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#1283a9]/60"
                  >
                    CONTACT RESEARCH
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

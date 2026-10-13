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
import AntiMetalButton from '../components/shared/AntiMetalButton';

const NAV_LABELS = ['Voice', 'WhatsApp', 'Command', 'Quality', 'Engagement'];

const accentColors = [BRAND, ...platforms.map((_, i) => ACCENTS[(i + 1) % ACCENTS.length].accent), BRAND];
const tintColors = [ACCENTS[1].tint, ...platforms.map((_, i) => ACCENTS[(i + 1) % ACCENTS.length].tint), ACCENTS[1].tint];
const darkAccentColors = [BRAND_TEXT, ...platforms.map((_, i) => ACCENTS[(i + 1) % ACCENTS.length].dark), BRAND_TEXT];

const bgWords = ['ORCHESTRATE.', 'CONNECT.', 'DEPLOY.', 'OBSERVE.', 'ENGAGE.'];
const motifMapping = [0, 1, 2, 3, 4];

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
      <motion.div
        className="absolute inset-[0%] w-[200%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100"
        animate={{ x: [0, -20], y: [0, -20] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />

      <div style={{ transform: `scale(${scale})` }} className="relative w-[600px] h-[600px] flex justify-center items-center origin-center">
        {/* Floating container with subtle rotation/scale to make it feel alive */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          animate={{ scale: [1, 1.02, 1], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Layer 1 (Base) */}
          <motion.div style={{ y: y1 }} className="absolute">
            <motion.svg
              width="400" height="200" viewBox="0 0 400 200"
              animate={{ y: [0, -10, 0], filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)'] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M200,170 L30,85 L200,0 L370,85 Z" fill="color-mix(in srgb, var(--global-accent) 4%, transparent)" stroke="color-mix(in srgb, var(--global-accent) 15%, transparent)" strokeWidth="1" />
              <path d="M200,170 L30,85 L30,95 L200,180 L370,95 L370,85 Z" fill="color-mix(in srgb, var(--global-accent) 8%, transparent)" />
            </motion.svg>
          </motion.div>

          {/* Layer 2 (Middle) */}
          <motion.div style={{ y: y2 }} className="absolute">
            <motion.svg
              width="400" height="200" viewBox="0 0 400 200"
              animate={{ y: [0, -20, 0], filter: ['brightness(1)', 'brightness(1.4)', 'brightness(1)'] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <path d="M200,130 L60,60 L200,0 L340,60 Z" fill="color-mix(in srgb, var(--global-accent) 8%, transparent)" stroke="color-mix(in srgb, var(--global-accent) 25%, transparent)" strokeWidth="1" />
              <path d="M200,130 L60,60 L60,70 L200,140 L340,70 L340,60 Z" fill="color-mix(in srgb, var(--global-accent) 12%, transparent)" />
              {/* Active Data Node running across Layer 2 */}
              <motion.circle
                r="3" fill="var(--global-accent)"
                animate={{
                  cx: [200, 340, 200, 60, 200],
                  cy: [0, 60, 130, 60, 0],
                  opacity: [0, 1, 1, 1, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </motion.svg>
          </motion.div>

          {/* Layer 3 (Top - Accent) */}
          <motion.div style={{ y: y3 }} className="absolute z-10">
            <motion.svg
              width="400" height="200" viewBox="0 0 400 200"
              animate={{ y: [0, -35, 0], filter: ['drop-shadow(0px 0px 10px var(--global-accent))', 'drop-shadow(0px 10px 30px var(--global-accent))', 'drop-shadow(0px 0px 10px var(--global-accent))'] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <path d="M200,90 L90,35 L200,0 L310,35 Z" fill="color-mix(in srgb, var(--global-accent) 20%, transparent)" stroke="var(--global-accent)" strokeWidth="2.5" className="transition-colors duration-300" />
              <path d="M200,90 L90,35 L90,45 L200,100 L310,45 L310,35 Z" fill="color-mix(in srgb, var(--global-accent) 35%, transparent)" className="transition-colors duration-300" />
              {/* Pulsing Core */}
              <motion.circle cx="200" cy="45" r="8" fill="var(--global-accent)"
                animate={{ scale: [1, 2, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.4, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[100px] rounded-full mix-blend-multiply transition-colors duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--global-accent) 40%, transparent), transparent)` }}
      />
    </div>
  );
};

const ArchitectureDiagram = () => {
  return (
    <section className="w-full py-24 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-x-clip bg-transparent">
      <div className="max-w-[1550px] mx-auto relative z-10 flex flex-col items-center">
        <FadeInUp className="flex flex-col items-center relative">
          {/* Subtle background glow for the header */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] blur-[80px] opacity-30 pointer-events-none" style={{ backgroundColor: 'var(--global-accent)' }} />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-white/60 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-8">
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--global-accent)' }} />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#14110F]/60 uppercase">The Core Engine</span>
          </div>

          <h2 className="text-[clamp(36px,5vw,60px)] font-normal tracking-[-0.04em] text-[#14110F] mb-6 text-center leading-[1.1]">
            Unified Platform <br className="md:hidden" /><span className="font-semibold" style={{ color: 'var(--global-accent)' }}>Architecture</span>
          </h2>

          <p className="text-[17px] md:text-[22px] text-[#14110F]/60 font-normal text-center max-w-[650px] mx-auto mb-16 md:mb-24 leading-relaxed">
            A seamless orchestration layer connecting every module across your customer experience.
          </p>
        </FadeInUp>

        {/* Telephony & Command Center Orchestration Scene */}
        <div className="w-full">
          <div className="tcc-scene">
            <svg className="tcc-wires" viewBox="0 0 1440 640" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <marker id="pltArrowBlue" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,1 L8,4.5 L0,8 Z" fill="#1684f8"/>
                </marker>
                <marker id="pltArrowTeal" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,1 L8,4.5 L0,8 Z" fill="#0ca9bd"/>
                </marker>
                <marker id="pltArrowPurple" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,1 L8,4.5 L0,8 Z" fill="#823ee8"/>
                </marker>
                <marker id="pltArrowOrange" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                  <path d="M0,1 L8,4.5 L0,8 Z" fill="#f18a13"/>
                </marker>
              </defs>

              {/* Exact Node-to-Card SVG Paths */}
              <path id="pltPathBlue" d="M 555 320 H 490 Q 450 320 450 280 V 120"
                    fill="none" stroke="#1684f8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#pltArrowBlue)"/>
              <path id="pltPathTeal" d="M 720 155 V 80 Q 720 50 750 50 H 950 Q 990 50 990 85 V 120"
                    fill="none" stroke="#0ca9bd" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#pltArrowTeal)"/>
              <path id="pltPathPurple" d="M 720 485 V 550 Q 720 585 685 585 H 490 Q 450 585 450 555 V 520"
                    fill="none" stroke="#823ee8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#pltArrowPurple)"/>
              <path id="pltPathOrange" d="M 885 320 H 945 Q 990 320 990 365 V 520"
                    fill="none" stroke="#f18a13" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                    markerEnd="url(#pltArrowOrange)"/>

              {/* Animated Flow Dots */}
              <g fill="#1684f8" filter="drop-shadow(0 0 5px rgba(22, 132, 248, 0.6))">
                <circle r="4.5">
                  <animateMotion dur="3.6s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#pltPathBlue"/>
                  </animateMotion>
                </circle>
              </g>
              <g fill="#0ca9bd" filter="drop-shadow(0 0 5px rgba(12, 169, 189, 0.6))">
                <circle r="4.5">
                  <animateMotion dur="4.2s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#pltPathTeal"/>
                  </animateMotion>
                </circle>
              </g>
              <g fill="#823ee8" filter="drop-shadow(0 0 5px rgba(130, 62, 232, 0.6))">
                <circle r="4.5">
                  <animateMotion dur="4.0s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#pltPathPurple"/>
                  </animateMotion>
                </circle>
              </g>
              <g fill="#f18a13" filter="drop-shadow(0 0 5px rgba(241, 138, 19, 0.6))">
                <circle r="4.5">
                  <animateMotion dur="3.8s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#pltPathOrange"/>
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
      <section ref={heroRef} className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden isolate pt-0 pb-10 z-0 bg-transparent">
        <VisualPlatformHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 mt-32">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-6 block">
              The Platform
            </span>
            <h1 className="text-[clamp(36px,6vw,72px)] font-medium tracking-tighter text-[#14110F] leading-[1.08]">
              The Complete Toolkit For <br />
              <span style={{ color: BRAND }} className="inline-block whitespace-nowrap">
                Autonomous Orchestration.
              </span>
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

            <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center">

              {/* Theme Header */}
              <div className="md:w-[460px] lg:w-[500px] shrink-0">
                <div className="md:sticky md:top-32">
                  <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold block whitespace-normal mb-6 md:mb-8 text-[var(--global-dark-accent)] transition-colors duration-300">
                    0{i + 1} / MODULE
                  </span>
                  <Link to={`/platform/${platform.id}`} className="block w-fit hover:opacity-80 transition-opacity outline-none mb-6">
                    <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.2]">
                      {platform.shortName}
                    </h2>
                  </Link>
                  <div className="mb-8 max-w-[700px]">
                    <p className="text-[18px] md:text-[22px] text-[#14110F] font-medium leading-snug mb-3 lg:whitespace-nowrap">
                      {platform.tagline}
                    </p>
                    <p
                      className="text-[15px] md:text-[18px] text-[#14110F]/70 leading-relaxed font-normal ml-2 md:ml-4 pl-4 md:pl-5 border-l-[3px] transition-colors duration-300"
                      style={{ borderColor: 'var(--global-accent)' }}
                    >
                      {platform.description}
                    </p>
                  </div>

                  <MagneticElement className="inline-block mt-4">
                    <Link
                      to={`/platform/${platform.id}`}
                      className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-3 py-4 px-8 rounded-full text-white shadow-[0_8px_25px_color-mix(in_srgb,var(--global-accent)_40%,transparent)] hover:shadow-[0_12px_35px_color-mix(in_srgb,var(--global-accent)_60%,transparent)] transition-all duration-300 relative overflow-hidden group"
                      style={{ backgroundColor: 'var(--global-accent)' }}
                    >
                      <span className="relative z-10">Explore Layer</span>
                      <svg className="relative z-10 group-hover:translate-x-1 transition-transform" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      <div className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>
                  </MagneticElement>
                </div>
              </div>

              {/* One Illustration Card per Module */}
              <div className="flex-1 w-full flex md:justify-end">
                <Link to={`/platform/${platform.id}`} className="w-full md:max-w-[480px] block outline-none transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_color-mix(in_srgb,var(--global-accent)_30%,transparent)] rounded-[24px]">
                  <IllustrationCard
                    name={platform.name}
                    motifIndex={motifMapping[i]}
                    idx={i}
                    delay={0.1}
                    metricRow={{ label: 'STATUS', value: 'LIVE' }}
                  />
                </Link>
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
            <h3 className="text-[clamp(20px,4vw,32px)] font-normal tracking-tight text-white/50 leading-[1.2] mb-16">
              Deploy our autonomous platform today.
            </h3>

            <div className="flex flex-col gap-6 items-center">
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

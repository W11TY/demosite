import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useTransform,
  useScroll,
} from 'framer-motion';
import { Link } from 'react-router-dom';

import { platforms } from '../data/platform';
import { FadeInUp } from '../components/shared/Motion';
import {
  ParallaxText,
  MagneticElement,
} from '../components/shared/Interactive';
import {
  BRAND,
  BRAND_TEXT,
  ACCENTS,
} from '../data/accents';
import { useChapterColor } from '../hooks/useChapterColor';

import ChapterNav from '../components/shared/ChapterNav';
import IllustrationCard from '../components/shared/IllustrationCard';
import AntiMetalButton from '../components/shared/AntiMetalButton';


const NAV_LABELS = [
  'Voice',
  'WhatsApp',
  'Command',
  'Quality',
  'Engagement',
];

const accentColors = [
  BRAND,
  ...platforms.map(
    (_, i) => ACCENTS[(i + 1) % ACCENTS.length].accent
  ),
  BRAND,
];

const tintColors = [
  ACCENTS[1].tint,
  ...platforms.map(
    (_, i) => ACCENTS[(i + 1) % ACCENTS.length].tint
  ),
  ACCENTS[1].tint,
];

const darkAccentColors = [
  BRAND_TEXT,
  ...platforms.map(
    (_, i) => ACCENTS[(i + 1) % ACCENTS.length].dark
  ),
  BRAND_TEXT,
];

const bgWords = [
  'ORCHESTRATE.',
  'CONNECT.',
  'DEPLOY.',
  'OBSERVE.',
  'ENGAGE.',
];

const motifMapping = [0, 1, 2, 3, 4];


// ============================================================
// HERO VISUAL
// ============================================================

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
      for (const entry of entries) {
        const w = entry.contentRect.width;

        setScale(
          w < 640
            ? Math.min(0.52, Math.max(0.38, w / 620))
            : Math.min(1, w / 600)
        );
      }
    });

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center"
    >
      <motion.div
        className="absolute inset-[0%] w-[200%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100"
        animate={{ x: [0, -20], y: [0, -20] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div
        style={{ transform: `scale(${scale})` }}
        className="relative w-[600px] h-[600px] flex justify-center items-center origin-center -translate-y-28 sm:-translate-y-20 md:translate-y-0 transition-transform duration-300"
      >
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          animate={{
            scale: [1, 1.02, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Layer 1 */}

          <motion.div style={{ y: y1 }} className="absolute">
            <motion.svg
              width="400"
              height="200"
              viewBox="0 0 400 200"
              animate={{
                y: [0, -10, 0],
                filter: [
                  'brightness(1)',
                  'brightness(1.2)',
                  'brightness(1)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <path
                d="M200,170 L30,85 L200,0 L370,85 Z"
                fill="color-mix(in srgb, var(--global-accent) 4%, transparent)"
                stroke="color-mix(in srgb, var(--global-accent) 15%, transparent)"
                strokeWidth="1"
              />

              <path
                d="M200,170 L30,85 L30,95 L200,180 L370,95 L370,85 Z"
                fill="color-mix(in srgb, var(--global-accent) 8%, transparent)"
              />
            </motion.svg>
          </motion.div>

          {/* Layer 2 */}

          <motion.div style={{ y: y2 }} className="absolute">
            <motion.svg
              width="400"
              height="200"
              viewBox="0 0 400 200"
              animate={{
                y: [0, -20, 0],
                filter: [
                  'brightness(1)',
                  'brightness(1.4)',
                  'brightness(1)',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <path
                d="M200,130 L60,60 L200,0 L340,60 Z"
                fill="color-mix(in srgb, var(--global-accent) 8%, transparent)"
                stroke="color-mix(in srgb, var(--global-accent) 25%, transparent)"
                strokeWidth="1"
              />

              <path
                d="M200,130 L60,60 L60,70 L200,140 L340,70 L340,60 Z"
                fill="color-mix(in srgb, var(--global-accent) 12%, transparent)"
              />

              <motion.circle
                r="3"
                fill="var(--global-accent)"
                animate={{
                  cx: [200, 340, 200, 60, 200],
                  cy: [0, 60, 130, 60, 0],
                  opacity: [0, 1, 1, 1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.svg>
          </motion.div>

          {/* Layer 3 */}

          <motion.div
            style={{ y: y3 }}
            className="absolute z-10"
          >
            <motion.svg
              width="400"
              height="200"
              viewBox="0 0 400 200"
              animate={{
                y: [0, -35, 0],
                filter: [
                  'drop-shadow(0px 0px 10px var(--global-accent))',
                  'drop-shadow(0px 10px 30px var(--global-accent))',
                  'drop-shadow(0px 0px 10px var(--global-accent))',
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <path
                d="M200,90 L90,35 L200,0 L310,35 Z"
                fill="color-mix(in srgb, var(--global-accent) 20%, transparent)"
                stroke="var(--global-accent)"
                strokeWidth="2.5"
                className="transition-colors duration-300"
              />

              <path
                d="M200,90 L90,35 L90,45 L200,100 L310,45 L310,35 Z"
                fill="color-mix(in srgb, var(--global-accent) 35%, transparent)"
                className="transition-colors duration-300"
              />

              <motion.circle
                cx="200"
                cy="45"
                r="8"
                fill="var(--global-accent)"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [1, 0.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -translate-y-28 sm:-translate-y-20 md:translate-y-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] blur-[80px] sm:blur-[100px] rounded-full mix-blend-multiply transition-colors duration-300 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, color-mix(in srgb, var(--global-accent) 40%, transparent), transparent)',
        }}
      />
    </div>
  );
};


// ============================================================
// REUSABLE ARCHITECTURE FEATURE
// ============================================================

const FeatureList = ({ items, color }) => (
  <div className="tcc-features">
    {items.map((item) => (
      <div className="tcc-feature" key={item}>
        <span
          className="tcc-dot-mini"
          style={{ backgroundColor: color }}
        />

        <span>{item}</span>
      </div>
    ))}
  </div>
);


// ============================================================
// QUALITY ANALYTICS
// ============================================================

const QualityAnalytics = () => (
  <div className="tcc-analytics">
    <div className="tcc-analytics-header">
      <span>Call Quality &amp; Performance</span>

      <span className="tcc-score">92/100</span>
    </div>

    <div className="tcc-score-track">
      <div className="tcc-score-fill" />
    </div>

    <div className="tcc-analytics-grid">
      <div className="tcc-analytics-item">
        <span>Sentiment Analysis</span>
        <strong className="positive">Positive</strong>
      </div>

      <div className="tcc-analytics-item">
        <span>Compliance Status</span>
        <strong className="positive">Passed</strong>
      </div>

      <div className="tcc-analytics-item">
        <span>Action Items</span>
        <strong>2 Pending</strong>
      </div>

      <div className="tcc-analytics-item">
        <span>Agent Performance</span>
        <strong>Monitored</strong>
      </div>
    </div>
  </div>
);


// ============================================================
// CUSTOMER 360
// ============================================================

const Customer360 = () => (
  <div className="tcc-customer360">
    <div className="tcc-customer360-header">
      <span>Customer 360°</span>
      <span className="tcc-live-dot" />
    </div>

    <p className="tcc-customer360-description">
      Unified Customer Information
    </p>

    <div className="tcc-channel-list">
      <div className="tcc-channel">
        <span className="tcc-channel-icon voice-dot">
          V
        </span>
        <span>Voice Calls</span>
      </div>

      <div className="tcc-channel">
        <span className="tcc-channel-icon whatsapp-dot">
          W
        </span>
        <span>WhatsApp</span>
      </div>

      <div className="tcc-channel">
        <span className="tcc-channel-icon chat-dot">
          C
        </span>
        <span>Web Chat</span>
      </div>

      <div className="tcc-channel">
        <span className="tcc-channel-icon email-dot">
          E
        </span>
        <span>Email</span>
      </div>
    </div>

    <div className="tcc-history-label">
      Engagement History
    </div>
  </div>
);


// ============================================================
// ARCHITECTURE DIAGRAM
// ============================================================

const ArchitectureDiagram = () => {
  const voiceFeatures = [
    'Inbound & Outbound Voice Calling',
    'Real-time Intent & Context Detection',
    'Sub-Second Transfer & Escalation',
  ];

  const whatsappFeatures = [
    'Automated Broadcast & Drip Journeys',
    'Interactive Two-Way Messaging',
    'Verified Meta Template Engine',
  ];

  const qualityFeatures = [
    '100% Automated Call QA Audits',
    'Compliance & Sentiment Scoring',
    'Agent Coaching & Performance Analytics',
  ];

  const engagementFeatures = [
    'Unified Customer 360 Profile',
    'Omnichannel Journey Orchestration',
    'Context-Aware Workflow Automation',
  ];

  const sceneRef = useRef(null);
  const d1Ref = useRef(null);
  const d2Ref = useRef(null);
  const d3Ref = useRef(null);
  const d4Ref = useRef(null);
  const voiceRef = useRef(null);
  const whatsappRef = useRef(null);
  const qualityRef = useRef(null);
  const engagementRef = useRef(null);

  const [svgSize, setSvgSize] = useState({ w: 1440, h: 900 });
  const [wires, setWires] = useState({
    hubVoice: '',
    hubWhatsapp: '',
    hubQuality: '',
    hubEngagement: '',
    voiceQuality: '',
    whatsappEngagement: '',
    voiceWhatsapp: '',
    qualityEngagement: '',
  });

  useEffect(() => {
    const update = () => {
      if (!sceneRef.current) return;
      const sRect = sceneRef.current.getBoundingClientRect();
      if (sRect.width === 0 || sRect.height === 0) return;

      setSvgSize({ w: sRect.width, h: sRect.height });

      const getP = (el) => {
        if (!el) return { x: 0, y: 0, w: 0, h: 0, left: 0, right: 0, top: 0, bottom: 0 };
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - sRect.left,
          y: r.top + r.height / 2 - sRect.top,
          w: r.width,
          h: r.height,
          left: r.left - sRect.left,
          right: r.right - sRect.left,
          top: r.top - sRect.top,
          bottom: r.bottom - sRect.top,
        };
      };

      const d1 = getP(d1Ref.current);
      const d2 = getP(d2Ref.current);
      const d3 = getP(d3Ref.current);
      const d4 = getP(d4Ref.current);

      const voice = getP(voiceRef.current);
      const whatsapp = getP(whatsappRef.current);
      const quality = getP(qualityRef.current);
      const engagement = getP(engagementRef.current);

      const vTarget = { x: voice.right, y: voice.top + Math.min(85, voice.h * 0.45) };
      const wTarget = { x: whatsapp.left, y: whatsapp.top + Math.min(85, whatsapp.h * 0.45) };
      const qTarget = { x: quality.right, y: quality.top + Math.min(85, quality.h * 0.45) };
      const eTarget = { x: engagement.left, y: engagement.top + Math.min(85, engagement.h * 0.45) };

      // 1. Hub to AI Voice Agents (Blue)
      let hubVoicePath = '';
      if (d1.x && vTarget.x) {
        const startX = d1.x, startY = d1.y;
        const endX = vTarget.x, endY = vTarget.y;
        const midX = (startX + endX) / 2;
        const r = Math.min(24, Math.abs(startX - endX) / 2, Math.abs(startY - endY) / 2);
        hubVoicePath = `M ${startX} ${startY} H ${midX + r} Q ${midX} ${startY} ${midX} ${startY - r} V ${endY + r} Q ${midX} ${endY} ${midX - r} ${endY} H ${endX}`;
      }

      // 2. Hub to WhatsApp (Teal)
      let hubWhatsappPath = '';
      if (d3.x && wTarget.x) {
        const startX = d3.x, startY = d3.y;
        const endX = wTarget.x, endY = wTarget.y;
        if (endY <= startY) {
          const r = Math.min(24, Math.abs(endX - startX) / 2, Math.abs(startY - endY) / 2);
          hubWhatsappPath = `M ${startX} ${startY} V ${endY + r} Q ${startX} ${endY} ${startX + r} ${endY} H ${endX}`;
        } else {
          const c = 28;
          const midX = (startX + endX) / 2;
          const r = 18;
          hubWhatsappPath = `M ${startX} ${startY} V ${startY - c + r} Q ${startX} ${startY - c} ${startX + r} ${startY - c} H ${midX - r} Q ${midX} ${startY - c} ${midX} ${startY - c + r} V ${endY - r} Q ${midX} ${endY} ${midX + r} ${endY} H ${endX}`;
        }
      }

      // 3. Hub to Quality (Purple)
      let hubQualityPath = '';
      if (d4.x && qTarget.x) {
        const startX = d4.x, startY = d4.y;
        const endX = qTarget.x, endY = qTarget.y;
        if (endY >= startY) {
          const r = Math.min(24, Math.abs(startX - endX) / 2, Math.abs(endY - startY) / 2);
          hubQualityPath = `M ${startX} ${startY} V ${endY - r} Q ${startX} ${endY} ${startX - r} ${endY} H ${endX}`;
        } else {
          const c = 28;
          const midX = (startX + endX) / 2;
          const r = 18;
          hubQualityPath = `M ${startX} ${startY} V ${startY + c - r} Q ${startX} ${startY + c} ${startX - r} ${startY + c} H ${midX + r} Q ${midX} ${startY + c} ${midX} ${startY + c - r} V ${endY + r} Q ${midX} ${endY} ${midX - r} ${endY} H ${endX}`;
        }
      }

      // 4. Hub to Engagement (Orange)
      let hubEngagementPath = '';
      if (d2.x && eTarget.x) {
        const startX = d2.x, startY = d2.y;
        const endX = eTarget.x, endY = eTarget.y;
        const midX = (startX + endX) / 2;
        const r = Math.min(24, Math.abs(endX - startX) / 2, Math.abs(endY - startY) / 2);
        hubEngagementPath = `M ${startX} ${startY} H ${midX - r} Q ${midX} ${startY} ${midX} ${startY + r} V ${endY - r} Q ${midX} ${endY} ${midX + r} ${endY} H ${endX}`;
      }

      // 5. Card-to-Card: Voice <-> Quality (Left Vertical Bus)
      let voiceQualityPath = '';
      if (voice.left && quality.left) {
        const pipeX = voice.left + voice.w * 0.72;
        const startY = voice.bottom;
        const endY = quality.top;
        if (endY > startY) {
          voiceQualityPath = `M ${pipeX} ${startY} V ${endY}`;
        }
      }

      // 6. Card-to-Card: WhatsApp <-> Customer Engagement (Right Vertical Bus)
      let whatsappEngagementPath = '';
      if (whatsapp.left && engagement.left) {
        const pipeX = whatsapp.left + whatsapp.w * 0.28;
        const startY = whatsapp.bottom;
        const endY = engagement.top;
        if (endY > startY) {
          whatsappEngagementPath = `M ${pipeX} ${startY} V ${endY}`;
        }
      }

      // 7. Card-to-Card: Voice <-> WhatsApp (Top Horizontal Bridge)
      let voiceWhatsappPath = '';
      if (voice.right && whatsapp.left) {
        const y = Math.min(voice.top, whatsapp.top) + 26;
        voiceWhatsappPath = `M ${voice.right} ${y} H ${whatsapp.left}`;
      }

      // 8. Card-to-Card: Quality <-> Customer Engagement (Bottom Horizontal Bridge)
      let qualityEngagementPath = '';
      if (quality.right && engagement.left) {
        const y = Math.max(quality.bottom, engagement.bottom) - 26;
        qualityEngagementPath = `M ${quality.right} ${y} H ${engagement.left}`;
      }

      setWires({
        hubVoice: hubVoicePath,
        hubWhatsapp: hubWhatsappPath,
        hubQuality: hubQualityPath,
        hubEngagement: hubEngagementPath,
        voiceQuality: voiceQualityPath,
        whatsappEngagement: whatsappEngagementPath,
        voiceWhatsapp: voiceWhatsappPath,
        qualityEngagement: qualityEngagementPath,
      });
    };

    update();
    const t1 = setTimeout(update, 60);
    const t2 = setTimeout(update, 300);
    window.addEventListener('resize', update);

    let ro;
    if (sceneRef.current && window.ResizeObserver) {
      ro = new ResizeObserver(update);
      ro.observe(sceneRef.current);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', update);
      if (ro) ro.disconnect();
    };
  }, []);

  return (
    <section className="w-full py-24 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 relative overflow-x-clip bg-transparent">
      <div className="max-w-[1550px] mx-auto relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <FadeInUp className="flex flex-col items-center relative">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] blur-[80px] opacity-30 pointer-events-none"
            style={{
              backgroundColor: 'var(--global-accent)',
            }}
          />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-white/60 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-8">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: 'var(--global-accent)',
              }}
            />
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#14110F]/60 uppercase">
              The Core Engine
            </span>
          </div>

          <h2 className="text-[clamp(36px,5vw,60px)] font-normal tracking-[-0.04em] text-[#14110F] mb-6 text-center leading-[1.1]">
            Unified Platform{' '}
            <br className="md:hidden" />
            <span
              className="font-semibold"
              style={{
                color: 'var(--global-accent)',
              }}
            >
              Architecture
            </span>
          </h2>

          <p className="text-[17px] md:text-[22px] text-[#14110F]/60 font-normal text-center max-w-[650px] mx-auto mb-16 md:mb-24 leading-relaxed">
            A seamless orchestration layer connecting every module across your customer experience.
          </p>
        </FadeInUp>

        {/* Interconnected Architecture Scene */}
        <div className="w-full">
          <div className="tcc-scene" ref={sceneRef}>

            {/* INTERCONNECTED CONNECTORS SVG */}
            <svg
              className="tcc-wires"
              viewBox={`0 0 ${svgSize.w} ${svgSize.h}`}
              style={{ width: '100%', height: '100%' }}
              aria-hidden="true"
            >
              <defs>
                <marker
                  id="pltArrowBlue"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,1 L7,4 L0,7 Z" fill="#1684f8" />
                </marker>

                <marker
                  id="pltArrowTeal"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,1 L7,4 L0,7 Z" fill="#0ca9bd" />
                </marker>

                <marker
                  id="pltArrowPurple"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,1 L7,4 L0,7 Z" fill="#823ee8" />
                </marker>

                <marker
                  id="pltArrowOrange"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,1 L7,4 L0,7 Z" fill="#f18a13" />
                </marker>

                <marker
                  id="pltArrowViolet"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,1 L7,4 L0,7 Z" fill="#7c3aed" />
                </marker>

                <marker
                  id="pltArrowEmerald"
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,1 L7,4 L0,7 Z" fill="#059669" />
                </marker>
              </defs>

              {/* 1. Hub to AI Voice Agents (Blue) */}
              {wires.hubVoice && (
                <>
                  <path
                    id="pltPathBlue"
                    d={wires.hubVoice}
                    fill="none"
                    stroke="#1684f8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    markerEnd="url(#pltArrowBlue)"
                  />
                  <g fill="#1684f8" filter="drop-shadow(0 0 6px rgba(22,132,248,0.7))">
                    <circle r="4">
                      <animateMotion dur="3.4s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#pltPathBlue" />
                      </animateMotion>
                    </circle>
                  </g>
                </>
              )}

              {/* 2. Hub to WhatsApp Business (Teal) */}
              {wires.hubWhatsapp && (
                <>
                  <path
                    id="pltPathTeal"
                    d={wires.hubWhatsapp}
                    fill="none"
                    stroke="#0ca9bd"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    markerEnd="url(#pltArrowTeal)"
                  />
                  <g fill="#0ca9bd" filter="drop-shadow(0 0 6px rgba(12,169,189,0.7))">
                    <circle r="4">
                      <animateMotion dur="3.8s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#pltPathTeal" />
                      </animateMotion>
                    </circle>
                  </g>
                </>
              )}

              {/* 3. Hub to Quality Management (Purple) */}
              {wires.hubQuality && (
                <>
                  <path
                    id="pltPathPurple"
                    d={wires.hubQuality}
                    fill="none"
                    stroke="#823ee8"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    markerEnd="url(#pltArrowPurple)"
                  />
                  <g fill="#823ee8" filter="drop-shadow(0 0 6px rgba(130,62,232,0.7))">
                    <circle r="4">
                      <animateMotion dur="3.6s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#pltPathPurple" />
                      </animateMotion>
                    </circle>
                  </g>
                </>
              )}

              {/* 4. Hub to Customer Engagement (Orange) */}
              {wires.hubEngagement && (
                <>
                  <path
                    id="pltPathOrange"
                    d={wires.hubEngagement}
                    fill="none"
                    stroke="#f18a13"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    markerEnd="url(#pltArrowOrange)"
                  />
                  <g fill="#f18a13" filter="drop-shadow(0 0 6px rgba(241,138,19,0.7))">
                    <circle r="4">
                      <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#pltPathOrange" />
                      </animateMotion>
                    </circle>
                  </g>
                </>
              )}

              {/* 5. Card-to-Card: Voice -> Quality (Left Vertical Interconnect) */}
              {wires.voiceQuality && (
                <>
                  <path
                    id="pltPathVoiceQuality"
                    d={wires.voiceQuality}
                    fill="none"
                    stroke="#7c3aed"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    markerEnd="url(#pltArrowViolet)"
                  />
                  <g fill="#7c3aed" filter="drop-shadow(0 0 5px rgba(124,58,237,0.7))">
                    <circle r="3.5">
                      <animateMotion dur="2.8s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#pltPathVoiceQuality" />
                      </animateMotion>
                    </circle>
                  </g>
                </>
              )}

              {/* 6. Card-to-Card: WhatsApp -> Customer Engagement (Right Vertical Interconnect) */}
              {wires.whatsappEngagement && (
                <>
                  <path
                    id="pltPathWhatsappEngagement"
                    d={wires.whatsappEngagement}
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    markerEnd="url(#pltArrowEmerald)"
                  />
                  <g fill="#059669" filter="drop-shadow(0 0 5px rgba(5,150,105,0.7))">
                    <circle r="3.5">
                      <animateMotion dur="3.0s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#pltPathWhatsappEngagement" />
                      </animateMotion>
                    </circle>
                  </g>
                </>
              )}

              {/* 7. Card-to-Card: Voice -> WhatsApp (Top Horizontal Interconnect) */}
              {wires.voiceWhatsapp && (
                <>
                  <path
                    id="pltPathVoiceWhatsapp"
                    d={wires.voiceWhatsapp}
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    markerEnd="url(#pltArrowTeal)"
                  />
                  <g fill="#0284c7" filter="drop-shadow(0 0 5px rgba(2,132,199,0.7))">
                    <circle r="3.5">
                      <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#pltPathVoiceWhatsapp" />
                      </animateMotion>
                    </circle>
                  </g>
                </>
              )}

              {/* 8. Card-to-Card: Quality -> Customer Engagement (Bottom Horizontal Interconnect) */}
              {wires.qualityEngagement && (
                <>
                  <path
                    id="pltPathQualityEngagement"
                    d={wires.qualityEngagement}
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    strokeLinecap="round"
                    markerEnd="url(#pltArrowOrange)"
                  />
                  <g fill="#d97706" filter="drop-shadow(0 0 5px rgba(217,119,6,0.7))">
                    <circle r="3.5">
                      <animateMotion dur="3.5s" repeatCount="indefinite" rotate="auto">
                        <mpath href="#pltPathQualityEngagement" />
                      </animateMotion>
                    </circle>
                  </g>
                </>
              )}
            </svg>

            {/* INTERCONNECTED PANELS & HUB */}
            <div className="tcc-layout">

              {/* ==========================================
                  1. AI VOICE AGENTS
              ========================================== */}
              <section className="tcc-panel voice relative" ref={voiceRef}>
                <div className="tcc-orb">
                  <div className="tcc-orb-inner">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 26v-7a13 13 0 0 1 26 0v7" />
                      <rect
                        x="13"
                        y="24"
                        width="38"
                        height="27"
                        rx="12"
                        fill="#e9f6ff"
                        stroke="#b8e1ff"
                      />
                      <rect
                        x="18"
                        y="29"
                        width="28"
                        height="16"
                        rx="8"
                        fill="#102b55"
                        stroke="#2c9dfb"
                      />
                      <circle cx="26" cy="37" r="2.5" fill="#36d7ff" stroke="none" />
                      <circle cx="38" cy="37" r="2.5" fill="#36d7ff" stroke="none" />
                      <path d="M28 42h8M8 31v10M56 31v10M25 51v5h14v-5" stroke="#1684f8" />
                    </svg>
                  </div>
                </div>

                <div className="tcc-panel-content">
                  <div className="flex items-center justify-between mb-1">
                    <h3>AI Voice Agents</h3>
                    <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded-full bg-[#1684f8]/10 text-[#1684f8] border border-[#1684f8]/20">
                      Channel 01
                    </span>
                  </div>

                  <p className="tcc-sub">
                    Human-like voice conversations at scale
                  </p>

                  <FeatureList
                    color="#1684f8"
                    items={voiceFeatures}
                  />
                </div>
              </section>

              {/* ==========================================
                  3. QUALITY MANAGEMENT
              ========================================== */}
              <section className="tcc-panel quality relative" ref={qualityRef}>
                <div className="tcc-orb">
                  <div className="tcc-orb-inner">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M17 12h30a5 5 0 0 1 5 5v31a5 5 0 0 1-5 5H17a5 5 0 0 1-5-5V17a5 5 0 0 1 5-5Z"
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                      />
                      <path
                        d="M22 23h20M22 31h15M22 39h12"
                        stroke="#8b4de8"
                        strokeWidth="4"
                      />
                      <circle cx="44" cy="44" r="12" fill="#FFFFFF" stroke="#8b4de8" />
                      <path d="m38 44 4 4 8-9" stroke="#8b4de8" strokeWidth="3" />
                    </svg>
                  </div>
                </div>

                <div className="tcc-panel-content">
                  <div className="flex items-center justify-between mb-1">
                    <h3>Quality Management</h3>
                    <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded-full bg-[#8b5cf6]/10 text-[#8b5cf6] border border-[#8b5cf6]/20">
                      QA &amp; Audit
                    </span>
                  </div>

                  <p className="tcc-sub">
                    AI-powered call auditing &amp; compliance
                  </p>

                  <FeatureList
                    color="#8b5cf6"
                    items={qualityFeatures}
                  />
                </div>
              </section>

              {/* ==========================================
                  5. CENTRAL TELEPHONY & COMMAND CENTER
              ========================================== */}
              <section className="tcc-center">
                <span className="tcc-dot d1" ref={d1Ref} title="Voice Interconnect" />
                <span className="tcc-dot d2" ref={d2Ref} title="Engagement Interconnect" />
                <span className="tcc-dot d3" ref={d3Ref} title="WhatsApp Interconnect" />
                <span className="tcc-dot d4" ref={d4Ref} title="QA Interconnect" />

                <div className="tcc-center-inner">
                  <div className="tcc-cloud">
                    <svg viewBox="0 0 120 82" fill="none">
                      <path
                        d="M31 65C15 65 7 54 7 42c0-12 10-22 23-22 5-13 17-19 29-16 12 2 20 11 22 23 14-2 28 8 28 22 0 10-8 16-20 16H31Z"
                        fill="#1684f8"
                      />
                      <path
                        d="M50 24c-4 2-5 8-3 13 4 10 12 18 22 21 5 2 10-1 11-5l-10-7-5 5c-5-3-9-7-11-12l4-4-8-11Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </div>

                  <h2>
                    Telephony &amp;
                    <br />
                    Command Center
                  </h2>

                  <p>
                    Unified Communication Hub
                  </p>

                  <div className="tcc-chips">
                    <span className="tcc-chip">Cloud Telephony</span>
                    <span className="tcc-chip">SIP/PRI</span>
                    <span className="tcc-chip">Smart Routing</span>
                  </div>
                </div>
              </section>

              {/* ==========================================
                  2. WHATSAPP BUSINESS
              ========================================== */}
              <section className="tcc-panel whatsapp relative" ref={whatsappRef}>
                <div className="tcc-orb">
                  <div className="tcc-orb-inner">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path
                        d="M12 50l3-10a23 23 0 1 1 9 10l-12 0Z"
                        fill="#10b981"
                        stroke="#FFFFFF"
                      />
                      <path
                        d="M25 20c-3 2-3 6-1 10 3 6 8 10 14 12 3 1 7-1 7-4l-7-4-4 4c-4-2-7-5-9-9l3-3-3-6Z"
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                      />
                    </svg>
                  </div>
                </div>

                <div className="tcc-panel-content">
                  <div className="flex items-center justify-between mb-1">
                    <h3>WhatsApp Business</h3>
                    <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#059669] border border-[#10b981]/20">
                      Channel 02
                    </span>
                  </div>

                  <p className="tcc-sub">
                    Automated messaging &amp; campaigns
                  </p>

                  <FeatureList
                    color="#10b981"
                    items={whatsappFeatures}
                  />
                </div>
              </section>

              {/* ==========================================
                  4. CUSTOMER ENGAGEMENT
              ========================================== */}
              <section className="tcc-panel engagement relative" ref={engagementRef}>
                <div className="tcc-orb">
                  <div className="tcc-orb-inner">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="32" cy="19" r="10" fill="#FFFFFF" stroke="#FFFFFF" />
                      <circle cx="13" cy="27" r="7" fill="#FFFFFF" stroke="#FFFFFF" />
                      <circle cx="51" cy="27" r="7" fill="#FFFFFF" stroke="#FFFFFF" />
                      <path
                        d="M13 53v-5c0-9 8-15 19-15s19 6 19 15v5H13Z"
                        fill="#FFFFFF"
                        stroke="#FFFFFF"
                      />
                      <path
                        d="M4 50v-5c0-5 4-9 10-10M60 50v-5c0-5-4-9-10-10"
                        stroke="#FFFFFF"
                      />
                    </svg>
                  </div>
                </div>

                <div className="tcc-panel-content">
                  <div className="flex items-center justify-between mb-1">
                    <h3>Customer Engagement</h3>
                    <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#d97706] border border-[#f59e0b]/20">
                      Orchestration
                    </span>
                  </div>

                  <p className="tcc-sub">
                    Personalized omnichannel journeys
                  </p>

                  <FeatureList
                    color="#f59e0b"
                    items={engagementFeatures}
                  />
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


// ============================================================
// PLATFORM OVERVIEW PAGE
// ============================================================

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

      {/* GLOBAL BACKGROUND */}

      <div
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-300"
        style={{
          backgroundImage:
            'linear-gradient(180deg, #F5F1EA 0%, var(--global-tint, #F5F1EA) 100%)',
        }}
      />


      {/* 01 — HERO */}

      <section
        ref={heroRef}
        className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden isolate pt-16 sm:pt-20 md:pt-0 pb-10 z-0 bg-transparent"
      >
        <VisualPlatformHero />

        <div className="max-w-[1000px] w-full mx-auto px-5 sm:px-6 text-center z-10 mt-20 sm:mt-24 md:mt-32">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-4 sm:mb-6 block">
              The Platform
            </span>

            <h1 className="text-[clamp(28px,7vw,42px)] sm:text-[clamp(36px,6vw,72px)] font-medium tracking-tight sm:tracking-tighter text-[#14110F] leading-[1.12] sm:leading-[1.08] break-words">
              The Complete Toolkit For{' '}
              <br className="hidden sm:inline" />

              <span
                style={{ color: BRAND }}
                className="inline-block sm:whitespace-nowrap"
              >
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


      {/* 03 — PLATFORM MODULES */}

      <div className="w-full relative z-10">
        {platforms.map((platform, i) => (
          <section
            id={`chapter-${i}`}
            key={platform.id}
            className="w-full py-24 md:py-40 px-4 sm:px-6 md:px-16 lg:px-20 relative overflow-x-clip bg-transparent"
          >
            <ParallaxText
              text={bgWords[i % bgWords.length]}
              alignLeft={i % 2 === 0}
              className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0"
            />

            <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center">

              {/* Theme Header */}

              <div className="md:w-[460px] lg:w-[500px] shrink-0">
                <div className="md:sticky md:top-32">

                  <span className="font-mono text-[11px] sm:text-[12px] tracking-[0.2em] uppercase font-bold block whitespace-normal mb-6 md:mb-8 text-[var(--global-dark-accent)] transition-colors duration-300">
                    0{i + 1} / MODULE
                  </span>

                  <Link
                    to={`/platform/${platform.id}`}
                    className="block w-fit hover:opacity-80 transition-opacity outline-none mb-6"
                  >
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
                      style={{
                        borderColor: 'var(--global-accent)',
                      }}
                    >
                      {platform.description}
                    </p>
                  </div>

                  <MagneticElement className="inline-block mt-4">
                    <Link
                      to={`/platform/${platform.id}`}
                      className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold flex items-center justify-center gap-3 py-4 px-8 rounded-full text-white shadow-[0_8px_25px_color-mix(in_srgb,var(--global-accent)_40%,transparent)] hover:shadow-[0_12px_35px_color-mix(in_srgb,var(--global-accent)_60%,transparent)] transition-all duration-300 relative overflow-hidden group"
                      style={{
                        backgroundColor: 'var(--global-accent)',
                      }}
                    >
                      <span className="relative z-10">
                        Explore Layer
                      </span>

                      <svg
                        className="relative z-10 group-hover:translate-x-1 transition-transform"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line
                          x1="5"
                          y1="12"
                          x2="19"
                          y2="12"
                        />

                        <polyline points="12 5 19 12 12 19" />
                      </svg>

                      <div className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Link>
                  </MagneticElement>
                </div>
              </div>


              {/* Illustration */}

              <div className="flex-1 w-full flex md:justify-end">
                <Link
                  to={`/platform/${platform.id}`}
                  className="w-full md:max-w-[480px] block outline-none transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[1.02] hover:shadow-[0_40px_80px_-20px_color-mix(in_srgb,var(--global-accent)_30%,transparent)] rounded-[24px]"
                >
                  <IllustrationCard
                    name={platform.name}
                    motifIndex={motifMapping[i]}
                    idx={i}
                    delay={0.1}
                    metricRow={{
                      label: 'STATUS',
                      value: 'LIVE',
                    }}
                  />
                </Link>
              </div>

            </div>

            <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
          </section>
        ))}
      </div>


      {/* ARCHITECTURE DIAGRAM */}

      <ArchitectureDiagram />


      {/* 04 — FINAL CTA */}

      <section
        id="final-cta"
        className="relative w-full py-40 md:py-64 bg-[#16130F] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10"
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none"
          style={{
            backgroundColor:
              `color-mix(in srgb, ${BRAND} 20%, transparent)`,
          }}
        />

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
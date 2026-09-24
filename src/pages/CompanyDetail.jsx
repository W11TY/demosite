import React, { useRef, useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem, ScrollWordReveal } from '../components/shared/Motion';
import { company } from '../data/company';
import heroImg from '../assets/hero.png';
import aboutMission from '../assets/about_platform.png';
import aboutPlatform from '../assets/about_platform.png';
import patternImg from '../assets/pattern.png';
import { IllustrationIntelligentAgents } from '../components/shared/CardIllustrations';

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


// ─── Abstract Illustrations ───────────────────────────────────────────────────
const AbstractGeometricArt = ({ themeId, idx }) => {
  const colors = [
    ['bg-blue-400', 'bg-blue-600'],       // Work
    ['bg-emerald-400', 'bg-emerald-600'], // Grow
    ['bg-amber-400', 'bg-amber-600'],     // Connect
    ['bg-purple-400', 'bg-purple-600']    // Live
  ][themeId];

  const shapeType = idx % 4;

  const renderShape = () => {
    if (shapeType === 0) {
      return (
        <motion.div 
          animate={{ rotate: 90 }} 
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="relative w-12 h-12 flex flex-wrap gap-1"
        >
          {[0,1,2,3].map(i => (
             <motion.div key={i} animate={{ scale: [1, 0.7, 1] }} transition={{ duration: 3, delay: i*0.4, repeat: Infinity }} className={`w-[22px] h-[22px] rounded-sm ${colors[0]} opacity-80`} />
          ))}
        </motion.div>
      );
    } else if (shapeType === 1) {
      return (
        <div className="relative w-12 h-12 flex items-end justify-center gap-1.5">
          {[40, 70, 100].map((h, i) => (
            <motion.div key={i} initial={{ height: "20%" }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i*0.2 }} className={`w-3 rounded-t-sm ${colors[1]} opacity-80`} />
          ))}
        </div>
      );
    } else if (shapeType === 2) {
      return (
        <motion.div animate={{ rotate: -180 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="relative w-12 h-12 rounded-full border-2 border-dashed border-black/20 flex items-center justify-center">
          <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 3, repeat: Infinity }} className={`w-4 h-4 rounded-full ${colors[0]}`} />
        </motion.div>
      );
    } else {
      return (
        <div className="relative w-12 h-12 flex items-center justify-center">
           <motion.div animate={{ x: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className={`absolute w-6 h-6 rounded-full ${colors[0]} mix-blend-multiply opacity-70`} />
           <motion.div animate={{ x: [10, -10, 10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className={`absolute w-6 h-6 rounded-full ${colors[1]} mix-blend-multiply opacity-70`} />
        </div>
      );
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {renderShape()}
    </div>
  );
};

// ─── Culture Page ─────────────────────────────────────────────────────────────

const CulturePage = () => {
  const [active, setActive] = useState(0);
  const theme = THEMES[active];

  const handleTabChange = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-background min-h-screen text-text-primary">
      {/* Header */}
      <div className="w-full px-6 md:px-16 lg:px-20 pt-28 md:pt-36 pb-16">
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px bg-[#4d7aff] w-8" />
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#4d7aff] uppercase font-semibold">Culture Manifesto · Voxi</span>
            <div className="h-px bg-[#4d7aff] w-8" />
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="text-[clamp(36px,6vw,72px)] font-medium tracking-tight text-text-primary leading-[1.05]"
            >
              The Voxi Culture Manifesto.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] md:text-[20px] text-text-secondary max-w-[600px] leading-relaxed"
          >
            Life at Voxi is built on purpose, trust, and well-being. We've distilled our philosophy into 4 themes and 15 core principles.
          </motion.p>
        </div>
      </div>

      {/* Tab bar — sticky */}
      <div className="sticky top-[72px] z-30 w-full bg-background/90 backdrop-blur-md border-y border-black/[0.04] px-6 md:px-16 lg:px-20 py-4 shadow-sm">
        <div className="max-w-[900px] mx-auto flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-black/[0.03] border border-black/[0.05] rounded-full p-1.5 overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full"
          >
            {THEMES.map((t) => (
              <motion.button
                key={t.id}
                onClick={() => handleTabChange(t.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-6 md:px-8 py-2.5 rounded-full text-[14px] font-medium cursor-pointer shrink-0 transition-colors duration-300"
                style={{ color: active === t.id ? '#fff' : 'rgba(0,0,0,0.5)' }}
              >
                {active === t.id && (
                  <motion.span
                    layoutId="tab-pill-light"
                    className="absolute inset-0 rounded-full bg-[#111]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{t.label}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content List */}
      <div className="w-full px-6 md:px-16 lg:px-20 py-16 md:py-24 min-h-[50vh]">
        <div className="max-w-[900px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-center gap-4 mb-16">
                <div className="h-px bg-black/[0.1] flex-1 max-w-[100px]" />
                <span className="font-mono text-[13px] tracking-[0.2em] text-black/40 uppercase font-semibold">{theme.full}</span>
                <div className="h-px bg-black/[0.1] flex-1 max-w-[100px]" />
              </div>

              <div className="flex flex-col">
                {theme.principles.map((p, idx) => (
                  <motion.div
                    key={`${active}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row gap-4 md:gap-16 items-start py-10 md:py-16 border-b border-black/[0.08] last:border-0 group"
                  >
                    <div className="w-full md:w-[40%] shrink-0">
                      <div className="text-[48px] md:text-[64px] font-light text-black/[0.05] group-hover:text-black/[0.1] transition-colors duration-500 mb-2 leading-none font-mono">
                        0{idx + 1}
                      </div>
                      <h3 className="text-[22px] md:text-[28px] font-medium text-text-primary tracking-tight leading-[1.2]">
                        {p.title}
                      </h3>
                    </div>
                    <div className="w-full md:w-[60%] md:pt-4 flex flex-col sm:flex-row gap-8 items-start">
                      <p className="text-[16px] md:text-[19px] text-text-secondary leading-[1.6] flex-1">
                        {p.desc}
                      </p>
                      <div className="w-full sm:w-[120px] aspect-[4/3] sm:aspect-square shrink-0 bg-black/[0.02] rounded-2xl flex items-center justify-center border border-black/[0.04] group-hover:bg-black/[0.04] group-hover:border-black/[0.08] group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden relative">
                        <AbstractGeometricArt themeId={active} idx={idx} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* The Voxi Promise */}
      <div className="w-full bg-[#111] py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-5 z-0" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4d7aff]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="max-w-[1000px] mx-auto px-6 md:px-16 lg:px-20 text-center relative z-10">
          <StaggerContainer>
            <FadeInUp className="inline-flex items-center gap-3 mb-8">
              <div className="h-px bg-white/20 w-8" />
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/50 uppercase">The Voxi Promise</span>
              <div className="h-px bg-white/20 w-8" />
            </FadeInUp>
            <FadeInUp delay={0.1}>
              <h2 className="text-[clamp(28px,4vw,48px)] font-medium tracking-tight text-white leading-[1.2] mb-8">
                At Voxi, you're not joining a company — you're joining a mission to build world-class AI while living a healthier, happier, and more meaningful life.
              </h2>
            </FadeInUp>
          </StaggerContainer>
        </div>
      </div>
    </div>
  );
};


// ─── About Page ─────────────────────────────────────────────────────────────
const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="w-full min-h-screen bg-white text-[#111] overflow-hidden relative font-sans">
      
      {/* Cinematic Header */}
      <div className="w-full flex justify-center p-3 lg:p-[12px]">
        <section className="relative w-full max-w-[1600px] min-h-[50vh] lg:min-h-[400px] rounded-[24px] overflow-hidden bg-[#0c0c0c] shadow-sm isolate flex flex-col justify-end pb-16 lg:pb-20 px-6 lg:px-[58px]">
          {/* Background elements */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-[#0c0c0c]">
            <img src={heroImg} alt="Hero Backdrop" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4d7aff]/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />
          </div>

          <div className="relative z-20 max-w-[900px] mt-32 text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase mb-6 block"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(40px,8vw,64px)] font-medium tracking-[-0.04em] leading-[1.05] text-white"
            >
              One Ecosystem. <span className="text-white/40">One Platform. Every Customer Conversation.</span>
            </motion.h1>
          </div>
        </section>
      </div>

      {/* Premium Bento Mission with Explanatory Illustrations */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 py-32 border-b border-black/[0.03]">
        <StaggerContainer>
          <div className="flex items-center gap-5 mb-16">
            <span className="font-mono text-[13px] tracking-[0.25em] text-black/30 uppercase font-medium">Vision & Ecosystem</span>
            <div className="h-[1px] bg-gradient-to-r from-black/[0.08] to-transparent flex-1 max-w-[300px]" />
          </div>

          <div className="flex flex-col gap-8">
            {/* Feature 1: The OS / Ecosystem */}
            <FadeInUp className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[32px] bg-white border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] hover:border-black/[0.08] transition-all duration-700 min-h-[500px]">
                <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/[0.04] order-2 lg:order-1">
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center mb-10 group-hover:bg-[#111] group-hover:text-white transition-colors duration-500">
                    <span className="font-serif italic text-lg">V</span>
                  </div>
                  <h3 className="text-[32px] md:text-[42px] font-medium leading-[1.1] mb-6 tracking-tight text-[#111]">
                    The Voxi CX OS
                  </h3>
                  <p className="text-[18px] text-black/50 leading-relaxed max-w-[500px] font-light">
                    We bridge the gap between academic research and commercial deployment. An AI-powered platform that unifies Voice AI, WhatsApp, and CRM Integration into a single intelligent ecosystem.
                  </p>
                </div>
                
                {/* Clean Explanatory Illustration: The Ecosystem */}
                <div className="relative bg-[#FAFAFA] flex items-center justify-center p-12 overflow-hidden order-1 lg:order-2 min-h-[400px]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-50" />
                  
                  <div className="relative w-full max-w-[340px] aspect-square flex items-center justify-center">
                    {/* Central Node */}
                    <motion.div 
                      animate={{ scale: [1, 1.05, 1] }} 
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute w-20 h-20 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-black/[0.04] flex items-center justify-center z-20"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                      </div>
                    </motion.div>
                    
                    {/* Rings */}
                    <div className="absolute w-[200px] h-[200px] rounded-full border border-black/[0.04] z-10" />
                    <div className="absolute w-[300px] h-[300px] rounded-full border border-black/[0.04] z-10 border-dashed" />
                    
                    {/* Orbiting Nodes */}
                    {[
                      { r: 200, angle: 0, label: "Voice AI", color: "bg-emerald-500", delay: 0 },
                      { r: 200, angle: 180, label: "WhatsApp", color: "bg-amber-500", delay: -10 },
                      { r: 300, angle: 90, label: "CRM", color: "bg-purple-500", delay: -5 },
                      { r: 300, angle: 270, label: "Analytics", color: "bg-blue-400", delay: -15 }
                    ].map((node, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: node.delay }}
                        className="absolute w-full h-full flex items-center justify-center z-20 pointer-events-none"
                        style={{ width: node.r, height: node.r }}
                      >
                        <div className="absolute top-0 -translate-y-1/2 flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-black/[0.05] shadow-sm pointer-events-auto">
                          <div className={`w-2 h-2 rounded-full ${node.color}`} />
                          <span className="text-[10px] font-mono text-black/60 font-medium uppercase tracking-wider">{node.label}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInUp>

            {/* Feature 2: Intelligent Agents */}
            <FadeInUp delay={0.1} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[32px] bg-[#111] text-white border border-black/[0.04] shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.12)] transition-all duration-700 min-h-[500px]">
                
                {/* Clean Explanatory Illustration: Intelligent Agents */}
                <div className="relative bg-[#0a0a0a] flex items-center justify-center p-8 md:p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.05] min-h-[400px]">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-blue-500/10 to-transparent blur-[40px] pointer-events-none" />
                  
                  <div className="w-full max-w-[340px] flex flex-col gap-4 relative z-10">
                    {/* AI Agent Context Header */}
                    <div className="flex items-center gap-3 mb-2 px-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Active Call Context</span>
                    </div>
                    
                    {/* Chat Bubbles */}
                    {[
                      { isAi: true, text: "Hi! I noticed your policy expires in 3 days. Would you like to renew it now with the same coverage?", delay: 0 },
                      { isAi: false, text: "Yes, please. Can we use the card on file?", delay: 0.5 },
                      { isAi: true, text: "Done. I've processed the renewal using your Visa ending in 4242. A confirmation receipt has been sent to your email.", delay: 1 }
                    ].map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3 + msg.delay, duration: 0.5 }}
                        className={`flex ${msg.isAi ? 'justify-start' : 'justify-end'}`}
                      >
                        <div className={`px-4 py-3 text-[13px] md:text-[14px] leading-relaxed max-w-[90%] font-light ${msg.isAi ? 'bg-white/5 border border-white/10 rounded-[12px] rounded-tl-[4px] text-white/80' : 'bg-blue-600 rounded-[12px] rounded-tr-[4px] text-white'}`}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-500/10 to-transparent blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:animate-pulse" />
                      <span className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase">Voice AI Agents</span>
                    </div>
                    <h3 className="text-[32px] md:text-[42px] font-medium leading-[1.1] mb-6 tracking-tight">
                      Intelligent agents that remember, adapt, and resolve.
                    </h3>
                    <p className="text-[18px] text-white/50 leading-relaxed font-light max-w-[500px]">
                      Our AI Voice Agents don't just automate calls—they understand context, remember past interactions across all channels, adapt in real time, and communicate naturally like a human.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </StaggerContainer>
      </div>

      {/* Elegant Team Section */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 py-32 border-b border-black/[0.03]">
        <StaggerContainer>
          <FadeInUp className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-[700px]">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[12px] tracking-[0.25em] text-black/40 uppercase font-medium">Leadership</span>
              </div>
              <h2 className="text-[clamp(32px,5vw,48px)] font-medium tracking-tight text-[#111] leading-[1.1]">
                A collective of engineers, designers, and researchers dedicated to the frontier of AI.
              </h2>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Sarah Jenkins', role: 'Head of Machine Learning' },
              { name: 'Marcus Cheng', role: 'Principal Design Director' },
              { name: 'Elena Vance', role: 'Lead Cognitive Scientist' },
              { name: 'David Ross', role: 'Infrastructure Architect' },
            ].map((person, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1} className="group cursor-pointer">
                <div className="w-full aspect-[4/5] rounded-[24px] bg-[#F2F2F2] border border-black/[0.04] mb-6 relative overflow-hidden transition-all duration-700 group-hover:shadow-[0_15px_40px_rgb(0,0,0,0.06)] group-hover:-translate-y-1">
                  {/* Placeholder content - highly professional */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 transition-opacity duration-700">
                    <div className="w-16 h-16 rounded-full border border-black/20" />
                  </div>
                  {/* Hover reveal gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                <h4 className="text-[18px] font-medium text-[#111] mb-1 group-hover:text-blue-600 transition-colors duration-300">{person.name}</h4>
                <p className="text-[14px] text-black/50 font-light">{person.role}</p>
              </FadeInUp>
            ))}
          </div>
        </StaggerContainer>
      </div>

      {/* Sophisticated Roadmap with Illustrations */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 py-32 mb-16">
        <StaggerContainer>
          <div className="flex flex-col items-center text-center mb-24">
            <span className="font-mono text-[12px] tracking-[0.25em] text-black/40 uppercase font-medium mb-6">The 90-Day Framework</span>
            <h2 className="text-[clamp(32px,5vw,48px)] font-medium tracking-tight text-[#111] leading-[1.1] max-w-[800px]">
              Technology alone doesn't deliver success. Implementation does.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Step 1: Discovery & Design */}
            <FadeInUp delay={0.1}>
              <div className="flex flex-col h-full bg-white border border-black/[0.04] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-black/[0.08] rounded-[32px] transition-all duration-700 overflow-hidden group">
                <div className="h-[240px] bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center border-b border-black/[0.04]">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-40" />
                  
                  {/* Illustration: Nodes/Mapping */}
                  <div className="relative w-32 h-32">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 bg-white shadow-sm rounded-[10px] flex items-center justify-center border border-black/[0.05]">
                         <div className="w-3 h-3 bg-blue-500 rounded-full" />
                      </div>
                      <div className="absolute bottom-4 right-0 w-10 h-10 bg-white shadow-sm rounded-[10px] flex items-center justify-center border border-black/[0.05]">
                         <div className="w-3 h-3 bg-emerald-500 rounded-[4px]" />
                      </div>
                      <div className="absolute bottom-4 left-0 w-10 h-10 bg-white shadow-sm rounded-[10px] flex items-center justify-center border border-black/[0.05]">
                         <div className="w-3 h-3 bg-amber-500 rotate-45" />
                      </div>
                      {/* Connecting Lines */}
                      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                        <path d="M 64 16 L 112 112 L 16 112 Z" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1.5" strokeDasharray="4 4" />
                      </svg>
                    </motion.div>
                    <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#111] rounded-full shadow-md border border-black/5 flex items-center justify-center z-10">
                       <span className="font-serif italic font-bold text-white text-lg">1</span>
                    </motion.div>
                  </div>
                </div>
                <div className="p-10 md:p-12 flex flex-col flex-1 bg-white">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-mono tracking-widest text-blue-600 uppercase font-semibold bg-blue-50 px-3 py-1 rounded-full">Day 1-14</span>
                    <span className="text-[14px] font-mono text-black/20 group-hover:text-black/40 transition-colors duration-500">01</span>
                  </div>
                  <h4 className="text-[26px] font-medium text-[#111] mb-4 tracking-tight">Discovery & Design</h4>
                  <p className="text-[16px] text-black/50 leading-relaxed font-light mt-auto">
                    Mapping customer journeys and defining precise AI workflows to perfectly align with your enterprise business goals.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Step 2: Deployment */}
            <FadeInUp delay={0.2}>
              <div className="flex flex-col h-full bg-white border border-black/[0.04] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-black/[0.08] rounded-[32px] transition-all duration-700 overflow-hidden group">
                <div className="h-[240px] bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center border-b border-black/[0.04]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-40" />
                  
                  {/* Illustration: Deployment / Integrations */}
                  <div className="relative flex flex-col gap-4">
                     <div className="flex gap-4">
                       {[1,2,3].map(i => (
                         <motion.div key={i} initial={{ y: 0 }} animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }} className="w-12 h-12 bg-white rounded-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col items-center justify-center gap-1.5">
                           <div className="w-5 h-1 bg-black/10 rounded-full" />
                           <div className="w-7 h-1 bg-black/5 rounded-full" />
                         </motion.div>
                       ))}
                     </div>
                     <div className="flex justify-center gap-3 mt-1">
                       <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent" />
                       <div className="w-px h-8 bg-gradient-to-b from-emerald-400 to-transparent" />
                       <div className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent" />
                     </div>
                     <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 3, repeat: Infinity }} className="mx-auto w-32 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-black/[0.04]">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse mr-2" />
                        <span className="text-[11px] font-mono text-[#111] tracking-widest uppercase font-medium">Live Deploy</span>
                     </motion.div>
                  </div>
                </div>
                <div className="p-10 md:p-12 flex flex-col flex-1 bg-white">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-mono tracking-widest text-blue-600 uppercase font-semibold bg-blue-50 px-3 py-1 rounded-full">Day 15-45</span>
                    <span className="text-[14px] font-mono text-black/20 group-hover:text-black/40 transition-colors duration-500">02</span>
                  </div>
                  <h4 className="text-[26px] font-medium text-[#111] mb-4 tracking-tight">Deployment</h4>
                  <p className="text-[16px] text-black/50 leading-relaxed font-light mt-auto">
                    Seamless, secure integration with your existing CRM and telephony infrastructure, followed by an intelligent agent rollout.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Step 3: Adoption & Optimization */}
            <FadeInUp delay={0.3}>
              <div className="flex flex-col h-full bg-white border border-black/[0.04] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-black/[0.08] rounded-[32px] transition-all duration-700 overflow-hidden group">
                <div className="h-[240px] bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center border-b border-black/[0.04]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-40" />
                  
                  {/* Illustration: Optimization Graph */}
                  <div className="relative w-56 h-36 flex items-end justify-between px-4 pb-4">
                     <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <motion.path 
                          initial={{ pathLength: 0 }} 
                          whileInView={{ pathLength: 1 }} 
                          viewport={{ once: true }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          d="M 0 80 Q 20 70, 40 60 T 80 30 T 100 10" 
                          fill="none" 
                          stroke="rgba(59, 130, 246, 0.4)" 
                          strokeWidth="3" 
                          strokeLinecap="round" 
                        />
                     </svg>
                     {[40, 55, 70, 85, 100].map((h, i) => (
                       <motion.div 
                         key={i} 
                         initial={{ height: 0 }} 
                         whileInView={{ height: `${h}%` }}
                         viewport={{ once: true }} 
                         transition={{ duration: 0.8, delay: i * 0.15 }}
                         className="w-8 bg-gradient-to-t from-black/5 to-black/10 rounded-t-[4px]" 
                       />
                     ))}
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 1 }}
                       className="absolute top-4 right-4 bg-white border border-black/5 shadow-[0_8px_20px_rgba(0,0,0,0.06)] px-4 py-1.5 rounded-full flex items-center gap-2"
                     >
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[10px] font-mono font-medium text-black/60 tracking-widest uppercase">Optimizing</span>
                     </motion.div>
                  </div>
                </div>
                <div className="p-10 md:p-12 flex flex-col flex-1 bg-white">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-mono tracking-widest text-blue-600 uppercase font-semibold bg-blue-50 px-3 py-1 rounded-full">Day 46-75</span>
                    <span className="text-[14px] font-mono text-black/20 group-hover:text-black/40 transition-colors duration-500">03</span>
                  </div>
                  <h4 className="text-[26px] font-medium text-[#111] mb-4 tracking-tight">Adoption & Optimization</h4>
                  <p className="text-[16px] text-black/50 leading-relaxed font-light mt-auto">
                    Rigorous fine-tuning of AI responses and comprehensive training for your human operators to leverage the new ecosystem.
                  </p>
                </div>
              </div>
            </FadeInUp>

            {/* Step 4: Business Outcomes */}
            <FadeInUp delay={0.4}>
              <div className="flex flex-col h-full bg-white border border-black/[0.04] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-black/[0.08] rounded-[32px] transition-all duration-700 overflow-hidden group">
                <div className="h-[240px] bg-[#FAFAFA] relative overflow-hidden flex items-center justify-center border-b border-black/[0.04]">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')] opacity-40" />
                  
                  {/* Illustration: Outcomes Dashboard Metric */}
                  <div className="relative">
                     <motion.div 
                       whileHover={{ scale: 1.05 }}
                       className="bg-white rounded-[20px] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-black/[0.04] min-w-[240px]"
                     >
                       <div className="flex justify-between items-start mb-6">
                          <span className="text-[11px] font-mono tracking-widest text-black/40 uppercase font-medium">CSAT Score</span>
                          <div className="bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                            +42%
                          </div>
                       </div>
                       <div className="text-[40px] font-medium tracking-tight text-[#111] leading-none mb-3">
                         94.8%
                       </div>
                       <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden mt-6">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: "94.8%" }}
                           viewport={{ once: true }}
                           transition={{ duration: 1.5, ease: "easeOut" }}
                           className="h-full bg-emerald-500 rounded-full"
                         />
                       </div>
                     </motion.div>
                  </div>
                </div>
                <div className="p-10 md:p-12 flex flex-col flex-1 bg-white">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[12px] font-mono tracking-widest text-emerald-600 uppercase font-semibold bg-emerald-50 px-3 py-1 rounded-full">Day 76-90</span>
                    <span className="text-[14px] font-mono text-black/20 group-hover:text-black/40 transition-colors duration-500">04</span>
                  </div>
                  <h4 className="text-[26px] font-medium text-[#111] mb-4 tracking-tight">Business Outcomes</h4>
                  <p className="text-[16px] text-black/50 leading-relaxed font-light mt-auto">
                    Measuring and delivering real impact: higher CSAT scores, significantly lower customer acquisition costs, and faster resolutions.
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </StaggerContainer>
      </div>
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

import React, { useRef, useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { FadeInUp, StaggerContainer, StaggerItem, ScrollWordReveal } from '../components/shared/Motion';
import { company } from '../data/company';
import heroImg from '../assets/hero.png';
import aboutMission from '../assets/about_mission.jpg';
import aboutPlatform from '../assets/about_platform.jpg';
import patternImg from '../assets/pattern.png';

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

// ─── Culture Page ─────────────────────────────────────────────────────────────
const CulturePage = () => {
  const [active, setActive] = useState(0);
  const theme = THEMES[active];

  const handleTabChange = (id) => {
    setActive(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-background">
      {/* Header */}
      <div className="w-full px-6 md:px-16 lg:px-20 pt-28 md:pt-36 pb-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <motion.div
              className="h-px bg-[#4d7aff]"
              initial={{ width: 0 }}
              animate={{ width: 16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            />
            <span className="font-mono text-[11px] tracking-[0.18em] text-[#4d7aff] uppercase">Culture Manifesto · Voxi</span>
          </motion.div>

          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="text-[clamp(32px,5vw,64px)] font-medium tracking-tight text-text-primary leading-[1.05]"
            >
              The Voxi Culture Manifesto.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] md:text-[17px] text-text-secondary max-w-[560px] leading-relaxed"
          >
            Life at Voxi is built on purpose, trust, and well-being — 4 themes, 15 principles.
          </motion.p>
        </div>
      </div>

      {/* Tab bar — sticky */}
      <div className="sticky top-[72px] z-30 w-full bg-background/90 backdrop-blur-md border-b border-black/[0.04] px-6 md:px-16 lg:px-20 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-1 bg-black/[0.04] border border-black/[0.06] rounded-full p-1 overflow-x-auto whitespace-nowrap scrollbar-hide max-w-full"
          >
            {THEMES.map((t) => (
              <motion.button
                key={t.id}
                onClick={() => handleTabChange(t.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative px-6 py-2.5 rounded-full text-[13px] font-medium cursor-pointer shrink-0"
                style={{ color: active === t.id ? '#fff' : 'rgba(0,0,0,0.45)' }}
              >
                {active === t.id && (
                  <motion.span
                    layoutId="tab-pill"
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
      <div className="w-full px-6 md:px-16 lg:px-20 py-16 min-h-[60vh]">
        <div className="max-w-[1280px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-12">
                <span className="font-mono text-[11px] tracking-[0.18em] text-black/30 uppercase">{theme.full}</span>
                <div className="h-px bg-black/[0.08] flex-1 max-w-[200px]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {theme.principles.map((p, idx) => (
                  <motion.div
                    key={`${active}-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative overflow-hidden bg-white border border-black/[0.06] rounded-[24px] p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${idx === 0 ? 'md:col-span-2 lg:col-span-3 md:p-10' : ''} flex flex-col group`}
                  >
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2] group-hover:opacity-[0.3] transition-opacity duration-500">
                      <img src={patternImg} alt="" className="w-full h-full object-cover" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <span className="font-mono text-[10px] text-[#4d7aff]/50 mb-5 block">
                        {String(idx + 1).padStart(2, '0')} of {theme.principles.length}
                      </span>
                      <h3 className={`font-semibold text-text-primary tracking-tight leading-snug mb-3 ${idx === 0 ? 'text-[22px] md:text-[26px]' : 'text-[18px]'}`}>
                        {p.title}
                      </h3>
                      <p className={`text-text-secondary leading-relaxed mt-auto ${idx === 0 ? 'text-[15px] md:text-[16px] max-w-[800px]' : 'text-[14px]'}`}>
                        {p.desc}
                      </p>
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

export default function CompanyDetail() {
  const { id } = useParams();
  
  const pageData = company.find(item => item.id === id);

  if (!pageData) {
    return <Navigate to="/company" replace />;
  }

  // Specifically rendering the About Us layout if the id is 'about'
  if (id === 'about') {
    return (
      <div className="w-full min-h-screen bg-background">
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

            <div className="relative z-20 max-w-[900px] mt-32">
              <span className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase mb-6 block">
                About Us
              </span>
              <h1 className="text-[clamp(40px,8vw,64px)] font-medium tracking-[-0.04em] leading-[1.05] text-white">
                One Ecosystem. <span className="text-white/40">One Platform. Every Customer Conversation.</span>
              </h1>
            </div>
          </section>
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 pt-20 pb-32">
          <StaggerContainer>
            
            {/* Bento-style Mission / About Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 mb-24">
              
              {/* Card 1: Vision Text */}
              <FadeInUp className="bg-[#1a1a1a] rounded-[24px] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute inset-0 z-0">
                  <img src={aboutMission} alt="Mission Vision" className="w-full h-full object-cover opacity-[0.15] mix-blend-screen" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
                </div>
                <div className="relative z-10 mb-12">
                  <div className="w-12 h-12 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center mb-8">
                    <span className="text-white font-serif italic text-xl">V</span>
                  </div>
                  <ScrollWordReveal 
                    as="h3"
                    className="text-[26px] md:text-[34px] text-white font-medium tracking-tight leading-[1.2] mb-6 max-w-[600px]"
                    text="Our mission is simple: to help businesses deliver exceptional customer experiences while improving operational efficiency, increasing conversions, and reducing communication costs."
                  />
                </div>
                <div className="relative z-10 space-y-4 text-[16px] text-white/60 leading-relaxed max-w-[600px]">
                  <p>
                    At VoxiFlow AI, we believe customer communication shouldn't be managed through disconnected tools. Every interaction—from the first enquiry to post-sales support—should operate as one intelligent, connected ecosystem.
                  </p>
                </div>
              </FadeInUp>

              {/* Card 2 & 3 Column */}
              <div className="flex flex-col gap-4">
                <FadeInUp delay={0.1} className="bg-[#F7F7F7] rounded-[24px] p-8 md:p-10 flex-1 border border-black/[0.04] flex flex-col justify-center relative overflow-hidden group">
                   <div className="absolute right-[-40px] bottom-[-40px] w-48 h-48 opacity-10 mix-blend-multiply group-hover:scale-110 transition-transform duration-700">
                     <img src={aboutPlatform} alt="Platform Core" className="w-full h-full object-cover rounded-full blur-[2px]" />
                   </div>
                   <h4 className="text-[22px] font-semibold text-[#111] mb-4 tracking-tight relative z-10">The Voxi CX OS</h4>
                   <p className="text-[16px] text-black/60 leading-relaxed">
                     An AI-powered platform that unifies Voice AI, WhatsApp, Contact Center, Telephony, Workflow Automation, Quality Management, CRM Integration, and Customer Journey Orchestration into a single intelligent ecosystem.
                   </p>
                </FadeInUp>
                <FadeInUp delay={0.2} className="bg-[#EBEBEB] rounded-[24px] p-8 md:p-10 flex-1 border border-black/[0.04] flex flex-col justify-center relative overflow-hidden group">
                   <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 bg-white/50 blur-[40px] rounded-full group-hover:bg-white/80 transition-colors duration-700" />
                   <h4 className="text-[22px] font-semibold text-[#111] mb-4 tracking-tight relative z-10">Intelligent Agents</h4>
                   <p className="text-[16px] text-black/60 leading-relaxed relative z-10">
                     Our AI Voice Agents don't just automate calls—they understand context, remember conversations, adapt in real time, and communicate naturally like a human. Every interaction is personalized.
                   </p>
                </FadeInUp>
              </div>
            </div>
          </StaggerContainer>
        </div>

        {/* Full-width Dark Team Section */}
        <div className="w-full bg-[#141414] py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
            <StaggerContainer>
              <FadeInUp delay={0.1} className="w-full overflow-hidden">
                
                {/* Header Grid */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16 lg:mb-20">
                <h2 className="text-[clamp(32px,5vw,60px)] font-medium tracking-tight text-white leading-[1.05] max-w-[850px]">
                  We are a collective of engineers, designers, and researchers dedicated to the frontier of AI.
                </h2>
                
                <div className="flex flex-col items-start gap-6 max-w-[320px]">
                  <p className="text-[14px] lg:text-[15px] text-white/60 leading-relaxed text-left">
                    Bridging the gap between academic research and commercial deployment with precision engineering.
                  </p>
                  <button className="flex items-center gap-3 bg-[#1e1e1e] hover:bg-[#2a2a2a] transition-colors rounded-[14px] px-5 py-3 border border-white/5 cursor-pointer">
                    <div className="flex space-x-[-2px]">
                      <span className="text-white text-[10px]">&gt;</span>
                      <span className="text-white text-[10px]">&gt;</span>
                    </div>
                    <span className="text-[14px] text-white/90 font-medium ml-2">Our Story</span>
                  </button>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Person 1 */}
                <div className="flex flex-col group cursor-pointer">
                  <div className="w-full aspect-[4/5] rounded-[24px] bg-[#F7C948] mb-4 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute top-5 right-5 w-8 h-4 rounded-full border-[1.5px] border-white/40" />
                    <span className="text-black/30 font-medium text-sm">Image Placeholder</span>
                  </div>
                  <h4 className="text-[12px] font-bold text-white tracking-[0.1em] uppercase mb-1">Sarah Jenkins</h4>
                  <p className="text-[12px] text-white/40 font-mono tracking-tight">Head of Machine Learning</p>
                </div>

                {/* Person 2 */}
                <div className="flex flex-col group cursor-pointer">
                  <div className="w-full aspect-[4/5] rounded-[24px] bg-[#0E9F98] mb-4 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute top-5 right-5 w-8 h-4 rounded-full border-[1.5px] border-white/40" />
                    <span className="text-black/30 font-medium text-sm">Image Placeholder</span>
                  </div>
                  <h4 className="text-[12px] font-bold text-white tracking-[0.1em] uppercase mb-1">Marcus Cheng</h4>
                  <p className="text-[12px] text-white/40 font-mono tracking-tight">Principal Design Director</p>
                </div>

                {/* Person 3 */}
                <div className="flex flex-col group cursor-pointer">
                  <div className="w-full aspect-[4/5] rounded-[24px] bg-[#3B82F6] mb-4 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute top-5 right-5 w-8 h-4 rounded-full border-[1.5px] border-white/40" />
                    <span className="text-black/30 font-medium text-sm">Image Placeholder</span>
                  </div>
                  <h4 className="text-[12px] font-bold text-white tracking-[0.1em] uppercase mb-1">Elena Vance</h4>
                  <p className="text-[12px] text-white/40 font-mono tracking-tight">Lead Cognitive Scientist</p>
                </div>

                {/* Person 4 (Text Card) */}
                <div className="w-full aspect-[4/5] rounded-[24px] bg-gradient-to-b from-[#f9f9f9] to-[#eaeaea] p-8 flex flex-col relative transition-transform duration-500 hover:scale-[1.02] cursor-pointer">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-1.5">
                      <div className="w-7 h-7 rounded-full bg-[#111] flex items-center justify-center">
                         <span className="text-white text-[10px] font-bold">X</span>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-[#111] flex items-center justify-center">
                         <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </div>
                    </div>
                    <div className="w-7 h-4 rounded-full border-[1.5px] border-black" />
                  </div>
                  
                  <p className="text-[14px] lg:text-[15px] text-black/80 leading-relaxed font-medium pr-2">
                    Latency is the enemy of adoption. I architect the backbone of our solutions to ensure that even the most complex RAG systems deliver sub-second responses, maintaining 99.9% uptime across distributed global compute clusters.
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-[11px] font-bold text-[#111] tracking-[0.1em] uppercase mb-1">David Ross</h4>
                    <p className="text-[11px] text-black/50 font-mono tracking-tight">Infrastructure Architect</p>
                  </div>
                </div>
              </div>
              </FadeInUp>
            </StaggerContainer>
          </div>
        </div>

        {/* Why Voxi - Full Width */}
        <div className="w-full bg-[#111] pt-24 pb-32 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-5 z-0" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4d7aff]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

          <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 relative z-10">
            <StaggerContainer>
              <FadeInUp delay={0.2} className="text-white">
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-10 h-6 rounded-full border border-white/20 flex items-center justify-center bg-transparent shrink-0" />
                   <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
                   <span className="text-[12px] font-mono tracking-[0.15em] text-white/50 uppercase">
                     Why Voxi
                   </span>
                </div>

                <ScrollWordReveal 
                  as="h2"
                  className="text-[clamp(32px,5vw,54px)] font-medium tracking-tight text-white leading-[1.1] mb-16 max-w-[800px]"
                  text="One Ecosystem. One Platform. Unlimited Possibilities."
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                  <div className="space-y-6 text-[16px] md:text-[18px] text-white/60 leading-relaxed">
                    <p>
                      Everything you need to build, deploy, and scale enterprise AI—from Voice AI and WhatsApp Automation to Workflow Orchestration, CRM Integrations, Analytics, and AI Intelligence. No complex pricing tiers. No hidden add-ons. Just one intelligent platform delivering measurable business outcomes.
                    </p>
                    <div className="pt-4">
                      <p className="text-[20px] md:text-[24px] font-medium text-white leading-snug mb-3">
                        Technology Alone Doesn't Deliver Success. Implementation Does.
                      </p>
                      <p>
                        At Voxi, we believe that the success of an AI solution is not determined by the technology itself, but by how effectively it is implemented, adopted, and optimized within the customer's business.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6 text-[16px] md:text-[18px] text-white/60 leading-relaxed">
                    <p>
                      That's why we've built a structured Enterprise Implementation & Success Framework that ensures every deployment delivers measurable business outcomes—not just a successful go-live.
                    </p>
                    <p>
                      Our engagement doesn't end after deployment. That's where it truly begins.
                    </p>
                    <p>
                      Our Customer Success and Implementation teams work closely with customers through every stage—from discovery and solution design to deployment, user adoption, optimization, and continuous performance improvement.
                    </p>
                    <div className="p-6 rounded-[20px] bg-white/5 border border-white/10 mt-6 backdrop-blur-sm">
                      <p className="font-medium text-white text-[18px]">
                        We measure success not by delivering a platform, but by delivering real business impact over the first 90 days and beyond.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </StaggerContainer>
          </div>
        </div>
      </div>
    );
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

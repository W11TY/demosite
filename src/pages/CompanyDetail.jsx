import React, { useRef, useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
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
                    className={`relative overflow-hidden bg-white border border-black/[0.06] rounded-[24px] shadow-lg ${idx === 0 ? 'md:col-span-2 lg:col-span-3' : ''} flex flex-col group brutalist-card`}
                  >
                    {/* Full-bleed illustration top */}
                    <div className="relative w-full h-[140px] overflow-hidden shrink-0 border-b border-black/[0.05]">
                      <div className="absolute inset-0 bg-[#fafafa] flex flex-col">
                        <div className="px-4 py-2.5 border-b border-black/[0.05] flex items-center gap-1.5 shrink-0">
                          <div className="w-2 h-2 rounded-full bg-red-400/50" />
                          <div className="w-2 h-2 rounded-full bg-yellow-400/50" />
                          <div className="w-2 h-2 rounded-full bg-green-400/50" />
                          <span className="text-[9px] font-mono text-black/20 ml-2 tracking-wide">{String(idx + 1).padStart(2, '0')} · {theme.full.toUpperCase()}</span>
                        </div>
                        <div className="p-3 flex-1 overflow-hidden flex flex-col gap-1.5">

                          {/* Work theme illustrations */}
                          {active === 0 && idx === 0 && (
                            <div className="flex gap-2">
                              {[{ l: 'Customer Impact', v: '98%', c: 'text-blue-600' }, { l: 'Outcomes Delivered', v: '4.8x', c: 'text-emerald-600' }, { l: 'Active Accounts', v: '240+', c: 'text-purple-600' }].map((s, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex-1 bg-white rounded-[8px] p-2 border border-black/5 shadow-sm"
                                >
                                  <span className={`text-[14px] font-bold ${s.c}`}>{s.v}</span>
                                  <span className="text-[8px] text-black/40 block mt-0.5">{s.l}</span>
                                </motion.div>
                              ))}
                            </div>
                          )}
                          {active === 0 && idx === 1 && (
                            <>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Impact Tracker</span>
                              </div>
                              {['Q1 Revenue Goal', 'Customer NPS', 'Deployment Speed'].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2"
                                >
                                  <span className="text-[8px] text-black/50 w-28 shrink-0">{item}</span>
                                  <div className="flex-1 h-1 bg-black/5 rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${[82, 91, 76][j]}%` }}
                                      transition={{ delay: 0.4 + j * 0.2, duration: 0.8, ease: "easeOut" }}
                                      className="h-full bg-blue-400 rounded-full"
                                    />
                                  </div>
                                  <span className="text-[8px] font-mono text-black/40">{[82, 91, 76][j]}%</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 0 && idx === 2 && (
                            <>
                              <div className="flex justify-between mb-0.5">
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Ownership Board</span>
                                <span className="text-[8px] text-emerald-500 font-medium">3 wins today</span>
                              </div>
                              {[{ name: 'Arun K.', task: 'Shipped new IVR flow', done: true }, { name: 'Meera S.', task: 'Resolved 120 tickets', done: true }, { name: 'Raj T.', task: 'Closed enterprise deal', done: true }].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-white border border-black/5 shadow-sm"
                                >
                                  <div className="w-3 h-3 rounded-full border border-emerald-400 flex items-center justify-center shrink-0">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  </div>
                                  <span className="text-[8px] font-medium text-black/60 flex-1">{item.task}</span>
                                  <span className="text-[7px] text-black/30">{item.name}</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 0 && idx === 3 && (
                            <>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Founder Mode · Active</span>
                              </div>
                              {['Spotted inefficiency → fixed in 2hrs', 'Launched feature without a meeting', 'Improved NPS by 12pts autonomously'].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + j * 0.15 }}
                                  className="flex items-center gap-1.5 px-2 py-1 rounded-[6px] bg-orange-50 border border-orange-100 shadow-sm"
                                >
                                  <span className="text-[8px] text-orange-700">{item}</span>
                                </motion.div>
                              ))}
                            </>
                          )}

                          {/* Grow theme illustrations */}
                          {active === 1 && idx === 0 && (
                            <>
                              <div className="flex justify-between mb-0.5">
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Learning Budget</span>
                                <span className="text-[8px] font-semibold text-purple-500">₹2,000/mo</span>
                              </div>
                              {['Deep Work — Cal Newport', 'Thinking Fast and Slow', 'The Lean Startup'].map((book, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-white border border-black/5 shadow-sm"
                                >
                                  <div className={`w-1 h-6 rounded-full ${['bg-purple-400', 'bg-blue-400', 'bg-emerald-400'][j]}`} />
                                  <span className="text-[8px] text-black/60">{book}</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 1 && idx === 1 && (
                            <>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">This Month's Rewards</span>
                              </div>
                              {[{ icon: '🌱', label: 'Wellness session' }, { icon: '📚', label: '2 books gifted' }, { icon: '🏔️', label: 'Family experience' }].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-emerald-50 border border-emerald-100 shadow-sm"
                                >
                                  <span>{item.icon}</span>
                                  <span className="text-[8px] text-emerald-700">{item.label}</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 1 && idx === 2 && (
                            <>
                              <div className="flex justify-between mb-0.5">
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Team SIP Portfolio</span>
                                <span className="text-[8px] font-semibold text-blue-500">+18% CAGR</span>
                              </div>
                              <div className="flex items-end gap-1 h-10 border-b border-black/5 pb-1 relative">
                                {[40, 52, 48, 62, 68, 72, 80].map((v, j) => (
                                  <motion.div
                                    key={j}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${v * 0.9}%` }}
                                    transition={{ delay: 0.2 + j * 0.08, duration: 0.5, type: "spring", stiffness: 100 }}
                                    className="flex-1 rounded-t-[2px]"
                                    style={{ background: `hsl(${200 + j * 8},70%,52%)`, opacity: 0.6 + j * 0.05 }}
                                  />
                                ))}
                              </div>
                              <span className="text-[7px] text-black/30">Jan · Feb · Mar · Apr · May · Jun · Jul</span>
                            </>
                          )}

                          {/* Connect theme illustrations */}
                          {active === 2 && idx === 0 && (
                            <>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Monthly Sports · Cricket</span>
                              </div>
                              {['Team Alpha — 142 runs', 'Team Beta — 138 runs', 'Next match: Oct 5th'].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className={`flex items-center gap-2 px-2 py-1 rounded-[6px] shadow-sm ${j === 2 ? 'bg-blue-50 border border-blue-100' : 'bg-white border border-black/5'}`}
                                >
                                  <span className="text-[8px] text-black/60">{item}</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 2 && idx === 1 && (
                            <>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Q4 Retreat · Manali</span>
                              </div>
                              {[{ l: 'Team members', v: '18' }, { l: 'Days', v: '3' }, { l: 'Activities', v: '7' }].map((s, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-cyan-50 border border-cyan-100 shadow-sm"
                                >
                                  <span className="text-[12px] font-bold text-cyan-600">{s.v}</span>
                                  <span className="text-[8px] text-cyan-700">{s.l}</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 2 && idx === 2 && (
                            <>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Next: Priya's Hometown · Jaipur</span>
                              </div>
                              {['Team flight booked ✓', 'Local experiences planned ✓', 'Family dinner scheduled ✓'].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-amber-50 border border-amber-100 shadow-sm"
                                >
                                  <span className="text-[8px] text-amber-700">{item}</span>
                                </motion.div>
                              ))}
                            </>
                          )}

                          {/* Live theme illustrations */}
                          {active === 3 && idx === 0 && (
                            <>
                              <div className="flex justify-between mb-0.5">
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Family Benefits</span>
                                <span className="text-[8px] text-red-400 font-medium">Active</span>
                              </div>
                              {['Family Leave · 5 days/yr', 'Monthly Family Dinner · Sponsored', 'Health Insurance · Family covered'].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, y: 5 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-red-50 border border-red-100 shadow-sm"
                                >
                                  <div className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
                                  <span className="text-[8px] text-red-700">{item}</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 3 && idx === 1 && (
                            <>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Health Coverage</span>
                              </div>
                              {['Self', 'Spouse', 'Children', 'Parents'].map((m, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-emerald-50 border border-emerald-100 shadow-sm"
                                >
                                  <div className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                                  <span className="text-[8px] text-emerald-700">{m} · Covered</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 3 && idx === 2 && (
                            <>
                              <div className="flex justify-between mb-0.5">
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Steps This Month</span>
                                <span className="text-[8px] font-semibold text-emerald-500">16/30 days ✓</span>
                              </div>
                              <div className="flex items-end gap-[2px] h-8 border-b border-black/5 pb-0.5 relative">
                                {[8200, 10400, 9800, 11200, 10800, 12000, 9600, 10900].map((v, j) => (
                                  <motion.div
                                    key={j}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${(v / 12000) * 100}%` }}
                                    transition={{ delay: 0.2 + j * 0.08, duration: 0.4, type: "spring", stiffness: 120 }}
                                    className="flex-1 rounded-t-[2px]"
                                    style={{ background: v >= 10000 ? '#34d399' : '#d1d5db' }}
                                  />
                                ))}
                              </div>
                              <span className="text-[7px] text-black/30">Green = 10,000+ steps target met</span>
                            </>
                          )}
                          {active === 3 && idx === 3 && (
                            <>
                              <div className="flex justify-between mb-0.5">
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Screen Time · Weekly Avg</span>
                                <span className="text-[8px] font-semibold text-blue-500">-22% vs last mo</span>
                              </div>
                              {[{ name: 'Arun K.', hrs: '2h 14m', ok: true }, { name: 'Meera S.', hrs: '3h 02m', ok: true }, { name: 'Raj T.', hrs: '4h 58m', ok: false }].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-white border border-black/5 shadow-sm"
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${item.ok ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                                  <span className="text-[8px] text-black/60 flex-1">{item.name}</span>
                                  <span className={`text-[8px] font-mono ${item.ok ? 'text-emerald-500' : 'text-amber-500'}`}>{item.hrs}</span>
                                </motion.div>
                              ))}
                            </>
                          )}
                          {active === 3 && idx === 4 && (
                            <>
                              <div className="flex items-center gap-1.5 mb-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                                <span className="text-[8px] font-mono text-black/30 uppercase tracking-widest">Daily Wellness · 9:00 AM</span>
                              </div>
                              {['🧘 Team yoga · 15 min', '🌬️ Breathwork · 5 min', '🎯 Intention setting · done'].map((item, j) => (
                                <motion.div
                                  key={j}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.2 + j * 0.1 }}
                                  className="flex items-center gap-2 px-2 py-1 rounded-[6px] bg-purple-50 border border-purple-100 shadow-sm"
                                >
                                  <span className="text-[8px] text-purple-700">{item}</span>
                                </motion.div>
                              ))}
                            </>
                          )}

                        </div>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className={`relative z-10 flex flex-col h-full p-6 ${idx === 0 ? 'md:p-10' : ''}`}>
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

        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 pt-20 pb-32">
          <StaggerContainer>

            {/* Bento-style Mission / About Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-4 mb-24">

              {/* Card 1: Vision Text */}
              <FadeInUp className="bg-[#1a1a1a] rounded-[24px] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative brutalist-card">
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
                <FadeInUp delay={0.1} className="bg-[#F7F7F7] rounded-[24px] flex-1 border border-black/[0.04] flex flex-col relative overflow-hidden group brutalist-card">
                  {/* Illustration top */}
                  <div className="relative w-full h-[180px] overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-white flex flex-col">
                      <div className="px-4 py-2.5 border-b border-black/5 flex items-center gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-400/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                        <div className="w-2 h-2 rounded-full bg-green-400/60" />
                        <span className="text-[9px] font-mono text-black/25 ml-2 tracking-wide">VOXI CX OS</span>
                      </div>
                      <div className="p-3 flex-1 overflow-hidden flex flex-col gap-2">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                          <span className="text-[9px] font-mono text-black/35 uppercase tracking-widest">Platform Ecosystem · Live</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1.5">
                          {['Voice AI', 'WhatsApp', 'Telephony', 'Quality'].map((s, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.3 + j * 0.15, type: "spring", stiffness: 200 }}
                              className="bg-[#f4f4f4] rounded-[6px] p-1.5 flex flex-col items-center gap-1 shadow-sm"
                            >
                              <div className={`w-1.5 h-1.5 rounded-full ${j === 0 ? 'bg-blue-400 animate-pulse' : j === 1 ? 'bg-emerald-400' : j === 2 ? 'bg-purple-400' : 'bg-amber-400'}`} />
                              <span className="text-[7px] text-black/50 text-center leading-tight">{s}</span>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1, duration: 0.4 }}
                          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-[6px] bg-blue-50 border border-blue-100 mt-auto shadow-sm"
                        >
                          <span className="text-[8px] text-blue-600 font-medium">2.4M conversations unified across all channels today</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h4 className="text-[22px] font-semibold text-[#111] mb-4 tracking-tight">The Voxi CX OS</h4>
                    <p className="text-[16px] text-black/60 leading-relaxed">
                      An AI-powered platform that unifies Voice AI, WhatsApp, Contact Center, Telephony, Workflow Automation, Quality Management, CRM Integration, and Customer Journey Orchestration into a single intelligent ecosystem.
                    </p>
                  </div>
                </FadeInUp>
                <FadeInUp delay={0.2} className="bg-[#EBEBEB] rounded-[24px] flex-1 border border-black/[0.04] flex flex-col relative overflow-hidden group brutalist-card">
                  {/* Illustration top */}
                  <div className="relative w-full h-[180px] overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-white flex flex-col">
                      <div className="px-4 py-2.5 border-b border-black/5 flex items-center gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-400/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                        <div className="w-2 h-2 rounded-full bg-green-400/60" />
                        <span className="text-[9px] font-mono text-black/25 ml-2 tracking-wide">AI VOICE AGENT · LIVE</span>
                      </div>
                      <div className="p-3 flex-1 overflow-hidden flex flex-col gap-1.5">
                        <div className="flex items-center gap-1.5 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-[9px] font-mono text-black/35 uppercase tracking-widest">Call · 01:44</span>
                        </div>
                        {[{ a: true, t: 'Hi! I noticed your policy expires in 3 days. Want to renew now?' }, { a: false, t: 'Yes, what are my options?' }, { a: true, t: 'Same coverage, same rate. I can process it right now.' }].map((m, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + j * 0.4, duration: 0.3 }}
                            className={`flex ${m.a ? 'justify-start' : 'justify-end'}`}
                          >
                            <div className={`px-2 py-1 rounded-[6px] text-[8px] leading-relaxed max-w-[85%] shadow-sm ${m.a ? 'bg-[#f4f4f4] text-black/70 rounded-tl-[2px]' : 'bg-[#111] text-white rounded-tr-[2px]'}`}>{m.t}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <h4 className="text-[22px] font-semibold text-[#111] mb-4 tracking-tight">Intelligent Agents</h4>
                    <p className="text-[16px] text-black/60 leading-relaxed">
                      Our AI Voice Agents don't just automate calls—they understand context, remember conversations, adapt in real time, and communicate naturally like a human. Every interaction is personalized.
                    </p>
                  </div>
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
                  <FadeInUp delay={0.1} className="flex flex-col group cursor-pointer">
                    <div className="w-full aspect-[4/5] rounded-[24px] bg-[#F7C948] mb-4 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="absolute top-5 right-5 w-8 h-4 rounded-full border-[1.5px] border-white/40" />
                      <span className="text-black/30 font-medium text-sm">Image Placeholder</span>
                    </div>
                    <h4 className="text-[12px] font-bold text-white tracking-[0.1em] uppercase mb-1">Sarah Jenkins</h4>
                    <p className="text-[12px] text-white/40 font-mono tracking-tight">Head of Machine Learning</p>
                  </FadeInUp>

                  {/* Person 2 */}
                  <FadeInUp delay={0.2} className="flex flex-col group cursor-pointer">
                    <div className="w-full aspect-[4/5] rounded-[24px] bg-[#0E9F98] mb-4 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="absolute top-5 right-5 w-8 h-4 rounded-full border-[1.5px] border-white/40" />
                      <span className="text-black/30 font-medium text-sm">Image Placeholder</span>
                    </div>
                    <h4 className="text-[12px] font-bold text-white tracking-[0.1em] uppercase mb-1">Marcus Cheng</h4>
                    <p className="text-[12px] text-white/40 font-mono tracking-tight">Principal Design Director</p>
                  </FadeInUp>

                  {/* Person 3 */}
                  <FadeInUp delay={0.3} className="flex flex-col group cursor-pointer">
                    <div className="w-full aspect-[4/5] rounded-[24px] bg-[#3B82F6] mb-4 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                      <div className="absolute top-5 right-5 w-8 h-4 rounded-full border-[1.5px] border-white/40" />
                      <span className="text-black/30 font-medium text-sm">Image Placeholder</span>
                    </div>
                    <h4 className="text-[12px] font-bold text-white tracking-[0.1em] uppercase mb-1">Elena Vance</h4>
                    <p className="text-[12px] text-white/40 font-mono tracking-tight">Lead Cognitive Scientist</p>
                  </FadeInUp>

                  {/* Person 4 (Text Card) */}
                  <FadeInUp delay={0.4} className="w-full aspect-[4/5] rounded-[24px] bg-gradient-to-b from-[#f9f9f9] to-[#eaeaea] p-8 flex flex-col relative cursor-pointer brutalist-card">
                    <div className="flex justify-between items-start mb-8">
                      <div className="flex gap-1.5">
                        <div className="w-7 h-7 rounded-full bg-[#111] flex items-center justify-center">
                          <span className="text-white text-[10px] font-bold">X</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#111] flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
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
                  </FadeInUp>
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
                  text="One Ecosystem. One Platform. Every Customer Conversation."
                />

                {/* Visual Ecosystem Showcase */}
                <div className="flex flex-col gap-12 lg:gap-20">
                  
                  {/* Ecosystem Block */}
                  <div className="bg-[#1a1a1a] rounded-[24px] p-8 md:p-12 border border-white/5 relative overflow-hidden group brutalist-card">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 relative z-10 items-center">
                      {/* Interactive Visual Left */}
                      <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
                        {/* Center Orb */}
                        <motion.div 
                          animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.3)] z-20"
                        >
                          <span className="text-white font-bold tracking-tight text-center text-sm leading-tight">VoxiFlow<br/>Core</span>
                        </motion.div>
                        
                        {/* Rings */}
                        {[120, 200, 280, 360].map((size, i) => (
                          <div key={`ring-${i}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" style={{ width: size, height: size }} />
                        ))}
                        
                        {/* Orbiting Nodes */}
                        {[
                          { l: 'Enquiry', r: 120, color: 'bg-emerald-400', dur: 15 },
                          { l: 'Support', r: 200, color: 'bg-blue-400', dur: 22 },
                          { l: 'Collections', r: 280, color: 'bg-amber-400', dur: 30 },
                          { l: 'Retention', r: 360, color: 'bg-purple-400', dur: 40 },
                        ].map((node, i) => (
                          <motion.div
                            key={`node-${i}`}
                            animate={{ rotate: 360 }}
                            transition={{ duration: node.dur, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{ width: node.r, height: node.r }}
                          >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${node.color} shadow-[0_0_15px_currentColor]`} />
                              <div className="px-2 py-1 bg-black/60 backdrop-blur-md rounded-[4px] border border-white/10">
                                <span className="text-[10px] text-white whitespace-nowrap font-medium tracking-wide">{node.l}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Text Right */}
                      <div className="flex flex-col justify-center">
                        <h3 className="text-[28px] md:text-[36px] font-medium text-white leading-tight mb-6 tracking-tight">
                          Every Customer Conversation.
                        </h3>
                        <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed mb-8">
                          At VoxiFlow AI, we believe customer communication shouldn't be managed through disconnected tools and isolated touchpoints. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent, connected ecosystem.
                        </p>
                        
                        {/* Ecosystem Features List */}
                        <div className="space-y-4">
                          {[
                            "Unified Context: Agents remember past interactions across all channels.",
                            "Seamless Handoffs: Transition perfectly from AI to human operators.",
                            "Proactive Engagement: Anticipate customer needs before they ask."
                          ].map((feat, j) => (
                            <motion.div 
                              key={j} 
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 + j * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              </div>
                              <span className="text-[14px] text-white/80">{feat}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Methodology & 90-Day Framework Block */}
                  <div className="bg-[#1a1a1a] rounded-[24px] p-8 md:p-12 border border-white/5 brutalist-card relative overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                      <div className="max-w-[600px]">
                        <h3 className="text-[28px] md:text-[36px] font-medium text-white leading-tight mb-4 tracking-tight">
                          Our Methodology
                        </h3>
                        <p className="text-[16px] md:text-[18px] text-white/60 leading-relaxed">
                          Technology alone doesn't deliver success. <span className="text-white font-medium">Implementation does.</span> We work closely with you from discovery to optimization to ensure measurable business outcomes.
                        </p>
                      </div>
                      <div className="px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[12px] font-mono tracking-widest uppercase">
                        The 90-Day Success Framework
                      </div>
                    </div>

                    {/* Timeline Pipeline */}
                    <div className="relative w-full pt-8 pb-4">
                      {/* Base Line */}
                      <div className="absolute top-12 left-0 w-full h-[2px] bg-white/5" />
                      {/* Animated Progress Line */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-12 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-400"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                        {[
                          { day: "Day 1-14", title: "Discovery & Design", desc: "Mapping customer journeys and defining precise AI workflows.", color: "text-blue-400", dot: "bg-blue-500" },
                          { day: "Day 15-45", title: "Deployment", desc: "Seamless integration, testing, and intelligent agent rollout.", color: "text-indigo-400", dot: "bg-indigo-500" },
                          { day: "Day 46-75", title: "Adoption & Optimization", desc: "Fine-tuning responses and training teams on the new ecosystem.", color: "text-emerald-400", dot: "bg-emerald-500" },
                          { day: "Day 76-90", title: "Business Outcomes", desc: "Measuring impact: higher CSAT, lower CAC, and automated resolutions.", color: "text-amber-400", dot: "bg-amber-500" }
                        ].map((step, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.2 }}
                            className="flex flex-col relative pt-8"
                          >
                            <div className="absolute top-[-4px] left-0 w-3 h-3 rounded-full bg-[#1a1a1a] border-2 border-white/20" />
                            <motion.div 
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: 1 + i * 0.2, type: "spring" }}
                              className={`absolute top-[-1px] left-[3px] w-1.5 h-1.5 rounded-full ${step.dot} shadow-[0_0_10px_currentColor]`}
                            />
                            
                            <span className={`text-[12px] font-mono tracking-wider uppercase mb-3 ${step.color}`}>
                              {step.day}
                            </span>
                            <h4 className="text-[18px] font-medium text-white mb-2 tracking-tight">
                              {step.title}
                            </h4>
                            <p className="text-[14px] text-white/50 leading-relaxed pr-4">
                              {step.desc}
                            </p>
                          </motion.div>
                        ))}
                      </div>
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

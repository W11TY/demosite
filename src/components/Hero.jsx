import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { easing } from './shared/Motion';
import heroImg from '../assets/hero.png';

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: easing },
});

const industries = [
  'Real Estate', 'Fintech', 'Healthcare', 'Automobile', 'Utilities', 'Consumer Durable',
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[640px] overflow-hidden">

      {/* ── Full-bleed background image ── */}
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ userSelect: 'none' }}
      />

      {/* ── Light gradient overlay so text reads cleanly ── */}
      {/* Left side: darken slightly so black text pops */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/10 to-transparent" />
      {/* Bottom bar area: fade to near-white */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/80 to-transparent" />

      {/* ── Main content ── */}
      <div className="relative z-10 h-full max-w-[1280px] mx-auto px-8 md:px-16 flex flex-col justify-end pb-20">

        {/* Headline — mixed weights like the reference */}
        <motion.h1 {...f(0.05)} className="text-[52px] md:text-[72px] lg:text-[88px] font-light tracking-[-0.03em] leading-[1.05] text-black/40 mb-0">
          One Ecosystem.
        </motion.h1>
        <motion.h1 {...f(0.14)} className="text-[52px] md:text-[72px] lg:text-[88px] font-bold tracking-[-0.03em] leading-[1.05] text-black mb-5">
          Every Conversation.
        </motion.h1>

        {/* Description */}
        <motion.p {...f(0.24)} className="text-[14px] md:text-[15px] text-black/55 max-w-[320px] leading-relaxed mb-8">
          Deploy Voice AI, WhatsApp automation, and Cloud Telephony in one seamless flow.
        </motion.p>

        {/* CTA */}
        <motion.div {...f(0.32)} className="flex items-center gap-5 mb-10">
          <a
            href="#demo"
            className="group flex items-center gap-3 bg-black text-white rounded-full pl-2 pr-6 py-2 text-[14px] font-medium hover:bg-black/85 transition-all duration-200 hover:scale-[1.02] shadow-lg"
          >
            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <ArrowRight size={13} />
            </span>
            Book a Demo
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p {...f(0.4)} className="text-[12px] text-black/35">
          +1,200 active deployments and 400+ brands trust our AI platform.
        </motion.p>
      </div>

      {/* ── Floating product card — top right (matches reference "Digital Brain" card) ── */}
      <motion.div
        initial={{ opacity: 0, y: -16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: easing }}
        className="absolute top-[88px] right-8 md:right-16 w-[260px] md:w-[300px] bg-white rounded-[18px] overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.13)] border border-black/[0.06]"
      >
        {/* Card image area */}
        <div className="h-[160px] md:h-[190px] bg-gradient-to-br from-[#0d0d1a] to-[#1a0d2e] flex items-center justify-center overflow-hidden">
          {/* Abstract AI visual */}
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 opacity-40" style={{ background: 'radial-gradient(circle at 40% 50%, rgba(120,60,255,0.8) 0%, transparent 60%), radial-gradient(circle at 70% 40%, rgba(0,200,255,0.5) 0%, transparent 50%)' }} />
            {/* Concentric rings */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="absolute rounded-full border border-white/10" style={{ width: `${i * 64}px`, height: `${i * 64}px` }} />
            ))}
            <div className="relative z-10 w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-white/70" />
            </div>
          </div>
        </div>

        {/* Card footer */}
        <div className="p-4 flex items-center justify-between">
          <div>
            <p className="text-[13px] font-semibold text-black leading-tight">Voxi AI Engine</p>
            <p className="text-[11px] text-black/35 mt-0.5">// Platform v2.4</p>
          </div>
          <div className="w-7 h-7 rounded-full border border-black/[0.08] flex items-center justify-center">
            <ArrowRight size={12} className="text-black/40" />
          </div>
        </div>
      </motion.div>

      {/* ── Logo / industry trust bar at bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.65, ease: easing }}
        className="absolute bottom-0 inset-x-0 border-t border-black/[0.07] bg-white/50 backdrop-blur-md py-3.5 px-8 md:px-16"
      >
        <div className="max-w-[1280px] mx-auto flex items-center gap-8 md:gap-12 overflow-x-auto hide-scrollbar">
          <span className="text-[10px] uppercase tracking-[0.12em] text-black/30 whitespace-nowrap flex-shrink-0">
            Powering conversations across
          </span>
          {industries.map((name) => (
            <span
              key={name}
              className="text-[12px] md:text-[13px] font-semibold text-black/25 whitespace-nowrap flex-shrink-0 hover:text-black/50 transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

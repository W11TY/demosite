import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { easing } from './shared/Motion';
import heroImg from '../assets/hero.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: easing },
});

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#080808] overflow-hidden flex flex-col">

      {/* ── Single, restrained radial glow at top-center ── */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-[520px]"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(120, 80, 255, 0.18) 0%, transparent 72%)',
        }}
      />

      {/* ── Content wrapper ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[1200px] w-full mx-auto px-6 md:px-16 pt-36 md:pt-44 pb-0">

        {/* Badge — minimal, no ping animation, clean border */}
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-10 px-3.5 py-1.5 rounded-full border border-white/[0.10] bg-white/[0.04]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
          <span className="text-[11px] font-medium text-white/50 tracking-[0.08em] uppercase">Platform · v2.4</span>
        </motion.div>

        {/* Headline — clean white, tight tracking, no gradient gimmicks */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-[52px] sm:text-[68px] md:text-[88px] lg:text-[104px] font-semibold leading-[1.00] tracking-[-0.035em] text-white max-w-[900px]"
        >
          One Ecosystem.<br />
          <span className="text-white/40">Every Conversation.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          {...fadeUp(0.22)}
          className="mt-7 text-[16px] md:text-[17px] text-white/40 max-w-[480px] leading-[1.7]"
        >
          Unify Voice AI, WhatsApp, and Cloud Telephony into one intelligent platform — and deliver exceptional customer experiences at scale.
        </motion.p>

        {/* CTAs — simple, considered */}
        <motion.div {...fadeUp(0.32)} className="mt-10 flex items-center gap-3 mb-16 md:mb-20">
          <a
            href="#demo"
            className="group flex items-center gap-2 bg-white text-black rounded-full px-6 py-2.5 text-[14px] font-medium transition-all duration-200 hover:bg-white/90 hover:scale-[1.02]"
          >
            Book a Demo
            <ArrowRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
          </a>
          <a
            href="#platform"
            className="flex items-center gap-2 text-white/40 text-[14px] font-medium hover:text-white/70 transition-colors duration-200"
          >
            Explore Platform
          </a>
        </motion.div>

        {/* ── Dashboard frame ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: easing }}
          className="relative w-full max-w-[1080px]"
        >
          {/* Outer frame — very subtle border, no harsh shadows */}
          <div className="relative rounded-t-[20px] overflow-hidden border border-white/[0.07] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_100px_rgba(0,0,0,0.7)]">

            {/* Minimal top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/[0.05] rounded-md h-4 w-48 flex items-center justify-center">
                  <span className="text-[9px] text-white/20 tracking-wider">app.voxi.ai</span>
                </div>
              </div>
              <div className="w-[52px]" />
            </div>

            {/* Screenshot */}
            <div className="relative bg-[#0d0d0d]">
              <img
                src={heroImg}
                alt="Voxi Platform"
                className="w-full h-auto object-cover object-top"
                style={{ maxHeight: '580px' }}
              />
              {/* Fade bottom edge into page */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
            </div>
          </div>

          {/* Very soft glow under the frame */}
          <div
            className="absolute inset-x-[15%] -bottom-8 h-20 blur-[40px]"
            style={{ background: 'rgba(100, 60, 220, 0.12)' }}
          />
        </motion.div>

      </div>
    </section>
  );
}

import React, { useEffect, useRef } from 'react';
import { ArrowRight, PhoneCall, MessageSquare, BarChart3, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInUp, FadeIn, easing } from './shared/Motion';
import heroImg from '../assets/hero.png';

// Animated floating stat card
function StatPill({ icon: Icon, label, value, delay, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: easing }}
      className={`absolute flex items-center gap-3 bg-white/90 backdrop-blur-md border border-black/[0.08] rounded-2xl px-4 py-3 shadow-xl ${className}`}
    >
      <div className="w-8 h-8 rounded-xl bg-[#111] flex items-center justify-center flex-shrink-0">
        <Icon size={15} className="text-white" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] text-black/50 font-medium">{label}</span>
        <span className="text-[14px] font-semibold text-black">{value}</span>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] overflow-hidden flex flex-col items-center justify-center">

      {/* ── Ambient Orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large purple orb */}
        <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] rounded-full bg-gradient-to-b from-purple-600/25 to-transparent blur-[120px]" />
        {/* Left teal orb */}
        <div className="absolute top-1/3 -left-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/15 to-transparent blur-[100px]" />
        {/* Right warm orb */}
        <div className="absolute top-1/2 -right-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-violet-600/15 to-transparent blur-[100px]" />
        {/* Bottom glow */}
        <div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-gradient-to-t from-indigo-900/20 to-transparent blur-[80px]" />
      </div>

      {/* ── Subtle grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-16 pt-32 md:pt-36 pb-16 flex flex-col items-center text-center">

        {/* Live Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: easing }}
          className="flex items-center gap-2.5 px-4 py-2 mb-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[12px] font-medium text-white/70 tracking-wide">Voxi Engine // Live v2.4</span>
        </motion.div>

        {/* Headline */}
        <div className="mb-8 flex flex-col items-center gap-1 overflow-hidden">
          <FadeInUp
            as="h1"
            delay={0.1}
            yOffset={32}
            className="text-[56px] sm:text-[72px] md:text-[96px] lg:text-[112px] font-bold leading-[0.92] tracking-[-0.03em] text-white"
          >
            One Ecosystem.
          </FadeInUp>
          {/* Gradient word */}
          <FadeInUp
            as="h1"
            delay={0.2}
            yOffset={32}
            className="text-[56px] sm:text-[72px] md:text-[96px] lg:text-[112px] font-bold leading-[0.92] tracking-[-0.03em] bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent"
          >
            Every Conversation.
          </FadeInUp>
        </div>

        {/* Subheading */}
        <FadeInUp
          as="p"
          delay={0.35}
          className="text-[17px] md:text-[19px] text-white/55 max-w-[560px] leading-relaxed mb-12"
        >
          Unify Voice AI, WhatsApp, and Cloud Telephony into a single intelligent platform. Deliver exceptional customer experiences at scale.
        </FadeInUp>

        {/* CTAs */}
        <FadeInUp delay={0.45} className="flex flex-col sm:flex-row items-center gap-3 mb-20">
          <a
            href="#demo"
            className="group flex items-center gap-2 bg-white text-black rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-[1.03]"
          >
            Book a Demo
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#platform"
            className="flex items-center gap-2 border border-white/15 text-white/80 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:text-white hover:scale-[1.02]"
          >
            Explore Platform
          </a>
        </FadeInUp>

        {/* ── Dashboard Visual ── */}
        <FadeInUp delay={0.55} yOffset={50} className="relative w-full max-w-[1080px]">

          {/* Floating stat pills */}
          <div className="hidden md:block">
            <StatPill icon={PhoneCall}    label="Calls Handled Today" value="12,483"     delay={0.8}  className="-left-6 top-[15%]" />
            <StatPill icon={BarChart3}    label="Conversion Rate"     value="+40% ↑"    delay={0.9}  className="-right-6 top-[25%]" />
            <StatPill icon={Zap}          label="Avg. Response"       value="< 0.8s"     delay={1.0}  className="-left-4 bottom-[20%]" />
            <StatPill icon={MessageSquare}label="Active Channels"     value="3 live"     delay={1.1}  className="-right-4 bottom-[25%]" />
          </div>

          {/* Main dashboard frame */}
          <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            {/* Top browser bar */}
            <div className="flex items-center gap-1.5 px-5 py-3.5 bg-[#1a1a1a] border-b border-white/[0.07]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="ml-4 flex-1 bg-white/[0.06] rounded-full h-5 max-w-[280px] flex items-center px-3">
                <span className="text-[10px] text-white/30 tracking-wide">app.voxi.ai / dashboard</span>
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative">
              <img
                src={heroImg}
                alt="Voxi Platform Dashboard"
                className="w-full h-auto object-cover object-top"
                style={{ maxHeight: '600px' }}
              />
              {/* Bottom fade to make it feel integrated */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </div>
          </div>

          {/* Glow under dashboard */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-600/20 blur-[60px] rounded-full" />
        </FadeInUp>

      </div>
    </section>
  );
}



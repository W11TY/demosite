import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, ChevronsRight, Mail, MapPin } from 'lucide-react';
import heroImg from '../assets/voxitext.png';
import { easing } from '../components/shared/Motion';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#f7f7f5] flex flex-col lg:flex-row p-3 lg:p-[12px] gap-3">

      {/* ── Left panel ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easing }}
        className="relative w-full h-[100dvh] lg:w-[55%] lg:h-[calc(100dvh-24px)] rounded-[24px] overflow-hidden bg-[#0a0a0a] flex-shrink-0 flex flex-col"
      >
        {/* ── SVG animation zone (fixed height on mobile) ── */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* outer rotating ring */}
            <motion.circle cx="250" cy="200" r="160"
              stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.18" strokeDasharray="6 10"
              animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '250px 200px' }} />
            {/* mid counter-rotating ring */}
            <motion.circle cx="250" cy="200" r="120"
              stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.12" strokeDasharray="3 8"
              animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '250px 200px' }} />
            {/* inner pulsing ring */}
            <motion.circle cx="250" cy="200" r="80"
              stroke="white" strokeWidth="0.6" strokeOpacity="0.06"
              animate={{ r: [78, 84, 78], strokeOpacity: [0.06, 0.12, 0.06] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
            {/* orbiting accent dot */}
            <motion.circle r="4" fill="var(--global-accent)" fillOpacity="0.9">
              <animateMotion dur="12s" repeatCount="indefinite" path="M250,200 m-160,0 a160,160 0 1,1 0,0.001" />
            </motion.circle>
            {/* second orbiting dot */}
            <motion.circle r="2.5" fill="white" fillOpacity="0.5">
              <animateMotion dur="8s" repeatCount="indefinite" begin="-4s" path="M250,200 m0,-120 a120,120 0 1,0 0,0.001" />
            </motion.circle>
            {/* radiating pulse rings */}
            {[0, 1.5, 3].map((delay, i) => (
              <motion.circle key={i} cx="250" cy="200" r="40"
                stroke="var(--global-accent)" strokeWidth="1" fill="none"
                animate={{ r: [40, 170], strokeOpacity: [0.3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeOut', delay }} />
            ))}
            {/* corner crosshairs */}
            {[[90,120],[410,120],[90,280],[410,280]].map(([x, y], i) => (
              <motion.g key={i} animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}>
                <line x1={x-8} y1={y} x2={x+8} y2={y} stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.5" />
                <line x1={x} y1={y-8} x2={x} y2={y+8} stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.5" />
              </motion.g>
            ))}
            {/* scanning line */}
            <motion.line x1="60" y1="200" x2="440" y2="200"
              stroke="var(--global-accent)" strokeWidth="0.6" strokeOpacity="0"
              animate={{ y1: [140,260,140], y2: [140,260,140], strokeOpacity: [0,0.2,0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
            {/* floating nodes */}
            {[[148,130],[352,130],[112,240],[388,240],[200,310],[300,310]].map(([x,y],i) => (
              <motion.circle key={i} cx={x} cy={y} r="2.5" fill="white" fillOpacity="0.2"
                animate={{ opacity:[0.2,0.7,0.2], scale:[1,1.6,1] }}
                transition={{ duration: 2+i*0.4, repeat: Infinity, delay: i*0.5 }}
                style={{ transformOrigin: `${x}px ${y}px` }} />
            ))}
          </svg>

          {/* Logo */}
          <motion.img
            src={heroImg}
            alt="VoxiFlow"
            className="relative z-10 w-[55%] max-w-[280px] lg:max-w-[380px] object-contain opacity-90"
            animate={{ y: [-8, 8, -8], scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* gradient overlay — always present */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent pointer-events-none z-10" />

        {/* ── Contact info pinned to bottom on all screen sizes ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 lg:px-12 pt-6 pb-8 lg:pb-12">
          <h1 className="text-white text-[clamp(28px,7vw,56px)] font-medium leading-[1.1] tracking-tight mb-5">
            Get in Touch
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Mail size={14} className="text-[var(--global-accent)]" />
              </div>
              <span className="text-[14px] text-white/80 font-medium">hello@voxiflow.ai</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone size={14} className="text-[var(--global-accent)]" />
              </div>
              <span className="text-[14px] text-white/80 font-medium">+91-8218447171</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={14} className="text-[var(--global-accent)]" />
              </div>
              <span className="text-[13px] text-white/50 leading-[1.6]">
                H1A/20, Plot No. 20, Sector 63 Rd,<br />
                H Block, Noida, UP 201301
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Right panel: form ── */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center bg-white rounded-[24px] px-6 sm:px-10 lg:px-14 py-10 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easing }}
          className="max-w-[480px] w-full mx-auto"
        >
          <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-[var(--global-accent)] mb-3 font-bold">
            Start a Conversation
          </p>
          <h2 className="text-[clamp(26px,3.5vw,44px)] font-medium leading-[1.1] tracking-tight text-[#0d0d0d] mb-3">
            Deploy your first<br />agent today.
          </h2>
          <p className="text-[14px] text-black/50 leading-[1.7] mb-7">
            Tell us about your use case and we'll get back to you within 24 hours.
          </p>

          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[12px] text-black/50 font-semibold tracking-wide">Full Name</label>
                <input type="text" placeholder="Jane Smith"
                  className="w-full border border-black/8 bg-[#f9f9f8] rounded-[10px] px-4 py-3 text-[14px] text-black placeholder:text-black/30 outline-none focus:border-[var(--global-accent)]/40 focus:bg-white transition-all" required />
              </div>
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[12px] text-black/50 font-semibold tracking-wide">Work Email</label>
                <input type="email" placeholder="jane@company.com"
                  className="w-full border border-black/8 bg-[#f9f9f8] rounded-[10px] px-4 py-3 text-[14px] text-black placeholder:text-black/30 outline-none focus:border-[var(--global-accent)]/40 focus:bg-white transition-all" required />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-black/50 font-semibold tracking-wide">Phone Number</label>
              <input type="tel" placeholder="+91 00000 00000"
                className="w-full border border-black/8 bg-[#f9f9f8] rounded-[10px] px-4 py-3 text-[14px] text-black placeholder:text-black/30 outline-none focus:border-[var(--global-accent)]/40 focus:bg-white transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-black/50 font-semibold tracking-wide">Message</label>
              <textarea placeholder="Tell us about your use case..." rows={4}
                className="w-full border border-black/8 bg-[#f9f9f8] rounded-[10px] px-4 py-3 text-[14px] text-black placeholder:text-black/30 outline-none focus:border-[var(--global-accent)]/40 focus:bg-white transition-all resize-none" required />
            </div>

            <div className="h-px bg-black/6 my-1" />

            <button type="button"
              className="flex items-center bg-[#111] text-white rounded-[12px] overflow-hidden group hover:bg-[#222] transition-all duration-300 w-fit active:scale-95">
              <div className="bg-white text-black h-[44px] w-[52px] flex items-center justify-center rounded-[8px] m-[4px] group-hover:bg-[#f2f2f2] transition-colors">
                <ChevronsRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="px-6 font-medium text-[14px] tracking-wide">Send Message</span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

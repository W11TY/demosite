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

      {/* ── Left panel: image + contact info ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: easing }}
        className="relative w-full lg:w-[55%] h-[55dvh] lg:h-[calc(100dvh-24px)] rounded-[24px] overflow-hidden bg-[#0a0a0a] flex-shrink-0 flex flex-col"
      >
        {/* floating image */}
        <div className="flex-1 flex items-center justify-center">
          <motion.img
            src={heroImg}
            alt="VoxiFlow"
            className="w-[70%] max-w-[420px] object-contain opacity-85"
            animate={{ y: [-12, 12, -12], scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent pointer-events-none" />

        {/* bottom text block */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easing }}
            className="text-white text-[clamp(32px,5vw,60px)] font-medium leading-[1.1] tracking-tight mb-6"
          >
            Get in Touch
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easing }}
            className="flex flex-col gap-3"
          >
            {/* email */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Mail size={14} className="text-[var(--global-accent)]" />
              </div>
              <span className="text-[14px] text-white/80 font-medium">hello@voxiflow.ai</span>
            </div>

            {/* phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Phone size={14} className="text-[var(--global-accent)]" />
              </div>
              <span className="text-[14px] text-white/80 font-medium">+91-8218447171</span>
            </div>

            {/* address */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin size={14} className="text-[var(--global-accent)]" />
              </div>
              <span className="text-[13px] text-white/55 leading-[1.6]">
                H1A/20, Plot No. 20, Sector 63 Rd,<br />
                H Block, Noida, UP 201301
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Right panel: form ── */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center bg-white rounded-[24px] px-8 lg:px-14 py-12 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easing }}
          className="max-w-[480px] w-full mx-auto"
        >
          {/* header */}
          <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-[var(--global-accent)] mb-3 font-bold">
            Start a Conversation
          </p>
          <h2 className="text-[clamp(28px,3.5vw,44px)] font-medium leading-[1.1] tracking-tight text-[#0d0d0d] mb-3">
            Deploy your first<br />agent today.
          </h2>
          <p className="text-[14px] text-black/50 leading-[1.7] mb-8">
            Ready to transform your customer experience? Tell us about your use case and we'll get back to you within 24 hours.
          </p>

          {/* form */}
          <form className="flex flex-col gap-4 w-full">
            {/* name + email row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[12px] text-black/50 font-semibold tracking-wide">Full Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full border border-black/8 bg-[#f9f9f8] rounded-[10px] px-4 py-3 text-[14px] text-black placeholder:text-black/30 outline-none focus:border-[var(--global-accent)]/40 focus:bg-white transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5 w-full">
                <label className="text-[12px] text-black/50 font-semibold tracking-wide">Work Email</label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="w-full border border-black/8 bg-[#f9f9f8] rounded-[10px] px-4 py-3 text-[14px] text-black placeholder:text-black/30 outline-none focus:border-[var(--global-accent)]/40 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            {/* phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-black/50 font-semibold tracking-wide">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                className="w-full border border-black/8 bg-[#f9f9f8] rounded-[10px] px-4 py-3 text-[14px] text-black placeholder:text-black/30 outline-none focus:border-[var(--global-accent)]/40 focus:bg-white transition-all"
              />
            </div>

            {/* message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] text-black/50 font-semibold tracking-wide">Message</label>
              <textarea
                placeholder="Tell us about your use case..."
                rows={4}
                className="w-full border border-black/8 bg-[#f9f9f8] rounded-[10px] px-4 py-3 text-[14px] text-black placeholder:text-black/30 outline-none focus:border-[var(--global-accent)]/40 focus:bg-white transition-all resize-none"
                required
              />
            </div>

            {/* divider */}
            <div className="h-px bg-black/6 my-1" />

            {/* submit */}
            <button
              type="button"
              className="flex items-center gap-0 bg-[#111] text-white rounded-[12px] overflow-hidden group hover:bg-[#222] transition-all duration-300 w-fit active:scale-95"
            >
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

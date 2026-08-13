import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { easing } from './shared/Motion';
import heroImg from '../assets/hero.png';
import logo from '../assets/logo.png';
import { platforms } from '../data/platform';
import { solutions } from '../data/solutions';
import { research } from '../data/research';
import { company } from '../data/company';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import { Menu } from 'lucide-react';

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: easing },
});

export default function Hero() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { name: 'Platform', href: '/platform', dropdown: platforms },
    { name: 'Solutions', href: '/solutions', dropdown: solutions },
    { name: 'Research', href: '/research', dropdown: research },
    { name: 'Company', href: '/company', dropdown: company },
  ];

  return (
    <div className="w-full flex justify-center p-3 lg:p-[12px] bg-white">
      <section className="relative w-full max-w-[1600px] min-h-[85vh] lg:h-[calc(100vh-24px)] lg:min-h-[700px] rounded-[24px] overflow-hidden bg-[#f1f1f1] shadow-sm isolate flex flex-col lg:block pb-24 lg:pb-0">
        
        {/* ── Background Landscape & Gradient ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <img
            src={heroImg}
            alt="Cinematic Landscape"
            className="w-full h-full object-cover object-[center_40%]"
          />
          {/* TV Localized Glow Enhancement - ensures the TV at X~700, Y~370 feels glowing and clearly visible */}
          <div className="absolute top-[365px] left-[700px] w-[140px] h-[90px] bg-orange-300/30 blur-[40px] rounded-full mix-blend-screen" />
          <div className="absolute top-[375px] left-[715px] w-[60px] h-[40px] bg-white/40 blur-[15px] rounded-full mix-blend-screen" />
          
          {/* Much softer, longer gradient transition so landscape/TV emerges earlier and isn't washed out */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #f1f1f1 0%, #f1f1f1 30%, rgba(241,241,241,0.6) 40%, rgba(241,241,241,0.2) 50%, transparent 60%)'
            }}
          />
          {/* Bottom dark gradient for cinematic depth, avoiding pure black */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* ── Floating Navigation Pill ── */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="absolute top-[16px] lg:top-[20px] left-[16px] lg:left-[23px] right-[16px] lg:right-auto z-50 flex items-center justify-between lg:justify-start bg-white rounded-full px-5 lg:px-7 py-2 lg:w-[540px] h-[45px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-[24px] lg:h-[28px] w-auto object-contain filter grayscale contrast-200" />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-black/70 ml-auto">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="flex items-center relative h-[45px]"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  className="hover:text-black transition-colors"
                >
                  {item.name}
                </Link>

                <AnimatePresence>
                  {activeDropdown === item.name && item.dropdown && (
                    <MegaMenu item={item} topPosition="55px" />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <button 
            className="lg:hidden flex items-center justify-center text-black/80"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </motion.div>

        <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} navItems={navItems} />

        {/* ── Top-Right CTA Button ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: easing }}
          className="hidden lg:flex absolute top-[20px] right-[23px] z-50"
        >
          <a href="#demo" className="flex items-center bg-white rounded-full p-1 pl-[18px] w-[145px] h-[44px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] group hover:scale-[1.02] transition-transform cursor-pointer">
            <span className="flex-1 text-[13px] font-semibold text-black tracking-tight whitespace-nowrap">Hire Team</span>
            <div className="w-[36px] h-[36px] bg-[#111] rounded-full flex items-center justify-center text-white flex-shrink-0">
              <ArrowRight size={14} />
            </div>
          </a>
        </motion.div>

        {/* ── Main Content Container ── */}
        <div className="relative z-20 w-full h-full flex flex-col lg:block pt-[110px] lg:pt-0 px-6 lg:px-0 flex-1">
          
          {/* ── Left Content (Typography & Main CTA) ── */}
          <div className="lg:absolute lg:left-[43px] lg:top-[183px] w-full lg:max-w-[650px] flex flex-col mb-10 lg:mb-0">
            <motion.h1 {...f(0.05)} className="text-[clamp(44px,11vw,72px)] font-normal tracking-[-0.04em] leading-[1.05] text-[#999999] mb-0">
              One Ecosystem.
            </motion.h1>
            <motion.h1 {...f(0.14)} className="text-[clamp(44px,11vw,72px)] font-medium tracking-[-0.04em] leading-[1.05] text-[#111111] mb-[24px]">
              Every Conversation.
            </motion.h1>

            <motion.p {...f(0.24)} className="text-[15px] md:text-[15.5px] text-black/60 max-w-[450px] leading-[1.5] mb-[28px] lg:mb-[24px]">
              Deploy custom neural agents, LLMs, and automation in one seamless flow.
            </motion.p>

            <motion.div {...f(0.32)}>
              <a href="#build" className="inline-flex items-center bg-[#111] text-white w-[210px] h-[65px] rounded-[16px] p-2 hover:bg-black transition-colors shadow-lg group">
                <div className="w-[49px] h-[49px] bg-white rounded-[12px] flex items-center justify-center text-black flex-shrink-0 shadow-sm">
                  <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="flex-1 text-center text-[15px] font-medium pr-2">Start Build</span>
              </a>
            </motion.div>
          </div>

          {/* ── Right Floating Project Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: easing }}
            className="relative lg:absolute lg:right-[39px] lg:top-[190px] w-full lg:w-[335px] max-w-[335px] h-[315px] bg-white rounded-[22px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-[16px] flex flex-col justify-between z-30 border border-black/[0.04]"
          >
          {/* Card Image Area */}
          <div className="w-full h-[230px] rounded-[14px] bg-[#0c0c0c] overflow-hidden relative group cursor-pointer flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#12121a] to-[#0a0a0f] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
              
              <div className="w-[85%] h-[60%] border border-white/10 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center relative z-10 group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                <div className="absolute w-[120%] h-[20%] bg-[#4d7aff]/20 blur-[28px] rotate-12" />
                <div className="absolute w-12 h-12 border border-[#4d7aff]/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(77,122,255,0.2)]">
                  <div className="w-4 h-4 bg-[#4d7aff] rounded-full blur-[2px]" />
                </div>
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent absolute top-1/2" />
              </div>
            </div>
          </div>
          {/* Card Footer */}
          <div className="flex items-center justify-between px-1 pb-0.5">
            <div>
              <h3 className="text-[14.5px] font-semibold text-[#111] leading-tight">Digital Brain</h3>
              <p className="text-[11.5px] text-black/40 mt-1 font-mono tracking-tight">// Model v4.0.2</p>
            </div>
            <div className="w-[30px] h-[30px] rounded-full border border-black/10 flex items-center justify-center group-hover:border-black/30 transition-colors cursor-pointer">
              <ArrowRight size={12} className="text-black/60" />
            </div>
          </div>
        </motion.div>

        {/* ── Trust Statement ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: easing }}
          className="relative lg:absolute lg:bottom-[130px] lg:left-[43px] z-30 px-6 lg:px-0 mt-12 lg:mt-0"
        >
          <div className="w-full lg:w-[320px]">
            <p className="text-[12.5px] text-black/60 lg:text-white/90 leading-[1.6]">
              +2,400 active deployments and 8,200 brands<br />
              trust our high-performance architecture.
            </p>
          </div>
        </motion.div>
        
        {/* ── Logo Row (Infinite Marquee) ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7, ease: easing }}
          className="absolute bottom-[20px] lg:bottom-[70px] left-0 right-0 w-full overflow-hidden z-30 opacity-80"
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)' }}
        >
          <div 
            className="flex w-max hover:[animation-play-state:paused]"
            style={{ animation: 'marquee 40s linear infinite' }}
          >
            {[...Array(2)].map((_, trackIndex) => (
              <div key={trackIndex} className="flex items-center justify-center gap-[60px] pr-[60px]">
                {[...Array(3)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="text-white text-[15.5px] font-bold tracking-tighter flex items-center gap-0.5 whitespace-nowrap">
                      Anthem<span className="text-[10px]">++</span><span className="text-[9px] opacity-80 mt-1 ml-0.5 text-blue-200 block border border-white/20 rounded-[2px] px-[2px]">🛡</span>
                    </div>
                    <div className="text-white text-[16px] font-bold tracking-tight flex items-center gap-1.5 whitespace-nowrap">
                      <span className="text-red-400 font-serif text-[18px]">❤</span> CVS pharmacy
                    </div>
                    <div className="text-white text-[13px] font-medium leading-[1.1] whitespace-nowrap">
                      United<br/>Healthcare
                    </div>
                    <div className="text-white text-[18px] font-serif font-bold italic tracking-tight whitespace-nowrap">
                      ❤aetna
                    </div>
                    <div className="text-white text-[16px] font-semibold flex items-center gap-1 whitespace-nowrap">
                      <span className="opacity-80">❀</span> cigna
                    </div>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        </div> {/* Close Main Content Container */}

      </section>
    </div>
  );
}

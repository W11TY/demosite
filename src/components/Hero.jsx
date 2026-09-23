import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { easing } from './shared/Motion';
import AntiMetalButton from './shared/AntiMetalButton';
import heroVideo from '../assets/hero.mp4';
import logo from '../assets/logo.png';
import voxiText from '../assets/voxitext.png';
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
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    playVideo();

    const handleVisibility = () => {
      if (!document.hidden && video.paused) {
        playVideo();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

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
    { name: 'Voxi Research', href: '/research', dropdown: research },
    { name: 'Company', href: '/company', dropdown: company },
  ];

  return (
    <div className="w-full flex justify-center p-3 lg:p-[12px] bg-white">
      <section className="relative w-full max-w-[1600px] min-h-[85vh] lg:h-[calc(100vh-24px)] lg:min-h-[700px] rounded-[24px] overflow-hidden bg-[#f1f1f1] shadow-sm isolate flex flex-col lg:block pb-24 lg:pb-0">
        
        {/* ── Background Video & Gradient ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onEnded={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => {});
              }
            }}
            className="w-full h-full object-cover object-[center_40%]"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* TV Localized Glow Enhancement */}
          <div className="absolute top-[365px] left-[700px] w-[140px] h-[90px] bg-orange-300/30 blur-[40px] rounded-full mix-blend-screen" />
          <div className="absolute top-[375px] left-[715px] w-[60px] h-[40px] bg-white/40 blur-[15px] rounded-full mix-blend-screen" />
          
          {/* Soft gradient transition so content stays readable */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, #f1f1f1 0%, #f1f1f1 30%, rgba(241,241,241,0.6) 40%, rgba(241,241,241,0.2) 50%, transparent 60%)'
            }}
          />
          {/* Bottom dark gradient for cinematic depth */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* ── Floating Navigation Pill ── */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing }}
          className="absolute top-[16px] lg:top-[20px] left-[16px] lg:left-[23px] right-[16px] lg:right-auto z-50 flex items-center justify-between lg:justify-start bg-white rounded-full px-5 lg:px-7 py-2 lg:w-[648px] h-[48px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          <Link to="/" className="flex-shrink-0 relative z-50">
            <img src={logo} alt="Logo" className="h-[36px] lg:h-[45px] w-auto object-contain" />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium text-black/70 ml-auto">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="flex items-center relative h-[48px]"
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
                    <MegaMenu item={item} topPosition="56px" />
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
          <a href="#demo">
            <AntiMetalButton label="Hire Team" />
          </a>
        </motion.div>

        {/* ── Main Content Container ── */}
        <div className="relative z-20 w-full h-full flex flex-col lg:block pt-[110px] lg:pt-0 px-6 lg:px-0 flex-1">
          
          {/* ── Left Content (Typography & Main CTA) ── */}
          <div className="lg:absolute lg:left-[43px] lg:top-[183px] w-full lg:max-w-[650px] flex flex-col mb-10 lg:mb-0">
            <motion.h1 {...f(0.05)} className="text-[clamp(36px,9vw,56px)] font-normal tracking-[-0.04em] leading-[1.05] text-[#999999] mb-0">
              Orchestrate Every Customer Journey.
            </motion.h1>
            <motion.h1 {...f(0.14)} className="text-[clamp(36px,9vw,56px)] font-medium tracking-[-0.04em] leading-[1.05] text-[#111111] mb-[24px]">
              One Intelligence. Every Interaction.
            </motion.h1>

            <motion.p {...f(0.24)} className="text-[15px] md:text-[15.5px] text-black/60 max-w-[450px] leading-[1.5] mb-[28px] lg:mb-[24px]">
              Deploy custom neural agents, LLMs, and automation in one seamless flow.
            </motion.p>

            <motion.div {...f(0.32)}>
              <a href="#build">
                <AntiMetalButton label="Start Build" />
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
          <div className="w-full h-[230px] rounded-[14px] bg-transparent overflow-hidden relative group cursor-pointer flex-shrink-0 flex items-center justify-center">
            <img 
              src={voxiText} 
              alt="Digital Brain" 
              className="w-[75%] h-[75%] object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
            />
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
                {[...Array(2)].map((_, i) => (
                  <React.Fragment key={i}>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">Esme</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">Eastman</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">Oliva</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">Oasis</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">Eicher Motor</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">Chirok Health</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">Paramantra</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">CarPortal</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">Clofio</div>
                    <div className="text-white text-[20px] font-light tracking-tight whitespace-nowrap opacity-80">HRHnext</div>
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

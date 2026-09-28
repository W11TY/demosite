import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { BRAND } from '../../data/accents';

export default function ChapterNav({ items, activeChapter, scrollY }) {
  const navRef = useRef(null);
  const [navVisible, setNavVisible] = useState(false);
  const chapterProgress = useMotionValue(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (y > 400 && !navVisible) setNavVisible(true);
    else if (y <= 400 && navVisible) setNavVisible(false);
  });

  useMotionValueEvent(scrollY, 'change', () => {
    const sec = document.getElementById(`chapter-${activeChapter}`);
    if (sec) {
      const rect = sec.getBoundingClientRect();
      const scrolled = (window.innerHeight / 2) - rect.top;
      const p = scrolled / rect.height;
      chapterProgress.set(Math.max(0, Math.min(1, p)));
    }
  });

  useEffect(() => {
    if (navRef.current) {
      const activeEl = navRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        const navRect = navRef.current.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        const targetScroll = navRef.current.scrollLeft + (elRect.left - navRect.left) - (navRect.width / 2) + (elRect.width / 2);
        navRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  }, [activeChapter]);

  const scrollToChapter = (i) => {
    const el = document.getElementById(`chapter-${i}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-[100px] z-40 w-full pointer-events-none flex justify-center mt-6 mb-6">
      <motion.nav 
        ref={navRef}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: navVisible ? 1 : 0, y: navVisible ? 0 : -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="pointer-events-auto w-fit max-w-[calc(100%-32px)] bg-[#14110F] border border-white/10 rounded-full p-1.5 shadow-[0_12px_40px_rgba(20,17,15,0.25)] flex overflow-x-auto scrollbar-hide snap-x"
      >
        {items.map((label, i) => {
          const isActive = activeChapter === i;
          return (
            <button
              key={i}
              data-active={isActive}
              onClick={() => scrollToChapter(i)}
              className={`relative px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.12em] uppercase whitespace-nowrap snap-center transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#F5F1EA]/60 hover:text-[#F5F1EA]'}`}
            >
              {isActive && (
                <>
                  <motion.div layoutId="chapter-pill" className="absolute inset-0 rounded-full -z-10" style={{ backgroundColor: BRAND }} transition={{ type: 'spring', stiffness: 400, damping: 32 }} />
                  <motion.div 
                    className="absolute inset-x-4 bottom-1 h-[2px] origin-left rounded-full bg-white/80" 
                    style={{ scaleX: chapterProgress }} 
                  />
                </>
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <span className={`font-normal ${isActive ? 'text-white/70' : 'text-[#F5F1EA]/35'}`}>0{i + 1}</span>
                <span className="font-medium inline-block align-bottom">{label}</span>
              </span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
}

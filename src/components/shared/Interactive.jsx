import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate, useTransform, useScroll } from 'framer-motion';

export const GlobalClickRipple = () => {
  const [ripples, setRipples] = useState([]);
  useEffect(() => {
    const handleClick = (e) => {
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.8, borderWidth: '2px' }}
            animate={{ scale: 6, opacity: 0, borderWidth: '0px' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute rounded-full"
            style={{ 
              left: ripple.x - 20, top: ripple.y - 20, width: 40, height: 40,
              border: '2px solid var(--global-accent, #1283a9)',
              backgroundColor: 'color-mix(in srgb, var(--global-accent, #1283a9) 10%, transparent)'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export const CursorSpotlight = () => {
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  const background = useMotionTemplate`radial-gradient(circle 350px at ${cursorXSpring}px ${cursorYSpring}px, color-mix(in srgb, var(--global-accent, #1283a9) 12%, transparent), transparent 80%)`;
  
  return <motion.div className="pointer-events-none fixed inset-0 z-[100]" style={{ background }} />;
};

export const ParallaxText = ({ text, alignLeft, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const x = useTransform(scrollYProgress, [0, 1], alignLeft ? [-100, 100] : [100, -100]);
  
  return (
    <motion.div ref={ref} style={{ y, x }} className={`absolute top-1/2 ${alignLeft ? 'left-[-10%]' : 'right-[-10%]'} -translate-y-1/2 text-[clamp(100px,20vw,300px)] font-bold tracking-tighter pointer-events-none select-none whitespace-nowrap ${className || 'text-black/[0.03]'}`}>
      {text}
    </motion.div>
  )
};

export const MagneticElement = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef(null);
  
  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.3); // 30% pull
    y.set(middleY * 0.3);
  };
  
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  
  const springConfig = { damping: 15, stiffness: 200, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={reset} style={{ x: springX, y: springY }} className={className}>
      {children}
    </motion.div>
  );
};

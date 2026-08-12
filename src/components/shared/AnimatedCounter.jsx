import React, { useEffect, useState } from 'react';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

/**
 * AnimatedCounter — Category 1 (Scroll-Driven)
 * Now supports:
 *  - Self-managed visibility (default, original behaviour)
 *  - External `isVisible` prop so Works cards can control it
 *    without creating an extra IntersectionObserver per counter.
 * 
 * Props:
 *   from, to, prefix, suffix, duration — same as before
 *   isVisible — optional boolean override; if provided, skips internal IO
 *   decimals  — optional decimal places for non-integer values (e.g. 0.9 → "0.9")
 */
export function AnimatedCounter({
  from = 0,
  to = 100,
  prefix = '',
  suffix = '',
  duration = 2,
  decimals = 0,
  isVisible: externalVisible,
}) {
  // Only create internal observer when no external isVisible is supplied
  const internal = useRevealOnScroll({ threshold: 0.1, triggerOnce: true });
  const isVisible = externalVisible !== undefined ? externalVisible : internal.isVisible;

  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isVisible) return;
    let startTime;
    let animationFrame;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      const current = easeProgress * (to - from) + from;
      setCount(current);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, from, to, duration]);

  const display = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span ref={externalVisible !== undefined ? undefined : internal.ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

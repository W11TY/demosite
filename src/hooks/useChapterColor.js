import { useState, useEffect } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export function useChapterColor(itemsLength, accentColors, tintColors, darkAccentColors) {
  const [activeChapter, setActiveChapter] = useState(0);
  const { scrollY } = useScroll();
  const [yStops, setYStops] = useState(Array.from({ length: itemsLength + 2 }).map((_, i) => i * 1000));

  useEffect(() => {
    const measure = () => {
      let stops = [];
      const addStop = (val) => {
        if (stops.length > 0 && val <= stops[stops.length - 1]) {
          stops.push(stops[stops.length - 1] + 1);
        } else {
          stops.push(val);
        }
      };
      addStop(0);

      for (let i = 0; i < itemsLength; i++) {
        const el = document.getElementById(`chapter-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          const absoluteTop = rect.top + window.scrollY;
          const center = absoluteTop + (rect.height / 2) - (window.innerHeight / 2);
          addStop(Math.max(0, center));
        } else {
          addStop(stops[stops.length - 1] + 1000);
        }
      }

      const cta = document.getElementById('final-cta');
      if (cta) {
        const rect = cta.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        const center = absoluteTop + (rect.height / 2) - (window.innerHeight / 2);
        addStop(Math.max(0, center));
      } else {
        addStop(stops[stops.length - 1] + 1000);
      }
      setYStops(stops);
    };

    measure();
    window.addEventListener('resize', measure);
    const timeout = setTimeout(measure, 150);
    return () => {
      window.removeEventListener('resize', measure);
      clearTimeout(timeout);
    };
  }, [itemsLength]);

  const interpolatedAccent = useTransform(scrollY, yStops, accentColors);
  const interpolatedTint = useTransform(scrollY, yStops, tintColors);
  const interpolatedDarkAccent = useTransform(scrollY, yStops, darkAccentColors);

  useMotionValueEvent(interpolatedAccent, 'change', (val) => document.documentElement.style.setProperty('--global-accent', val));
  useMotionValueEvent(interpolatedTint, 'change', (val) => document.documentElement.style.setProperty('--global-tint', val));
  useMotionValueEvent(interpolatedDarkAccent, 'change', (val) => document.documentElement.style.setProperty('--global-dark-accent', val));

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      for (let i = 0; i < itemsLength; i++) {
        const sec = document.getElementById(`chapter-${i}`);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= viewportHeight / 2 && rect.bottom >= viewportHeight / 2) {
            setActiveChapter(i);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [itemsLength]);

  return { activeChapter, scrollY, yStops };
}

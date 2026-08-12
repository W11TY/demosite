import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

function AnimatedCounter({ from, to, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, { duration: 1500, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(to);
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        // Handle floating point if necessary, otherwise floor
        const isFloat = to % 1 !== 0;
        const formatted = isFloat ? latest.toFixed(1) : Math.floor(latest);
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix, to]);

  return <span ref={ref} className="font-mono">{prefix}{from}{suffix}</span>;
}

export default function StatCallout({ stat, index = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-start gap-2 border-l border-border pl-6 py-2"
    >
      <div className="text-[32px] md:text-[48px] font-medium tracking-tight text-text-primary leading-none tabular-nums">
        {stat.value === 0 && stat.label === 'Missed Follow-Ups' ? (
          <span className="font-mono">Zero</span>
        ) : (
          <AnimatedCounter 
            from={0} 
            to={stat.value} 
            prefix={stat.prefix || ''} 
            suffix={stat.suffix || ''} 
          />
        )}
      </div>
      <span className="text-[12px] text-text-secondary uppercase tracking-wider font-medium">
        {stat.label}
      </span>
    </motion.div>
  );
}

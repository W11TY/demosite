import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { FadeInUp } from './shared/Motion';

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
        ref.current.textContent = `${prefix}${Math.floor(latest)}${suffix}`;
      }
    });
  }, [springValue, prefix, suffix]);

  return <span ref={ref} className="font-mono">{prefix}{from}{suffix}</span>;
}

const stats = [
  { value: 90, suffix: '%', label: 'Lead Connectivity' },
  { value: 3, suffix: 'x', label: 'More Conversions' },
  { value: 40, suffix: '%', label: 'Cost Reduction' },
  { value: 2, suffix: 'x', label: 'Faster Resolution' }
];

export default function StatsBand() {
  return (
    <section className="w-full py-16 md:py-24 border-b border-border bg-background">
      <div className="w-full px-[58px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <FadeInUp 
              key={i}
              yOffset={24}
              delay={i * 0.1}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-2"
            >
              <div className="text-[48px] md:text-[64px] font-medium tracking-tight text-text-primary leading-none tabular-nums">
                <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
              </div>
              <span className="text-[13px] text-text-secondary uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

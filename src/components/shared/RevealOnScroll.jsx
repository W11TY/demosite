import React from 'react';
import { motion } from 'framer-motion';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

/**
 * RevealOnScroll — Category 6 (eyebrow animate) + general reveal
 * Now passes through: style, id, and any extra props.
 */
export function RevealOnScroll({ children, delay = 0, className = '', style, ...rest }) {
  const { ref, isVisible } = useRevealOnScroll({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

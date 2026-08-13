import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Global config for consistent animations
export const easing = [0.16, 1, 0.3, 1];
export const defaultDuration = 0.6;

/**
 * FadeInUp
 * Best for headings, text blocks, and cards.
 * Slides up slightly while fading in.
 */
export const FadeInUp = ({ 
  children, 
  delay = 0, 
  duration = defaultDuration, 
  className = "", 
  once = true, 
  yOffset = 30, 
  as = "div",
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration, ease: easing, delay } 
    }
  };

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * FadeIn
 * Best for images, backgrounds, and simple reveals.
 */
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = defaultDuration, 
  className = "", 
  once = true, 
  as = "div",
  ...props 
}) => {
  const Component = motion[as] || motion.div;
  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration, ease: easing, delay } 
    }
  };

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * ScaleIn
 * Best for badges, buttons, or small UI elements.
 */
export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = defaultDuration, 
  className = "", 
  once = true, 
  as = "div",
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  const variants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration, ease: easing, delay } 
    }
  };

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * StaggerContainer
 * Use as a parent for StaggerItem to orchestrate lists, grids, etc.
 */
export const StaggerContainer = ({ 
  children, 
  delayChildren = 0, 
  staggerChildren = 0.08, 
  className = "", 
  once = true, 
  as = "div",
  ...props 
}) => {
  const Component = motion[as] || motion.div;
  
  const variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren, 
        staggerChildren 
      }
    }
  };

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * StaggerItem
 * Must be a direct child (or descendent) of StaggerContainer.
 */
export const StaggerItem = ({ 
  children, 
  duration = defaultDuration, 
  className = "", 
  yOffset = 30, 
  as = "div",
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;
  
  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : yOffset },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration, ease: easing }
    }
  };

  return (
    <Component
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * ScrollWordReveal
 * Reveals words one by one as the user scrolls.
 */
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const ScrollWordReveal = ({ text, className = "", as = "h2" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "start 40%"] // Starts revealing when top of element is at 85% of viewport, ends when top is at 40%
  });

  const words = text.split(" ");
  const Component = motion[as] || motion.div;
  
  return (
    <Component ref={containerRef} className={`${className} flex flex-wrap`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </Component>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em]">
      {children}
    </motion.span>
  );
};

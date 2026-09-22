import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

// Global config for consistent animations
export const easing = [0.16, 1, 0.3, 1];
export const easingSharp = [0.22, 1, 0.36, 1];
export const defaultDuration = 0.65;

/**
 * FadeInUp
 * Best for headings, text blocks, and cards.
 * Slides up while fading in — more dramatic offset for visible impact.
 */
export const FadeInUp = ({ 
  children, 
  delay = 0, 
  duration = defaultDuration, 
  className = "", 
  once = true, 
  yOffset = 48, 
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
      viewport={{ once, margin: "-60px" }}
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
      viewport={{ once, margin: "-60px" }}
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
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.92 },
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
      viewport={{ once, margin: "-60px" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * SlideInLeft
 * Best for sidebars, lists, and left-aligned content blocks.
 */
export const SlideInLeft = ({ 
  children, 
  delay = 0, 
  duration = defaultDuration, 
  className = "", 
  once = true, 
  xOffset = 60, 
  as = "div",
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -xOffset },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration, ease: easing, delay } 
    }
  };

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * SlideInRight
 * Best for right-aligned cards, preview panels, and right column content.
 */
export const SlideInRight = ({ 
  children, 
  delay = 0, 
  duration = defaultDuration, 
  className = "", 
  once = true, 
  xOffset = 60, 
  as = "div",
  ...props 
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const variants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : xOffset },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration, ease: easing, delay } 
    }
  };

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * ClipReveal
 * Cinematic reveal by clipping from bottom — great for bold headlines & image reveals.
 */
export const ClipReveal = ({
  children,
  delay = 0,
  duration = 0.75,
  className = "",
  wrapperClassName = "",
  once = true,
  as = "div",
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  const variants = {
    hidden: { 
      clipPath: shouldReduceMotion ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
      opacity: shouldReduceMotion ? 1 : 0,
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      transition: { duration, ease: easingSharp, delay }
    }
  };

  return (
    <div style={{ overflow: 'hidden' }} className={wrapperClassName}>
      <Component
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-60px" }}
        className={className}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
};

/**
 * StaggerContainer
 * Use as a parent for StaggerItem to orchestrate lists, grids, etc.
 */
export const StaggerContainer = ({ 
  children, 
  delayChildren = 0, 
  staggerChildren = 0.1, 
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
      viewport={{ once, margin: "-60px" }}
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
  yOffset = 40, 
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
 * Reveals words one by one as the user scrolls, with a subtle y shift per word.
 */
export const ScrollWordReveal = ({ text, className = "", as = "h2" }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "start 35%"]
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
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <motion.span style={{ opacity, y }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RevealOnScroll } from './shared/RevealOnScroll';
import { Marquee } from './shared/Marquee';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import './Vision.css';

export function Vision() {
  // Setup scroll for shape parallax
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  // Setup word reveal for closing statement
  const { ref: textRef, isVisible } = useRevealOnScroll({ threshold: 0.5, triggerOnce: true });
  const closingText = "VOICE AI, WHATSAPP, TELEPHONY, QUALITY MANAGEMENT, AND ANALYTICS — ONE AI CORE, DEPLOYED ACROSS YOUR ENTIRE CUSTOMER LIFECYCLE.";
  const words = closingText.split(' ');

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="vision-section section-padding" ref={sectionRef}>
      <RevealOnScroll className="container vision-container glass">
        <div>
          <RevealOnScroll delay={0} className="eyebrow eyebrow-animate" style={{ display: 'inline-block' }}>
            VOXI RESEARCH
          </RevealOnScroll>
          <h2 className="vision-statement">
            We are building the intelligence layer that makes autonomous customer engagement possible.
          </h2>
          <p className="vision-supporting">
            From Speech LLMs and Multi-Agent Orchestration to Reasoning AI, Agentic Systems, and Small Language Models — our research directly powers the Voxi platform and keeps it ahead of the market.
          </p>
        </div>

        <div className="vision-tech-block">
          <div className="tech-block-content">
            <h3>Voxi Intelligence Core</h3>
            <ul className="tech-list">
              <li><strong>Speech LLMs</strong> — real-time, natural, human-like voice conversations with low latency</li>
              <li><strong>Multi-Agent AI Orchestration</strong> — specialized agents collaborating to handle complex workflows</li>
              <li><strong>Reasoning AI &amp; Decision Intelligence</strong> — multi-step reasoning engines for intelligent automation</li>
              <li><strong>Agentic &amp; Autonomous AI</strong> — self-learning agents that execute tasks end-to-end without human intervention</li>
              <li><strong>Small Language Models (SLM)</strong> — domain-specific, on-prem, low-latency AI for secure enterprise deployments</li>
              <li><strong>LLM &amp; RAG</strong> — enterprise knowledge assistants powered by Retrieval-Augmented Generation</li>
            </ul>
          </div>
          <div className="tech-shapes">
            <motion.div className="shape shape-1" style={{ y: y1 }}></motion.div>
            <motion.div className="shape shape-2" style={{ y: y2 }}></motion.div>
            <motion.div className="shape shape-3" style={{ y: y3 }}></motion.div>
            <motion.div className="shape shape-4" style={{ y: y4 }}></motion.div>
          </div>
        </div>

        <div className="vision-closing-wrapper" ref={textRef}>
          <motion.h3 
            className="vision-closing"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {words.map((word, i) => (
              <motion.span 
                key={i} 
                variants={wordVariants}
                style={{ display: 'inline-block', marginRight: '0.4em' }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h3>
        </div>

        <div className="vision-language-ticker">
          <Marquee speed={40}>
            <span className="lang-code">Multi-language support across Indian and global languages, with real-time language switching mid-conversation.</span>
            <span className="lang-code">HI</span>
            <span className="lang-code">EN</span>
            <span className="lang-code">TA</span>
            <span className="lang-code">TE</span>
            <span className="lang-code">BN</span>
            <span className="lang-code">MR</span>
            <span className="lang-code">GU</span>
          </Marquee>
        </div>
      </RevealOnScroll>
    </section>
  );
}

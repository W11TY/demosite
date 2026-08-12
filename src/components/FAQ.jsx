import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './FAQ.css';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do you ensure our data remains secure?",
      a: "Voxi uses role-based access control (RBAC), compliance monitoring, and secure API/webhook integration to keep customer data protected across every channel."
    },
    {
      q: "What is the typical deployment timeline?",
      a: "Most customers go from onboarding to live AI agents within a few weeks, depending on CRM/telephony integration complexity."
    },
    {
      q: "Can we integrate with our existing CRM and telephony?",
      a: "Yes — Voxi integrates via SIP trunks, PRI lines, and APIs/webhooks with existing CRM, ERP, and telephony infrastructure."
    },
    {
      q: "Do you support multiple languages?",
      a: "Yes, including multiple Indian and global languages, with real-time language switching mid-conversation."
    },
    {
      q: "How do you calculate ROI?",
      a: "Use the built-in AI ROI & Efficiency Calculator to model automation impact before you commit."
    },
    {
      q: "Do we own the data and conversation history?",
      a: "Yes — recordings, transcripts, summaries, and lead data are accessible from a single dashboard, owned by you."
    },
    {
      q: "What AI models power the platform?",
      a: "Voxi runs on proprietary Speech LLMs, multi-agent orchestration, and Retrieval-Augmented Generation (RAG) over your enterprise knowledge base."
    }
  ];

  return (
    <section className="faq-section section-padding">
      <div className="container faq-container">
        <RevealOnScroll className="faq-header">
          <span className="eyebrow">COMMON QUERIES</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Everything you need to know about the Voxi platform.
          </h2>
          <p className="faq-supporting text-muted" style={{ marginBottom: 'var(--space-xl)' }}>
            Got more questions?
          </p>
          <button className="btn-primary" style={{ backgroundColor: 'var(--surface-color)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}>
            Contact Support
          </button>
        </RevealOnScroll>

        <RevealOnScroll className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <motion.span
                    className="faq-icon"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="faq-answer-wrapper"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}

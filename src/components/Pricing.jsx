import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './Pricing.css';

export function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const products = [
    {
      id: 1,
      name: 'VOXIFLOW',
      subtitle: 'VoiceBot Solution',
      desc: 'Intelligent inbound & outbound voice automation for customer engagement, support, collections, sales, and lead qualification.'
    },
    {
      id: 2,
      name: 'VOXICHATR',
      subtitle: 'WhatsApp Solution',
      desc: 'AI-powered WhatsApp communication for customer support, campaigns, notifications, lead nurturing, and conversational commerce.'
    },
    {
      id: 3,
      name: 'VOXICONNEX',
      subtitle: 'Telephony Solution',
      desc: 'Enterprise-grade telephony infrastructure including click-to-call, IVR, call routing, and communication management.'
    },
    {
      id: 4,
      name: 'VOXISTREAMR',
      subtitle: 'Streaming Telephony',
      desc: 'Real-time low-latency conversational AI for dynamic and human-like voice interactions.'
    },
    {
      id: 5,
      name: 'VOXIQUEIQ',
      subtitle: 'QMS Solution',
      desc: 'AI-enabled call monitoring, agent performance tracking, compliance management, and quality analytics.'
    },
    {
      id: 6,
      name: 'VOXILENSA',
      subtitle: 'AI Analytics & Intelligence',
      desc: 'Advanced insights, sentiment analysis, conversation analytics, and performance optimization powered by AI.'
    }
  ];

  return (
    <section className="pricing-section section-padding" id="pricing">
      <div className="container pricing-container">
        <div className="pricing-header" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em', marginBottom: 'var(--space-md)' }}>Our Platform Products</h2>
          <p className="pricing-supporting">
            No complex tiers. No hidden add-ons. One intelligent platform — priced around what you actually need to orchestrate your customer conversations.
          </p>
        </div>

        <div className="pricing-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {products.map((product, index) => {
            const isHovered = hoveredIndex === index;
            const isOthersHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <RevealOnScroll key={product.id} delay={index * 0.1} className="pricing-card-wrapper">
                <motion.div 
                  className="pricing-card"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    scale: isHovered ? 1.02 : 1,
                    y: isHovered ? -8 : 0,
                    opacity: isOthersHovered ? 0.4 : 1,
                    filter: isOthersHovered ? 'grayscale(100%)' : 'grayscale(0%)'
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{ willChange: 'transform, opacity, filter' }}
                >
                  <div className="card-bg-pattern"></div>
                  <div className="card-content">
                    <p style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{product.subtitle}</p>
                    <h3 className="plan-name" style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-sm)' }}>{product.name}</h3>
                    <p className="plan-desc" style={{ flexGrow: 1 }}>{product.desc}</p>
                    <motion.button 
                      className="btn-primary w-full mt-auto" 
                      style={{ backgroundColor: 'var(--text-primary)', color: 'var(--surface-color)' }}
                      whileTap={{ scale: 0.96 }}
                    >
                      Get a Custom Quote
                    </motion.button>
                  </div>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronsRight } from 'lucide-react';
import { FadeInUp } from './shared/Motion';
import AntiMetalButton from './shared/AntiMetalButton';

/* 
  TODO: PLACEHOLDER DATA
  These FAQs are inferred from the Voxi MD file capabilities.
*/
const faqs = [
  {
    q: "Does Voxi integrate with our existing CRM and telephony systems?",
    a: "Yes. Voxi is designed to seamlessly integrate with your existing infrastructure. It supports SIP trunks, PRI lines, and cloud calling platforms out-of-the-box, and uses APIs and webhooks to sync data instantly with any CRM, ERP, or payment gateway."
  },
  {
    q: "Which languages are supported by the AI Voice Agents?",
    a: "Voxi supports multiple Indian and global languages with native speech capabilities. The AI can even perform real-time language switching during a live conversation without interrupting the customer experience."
  },
  {
    q: "How does Voxi ensure data privacy and security?",
    a: "Security is built into the core. Voxi features Role-Based Access Control (RBAC) to manage user permissions securely, Number Masking to protect customer privacy, and supports secure multi-tenant enterprise deployments."
  },
  {
    q: "Can Voxi manage both Voice calls and WhatsApp in a single workflow?",
    a: "Absolutely. Voxi acts as a unified CX Operating System. You can build autonomous customer journeys that span across AI Voice calls, WhatsApp messaging, SMS, and email from a single centralized platform."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full pt-[100px] lg:pt-[180px] pb-[80px] lg:pb-[120px] bg-background">
      <div className="w-full px-6 lg:px-[58px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        {/* Left Column (Sticky) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col items-start lg:sticky lg:top-32 h-fit">
          
          {/* Top Label Row */}
          <FadeInUp className="flex items-center gap-4 mb-10 w-full max-w-[320px]">
             <div className="w-10 h-6 rounded-full border-2 border-text-primary flex items-center justify-center bg-transparent shrink-0" />
             <div className="h-px bg-border flex-1" />
             <span className="text-[10px] font-mono tracking-widest text-text-secondary uppercase shrink-0">
               Common Queries
             </span>
          </FadeInUp>

          <FadeInUp as="p" delay={0.1} className="text-[16px] md:text-[18px] text-text-secondary mb-20 max-w-[360px] leading-relaxed">
            Find answers to technical specifications, deployment timelines, and our data security protocols.
          </FadeInUp>

          <FadeInUp as="h2" delay={0.2} className="text-[clamp(36px,10vw,72px)] font-medium tracking-[-0.04em] leading-[1.0] text-[#111111] mb-12 max-w-[440px]">
            Everything you need to know about our AI.
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <a href="#contact">
              <AntiMetalButton label="Contact Support" />
            </a>
          </FadeInUp>
        </div>

        {/* Right Column (FAQ List) */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <FadeInUp 
                key={idx}
                delay={idx * 0.1}
                className={`flex flex-col rounded-[24px] transition-colors duration-300 overflow-hidden ${
                  isOpen ? 'bg-[#1a1a1a]' : 'bg-[#1a1a1a] hover:bg-[#222]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center justify-between gap-6 text-left group"
                >
                  <h3 className={`text-[16px] md:text-[18px] font-medium transition-colors duration-200 text-white`}>
                    {faq.q}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-shrink-0 text-white/50 group-hover:text-white transition-colors"
                  >
                    <Plus size={20} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 md:px-8 md:pb-8 text-[15px] text-white/70 leading-relaxed max-w-[90%]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeInUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FadeInUp } from './shared/Motion';

const steps = [
  {
    num: "01",
    title: "Discovery & Solution Design",
    desc: "We start by deeply understanding your business processes, mapping out customer journeys, and configuring the AI to align with your specific objectives and compliance needs.",
  },
  {
    num: "02",
    title: "Implementation & System Integration",
    desc: "Our team seamlessly integrates the Voxi platform with your existing CRM, ERP, and telephony infrastructure via robust APIs and webhooks without disrupting operations.",
  },
  {
    num: "03",
    title: "User Training & Change Management",
    desc: "We ensure your team is fully equipped to leverage the platform, providing comprehensive training, agent desktop walkthroughs, and operational best practices.",
  },
  {
    num: "04",
    title: "Performance Monitoring & Optimization",
    desc: "Post go-live, we actively monitor AI performance, conversational quality, and business KPIs, continuously tuning the models to maximize your ROI.",
  }
];

export default function Process() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-24 md:py-32 bg-background border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left: Sticky Header */}
        <div className="flex flex-col items-start lg:sticky lg:top-32 h-fit">
          <FadeInUp as="span" className="text-eyebrow mb-4">Our Methodology</FadeInUp>
          <FadeInUp as="h2" delay={0.1} className="text-[32px] md:text-[48px] font-semibold tracking-tight leading-tight text-text-primary mb-6">
            The 90-Day Success Framework.
          </FadeInUp>
          <FadeInUp as="p" delay={0.2} className="text-[16px] text-text-secondary max-w-[400px]">
            Technology alone doesn't deliver success. Implementation does. We work closely with you from discovery to optimization to ensure measurable business outcomes.
          </FadeInUp>
        </div>

        {/* Right: Accordion */}
        <div className="flex flex-col border-t border-border">
          {steps.map((step, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              <FadeInUp key={step.num} delay={idx * 0.1} className="border-b border-border">
                <button 
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
                >
                  <div className="flex items-center gap-6 md:gap-8">
                    <span className={`text-[13px] font-mono transition-colors duration-300 ${isOpen ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'}`}>
                      {step.num}
                    </span>
                    <h3 className={`text-[20px] md:text-[24px] tracking-tight transition-colors duration-300 ${isOpen ? 'font-semibold text-text-primary' : 'font-medium text-text-secondary group-hover:text-text-primary'}`}>
                      {step.title}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${isOpen ? 'border-text-primary text-text-primary' : 'border-border text-text-secondary group-hover:border-text-primary group-hover:text-text-primary'}`}
                  >
                    <Plus size={16} />
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
                      <div className="pb-8 pl-[40px] md:pl-[64px] flex flex-col gap-6">
                        <p className="text-[15px] text-text-secondary leading-relaxed max-w-[480px]">
                          {step.desc}
                        </p>
                        
                        {/* Placeholder image slot for the step */}
                        <div className="w-full aspect-[2/1] rounded-image bg-surface border border-border flex items-center justify-center overflow-hidden relative">
                           <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black/5" />
                           <span className="text-[11px] font-mono text-text-secondary tracking-widest uppercase">
                             Visual: {step.title}
                           </span>
                        </div>
                      </div>
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

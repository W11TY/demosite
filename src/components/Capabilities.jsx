import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeInUp } from './shared/Motion';
import voiceAgentImage from '../assets/cards/superai.png';
import whatsappImage from '../assets/cards/whatsapp.png';
import telephonyImage from '../assets/cards/telephony.png';
import qualityMgmtImage from '../assets/cards/qualitymgmt.png';
import aiAnalyticsImage from '../assets/cards/aianalytics.png';

const products = [
  {
    id: "01",
    name: "Super Intelligent AI Voice Agents",
    shortName: "VOXIFLOW",
    desc: "Autonomous Customer Journey & Follow-up Automation that speaks naturally like a human.",
    image: voiceAgentImage
  },
  {
    id: "02",
    name: "WhatsApp Business Platform",
    shortName: "VOXICHATR",
    desc: "Automate customer conversations with an intelligent AI chatbot that understands, responds, and resolves queries 24x7.",
    image: whatsappImage
  },
  {
    id: "03",
    name: "Telephony Command Center",
    shortName: "VOXICONNEX",
    desc: "Enterprise-grade cloud calling platform for managing inbound, outbound, and automated business communications.",
    image: telephonyImage
  },
  {
    id: "04",
    name: "Quality Management System",
    shortName: "VOXIQUEIQ",
    desc: "Automatically evaluates customer conversations using AI-driven quality parameters and scorecards.",
    image: qualityMgmtImage
  },
  {
    id: "05",
    name: "AI Analytics & Intelligence",
    shortName: "VOXILENSA",
    desc: "Advanced insights, sentiment analysis, conversation analytics, and performance optimization powered by AI.",
    image: aiAnalyticsImage
  }
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full pt-[100px] lg:pt-[160px] pb-[80px] lg:pb-[120px] bg-background border-b border-border">
      <div className="w-full px-6 lg:px-[58px]">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
          <div className="max-w-[620px]">
            <FadeInUp as="span" className="text-eyebrow block mb-4">Core Platform</FadeInUp>
            <FadeInUp as="h2" delay={0.1} className="text-[clamp(36px,5vw,64px)] font-medium tracking-[-0.03em] leading-[1.05] text-text-primary">
              The complete toolkit for autonomous customer orchestration.
            </FadeInUp>
          </div>
          <FadeInUp delay={0.2} className="self-start md:self-end">
            <a
              href="#platform"
              className="inline-flex items-center justify-center bg-surface border border-border text-text-primary rounded-full px-6 py-3 text-[14px] font-medium transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/10 whitespace-nowrap"
            >
              Explore Platform
            </a>
          </FadeInUp>
        </div>

        {/* Layout: List Left, Preview Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Accordion List Left */}
          <div className="col-span-1 lg:col-span-7 flex flex-col w-full">
            <div className="border-t border-border">
              {products.map((product, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <FadeInUp
                    key={product.id}
                    delay={idx * 0.06}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className="group border-b border-border py-6 cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-6 w-full">
                        <span className={`text-[13px] font-mono transition-colors duration-200 ${isActive ? 'text-text-primary font-semibold' : 'text-text-secondary/60'}`}>
                          {product.id}
                        </span>
                        <h3 className={`text-[20px] md:text-[26px] transition-colors duration-200 tracking-tight ${isActive ? 'font-semibold text-text-primary' : 'font-medium text-text-secondary group-hover:text-text-primary'}`}>
                          {product.name}
                        </h3>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -6 }}
                        transition={{ duration: 0.2 }}
                        className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-border bg-surface text-text-primary shrink-0"
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[38px] pr-4 pt-3 pb-1">
                            <p className="text-[15px] text-text-secondary leading-relaxed max-w-[460px]">
                              {product.desc}
                            </p>
                            {product.image && (
                              <div className="mt-4 lg:hidden h-[220px] bg-transparent flex items-center justify-center p-4">
                                <motion.img
                                  src={product.image}
                                  alt={product.name}
                                  animate={{ y: [0, -8, 0] }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                  className="max-w-[70%] max-h-[70%] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.1)] mix-blend-multiply dark:mix-blend-normal"
                                />
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </FadeInUp>
                );
              })}
            </div>
          </div>

          {/* Fixed Clean Preview Slot Right */}
          <div className="col-span-1 lg:col-span-5 sticky top-28">
            <FadeInUp
              delay={0.2}
              className="relative w-full h-[360px] lg:h-[500px]"
            >
              {/* Main Container - No background cards, borders or white boxes */}
              <div className="relative w-full h-full overflow-hidden bg-transparent">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={activeIndex}
                    initial={{ y: 25, scale: 0.95, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: -20, scale: 0.97, opacity: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute inset-0 w-full h-full bg-transparent flex items-center justify-center p-4"
                  >
                    {products[activeIndex].image ? (
                      <motion.img
                        src={products[activeIndex].image}
                        alt={products[activeIndex].name}
                        animate={{ y: [0, -14, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "mirror",
                          ease: "easeInOut"
                        }}
                        className="max-w-[60%] max-h-[60%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)] mix-blend-multiply dark:mix-blend-normal pointer-events-none"
                      />
                    ) : (
                      <div className="w-full h-full bg-transparent flex items-center justify-center">
                        <span className="text-[13px] font-mono text-text-secondary">{products[activeIndex].shortName}</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </FadeInUp>
          </div>

        </div>
      </div>
    </section>
  );
}

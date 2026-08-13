import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeInUp, FadeIn } from './shared/Motion';

const products = [
  {
    id: "001",
    name: "Super Intelligent AI Voice Agents",
    shortName: "VOXIFLOW",
    desc: "Autonomous Customer Journey & Follow-up Automation that speaks naturally like a human.",
    bgClass: "from-blue-500/20 to-indigo-900/40"
  },
  {
    id: "002",
    name: "WhatsApp Business Platform",
    shortName: "VOXICHATR",
    desc: "Automate customer conversations with an intelligent AI chatbot that understands, responds, and resolves queries 24x7.",
    bgClass: "from-green-500/20 to-emerald-900/40"
  },
  {
    id: "003",
    name: "Telephony Command Center",
    shortName: "VOXICONNEX",
    desc: "Enterprise-grade cloud calling platform for managing inbound, outbound, and automated business communications.",
    bgClass: "from-purple-500/20 to-fuchsia-900/40"
  },
  {
    id: "004",
    name: "Quality Management System",
    shortName: "VOXIQUEIQ",
    desc: "Automatically evaluates customer conversations using AI-driven quality parameters and scorecards.",
    bgClass: "from-orange-500/20 to-red-900/40"
  },
  {
    id: "005",
    name: "AI Analytics & Intelligence",
    shortName: "VOXILENSA",
    desc: "Advanced insights, sentiment analysis, conversation analytics, and performance optimization powered by AI.",
    bgClass: "from-cyan-500/20 to-blue-900/40"
  }
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full pt-[100px] lg:pt-[180px] pb-[80px] lg:pb-[120px] bg-background border-b border-border">
      <div className="w-full px-6 lg:px-[58px]">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-[600px]">
            <FadeInUp as="span" className="text-eyebrow block mb-4">Core Platform</FadeInUp>
            <FadeInUp as="h2" delay={0.1} className="text-[clamp(36px,10vw,72px)] font-medium tracking-[-0.04em] leading-[1.0] text-[#111111]">
              The complete toolkit for autonomous customer orchestration.
            </FadeInUp>
          </div>
          <FadeInUp delay={0.2} className="self-start md:self-end">
            <a
              href="#platform"
              className="inline-flex items-center justify-center bg-surface border border-border text-text-primary rounded-pill px-[24px] py-[12px] text-[14px] font-medium transition-all duration-200 hover:bg-black/5 whitespace-nowrap"
            >
              Explore Platform
            </a>
          </FadeInUp>
        </div>

        {/* Layout: List Left, Preview Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Accordion List */}
          <div className="col-span-1 lg:col-span-7 flex flex-col w-full">
            <div className="border-t border-border">
              {products.map((product, idx) => {
                const isActive = activeIndex === idx;
                
                return (
                  <FadeInUp 
                    key={product.id}
                    delay={idx * 0.1}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className="group border-b border-border py-6 cursor-pointer"
                  >
                    <div className="flex items-start md:items-center justify-between gap-4">
                      <div className="flex items-center gap-6 md:gap-12 w-full">
                        <span className={`text-[13px] font-mono transition-colors duration-250 ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                          {product.id}
                        </span>
                        <h3 className={`text-[20px] md:text-[28px] transition-all duration-250 tracking-tight ${isActive ? 'font-semibold text-text-primary translate-x-2' : 'font-medium text-text-secondary'}`}>
                          {product.name}
                        </h3>
                      </div>
                      
                      <motion.div 
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                        className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-border bg-surface text-text-primary"
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[50px] md:pl-[84px] pr-4 pt-4 pb-2">
                            <span className="inline-block px-2 py-1 rounded-[4px] bg-surface border border-border text-[11px] font-mono text-text-secondary mb-3">
                              {product.shortName}
                            </span>
                            <p className="text-[15px] text-text-secondary max-w-[400px]">
                              {product.desc}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </FadeInUp>
                );
              })}
            </div>
          </div>

          {/* Fixed Preview Slot */}
          <FadeInUp 
            delay={0.2}
            className="col-span-1 lg:col-span-5 h-[300px] lg:h-[500px] sticky top-24 rounded-card overflow-hidden bg-surface border border-border"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`absolute inset-0 bg-gradient-to-br ${products[activeIndex].bgClass} flex items-center justify-center p-8`}
              >
                {/* Abstract Visual representation */}
                <div className="relative w-full h-full rounded-[24px] border border-black/10 bg-black/20 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden">
                   <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay" />
                   <div className="w-24 h-24 rounded-full bg-black/10 border border-black/20 animate-pulse flex items-center justify-center">
                     <span className="text-[10px] font-mono tracking-widest text-black/50">{products[activeIndex].shortName}</span>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeInUp>

        </div>
      </div>
    </section>
  );
}

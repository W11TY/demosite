import React from 'react';
import { motion } from 'framer-motion';
import { research } from '../data/research';

export default function ResearchOverview() {
  return (
    <div className="w-full pt-32 pb-24 bg-background min-h-screen relative overflow-hidden">
      
      {/* Background visual element inspired by Vision component */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 z-10">
        
        {/* Header */}
        <div className="max-w-[800px] mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-eyebrow block mb-6"
          >
            Voxi Research
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[48px] md:text-[72px] lg:text-[84px] font-semibold tracking-tight leading-[1.05] text-text-primary"
          >
            Pioneering the next generation of conversational AI.
          </motion.h1>
        </div>

        {/* Research Themes */}
        <div className="flex flex-col gap-32">
          {research.map((theme, i) => (
            <motion.div 
              key={theme.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row gap-12 md:gap-24"
            >
              {/* Theme Header */}
              <div className="md:w-[400px] shrink-0">
                <div className="sticky top-32">
                  <span className="text-[14px] font-mono text-text-secondary block mb-4">
                    {(i + 1).toString().padStart(2, '0')} // Theme
                  </span>
                  <h2 className="text-[32px] font-semibold tracking-tight leading-tight text-text-primary mb-6">
                    {theme.title}
                  </h2>
                  <p className="text-[16px] text-text-secondary leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>

              {/* Sub Items */}
              <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                {theme.subItems && theme.subItems.map((item, idx) => (
                  <div 
                    key={idx}
                    className="p-6 rounded-[16px] bg-surface/40 border border-border hover:bg-surface hover:border-black/10 transition-colors"
                  >
                    <h3 className="text-[18px] font-medium text-text-primary mb-2">
                      {item.name}
                    </h3>
                    <p className="text-[14px] text-text-secondary">
                      {item.desc}
                    </p>
                  </div>
                ))}
                
                {(!theme.subItems || theme.subItems.length === 0) && (
                  <div className="p-6 rounded-[16px] bg-surface/20 border border-border border-dashed flex items-center justify-center col-span-full">
                    <span className="text-[14px] text-text-secondary">
                      Research in progress. Details coming soon.
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

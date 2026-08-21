import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CapabilityRow({ capabilities }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col w-full border-t border-border">
      {capabilities.map((cap, idx) => {
        const isActive = activeIndex === idx;
        
        return (
          <div 
            key={idx}
            onMouseEnter={() => setActiveIndex(idx)}
            onClick={() => setActiveIndex(idx)}
            className="group border-b border-border py-6 cursor-pointer"
          >
            <div className="flex items-start md:items-center justify-between w-full pr-4">
              <h3 className={`text-[20px] md:text-[24px] transition-all duration-250 tracking-tight ${isActive ? 'font-semibold text-text-primary translate-x-2' : 'font-medium text-text-secondary'}`}>
                {cap.title || cap.name}
              </h3>
              {cap.status && (
                <span className="shrink-0 ml-4 inline-flex items-center rounded-full bg-blue-50/50 px-2.5 py-0.5 text-[11px] font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20">
                  {cap.status}
                </span>
              )}
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
                  <div className="pt-4 pb-2 pr-4 pl-0">
                    <p className="text-[15px] text-text-secondary max-w-[600px] leading-relaxed">
                      {cap.definition || cap.desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

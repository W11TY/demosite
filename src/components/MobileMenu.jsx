import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { easing } from './shared/Motion';
import AntiMetalButton from './shared/AntiMetalButton';
import logo from '../assets/logo.png';

export default function MobileMenu({ isOpen, setIsOpen, navItems }) {
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    if (!isOpen) setExpandedItem(null);
  }, [isOpen]);

  const toggleItem = (name) => {
    setExpandedItem(prev => prev === name ? null : name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.4, ease: easing }}
          className="fixed inset-0 z-[100] p-3 md:p-6 lg:hidden flex flex-col pointer-events-auto"
        >
          {/* Blur Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-md -z-10" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Premium Panel */}
          <div className="bg-[#0A0A0A] w-full h-full rounded-[24px] shadow-2xl flex flex-col p-6 border border-white/10 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setIsOpen(false)} className="pl-2">
                <img src={logo} alt="Voxi Logo" className="h-7 w-auto object-contain" />
              </Link>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors bg-white/5 w-10 h-10 rounded-full flex items-center justify-center"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6 px-2 mb-10 flex-1">
              {navItems.map((item, idx) => (
                <div key={item.name} className="flex flex-col gap-4 border-b border-white/5 pb-6">
                  <div className="flex items-center gap-4 w-full">
                    <span className="text-[12px] font-mono text-white/30">0{idx + 1}</span>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[28px] font-medium text-white tracking-tight"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button 
                        onClick={() => toggleItem(item.name)} 
                        className="ml-auto p-2 text-white/50 hover:text-white transition-colors"
                      >
                        <ChevronDown size={24} className={`transition-transform duration-300 ${expandedItem === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Inline sub-items for mobile */}
                  <AnimatePresence>
                    {item.dropdown && expandedItem === item.name && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: easing }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-3 pl-8 pt-2">
                          {item.dropdown.map(sub => (
                            <Link
                              key={sub.id}
                              to={sub.href || `${item.href}/${sub.id}`}
                              onClick={() => setIsOpen(false)}
                              className="text-[15px] text-white/50 hover:text-white transition-colors py-1"
                            >
                              {sub.shortName || sub.industry || sub.title || sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-auto w-full flex justify-center pb-2">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <AntiMetalButton label="Book a Demo" className="w-full sm:w-[174px]" />
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

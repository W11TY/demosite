import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { easing } from './shared/Motion';
import logo from '../assets/logo.png';

export default function MobileMenu({ isOpen, setIsOpen, navItems }) {
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
                <img src={logo} alt="Voxi Logo" className="h-7 w-auto object-contain brightness-0 invert" />
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
                  <div className="flex items-center gap-4">
                    <span className="text-[12px] font-mono text-white/30">0{idx + 1}</span>
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[28px] font-medium text-white tracking-tight"
                    >
                      {item.name}
                    </Link>
                  </div>
                  
                  {/* Inline sub-items for mobile */}
                  {item.dropdown && (
                    <div className="flex flex-col gap-3 pl-8">
                      {item.dropdown.map(sub => (
                        <Link
                          key={sub.id}
                          to={`${item.href}/${sub.id}`}
                          onClick={() => setIsOpen(false)}
                          className="text-[15px] text-white/50 hover:text-white transition-colors"
                        >
                          {sub.shortName || sub.industry || sub.title || sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full bg-white text-black rounded-full p-4 flex items-center justify-center relative hover:scale-[1.02] transition-transform mt-auto"
            >
              <div className="absolute right-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                <ArrowRight size={16} />
              </div>
              <span className="text-[16px] font-semibold pr-8">Book a Demo</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

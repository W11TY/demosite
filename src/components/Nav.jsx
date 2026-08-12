import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { platforms } from '../data/platform';
import { solutions } from '../data/solutions';
import { research } from '../data/research';
import { company } from '../data/company';
import logo from '../assets/logo.png';
import { easing } from './shared/Motion';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = useLocation();

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Platform', href: '/platform', dropdown: platforms, dropdownType: 'platform' },
    { name: 'Solutions', href: '/solutions', dropdown: solutions, dropdownType: 'solutions' },
    { name: 'Research', href: '/research', dropdown: research, dropdownType: 'research' },
    { name: 'Company', href: '/company', dropdown: company, dropdownType: 'company' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easing }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-[72px] px-6 md:px-16 flex items-center justify-between"
    >
      {/* Logo */}
      <Link to="/" className="z-50">
        <img src={logo} alt="Voxi Logo" className="h-9 md:h-11 w-auto object-contain" />
      </Link>

      {/* Desktop Links */}
      <nav className="hidden md:flex items-center gap-8 h-full">
        {navItems.map((item) => (
          <div 
            key={item.name} 
            className="h-full flex items-center relative"
            onMouseEnter={() => setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to={item.href}
              className="flex items-center gap-1 text-[14px] text-text-secondary hover:text-text-primary transition-colors relative group py-4"
            >
              {item.name}
              <ChevronDown size={14} className="opacity-50" />
              <span className="absolute bottom-3 left-0 right-0 h-[1px] bg-text-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
            </Link>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeDropdown === item.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: easing }}
                  className="absolute top-[72px] left-1/2 -translate-x-1/2 w-screen max-w-[600px] bg-surface/95 backdrop-blur-xl border border-border rounded-[16px] shadow-2xl overflow-hidden"
                >
                  <div className="p-6 grid grid-cols-2 gap-4">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.id}
                        to={`${item.href}/${subItem.id}`}
                        className="block p-4 rounded-[12px] hover:bg-black/5 transition-colors group"
                      >
                        <h4 className="text-[14px] font-medium text-text-primary group-hover:text-text-primary mb-1">
                          {subItem.shortName || subItem.industry || subItem.title}
                        </h4>
                        <p className="text-[12px] text-text-secondary line-clamp-2">
                          {subItem.tagline || subItem.description || subItem.benefits || 'Explore this solution in detail.'}
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className="bg-black/5 px-6 py-4 border-t border-border">
                    <Link to={item.href} className="text-[13px] font-medium text-text-primary hover:underline">
                      View all {item.name} &rarr;
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* Right CTA / Mobile Toggle */}
      <div className="flex items-center gap-4 z-50">
        <Link
          to="/contact"
          className="hidden md:flex items-center justify-center bg-cta-fill text-cta-text rounded-pill px-[20px] py-[10px] text-[14px] font-medium transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.03] hover:brightness-110"
        >
          Book a Demo
        </Link>
        
        <button 
          className="md:hidden text-text-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer (Floating Card) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: easing }}
            className="fixed inset-0 z-[60] p-4 md:hidden pointer-events-auto"
          >
            {/* Blur Backdrop */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm -z-10" onClick={() => setIsOpen(false)} />
            
            {/* The white rounded card */}
            <div className="bg-background w-full rounded-[32px] shadow-2xl flex flex-col p-6 border border-border">
              {/* Header inside the card */}
              <div className="flex justify-between items-center mb-10">
                <Link to="/" onClick={() => setIsOpen(false)} className="pl-2">
                  <img src={logo} alt="Voxi Logo" className="h-8 w-auto object-contain" />
                </Link>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-text-primary hover:opacity-70 transition-opacity"
                >
                  <X size={44} strokeWidth={2.5} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-8 px-2 mb-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[22px] font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-cta-fill text-cta-text rounded-[24px] p-5 flex items-center justify-center relative hover:scale-[1.02] transition-transform"
              >
                <div className="absolute left-6 text-cta-text">
                  <ArrowRight size={24} />
                </div>
                <span className="text-[18px] font-medium">Book a Demo</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

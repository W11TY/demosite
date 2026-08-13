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
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { pathname } = useLocation();

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Platform', href: '/platform', dropdown: platforms },
    { name: 'Solutions', href: '/solutions', dropdown: solutions },
    { name: 'Research', href: '/research', dropdown: research },
    { name: 'Company', href: '/company', dropdown: company },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easing }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav h-[72px] px-6 lg:px-[58px] flex items-center justify-between"
    >
      {/* Logo */}
      <Link to="/" className="z-50">
        <img src={logo} alt="Voxi Logo" className="h-9 md:h-11 w-auto object-contain" />
      </Link>

      {/* Desktop Links */}
      <nav className="hidden lg:flex items-center gap-8 h-full">
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
              {activeDropdown === item.name && item.dropdown && (
                <MegaMenu item={item} topPosition="80px" />
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* Right CTA / Mobile Toggle */}
      <div className="flex items-center gap-4 z-50">
        <Link
          to="/contact"
          className="hidden lg:flex items-center justify-center bg-cta-fill text-cta-text rounded-pill px-[20px] py-[10px] text-[14px] font-medium transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.03] hover:brightness-110"
        >
          Book a Demo
        </Link>
        
        <button 
          className="lg:hidden text-text-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer (Premium Overlay) */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </motion.header>
  );
}

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
import AntiMetalButton from './shared/AntiMetalButton';
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
    { name: 'PLATFORM', href: '/platform', dropdown: platforms },
    { name: 'SOLUTIONS', href: '/solutions', dropdown: solutions },
    { name: 'VOXI RESEARCH', href: '/research', dropdown: research },
    { name: 'COMPANY', href: '/company', dropdown: company },
  ];

  return (
    <>
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: easing }}
      className="fixed top-[28px] lg:top-[32px] left-[28px] lg:left-[35px] right-[28px] lg:right-auto z-50 flex items-center justify-between lg:justify-start bg-white rounded-full px-5 lg:px-7 py-2 lg:w-[648px] h-[48px] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Voxi Logo" className="h-[36px] lg:h-[45px] w-auto object-contain" />
      </Link>

      {/* Desktop Links */}
      <nav className="hidden lg:flex items-center gap-8 text-[16px] font-medium text-black/70 ml-auto h-full">
        {navItems.map((item) => (
          <div 
            key={item.name} 
            className="flex items-center relative h-[48px]"
            onMouseEnter={() => setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to={item.href}
              className="hover:text-black transition-colors"
            >
              {item.name}
            </Link>

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {activeDropdown === item.name && item.dropdown && (
                <MegaMenu item={item} topPosition="56px" />
              )}
            </AnimatePresence>
          </div>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden flex items-center justify-center text-black/80 ml-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>



    </motion.header>

    {/* Mobile Drawer (Premium Overlay) - Moved outside header to avoid transform containment */}
    <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />

    {/* Right CTA / Floating button for desktop */}
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: easing }}
      className="hidden lg:flex fixed top-[32px] right-[35px] z-50"
    >
      <Link to="/contact">
        <AntiMetalButton label="Hire Team" />
      </Link>
    </motion.div>
    </>
  );
}

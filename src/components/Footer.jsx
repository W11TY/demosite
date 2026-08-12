import React from 'react';
import logo from '../assets/logo.png';
import { FadeInUp, StaggerContainer } from './shared/Motion';

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-background border-t border-border pt-24 pb-12">
      {/* Background Wordmark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-black/[0.02] tracking-tighter pointer-events-none select-none w-full text-center">
        VOXI
      </div>

      <StaggerContainer className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 relative z-10">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
          <FadeInUp className="max-w-md">
            <img src={logo} alt="Voxi Logo" className="h-12 md:h-16 w-auto object-contain mb-4" />
            <p className="text-text-secondary text-[15px]">
              One Ecosystem. One Platform. Every Customer Conversation.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.1} className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-[320px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-surface border border-border rounded-pill py-3 pl-5 pr-32 text-[14px] text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-text-secondary transition-colors"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-text-primary text-background rounded-pill px-4 text-[13px] font-medium hover:bg-black/90 transition-colors">
                Subscribe
              </button>
            </div>
          </FadeInUp>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 border-t border-border pt-16">
          <FadeInUp delay={0.2} className="col-span-2 md:col-span-1">
            <h4 className="text-[13px] font-medium text-text-primary mb-6 uppercase tracking-eyebrow">Product</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Voice AI Solutions</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">WhatsApp Business</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Telephony & Cloud</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">QMS & Analytics</a></li>
            </ul>
          </FadeInUp>
          <FadeInUp delay={0.3} className="col-span-2 md:col-span-1">
            <h4 className="text-[13px] font-medium text-text-primary mb-6 uppercase tracking-eyebrow">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Culture Manifesto</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Contact</a></li>
            </ul>
          </FadeInUp>
          <FadeInUp delay={0.4} className="col-span-2 md:col-span-2">
            <h4 className="text-[13px] font-medium text-text-primary mb-6 uppercase tracking-eyebrow">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[14px] text-text-secondary hover:text-text-primary transition-colors">Security</a></li>
            </ul>
          </FadeInUp>
        </div>

        {/* Bottom Row */}
        <FadeInUp delay={0.5} className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-border pt-8 text-[13px] text-text-secondary">
          <p>© {new Date().getFullYear()} VoxiFlow AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-text-primary transition-colors">GitHub</a>
          </div>
        </FadeInUp>

      </StaggerContainer>
    </footer>
  );
}

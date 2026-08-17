import React from 'react';
import logo from '../assets/logo.png';
import heroImg from '../assets/hero.png';
import { FadeInUp, StaggerContainer } from './shared/Motion';

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-black pt-24 pb-12 mt-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Footer Background" 
          className="w-full h-full object-cover opacity-40 grayscale filter contrast-125 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
      </div>

      {/* Background Wordmark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] lg:text-[20vw] font-bold text-white/[0.03] tracking-tighter pointer-events-none select-none w-full text-center mt-12 lg:mt-0 z-0">
        VOXI
      </div>

      <StaggerContainer className="w-full px-6 lg:px-[58px] relative z-10">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
          <FadeInUp className="max-w-md">
            <img src={logo} alt="Voxi Logo" className="h-12 md:h-16 w-auto object-contain mb-4" />
            <p className="text-white/60 text-[15px]">
              One Ecosystem. One Platform. Every Customer Conversation.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.1} className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-[320px]">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white/5 border border-white/10 rounded-pill py-3 pl-5 pr-32 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-colors backdrop-blur-sm"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-white text-black rounded-pill px-4 text-[13px] font-medium hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </FadeInUp>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16 border-t border-white/10 pt-16">
          <FadeInUp delay={0.2} className="col-span-1">
            <h4 className="text-[13px] font-medium text-white mb-6 uppercase tracking-eyebrow">Product</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">Voice AI Solutions</a></li>
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">WhatsApp Business</a></li>
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">Telephony & Cloud</a></li>
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">QMS & Analytics</a></li>
            </ul>
          </FadeInUp>
          <FadeInUp delay={0.3} className="col-span-1">
            <h4 className="text-[13px] font-medium text-white mb-6 uppercase tracking-eyebrow">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">Culture Manifesto</a></li>
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </FadeInUp>
          <FadeInUp delay={0.4} className="col-span-1 md:col-span-2">
            <h4 className="text-[13px] font-medium text-white mb-6 uppercase tracking-eyebrow">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-[14px] text-white/50 hover:text-white transition-colors">Security</a></li>
            </ul>
          </FadeInUp>
        </div>

        {/* Bottom Row */}
        <FadeInUp delay={0.5} className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-8 text-[13px] text-white/40">
          <p>© {new Date().getFullYear()} VoxiFlow AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </FadeInUp>

      </StaggerContainer>
    </footer>
  );
}

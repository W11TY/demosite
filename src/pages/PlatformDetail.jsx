import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { platforms } from '../data/platform';
import CapabilityPills from '../components/shared/CapabilityPills';
import { FadeInUp, SlideInLeft, SlideInRight } from '../components/shared/Motion';

export default function PlatformDetail() {
  const { id } = useParams();
  const platform = platforms.find(p => p.id === id);

  if (!platform) {
    return <Navigate to="/platform" replace />;
  }

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-[#14110F] selection:bg-[var(--global-accent)]/20">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-[rgba(20,17,15,0.05)] bg-transparent">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none" style={{ backgroundColor: 'color-mix(in srgb, var(--global-accent) 15%, transparent)' }} />
        
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 z-10">
          <Link 
            to="/platform"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#14110F]/40 hover:text-[var(--global-accent)] transition-colors mb-12 uppercase font-bold"
          >
            <ArrowLeft size={16} />
            BACK TO PLATFORM
          </Link>
          
          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-[var(--global-accent)] uppercase font-bold transition-colors duration-300">
                {platform.shortName}
              </span>
              <span className="text-[#14110F]/30">•</span>
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.1em] text-[#14110F]/50 uppercase font-bold">
                {platform.tagline}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(40px,7vw,84px)] font-medium tracking-tighter leading-[1.05] text-[#14110F] mb-8"
            >
              {platform.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] md:text-[22px] text-[#14110F]/60 leading-[1.6] max-w-[700px] font-bold"
            >
              {platform.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="w-full py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="flex flex-col gap-16">
            
            {/* Header */}
            <SlideInLeft>
              <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--global-dark-accent)] uppercase font-bold block mb-4 transition-colors duration-300">
                01 / CORE FEATURES
              </span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight text-[#14110F] leading-[1.2] mb-6">
                Platform Capabilities
              </h2>
              <p className="text-[16px] text-[#14110F]/60 leading-[1.6] font-bold max-w-[600px]">
                Discover how {platform.shortName} enables you to automate, orchestrate, and optimize your business processes.
              </p>
            </SlideInLeft>

            {/* Pills Display */}
            <FadeInUp delay={0.15} className="w-full">
              <CapabilityPills capabilities={platform.capabilities} />
            </FadeInUp>
            
          </div>
        </div>
      </section>

    </div>
  );
}


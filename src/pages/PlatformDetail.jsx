import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { platforms } from '../data/platform';
import CapabilityRow from '../components/shared/CapabilityRow';

export default function PlatformDetail() {
  const { id } = useParams();
  const platform = platforms.find(p => p.id === id);

  if (!platform) {
    return <Navigate to="/platform" replace />;
  }

  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 z-10">
          <Link 
            to="/platform"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Platform
          </Link>
          
          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="inline-block px-3 py-1 rounded-[4px] bg-surface border border-border text-[11px] font-mono text-text-primary">
                {platform.shortName}
              </span>
              <span className="text-eyebrow">{platform.tagline}</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[48px] md:text-[72px] lg:text-[84px] font-semibold tracking-tight leading-[1.05] text-text-primary mb-8"
            >
              {platform.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] md:text-[22px] text-text-secondary leading-relaxed max-w-[700px]"
            >
              {platform.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="w-full py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* Sticky Sidebar */}
            <div className="md:w-[320px] shrink-0">
              <div className="sticky top-32">
                <span className="text-eyebrow block mb-4">Core Features</span>
                <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-tight text-text-primary mb-6">
                  Platform Capabilities
                </h2>
                <p className="text-[15px] text-text-secondary leading-relaxed">
                  Discover how {platform.shortName} enables you to automate, orchestrate, and optimize your business processes.
                </p>
              </div>
            </div>

            {/* Accordion List */}
            <div className="flex-1 w-full">
              <CapabilityRow capabilities={platform.capabilities} />
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}

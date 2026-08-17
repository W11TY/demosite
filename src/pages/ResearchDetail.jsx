import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { research } from '../data/research';
import CapabilityRow from '../components/shared/CapabilityRow';

export default function ResearchDetail() {
  const { id } = useParams();
  const theme = research.find(r => r.id === id);

  if (!theme) {
    return <Navigate to="/research" replace />;
  }

  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 z-10">
          <Link 
            to="/research"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Research
          </Link>
          
          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="inline-block px-3 py-1 rounded-[4px] bg-surface border border-border text-[11px] font-mono text-text-primary uppercase tracking-wider">
                Voxi Research Theme
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[48px] md:text-[72px] lg:text-[84px] font-semibold tracking-tight leading-[1.05] text-text-primary mb-8"
            >
              {theme.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[18px] md:text-[22px] text-text-secondary leading-relaxed max-w-[700px]"
            >
              {theme.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Sub Items List */}
      <section className="w-full py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            
            {/* Sticky Sidebar */}
            <div className="md:w-[320px] shrink-0">
              <div className="sticky top-32">
                <span className="text-eyebrow block mb-4">Research Focus</span>
                <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-tight text-text-primary mb-6">
                  Key Capabilities
                </h2>
                <p className="text-[15px] text-text-secondary leading-relaxed">
                  Explore the specific areas and technologies we are developing under the {theme.title} theme.
                </p>
              </div>
            </div>

            {/* Accordion List */}
            <div className="flex-1 w-full">
              {theme.subItems && theme.subItems.length > 0 ? (
                <CapabilityRow capabilities={theme.subItems} />
              ) : (
                <div className="p-8 rounded-[16px] bg-surface/20 border border-border border-dashed flex items-center justify-center">
                  <span className="text-[15px] text-text-secondary">
                    Research in progress. Details coming soon.
                  </span>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}

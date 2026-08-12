import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { platforms } from '../data/platform';

const gradients = [
  'from-blue-500/20 to-indigo-900/40',
  'from-green-500/20 to-emerald-900/40',
  'from-purple-500/20 to-fuchsia-900/40',
  'from-orange-500/20 to-red-900/40',
  'from-cyan-500/20 to-blue-900/40'
];

export default function PlatformOverview() {
  return (
    <div className="w-full pt-32 pb-24 bg-background min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        
        {/* Header */}
        <div className="max-w-[800px] mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-eyebrow block mb-6"
          >
            The Platform
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[48px] md:text-[72px] lg:text-[84px] font-semibold tracking-tight leading-[1.05] text-text-primary"
          >
            The complete toolkit for autonomous customer orchestration.
          </motion.h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/platform/${platform.id}`} className="block group h-full">
                <div className="flex flex-col bg-surface border border-border rounded-card overflow-hidden h-full">
                  {/* Visual Top */}
                  <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center p-6 border-b border-border overflow-hidden`}>
                    <div className="absolute top-4 left-4 glass-nav px-3 py-1 rounded-pill border border-black/10">
                      <span className="text-[11px] font-medium text-text-primary uppercase tracking-wider">
                        {platform.shortName}
                      </span>
                    </div>
                    
                    {/* Abstract shape representing the platform */}
                    <div className="w-[120px] h-[120px] rounded-[24px] bg-black/5 border border-black/10 backdrop-blur-md shadow-2xl group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center">
                       <div className="w-12 h-12 rounded-full bg-black/20 animate-pulse" />
                    </div>
                  </div>

                  {/* Content Bottom */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-[24px] font-semibold tracking-tight text-text-primary mb-3">
                      {platform.name}
                    </h3>
                    <p className="text-[15px] text-text-secondary leading-relaxed mb-6">
                      {platform.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-[14px] font-medium text-text-primary group-hover:opacity-70 transition-opacity">
                        Explore capabilities &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

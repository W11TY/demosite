import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { solutions } from '../data/solutions';
import UseCaseList from '../components/shared/UseCaseList';
import StatCallout from '../components/shared/StatCallout';

export default function SolutionDetail() {
  const { id } = useParams();
  const solution = solutions.find(s => s.id === id);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="w-full bg-background min-h-screen">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-border">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 z-10">
          <Link 
            to="/solutions"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors mb-12"
          >
            <ArrowLeft size={16} />
            Back to Solutions
          </Link>
          
          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="inline-block px-3 py-1 rounded-[4px] bg-surface border border-border text-[11px] font-mono text-text-primary uppercase tracking-wider">
                {solution.industry}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[48px] md:text-[72px] lg:text-[84px] font-semibold tracking-tight leading-[1.05] text-text-primary mb-8"
            >
              {solution.area || 'Customer Intelligence Platform'}
            </motion.h1>
            
            {solution.benefits && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[18px] md:text-[22px] text-text-secondary leading-relaxed max-w-[700px]"
              >
                {solution.benefits}
              </motion.p>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-24 md:py-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
            
            {/* Use Cases */}
            <div className="lg:col-span-7">
              <span className="text-eyebrow block mb-4">Use Cases</span>
              <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight leading-tight text-text-primary mb-10">
                How it works in {solution.industry}
              </h2>
              <UseCaseList useCases={solution.useCases} />
            </div>

            {/* Stats / Results */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 p-8 rounded-[24px] bg-surface border border-border">
                <span className="text-eyebrow block mb-8">Business Impact</span>
                
                {solution.stats && solution.stats.length > 0 ? (
                  <div className="flex flex-col gap-8">
                    {solution.stats.map((stat, idx) => (
                      <StatCallout key={idx} stat={stat} index={idx} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 text-text-secondary text-[15px]">
                    <p>
                      Automate operations, engage leads instantly, and drive scalable growth with AI-powered communication.
                    </p>
                    <p>
                      Contact our sales team to request a detailed case study for the {solution.industry} sector.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}

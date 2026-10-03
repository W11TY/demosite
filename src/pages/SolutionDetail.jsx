import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { solutions } from '../data/solutions';
import UseCaseList from '../components/shared/UseCaseList';
import StatCallout from '../components/shared/StatCallout';
import { FadeInUp, SlideInLeft, SlideInRight } from '../components/shared/Motion';

export default function SolutionDetail() {
  const { id } = useParams();
  const solution = solutions.find(s => s.id === id);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <div className="w-full bg-[#FAFAFA] min-h-screen text-[#14110F] selection:bg-[var(--global-accent)]/20">
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-[rgba(20,17,15,0.05)] bg-transparent">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none" style={{ backgroundColor: 'color-mix(in srgb, var(--global-accent) 15%, transparent)' }} />
        
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 z-10">
          <Link 
            to="/solutions"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#14110F]/40 hover:text-[var(--global-accent)] transition-colors mb-12 uppercase font-bold"
          >
            <ArrowLeft size={16} />
            BACK TO SOLUTIONS
          </Link>
          
          <div className="max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.2em] text-[var(--global-accent)] uppercase font-bold transition-colors duration-300">
                {solution.industry}
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(40px,7vw,84px)] font-medium tracking-tighter leading-[1.05] text-[#14110F] mb-8"
            >
              {solution.area || 'Customer Intelligence Platform'}
            </motion.h1>
            
            {solution.benefits && (
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-[18px] md:text-[22px] text-[#14110F]/60 leading-[1.6] max-w-[700px] font-bold"
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
            <SlideInLeft className="lg:col-span-7">
              <span className="font-mono text-[11px] tracking-[0.2em] text-[var(--global-dark-accent)] uppercase font-bold block mb-4 transition-colors duration-300">
                01 / USE CASES
              </span>
              <h2 className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight text-[#14110F] leading-[1.2] mb-10">
                How it works in {solution.industry}
              </h2>
              <UseCaseList useCases={solution.useCases} />
            </SlideInLeft>

            {/* Stats / Results */}
            <SlideInRight delay={0.1} className="lg:col-span-5">
              <div className="sticky top-32 p-8 rounded-[24px] bg-white border border-[rgba(20,17,15,0.05)] shadow-[0_10px_40px_rgba(20,17,15,0.02)]">
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#14110F]/40 uppercase font-bold block mb-8">
                  Business Impact
                </span>
                
                {solution.stats && solution.stats.length > 0 ? (
                  <div className="flex flex-col gap-8">
                    {solution.stats.map((stat, idx) => (
                      <StatCallout key={idx} stat={stat} index={idx} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 text-[#14110F]/60 text-[15px] font-bold leading-relaxed">
                    <p>
                      Automate operations, engage leads instantly, and drive scalable growth with AI-powered communication.
                    </p>
                    <p>
                      Contact our sales team to request a detailed case study for the {solution.industry} sector.
                    </p>
                  </div>
                )}
              </div>
            </SlideInRight>
            
          </div>
        </div>
      </section>

    </div>
  );
}


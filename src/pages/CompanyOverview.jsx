import React from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, StaggerContainer, ScrollWordReveal } from '../components/shared/Motion';
import heroImg from '../assets/hero.png';
import {
  IllustrationInnovation,
  IllustrationReliability,
  IllustrationImpact
} from '../components/shared/CardIllustrations';

export default function CompanyOverview() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Cinematic Header */}
      <div className="w-full flex justify-center p-3 lg:p-[12px]">
        <section className="relative w-full max-w-[1600px] min-h-[50vh] lg:min-h-[400px] rounded-[24px] overflow-hidden bg-[#0c0c0c] shadow-sm isolate flex flex-col justify-end pb-16 lg:pb-20 px-6 lg:px-[58px]">
          {/* Abstract Dark Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-[#0c0c0c]">
            <img src={heroImg} alt="Hero Backdrop" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4d7aff]/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/60 to-transparent" />
          </div>

          <div className="relative z-20 max-w-[800px] mt-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase mb-6 block"
            >
              Company
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(40px,8vw,64px)] font-medium tracking-[-0.04em] leading-[1.05] text-white"
            >
              Automate the manual, <span className="text-white/40">accelerate the future.</span>
            </motion.h1>
          </div>
        </section>
      </div>

      {/* Grid Section */}
      <section className="w-full pt-[80px] pb-[120px] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 text-center">
          <StaggerContainer>
            <ScrollWordReveal 
              as="h2" 
              className="text-[24px] md:text-[32px] font-medium text-[#111] leading-snug max-w-[900px] mx-auto mb-16 tracking-tight"
              text="Our custom AI solutions deliver measurable growth and operational excellence. Empowering teams with intelligent tools that turn complex challenges into simple workflows."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {[
                { title: "Innovation", desc: "We constantly push the boundaries of AI capabilities to deliver state-of-the-art solutions." },
                { title: "Reliability", desc: "Built on a high-performance architecture trusted by global enterprises for zero-downtime operations." },
                { title: "Impact", desc: "Our core metric is customer success, driving tangible business outcomes over abstract capabilities." }
              ].map((val, idx) => (
                <FadeInUp delay={0.2 + (idx * 0.1)} key={idx} className="bg-[#f7f7f7] rounded-[24px] p-8 border border-black/[0.04] brutalist-card group">
                  <div className="w-full aspect-[16/9] rounded-[16px] bg-white border border-black/[0.03] shadow-sm mb-6 flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                    {idx === 0 && <IllustrationInnovation />}
                    {idx === 1 && <IllustrationReliability />}
                    {idx === 2 && <IllustrationImpact />}
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#111] mb-3">{val.title}</h3>
                  <p className="text-[15px] text-black/60 leading-relaxed">{val.desc}</p>
                </FadeInUp>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}

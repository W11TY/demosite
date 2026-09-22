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
                  <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden mb-6 border border-black/[0.04] transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="absolute inset-0 bg-white flex flex-col">
                      {/* Mac titlebar */}
                      <div className="px-4 py-2.5 border-b border-black/5 flex items-center gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-400/60" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                        <div className="w-2 h-2 rounded-full bg-green-400/60" />
                        <span className="text-[9px] font-mono text-black/25 ml-2 tracking-wide">{['Innovation','Reliability','Impact'][idx]}</span>
                      </div>
                      <div className="p-4 flex-1 overflow-hidden flex flex-col gap-2">
                        {idx === 0 && (
                          /* Innovation — feature release / product launch */
                          <>
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                              <span className="text-[9px] font-mono text-black/35 uppercase tracking-widest">AI Model v4.2 · Deploying</span>
                            </div>
                            {[{l:'Inference Speed',v:'+40%',c:'text-purple-600'},{l:'Accuracy',v:'98.7%',c:'text-blue-600'},{l:'Latency',v:'-60ms',c:'text-emerald-600'}].map((s,j)=>(
                              <div key={j} className="flex items-center gap-2 px-2.5 py-1.5 rounded-[7px] bg-[#f7f7f7]">
                                <span className={`text-[12px] font-bold ${s.c} w-10 shrink-0`}>{s.v}</span>
                                <span className="text-[9px] text-black/45">{s.l}</span>
                              </div>
                            ))}
                            <div className="px-2.5 py-1.5 bg-purple-50 border border-purple-100 rounded-[7px] mt-auto">
                              <span className="text-[9px] text-purple-700">New: Multimodal reasoning · Live in prod</span>
                            </div>
                          </>
                        )}
                        {idx === 1 && (
                          /* Reliability — uptime / infrastructure */
                          <>
                            <div className="flex justify-between mb-1">
                              <span className="text-[9px] font-mono text-black/35 uppercase tracking-widest">System Status</span>
                              <span className="text-[9px] font-semibold text-emerald-500">All Systems Go</span>
                            </div>
                            {['AI Voice Agents','WhatsApp Platform','Telephony Core','Analytics Engine'].map((svc,j)=>(
                              <div key={j} className="flex items-center gap-2 px-2.5 py-1.5 rounded-[7px] bg-[#f7f7f7]">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                <span className="text-[9px] text-black/60 flex-1">{svc}</span>
                                <span className="text-[9px] font-mono text-emerald-500">99.9%</span>
                              </div>
                            ))}
                          </>
                        )}
                        {idx === 2 && (
                          /* Impact — business outcomes */
                          <>
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                              <span className="text-[9px] font-mono text-black/35 uppercase tracking-widest">Client Outcomes</span>
                            </div>
                            {[{l:'Revenue Generated',v:'$45M+',c:'text-orange-500'},{l:'Avg. CAC Reduction',v:'3x',c:'text-emerald-600'},{l:'Conversations/Day',v:'2.4M',c:'text-blue-600'}].map((s,j)=>(
                              <div key={j} className="flex items-center gap-2 px-2.5 py-1.5 rounded-[7px] bg-[#f7f7f7]">
                                <span className={`text-[13px] font-bold ${s.c} w-12 shrink-0`}>{s.v}</span>
                                <span className="text-[9px] text-black/45">{s.l}</span>
                              </div>
                            ))}
                          </>
                        )}
                      </div>
                    </div>
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

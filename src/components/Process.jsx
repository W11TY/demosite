import React, { useState } from 'react';
import { FadeInUp } from './shared/Motion';

const steps = [
  {
    num: "01",
    title: "Discovery & Solution Design",
    desc: "We start by deeply understanding your business processes, mapping out customer journeys, and configuring the AI to align with your specific objectives and compliance needs.",
  },
  {
    num: "02",
    title: "Implementation & Integration",
    desc: "Our team seamlessly integrates the Voxi platform with your existing CRM, ERP, and telephony infrastructure via robust APIs and webhooks without disrupting operations.",
  },
  {
    num: "03",
    title: "User Training & Change Mgmt",
    desc: "We ensure your team is fully equipped to leverage the platform, providing comprehensive training, agent desktop walkthroughs, and operational best practices.",
  },
  {
    num: "04",
    title: "Monitoring & Optimization",
    desc: "Post go-live, we actively monitor AI performance, conversational quality, and business KPIs, continuously tuning the models to maximize your ROI.",
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full bg-[#171717] pt-[100px] pb-[100px] md:pt-[200px] md:pb-[200px] overflow-hidden">
      <div className="w-full px-6 lg:px-[58px] grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-8 items-center relative">

        {/* Left Column: Typographic Monument */}
        <div className="flex flex-col items-start h-full justify-center lg:pr-8">

          {/* Eyebrow Capsule */}
          <FadeInUp className="flex items-center gap-4 mb-12 lg:mb-16 w-full">
            <div className="w-10 h-6 rounded-full border border-white/20 flex items-center justify-center bg-transparent shrink-0" />
            <div className="h-px bg-white/10 w-24" />
            <span className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase shrink-0">
              Our Methodology
            </span>
          </FadeInUp>

          {/* Description */}
          <FadeInUp delay={0.1} className="text-[16px] md:text-[17px] text-white/60 max-w-[500px] leading-[1.6] mb-12">
            Technology alone doesn't deliver success. Implementation does. We work closely with you from discovery to optimization to ensure measurable business outcomes.
          </FadeInUp>

          {/* Hero Heading */}
          <FadeInUp delay={0.2} as="h2" className="text-[clamp(44px,11vw,78px)] font-medium tracking-[-0.045em] leading-[0.98] text-[#F5F5F5] max-w-[600px]">
            The 90-Day Success<br />Framework.
          </FadeInUp>

        </div>

        {/* Right Column: Technical Framework Card Stack */}
        <div className="flex flex-col w-full">
          {/* Desktop 3D Stacked Deck (Hidden on Mobile) */}
          <div className="hidden lg:flex relative w-full h-[750px] items-center justify-end pr-[160px] group cursor-default">
            
            {steps.map((step, i) => {
              const rel = (i - activeStep + 4) % 4;
              const isFront = rel === 0;

              // Deck positioning configs for rel = 0 (front), 1, 2, 3 (side stack)
              const positions = [
                { top: 'top-0 bottom-0', right: 'right-[160px]', width: 'w-[480px] xl:w-[540px]', zIndex: 'z-30', bg: 'bg-[#1c1c1c]', rounded: 'rounded-[24px]' },
                { top: 'top-[5%] bottom-[5%]', right: 'right-[100px]', width: 'w-[140px]', zIndex: 'z-20', bg: 'bg-[#1a1a1a]', rounded: 'rounded-r-[24px]' },
                { top: 'top-[10%] bottom-[10%]', right: 'right-[40px]', width: 'w-[140px]', zIndex: 'z-10', bg: 'bg-[#141414]', rounded: 'rounded-r-[24px]' },
                { top: 'top-[15%] bottom-[15%]', right: 'right-[-20px]', width: 'w-[140px]', zIndex: 'z-0', bg: 'bg-[#0d0d0d]', rounded: 'rounded-r-[24px]' }
              ];

              const config = positions[rel];

              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(i)}
                  className={`absolute ${config.top} ${config.right} ${config.width} ${config.zIndex} ${config.bg} ${config.rounded} border border-white/10 transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl overflow-hidden cursor-pointer group/card${isFront ? ' brutalist-card' : ''}`}
                >
                  {isFront ? (
                    /* Full Upfront Front Card */
                    <div className="w-full h-full flex flex-col justify-between">
                      {/* Top Area */}
                      <div className="p-8 md:p-12 flex justify-between items-start border-b border-white/5 relative z-10 bg-[#1c1c1c]">
                        <div>
                          <div className="text-[11px] font-mono text-white/40 tracking-wider uppercase mb-2">
                            Phase {step.num}
                          </div>
                          <h3 className="text-[28px] md:text-[34px] text-white font-medium tracking-tight mb-4 leading-none">
                            {step.title}
                          </h3>
                          <p className="text-[14px] text-white/50 leading-relaxed max-w-[340px]">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* SVG Architecture Diagram */}
                      <div className="flex-1 relative w-full h-full overflow-hidden opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-[#171717]">
                        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                          <path d="M100 250 L280 150 L460 250 L280 350 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                          <line x1="280" y1="150" x2="280" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                          <line x1="190" y1="200" x2="190" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                          <line x1="370" y1="200" x2="370" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                          <circle cx="280" cy="80" r="4" fill="rgba(255,255,255,0.3)" />
                          <circle cx="190" cy="130" r="4" fill="rgba(255,255,255,0.3)" />
                          <circle cx="370" cy="130" r="4" fill="rgba(255,255,255,0.3)" />
                          <path d="M250 200 L280 180 L310 200 L310 240 L280 260 L250 240 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                          <circle cx="280" cy="220" r="2" fill="white" />
                          <rect x="360" y="280" width="40" height="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                          <line x1="380" y1="290" x2="390" y2="290" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    /* Side Stacked Deck Card */
                    <div className="w-full h-full flex flex-col items-center justify-between py-12 group-hover/card:translate-x-[15px] transition-transform duration-300">
                      <span className="text-[11px] font-mono text-white/40">{step.num}</span>
                      <div className="text-[13px] font-mono tracking-[0.2em] text-white/40 group-hover/card:text-white uppercase rotate-180 whitespace-nowrap transition-colors duration-300" style={{ writingMode: 'vertical-rl' }}>
                        {step.title}
                      </div>
                      <div className="w-1.5 h-1.5 bg-white/20 group-hover/card:bg-white rounded-full transition-colors duration-300" />
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Mobile Layout (< lg) */}
          <div className="flex flex-col lg:hidden w-full">
            {/* Active Mobile Card */}
            <div className="w-full bg-[#1c1c1c] border border-white/10 rounded-[20px] p-6 flex flex-col justify-between mb-4 shadow-xl brutalist-card">
              <div className="text-[11px] font-mono text-white/40 tracking-wider uppercase mb-2">
                Phase {steps[activeStep].num}
              </div>
              <h3 className="text-[24px] text-white font-medium tracking-tight mb-3">
                {steps[activeStep].title}
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Mobile Step Selectors */}
            <div className="flex overflow-x-auto gap-3 w-full pb-2 hide-scrollbar snap-x snap-mandatory">
              {steps.map((step, idx) => (
                <button
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`px-4 py-3 rounded-xl border text-left shrink-0 transition-all duration-300 snap-center min-w-[140px] flex items-center justify-between ${
                    activeStep === idx
                      ? 'bg-white/15 border-white/30 text-white font-semibold shadow-md'
                      : 'bg-white/[0.03] border-white/10 text-white/50 hover:text-white/80'
                  }`}
                >
                  <span className="text-[12px] font-mono">{step.num}</span>
                  <span className="text-[12px] truncate ml-2">{step.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';
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

        {/* Right Column: Technical Framework */}
        <div className="flex flex-col w-full">
          <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] flex items-center justify-start lg:justify-end lg:pr-[160px] group cursor-default">
            
            {/* Primary Frame */}
            <FadeInUp delay={0.3} className="w-full lg:w-[480px] xl:w-[560px] h-full relative z-30 shadow-2xl">
              <div className="w-full h-full bg-[#1c1c1c] border border-white/10 group-hover:border-white/20 transition-colors duration-500 rounded-[24px] flex flex-col justify-between overflow-hidden">
              
              {/* Top Area */}
              <div className="p-8 md:p-12 flex justify-between items-start border-b border-white/5 relative z-10 bg-[#1c1c1c]">
                <div>
                  <h3 className="text-[28px] md:text-[36px] text-white font-medium tracking-tight mb-4 leading-none">
                    {steps[0].title}
                  </h3>
                  <p className="text-[14px] text-white/50 leading-relaxed max-w-[340px]">
                    {steps[0].desc}
                  </p>
                </div>
              </div>

              {/* Technical Visual Language (SVG Diagram) */}
              <div className="flex-1 relative w-full h-full overflow-hidden opacity-30 group-hover:opacity-60 transition-opacity duration-500 bg-[#171717]">
                 {/* Faint Grid */}
                 <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                 
                 {/* SVG Architecture Diagram */}
                 <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
                    {/* Base ISO plane */}
                    <path d="M100 250 L280 150 L460 250 L280 350 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                    
                    {/* Vertical connect lines */}
                    <line x1="280" y1="150" x2="280" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <line x1="190" y1="200" x2="190" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    <line x1="370" y1="200" x2="370" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                    
                    {/* Data Nodes */}
                    <circle cx="280" cy="80" r="4" fill="rgba(255,255,255,0.3)" />
                    <circle cx="190" cy="130" r="4" fill="rgba(255,255,255,0.3)" />
                    <circle cx="370" cy="130" r="4" fill="rgba(255,255,255,0.3)" />
                    
                    {/* Central Core Shape */}
                    <path d="M250 200 L280 180 L310 200 L310 240 L280 260 L250 240 Z" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                    <circle cx="280" cy="220" r="2" fill="white" />
                    
                    {/* Floating abstract tech elements */}
                    <rect x="360" y="280" width="40" height="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                    <line x1="380" y1="290" x2="390" y2="290" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                 </svg>
              </div>
             </div>
            </FadeInUp>

            {/* Secondary Card (002) */}
            <FadeInUp delay={0.4} className="hidden lg:block absolute top-[6%] bottom-[6%] right-[80px] w-[140px] z-20 pointer-events-none">
              <div className="w-full h-full bg-[#1a1a1a] border border-white/5 rounded-r-[24px] flex flex-col items-center justify-between py-12 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[60px] shadow-xl">

                <div className="text-[13px] font-mono tracking-[0.2em] text-white/30 uppercase rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                  {steps[1].title}
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
              </div>
            </FadeInUp>

            {/* Tertiary Card (003) */}
            <FadeInUp delay={0.5} className="hidden lg:block absolute top-[12%] bottom-[12%] right-[0px] w-[140px] z-10 pointer-events-none">
              <div className="w-full h-full bg-[#141414] border border-white/5 rounded-r-[24px] flex flex-col items-center justify-between py-12 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[120px] shadow-xl">

                <div className="text-[13px] font-mono tracking-[0.2em] text-white/20 uppercase rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                  {steps[2].title}
                </div>
                <div className="w-1 h-1 bg-white/10 rounded-full" />
              </div>
            </FadeInUp>

            {/* Quaternary Card (004) */}
            <FadeInUp delay={0.6} className="hidden lg:block absolute top-[18%] bottom-[18%] right-[-80px] w-[140px] z-0 pointer-events-none">
              <div className="w-full h-full bg-[#0d0d0d] border border-white/5 rounded-r-[24px] flex flex-col items-center justify-between py-12 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[180px] shadow-xl">

                <div className="text-[13px] font-mono tracking-[0.2em] text-white/20 uppercase rotate-180 whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                  {steps[3].title}
                </div>
                <div className="w-1 h-1 bg-white/10 rounded-full" />
              </div>
            </FadeInUp>
            
          </div>

          {/* Mobile Secondary Cards */}
          <div className="flex lg:hidden overflow-x-auto gap-4 mt-6 w-full pb-4 hide-scrollbar snap-x snap-mandatory pr-6">
            {steps.slice(1).map((step, idx) => (
               <div key={idx} className="min-w-[280px] snap-center bg-[#1a1a1a] border border-white/5 rounded-[16px] p-6 flex flex-col justify-between min-h-[160px]">
                 <div className="flex justify-end items-center mb-4">
                   <div className="w-1 h-1 bg-white/20 rounded-full" />
                 </div>
                 <h4 className="text-[14px] text-white/60 font-medium">{step.title}</h4>
               </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

import fs from 'fs';
const file = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(file, 'utf8');

// Chapter 0 Replacement
const oldCh0 = `<h2 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.1] mb-8">
               Customer conversations don't happen in one place. They happen everywhere.
             </h2>
             <p className="text-[18px] md:text-[20px] text-[#14110F]/70 leading-relaxed font-light mb-16">
               Fragmented tools create broken journeys, isolated context, and frustrated customers. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent ecosystem. That's why we built the Voxi CX Operating System.
             </p>`;

const newCh0 = `<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16">
               <div className="lg:col-span-7 flex flex-col justify-center">
                 <h2 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.1] mb-8">
                   Customer conversations don't happen in one place. They happen everywhere.
                 </h2>
                 <p className="text-[18px] md:text-[20px] text-[#14110F]/70 leading-relaxed font-light">
                   Fragmented tools create broken journeys, isolated context, and frustrated customers. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent ecosystem. That's why we built the Voxi CX Operating System.
                 </p>
               </div>
               <div className="lg:col-span-5 flex items-center justify-center">
                 <IllustrationCard 
                   illustration={IllustrationInnovation}
                   accent="var(--global-accent)"
                   tint="var(--global-tint)"
                   dark="var(--global-dark-accent)"
                 />
               </div>
             </div>`;

content = content.replace(oldCh0, newCh0);


// Chapter 1 Replacement
const oldCh1 = `<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight text-[#14110F] leading-[1.15] mb-6">
                     Our AI Voice Agents don't just automate calls—they understand context, adapt in real time, and communicate naturally like a human.
                   </h2>
                   <p className="text-[17px] text-[#14110F]/70 leading-[1.8] font-light">
                     Every interaction is personalized, every conversation is meaningful, and every customer journey is intelligently orchestrated.
                   </p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {STATS.map((stat, i) => (
                    <div key={i}>
                      <div className="text-[clamp(36px,4vw,48px)] font-bold text-[#14110F] tracking-tight leading-none mb-2">
                        {stat.value}
                      </div>
                      <div className="text-[12px] text-[#14110F]/50 font-mono uppercase tracking-[0.2em]">{stat.label}</div>
                    </div>
                  ))}
                </div>
             </div>`;

const newCh1 = `<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <div className="lg:col-span-7 flex flex-col justify-center">
                   <h2 className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight text-[#14110F] leading-[1.15] mb-6">
                     Our AI Voice Agents don't just automate calls—they understand context, adapt in real time, and communicate naturally like a human.
                   </h2>
                   <p className="text-[17px] text-[#14110F]/70 leading-[1.8] font-light mb-12">
                     Every interaction is personalized, every conversation is meaningful, and every customer journey is intelligently orchestrated.
                   </p>
                   
                   <div className="grid grid-cols-2 gap-8">
                     {STATS.map((stat, i) => (
                       <div key={i}>
                         <div className="text-[clamp(36px,4vw,48px)] font-bold text-[#14110F] tracking-tight leading-none mb-2">
                           {stat.value}
                         </div>
                         <div className="text-[12px] text-[#14110F]/50 font-mono uppercase tracking-[0.2em]">{stat.label}</div>
                       </div>
                     ))}
                   </div>
                </div>
                <div className="lg:col-span-5 flex items-center justify-center">
                   <IllustrationCard 
                     illustration={IllustrationIntelligentAgents}
                     accent="var(--global-accent)"
                     tint="var(--global-tint)"
                     dark="var(--global-dark-accent)"
                   />
                </div>
             </div>`;

content = content.replace(oldCh1, newCh1);


// Chapter 2 Replacement (Timeline)
const oldCh2Start = `<div className="mb-16">
               <ScrollWordReveal 
                 text="Technology Alone Doesn't Deliver Success. Implementation Does."`;

const oldCh2End = `                     </p>
                   </div>
                 </div>
               ))}
             </div>`;

const newCh2 = `<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
               <div className="lg:col-span-7">
                 <div className="mb-16">
                   <ScrollWordReveal 
                     text="Technology Alone Doesn't Deliver Success. Implementation Does."
                     as="h2"
                     className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.08] mb-6"
                   />
                   <ScrollWordReveal 
                     text="Our Customer Success and Implementation teams work closely with customers through every stage. Our 90-Day Success Framework ensures every deployment delivers measurable business outcomes."
                     as="p"
                     className="text-[18px] text-[#14110F]/70 leading-[1.75] font-light max-w-[800px]"
                   />
                 </div>

                 <div className="relative pl-6 md:pl-10">
                   <div className="absolute top-0 bottom-0 left-[11px] md:left-[19px] w-px bg-[rgba(20,17,15,0.1)]" />
                   
                   {FRAMEWORK_STAGES.map((stage, idx) => (
                     <div key={idx} className="relative mb-16 last:mb-0 group">
                       <motion.div 
                         className="absolute -left-[30px] md:-left-[38px] top-1 w-4 h-4 rounded-full border-2 border-[#F5F1EA] bg-[rgba(20,17,15,0.2)] transition-all duration-300"
                         whileInView={{ 
                           backgroundColor: "#10b981",
                           borderColor: "#10b981",
                           boxShadow: "0 0 15px 4px rgba(16, 185, 129, 0.4)"
                         }}
                         viewport={{ margin: "-50% 0px -50% 0px" }}
                       />
                       
                       <div className="flex flex-col">
                         <div className="flex items-center gap-3 mb-2">
                           <span className="font-mono text-[12px] font-bold text-[var(--global-dark-accent)] tracking-widest uppercase">
                             Stage {stage.step}
                           </span>
                           <span className="text-[#14110F]/20">•</span>
                           <span className="font-mono text-[12px] text-[#14110F]/50 tracking-wider">
                             {stage.timeline}
                           </span>
                         </div>
                         <h3 className="text-[20px] md:text-[26px] font-medium text-[#14110F] tracking-tight mb-3">
                           {stage.title}
                         </h3>
                         <p className="text-[16px] text-[#14110F]/70 leading-[1.6] font-light max-w-[700px]">
                           {stage.description}
                         </p>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
               
               <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-40 h-fit">
                 <IllustrationCard 
                   illustration={IllustrationImpact}
                   accent="var(--global-accent)"
                   tint="var(--global-tint)"
                   dark="var(--global-dark-accent)"
                 />
               </div>
             </div>`;

const ch2StartIndex = content.indexOf(oldCh2Start);
const ch2EndIndex = content.indexOf(oldCh2End) + oldCh2End.length;

if(ch2StartIndex !== -1 && ch2EndIndex !== -1) {
    content = content.slice(0, ch2StartIndex) + newCh2 + content.slice(ch2EndIndex);
}

fs.writeFileSync(file, content);
console.log('AboutPage updated successfully');

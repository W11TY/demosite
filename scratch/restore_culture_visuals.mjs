import fs from 'fs';
const file = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Re-add the Visual components before CulturePage
const visualsCode = `
const VisualIntersection = () => (
  <div className="w-full max-w-[500px] mx-auto py-12 relative flex items-center justify-center h-[300px] md:h-[400px]">
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute inset-0 flex items-center justify-center">
      <div className="absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border border-[var(--global-accent)]/20 -translate-x-8 -translate-y-8 md:-translate-x-10 md:-translate-y-10 flex items-center justify-center">
         <span className="font-mono text-[10px] tracking-widest text-[var(--global-accent)]/50 absolute top-4">WORK</span>
      </div>
      <div className="absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border border-[var(--global-accent)]/20 translate-x-8 -translate-y-8 md:translate-x-10 md:-translate-y-10 flex items-center justify-center">
         <span className="font-mono text-[10px] tracking-widest text-[var(--global-accent)]/50 absolute top-4">LIFE</span>
      </div>
      <div className="absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border border-[var(--global-accent)]/20 -translate-x-8 translate-y-8 md:-translate-x-10 md:translate-y-10 flex items-center justify-center">
         <span className="font-mono text-[10px] tracking-widest text-[var(--global-accent)]/50 absolute bottom-4">FAMILY</span>
      </div>
      <div className="absolute w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full border border-[var(--global-accent)]/20 translate-x-8 translate-y-8 md:translate-x-10 md:translate-y-10 flex items-center justify-center">
         <span className="font-mono text-[10px] tracking-widest text-[var(--global-accent)]/50 absolute bottom-4">AMBITION</span>
      </div>
    </motion.div>
    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full z-10 shadow-[0_0_20px_rgba(0,0,0,0.2)] bg-[var(--global-accent)] transition-colors duration-300" />
  </div>
);

const VisualCuriosity = () => (
  <div className="flex flex-col gap-6 max-w-[400px] mx-auto py-12 pl-12 border-l border-[var(--global-accent)]/20">
     {['WHY?', 'WHAT IF?', 'HOW?', 'BUILD', 'LEARN', 'REPEAT'].map((q, i) => (
       <motion.div 
         key={q}
         initial={{ opacity: 0, x: -20 }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true, margin: "-100px" }}
         transition={{ duration: 0.5, delay: i*0.1 }}
         className="flex items-center gap-4 relative"
       >
         <div className="absolute -left-12 w-6 h-px bg-[var(--global-accent)]/30" />
         <span className="font-mono text-[24px] md:text-[32px] tracking-widest font-light text-[var(--global-dark-accent)] transition-colors duration-300">{q}</span>
       </motion.div>
     ))}
  </div>
);

const VisualWorkProcess = () => {
  const steps = ['DISCOVER', 'STRATEGIZE', 'EXECUTE', 'MEASURE', 'SCALE'];
  return (
    <div className="w-full py-16 relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--global-accent)] to-transparent opacity-30 -translate-y-1/2" />
      <div className="max-w-[800px] mx-auto relative z-10">
        <div className="flex justify-between items-center">
          {steps.map((step, i) => (
            <motion.div 
               key={step}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.15, duration: 0.6 }}
               className="flex flex-col items-center gap-4"
            >
              <div className={\`w-3 h-3 rounded-full shrink-0 transition-colors duration-300 \${i === steps.length - 1 ? 'bg-[var(--global-accent)] scale-150 shadow-[0_0_15px_var(--global-accent)]' : 'bg-[#F5F1EA] border-2 border-[var(--global-accent)]/40'}\`} />
              <span className={\`font-mono text-[10px] tracking-[0.2em] transition-colors duration-300 \${i === steps.length - 1 ? 'text-[var(--global-accent)] font-bold' : 'text-[#14110F]/40'}\`}>{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CULTURE_NAV_LABELS`;

content = content.replace('const CULTURE_NAV_LABELS', visualsCode);

// 2. Replace the boring CulturePage Grid
const oldGridStart = `<div className="w-full relative z-10">
        
        {THEMES.map((theme, idx) => (`;
const oldGridEnd = `                      </div>
                    </div>
                 </div>
               </div>
            </div>
          </section>
        ))}

      </div>`;

const newGridCode = `<div className="w-full relative z-10">
        {THEMES.map((theme, idx) => (
          <section key={idx} id={\`chapter-\${idx}\`} className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex flex-col items-center justify-center">
            <ParallaxText text={theme.label.toUpperCase() + "."} alignLeft={idx % 2 === 0} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
            <div className="max-w-[1200px] mx-auto relative z-10 w-full">
               
               <div className="text-center max-w-[800px] mx-auto mb-16 md:mb-24">
                 <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-6 text-[var(--global-dark-accent)] transition-colors duration-300">
                   0{idx + 1} / {theme.full}
                 </span>
                 <h2 className="text-[clamp(28px,4vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.2]">
                   {idx === 0 ? "We don't build technology because it can be built. We build it because something meaningful can happen when it works." :
                    idx === 1 ? "Curiosity is our engine. We are empowered to continuously learn, grow, and innovate." :
                    idx === 2 ? "Stronger teams are built through shared experiences, not just shared projects." :
                    "Great work should make room for a great life."}
                 </h2>
               </div>

               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-t border-[rgba(20,17,15,0.1)] pt-12">
                 
                 <div className={\`flex items-center justify-center \${idx % 2 !== 0 ? 'lg:col-span-5 lg:order-2' : 'lg:col-span-5 lg:order-1'}\`}>
                    <div className="w-full h-full min-h-[300px] flex items-center justify-center">
                      {idx === 0 ? <VisualWorkProcess /> :
                       idx === 1 ? <VisualCuriosity /> :
                       idx === 2 ? <VisualIntersection /> :
                       <div className="w-full aspect-square rounded-[24px] bg-[var(--global-accent)]/5 flex items-center justify-center p-12 border border-[rgba(20,17,15,0.05)]">
                         <IllustrationReliability className="w-full h-full text-[var(--global-accent)]" />
                       </div>
                      }
                    </div>
                 </div>

                 <div className={\`flex flex-col \${idx % 2 !== 0 ? 'lg:col-span-7 lg:order-1' : 'lg:col-span-7 lg:order-2'}\`}>
                   {theme.principles.map((principle, j) => (
                     <div key={j} className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 border-b border-gradient-to-r from-[rgba(20,17,15,0.1)] via-[rgba(20,17,15,0.05)] to-transparent group last:border-b-0">
                       <div className="font-mono text-[13px] md:text-[14px] font-bold text-[var(--global-accent)] opacity-50 w-6 shrink-0 transition-colors duration-300">
                         {(j + 1).toString().padStart(2, '0')}
                       </div>
                       <div className="flex-1">
                         <h3 className="text-[20px] md:text-[22px] font-medium text-[#14110F] tracking-tight mb-2 group-hover:text-[var(--global-dark-accent)] transition-colors duration-300">
                           {principle.title}
                         </h3>
                         <p className="text-[15px] md:text-[16px] text-[#14110F]/70 leading-[1.6] font-light max-w-[600px]">
                           {principle.desc}
                         </p>
                       </div>
                     </div>
                   ))}
                 </div>

               </div>
            </div>
          </section>
        ))}

      </div>`;

const startIndex = content.indexOf(oldGridStart);
const endIndex = content.indexOf(oldGridEnd) + oldGridEnd.length;

if(startIndex !== -1 && endIndex !== -1) {
    content = content.slice(0, startIndex) + newGridCode + content.slice(endIndex);
}

fs.writeFileSync(file, content);
console.log('Culture updated successfully');

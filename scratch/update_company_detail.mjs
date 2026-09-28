import fs from 'fs';

const filePath = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add imports
const importAddition = `
import { BRAND, BRAND_TEXT, ACCENTS } from '../data/accents';
import { useChapterColor } from '../hooks/useChapterColor';
import ChapterNav from '../components/shared/ChapterNav';
import { ParallaxText } from '../components/shared/Interactive';
`;
content = content.replace("import { MagneticElement } from '../components/shared/Interactive';", "import { MagneticElement, ParallaxText } from '../components/shared/Interactive';\nimport { BRAND, BRAND_TEXT, ACCENTS } from '../data/accents';\nimport { useChapterColor } from '../hooks/useChapterColor';\nimport ChapterNav from '../components/shared/ChapterNav';");

// 2. Replace AboutPage component
const aboutPageStart = content.indexOf('const AboutPage = () => {');
const aboutPageEnd = content.indexOf('export default function CompanyDetail() {');

if (aboutPageStart === -1 || aboutPageEnd === -1) {
  console.error('Could not find AboutPage bounds');
  process.exit(1);
}

const newAboutPage = `
const staticNodes = [
  { x: 20, y: 30, size: 3, delay: 0.1, duration: 14 },
  { x: 80, y: 20, size: 4, delay: 2.2, duration: 18 },
  { x: 40, y: 60, size: 5, delay: 1.5, duration: 12 },
  { x: 25, y: 80, size: 3, delay: 3.1, duration: 15 },
  { x: 75, y: 70, size: 4, delay: 4.8, duration: 16 },
  { x: 50, y: 40, size: 3, delay: 0.5, duration: 13 },
  { x: 90, y: 50, size: 4, delay: 1.8, duration: 17 },
  { x: 10, y: 60, size: 3, delay: 3.5, duration: 14 },
  { x: 60, y: 15, size: 5, delay: 2.7, duration: 11 },
  { x: 30, y: 15, size: 3, delay: 0.8, duration: 15 }
];
const staticConnections = [
  [0, 5], [5, 2], [2, 3], [5, 1], [1, 6], [6, 4], [2, 4], [0, 7], [8, 1], [8, 5]
];

const VisualCompanyHero = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100" />
      
      <div className="absolute inset-0 flex justify-center items-center">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 opacity-30">
          {staticConnections.map(([n1, n2], i) => (
             <motion.line 
               key={i}
               x1={\`\${staticNodes[n1].x}%\`} y1={\`\${staticNodes[n1].y}%\`}
               x2={\`\${staticNodes[n2].x}%\`} y2={\`\${staticNodes[n2].y}%\`}
               stroke="var(--global-accent)" strokeWidth="0.15"
               initial={{ opacity: 0 }}
               animate={{ opacity: [0.1, 0.4, 0.1] }}
               transition={{ duration: 10, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
             />
          ))}
        </svg>

        {staticNodes.map((node, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full transition-colors duration-300"
            style={{
              width: node.size,
              height: node.size,
              left: \`\${node.x}%\`,
              top: \`\${node.y}%\`,
              backgroundColor: 'var(--global-accent)'
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full mix-blend-multiply pointer-events-none transition-colors duration-300"
        style={{ background: \`radial-gradient(circle, color-mix(in srgb, var(--global-accent) 40%, transparent), transparent)\` }}
      />
    </div>
  );
};

const ABOUT_NAV_LABELS = ['Story', 'Intelligence', 'Implementation', 'Mission'];
const aboutAccentColors = [BRAND, ACCENTS[0].accent, ACCENTS[1].accent, ACCENTS[2].accent, ACCENTS[3].accent, BRAND];
const aboutTintColors = [ACCENTS[0].tint, ACCENTS[0].tint, ACCENTS[1].tint, ACCENTS[2].tint, ACCENTS[3].tint, ACCENTS[0].tint];
const aboutDarkColors = [BRAND_TEXT, ACCENTS[0].dark, ACCENTS[1].dark, ACCENTS[2].dark, ACCENTS[3].dark, BRAND_TEXT];

const AboutPage = () => {
  const { activeChapter, scrollY } = useChapterColor(
    ABOUT_NAV_LABELS.length,
    aboutAccentColors,
    aboutTintColors,
    aboutDarkColors
  );

  return (
    <div className="w-full min-h-screen text-[#14110F] relative selection:bg-[var(--global-accent)]/20">
      <div 
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-300"
        style={{ backgroundImage: 'linear-gradient(180deg, #F5F1EA 0%, var(--global-tint, #F5F1EA) 100%)' }}
      />
      
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden isolate pt-0 pb-10 z-0 bg-transparent">
        <VisualCompanyHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 mt-32">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-6 block">
              About VoxiFlow AI
            </span>
            <h1 className="text-[clamp(40px,7vw,84px)] font-medium tracking-tighter text-[#14110F] leading-[1.05]">
              Every customer conversation. <br />
              <span className="text-[#14110F]/40 italic">Connected.</span>
            </h1>
            <p className="mt-8 text-[18px] md:text-[22px] text-[#14110F]/60 leading-[1.6] font-light max-w-[600px] mx-auto">
              Thousands of isolated interactions transformed into one intelligent, self-learning infrastructure.
            </p>
          </FadeInUp>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
      </section>

      <ChapterNav items={ABOUT_NAV_LABELS} activeChapter={activeChapter} scrollY={scrollY} />

      <div className="w-full relative z-10">
        
        {/* CHAPTER 1: STORY */}
        <section id="chapter-0" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex items-center justify-center">
          <ParallaxText text="CONNECT." alignLeft={true} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 w-full">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">01 / STORY</span>
             
             <h2 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.1] mb-8">
               Customer conversations don't happen in one place. They happen everywhere.
             </h2>
             <p className="text-[18px] md:text-[20px] text-[#14110F]/70 leading-relaxed font-light mb-16">
               Fragmented tools create broken journeys, isolated context, and frustrated customers. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent ecosystem. That's why we built the Voxi CX Operating System.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SOLUTION_POINTERS.slice(0, 4).map((item, i) => {
                  const Illus = item.illustration;
                  return (
                    <div key={i} className="p-6 border border-[rgba(20,17,15,0.1)] rounded-2xl bg-white/50 backdrop-blur-sm">
                      <div className="w-12 h-12 rounded-xl bg-[var(--global-accent)]/10 flex items-center justify-center mb-4 transition-colors duration-300">
                        <Illus className="w-6 h-6 text-[var(--global-accent)] transition-colors duration-300" />
                      </div>
                      <h4 className="text-[16px] font-medium text-[#14110F] mb-2">{item.title}</h4>
                      <p className="text-[14px] text-[#14110F]/60">{item.desc}</p>
                    </div>
                  );
                })}
             </div>
          </div>
        </section>

        {/* CHAPTER 2: INTELLIGENCE */}
        <section id="chapter-1" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex items-center justify-center">
          <ParallaxText text="THINK." alignLeft={false} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 w-full">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">02 / INTELLIGENCE</span>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
             </div>
          </div>
        </section>

        {/* CHAPTER 3: IMPLEMENTATION */}
        <section id="chapter-2" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[80vh] flex items-center justify-center">
          <ParallaxText text="SHIP." alignLeft={true} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 w-full">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">03 / IMPLEMENTATION</span>
             
             <div className="mb-16">
               <h2 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight text-[#14110F] leading-[1.08] mb-6">
                 Technology Alone Doesn't Deliver Success. <span className="text-[var(--global-dark-accent)]">Implementation Does.</span>
               </h2>
               <p className="text-[18px] text-[#14110F]/70 leading-[1.75] font-light max-w-[800px]">
                 Our Customer Success and Implementation teams work closely with customers through every stage. Our 90-Day Success Framework ensures every deployment delivers measurable business outcomes.
               </p>
             </div>

             <div className="relative pl-6 md:pl-10">
               <div className="absolute top-0 bottom-0 left-[11px] md:left-[19px] w-px bg-[rgba(20,17,15,0.1)]" />
               
               {FRAMEWORK_STAGES.map((stage, idx) => (
                 <div key={idx} className="relative mb-16 last:mb-0 group">
                   <motion.div 
                     className="absolute -left-[30px] md:-left-[38px] top-1 w-4 h-4 rounded-full border-2 border-[#F5F1EA] bg-[rgba(20,17,15,0.2)] transition-colors duration-300"
                     whileInView={{ backgroundColor: "var(--global-accent)" }}
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
        </section>

        {/* CHAPTER 4: MISSION */}
        <section id="chapter-3" className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex items-center justify-center">
          <ParallaxText text="IMPACT." alignLeft={false} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
          <div className="max-w-[1000px] mx-auto relative z-10 w-full flex flex-col items-center text-center">
             <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">04 / MISSION</span>
             
             <h2 className="text-[clamp(28px,4vw,48px)] font-medium tracking-tight text-[#14110F] leading-[1.25] mb-8">
               “For us, the sale is just the beginning. <br className="hidden sm:block" />
               <span className="text-[var(--global-dark-accent)]">
                 Success is measured only when our customers achieve their business goals.”
               </span>
             </h2>
             <div className="flex flex-wrap items-center justify-center gap-3 text-[#14110F]/50 font-mono text-[11px] md:text-[12px] tracking-[0.2em] uppercase">
                <span>Structured Framework</span>
                <span>•</span>
                <span>Measurable ROI</span>
                <span>•</span>
                <span>Continuous Optimization</span>
             </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section id="final-cta" className="relative w-full py-40 md:py-64 bg-[#16130F] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: \`color-mix(in srgb, var(--global-accent) 20%, transparent)\` }} />
        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <h2 className="text-[clamp(36px,7vw,72px)] font-medium tracking-tighter text-white leading-[1.05] mb-6">
              Ready to automate your workflows?
            </h2>
            <div className="mt-12 flex justify-center">
              <MagneticElement>
                <Link to="/contact" className="px-10 py-4 bg-[#F5F1EA] text-[#14110F] rounded-[24px] text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#1283a9]/60 inline-block">
                  Start Your Pilot
                </Link>
              </MagneticElement>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

`;

const finalContent = content.slice(0, aboutPageStart) + newAboutPage + content.slice(aboutPageEnd);

fs.writeFileSync(filePath, finalContent, 'utf8');
console.log('Successfully replaced AboutPage in CompanyDetail.jsx');

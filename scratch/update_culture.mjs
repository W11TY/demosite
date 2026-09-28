import fs from 'fs';
const file = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(file, 'utf8');

const startIndex = content.indexOf('const CulturePage = () => {');
const endIndex = content.indexOf('const FOUNDERS = [');

if (startIndex === -1 || endIndex === -1) {
  console.error("Bounds not found");
  process.exit(1);
}

const newCulturePage = `const CULTURE_NAV_LABELS = ['Work', 'Grow', 'Connect', 'Live'];
const cultureAccentColors = [BRAND, ACCENTS[1].accent, ACCENTS[2].accent, ACCENTS[3].accent, BRAND];
const cultureTintColors = [ACCENTS[0].tint, ACCENTS[1].tint, ACCENTS[2].tint, ACCENTS[3].tint, ACCENTS[0].tint];
const cultureDarkColors = [BRAND_TEXT, ACCENTS[1].dark, ACCENTS[2].dark, ACCENTS[3].dark, BRAND_TEXT];

const CulturePage = () => {
  const { activeChapter, scrollY } = useChapterColor(
    CULTURE_NAV_LABELS.length,
    cultureAccentColors,
    cultureTintColors,
    cultureDarkColors
  );

  return (
    <div className="w-full min-h-screen text-[#14110F] relative selection:bg-[var(--global-accent)]/20">
      <div 
        className="fixed inset-0 pointer-events-none -z-10 transition-colors duration-300"
        style={{ backgroundImage: 'linear-gradient(180deg, #F5F1EA 0%, var(--global-tint, #F5F1EA) 100%)' }}
      />
      
      {/* HERO */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden isolate pt-0 pb-10 z-0 bg-transparent">
        <VisualCompanyHero />
        <div className="max-w-[1000px] mx-auto px-6 text-center z-10 mt-32">
          <FadeInUp>
            <span className="text-[11px] font-mono tracking-[0.15em] text-[#14110F]/50 uppercase mb-6 block">
              Culture Manifesto
            </span>
            <h1 className="text-[clamp(40px,7vw,100px)] font-medium tracking-tighter text-[#14110F] leading-[1.05]">
              WORK THAT MATTERS.<br/>
              <span className="text-[#14110F]/40 italic">LIFE THAT COUNTS.</span>
            </h1>
            <p className="mt-8 text-[18px] md:text-[24px] text-[#14110F]/60 leading-[1.6] font-light max-w-[700px] mx-auto">
              We're building technology that moves customer conversations forward — without losing sight of the people building it.
            </p>
          </FadeInUp>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-[linear-gradient(90deg,transparent,rgba(20,17,15,0.15),transparent)]" />
      </section>

      <ChapterNav items={CULTURE_NAV_LABELS} activeChapter={activeChapter} scrollY={scrollY} />

      <div className="w-full relative z-10">
        
        {THEMES.map((theme, idx) => (
          <section key={idx} id={\`chapter-\${idx}\`} className="w-full py-24 md:py-40 px-6 md:px-16 lg:px-20 relative overflow-hidden bg-transparent min-h-[70vh] flex flex-col items-center justify-center">
            <ParallaxText text={theme.label.toUpperCase() + "."} alignLeft={idx % 2 === 0} className="text-[clamp(64px,22vw,120px)] md:text-[clamp(80px,14vw,220px)] text-[var(--global-accent)] opacity-[0.05] md:opacity-[0.15] transition-colors duration-300 z-0" />
            <div className="max-w-[1000px] mx-auto relative z-10 w-full">
               <span className="font-mono text-[11px] tracking-[0.2em] uppercase font-bold block mb-12 text-[var(--global-dark-accent)]">
                 0{idx + 1} / {theme.full}
               </span>
               
               <div className="flex flex-col border-t border-[rgba(20,17,15,0.1)]">
                 {theme.principles.map((principle, j) => (
                   <div key={j} className="flex flex-col sm:flex-row gap-4 sm:gap-12 py-10 border-b border-[rgba(20,17,15,0.1)] group">
                     <div className="font-mono text-[13px] md:text-[14px] font-bold text-[var(--global-accent)] opacity-50 w-8 shrink-0">
                       {(j + 1).toString().padStart(2, '0')}
                     </div>
                     <div className="flex-1">
                       <h3 className="text-[20px] md:text-[24px] font-medium text-[#14110F] tracking-tight mb-3 group-hover:text-[var(--global-dark-accent)] transition-colors duration-300">
                         {principle.title}
                       </h3>
                       <p className="text-[16px] text-[#14110F]/70 leading-[1.6] font-light max-w-[600px]">
                         {principle.desc}
                       </p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </section>
        ))}

      </div>

      {/* TYPOGRAPHIC WALL */}
      <div className="bg-[#16130F] text-white">
        <TypographicWall />
      </div>

      {/* FINAL CTA */}
      <section className="relative w-full py-40 md:py-64 bg-[#16130F] text-white flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-300 z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] rounded-full mix-blend-screen pointer-events-none" style={{ backgroundColor: \`color-mix(in srgb, var(--global-accent) 20%, transparent)\` }} />
        
        <div className="max-w-[1000px] mx-auto px-6 z-10">
          <FadeInUp>
            <span className="font-mono text-[12px] md:text-[14px] tracking-[0.2em] text-[var(--global-accent)] uppercase font-bold mb-8 block transition-colors duration-300">
              The Voxi Promise
            </span>
            <h2 className="text-[clamp(32px,5vw,72px)] font-medium tracking-tighter text-white leading-[1.1] mb-16 max-w-[900px] mx-auto">
              At Voxi, you're not joining a company — you're joining a mission to build world-class AI while living a healthier, happier, and more meaningful life.
            </h2>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
              <MagneticElement>
                <button className="w-full sm:w-auto px-10 py-4 bg-[#F5F1EA] text-[#14110F] rounded-[24px] text-[15px] font-medium transition-all duration-300 shadow-[0_10px_40px_rgba(255,255,255,0.05)] cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-[#1283a9]/60 inline-block">
                  JOIN VOXI
                </button>
              </MagneticElement>
              <MagneticElement>
                <button className="w-full sm:w-auto px-10 py-4 bg-transparent border border-white/20 text-white rounded-[24px] text-[15px] font-medium transition-all duration-300 cursor-pointer hover:bg-white/5">
                  EXPLORE OPEN ROLES
                </button>
              </MagneticElement>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
};

`;

content = content.slice(0, startIndex) + newCulturePage + content.slice(endIndex);
fs.writeFileSync(file, content);
console.log('CulturePage updated successfully');

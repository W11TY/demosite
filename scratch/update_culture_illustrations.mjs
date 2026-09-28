import fs from 'fs';
const file = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix framer-motion imports
content = content.replace(
  "import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';",
  "import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent, useSpring, useMotionValue } from 'framer-motion';"
);

// 2. Add IllustrationCard import
if (!content.includes('IllustrationCard')) {
  content = content.replace(
    "import { MagneticElement, ParallaxText } from '../components/shared/Interactive';",
    "import { MagneticElement, ParallaxText } from '../components/shared/Interactive';\nimport IllustrationCard from '../components/shared/IllustrationCard';"
  );
}

// 3. Replace VisualCompanyHero
const heroStart = content.indexOf('const staticNodes = [');
const heroEnd = content.indexOf('const CULTURE_NAV_LABELS = [');

const newHeroCode = `const VisualCompanyHero = () => {
  const nodes = Array.from({ length: 30 }).map((_, i) => ({
    x: 5 + Math.random() * 90,
    y: 5 + Math.random() * 90,
    size: 3 + Math.random() * 6,
    delay: Math.random() * 5
  }));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  import('react').then(React => {
    React.useEffect(() => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);
  });

  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), { damping: 25, stiffness: 100 });
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), { damping: 25, stiffness: 100 });
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 25, stiffness: 100 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 25, stiffness: 100 });
  
  const moveX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, -20]), { damping: 25, stiffness: 100 });
  const moveY2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), { damping: 25, stiffness: 100 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex justify-center items-center" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-100" />

      <motion.div 
        style={{ x: moveX, y: moveY, rotateX, rotateY, transformStyle: "preserve-3d" }} 
        className="absolute inset-0 flex justify-center items-center"
      >
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          width="100%" height="100%" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" stroke="currentColor" fill="none"
          className="absolute inset-0"
        >
          <motion.g animate={{ rotate: 360 }} transition={{ duration: 200, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "500px 300px" }}>
            <circle cx="500" cy="300" r="250" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-50 transition-colors duration-300" strokeDasharray="4 12" />
            <circle cx="500" cy="300" r="400" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-30 transition-colors duration-300" strokeDasharray="10 10" />
            <circle cx="500" cy="300" r="550" strokeWidth="1.5" className="text-[var(--global-accent)] opacity-20 transition-colors duration-300" strokeDasharray="2 8" />

            <path d="M500 50 L850 450 L150 450 Z" strokeWidth="1" className="text-[var(--global-accent)] opacity-20 transition-colors duration-300" />
            <path d="M250 150 L750 150 L500 550 Z" strokeWidth="1" className="text-[var(--global-accent)] opacity-20 transition-colors duration-300" />
          </motion.g>
        </motion.svg>
      </motion.div>

      <motion.div style={{ x: moveX2, y: moveY2 }} className="absolute inset-0">
        {nodes.map((node, i) => (
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
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full mix-blend-multiply pointer-events-none transition-colors duration-300"
        style={{
          background: \`radial-gradient(circle, color-mix(in srgb, var(--global-accent) 40%, transparent), transparent)\`
        }}
      />
    </div>
  );
};

`;

content = content.slice(0, heroStart) + newHeroCode + content.slice(heroEnd);

// 4. Update the CulturePage to include illustrations
const oldCultureChapter = `<div className="flex flex-col border-t border-[rgba(20,17,15,0.1)]">
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
               </div>`;

const newCultureChapter = `<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 border-t border-[rgba(20,17,15,0.1)] pt-12">
                 <div className="lg:col-span-7 flex flex-col">
                   {theme.principles.map((principle, j) => (
                     <div key={j} className="flex flex-col sm:flex-row gap-4 sm:gap-8 py-8 border-b border-[rgba(20,17,15,0.1)] group last:border-b-0">
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
                 
                 <div className="lg:col-span-5 flex items-center justify-center lg:sticky lg:top-40 h-fit">
                    <IllustrationCard 
                      illustration={
                        idx === 0 ? IllustrationImpact : 
                        idx === 1 ? IllustrationInnovation : 
                        idx === 2 ? IllustrationAgentNetwork : 
                        IllustrationReliability
                      }
                      accent="var(--global-accent)"
                      tint="var(--global-tint)"
                      dark="var(--global-dark-accent)"
                    />
                 </div>
               </div>`;

content = content.replace(oldCultureChapter, newCultureChapter);

fs.writeFileSync(file, content);
console.log('Culture updated successfully');

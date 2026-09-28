import fs from 'fs';
const file = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(file, 'utf8');

const heroCode = `
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

const CULTURE_NAV_LABELS`;

content = content.replace('const CULTURE_NAV_LABELS', heroCode);
fs.writeFileSync(file, content);
console.log('Restored VisualCompanyHero');

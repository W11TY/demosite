import fs from 'fs';
const file = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(file, 'utf8');

const badCode = `  import('react').then(React => {
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
  });`;

const goodCode = `  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);`;

content = content.replace(badCode, goodCode);
fs.writeFileSync(file, content);
console.log('Hook fixed successfully');

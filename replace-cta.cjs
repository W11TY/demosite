const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/PlatformOverview.jsx',
  'src/pages/SolutionsOverview.jsx',
  'src/pages/ResearchOverview.jsx',
  'src/pages/ResearchDetail.jsx',
  'src/pages/CompanyOverview.jsx',
  'src/pages/CompanyDetail.jsx'
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) return;
  
  let content = fs.readFileSync(p, 'utf8');
  let changed = false;

  // Make sure AntiMetalButton is imported
  if (!content.includes('AntiMetalButton')) {
    // Find the last import and add it after
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfImport + 1) + "import AntiMetalButton from '../components/shared/AntiMetalButton';\n" + content.slice(endOfImport + 1);
      changed = true;
    }
  }

  // Make sure Link is imported
  if (!content.includes("import { Link } from 'react-router-dom';") && !content.includes("import { Link }")) {
    const lastImportIndex = content.lastIndexOf('import ');
    if (lastImportIndex !== -1) {
      const endOfImport = content.indexOf('\n', lastImportIndex);
      content = content.slice(0, endOfImport + 1) + "import { Link } from 'react-router-dom';\n" + content.slice(endOfImport + 1);
      changed = true;
    }
  }

  // Replace PlatformOverview, SolutionsOverview, ResearchOverview, ResearchDetail blocks
  const replaceRegex1 = /<MagneticElement>\s*<motion\.button[^>]*>\s*(CONTACT SALES|BOOK A DEMO|CONTACT RESEARCH)[^<]*<\/motion\.button>\s*<\/MagneticElement>/gi;
  if (replaceRegex1.test(content)) {
    content = content.replace(replaceRegex1, `<MagneticElement>\n                  <Link to="/contact">\n                    <AntiMetalButton label="Hire Team" />\n                  </Link>\n                </MagneticElement>`);
    changed = true;
  }

  // Replace CompanyOverview block
  const replaceRegex2 = /<MagneticElement>\s*<Link to="\/contact"[^>]*>\s*CONTACT US[^<]*<\/Link>\s*<\/MagneticElement>/gi;
  if (replaceRegex2.test(content)) {
    content = content.replace(replaceRegex2, `<MagneticElement>\n                <Link to="/contact">\n                  <AntiMetalButton label="Hire Team" />\n                </Link>\n              </MagneticElement>`);
    changed = true;
  }

  // Replace CompanyDetail block
  const replaceRegex3 = /<AntiMetalButton label="Start Your Pilot" \/>/gi;
  if (replaceRegex3.test(content)) {
    content = content.replace(replaceRegex3, `<AntiMetalButton label="Hire Team" />`);
    changed = true;
  }
  
  // Wait, does CompanyDetail use RouterLink? Let's check CompanyDetail CTA
  const replaceRegex4 = /<MagneticElement>\s*<button[^>]*>\s*JOIN VOXI[^<]*<\/button>\s*<\/MagneticElement>/gi;
  // If it's there we don't necessarily replace it unless user wanted "Hire Team" there.
  // "sections directly above the footer section" refers to FINAL CTA blocks.

  if (changed) {
    fs.writeFileSync(p, content, 'utf8');
    console.log(`Updated ${f}`);
  }
});

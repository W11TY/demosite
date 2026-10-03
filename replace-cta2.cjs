const fs = require('fs');
const p = 'src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(p, 'utf8');
const replaceRegex = /<MagneticElement>\s*<button[^>]*>\s*JOIN VOXI[^<]*<\/button>\s*<\/MagneticElement>/gi;
if (replaceRegex.test(content)) {
  content = content.replace(replaceRegex, `<MagneticElement>\n                <Link to="/contact">\n                  <AntiMetalButton label="Hire Team" />\n                </Link>\n              </MagneticElement>`);
  fs.writeFileSync(p, content, 'utf8');
  console.log('Replaced JOIN VOXI in CompanyDetail.jsx');
}

import fs from 'fs';
const file = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(file, 'utf8');

const target = `<motion.div \n                      className="absolute -left-[30px] md:-left-[38px] top-1 w-4 h-4 rounded-full border-2 border-[#F5F1EA] bg-[rgba(20,17,15,0.2)] transition-colors duration-300"\n                      whileInView={{ backgroundColor: "var(--global-accent)" }}\n                      viewport={{ margin: "-50% 0px -50% 0px" }}\n                    />`;

const replacement = `<motion.div \n                      className="absolute -left-[30px] md:-left-[38px] top-1 w-4 h-4 rounded-full border-2 border-[#F5F1EA] bg-[rgba(20,17,15,0.2)] transition-all duration-300"\n                      whileInView={{ \n                        backgroundColor: "#10b981",\n                        borderColor: "#10b981",\n                        boxShadow: "0 0 15px 4px rgba(16, 185, 129, 0.4)"\n                      }}\n                      viewport={{ margin: "-50% 0px -50% 0px" }}\n                    />`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
console.log('Replaced successfully');

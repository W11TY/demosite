import fs from 'fs';
const file = '/Users/akshat/Desktop/website/src/pages/CompanyDetail.jsx';
let content = fs.readFileSync(file, 'utf8');

// Fix CulturePage
const cultureBadCode = `<IllustrationCard 
                      illustration={
                        idx === 0 ? IllustrationImpact : 
                        idx === 1 ? IllustrationInnovation : 
                        idx === 2 ? IllustrationAgentNetwork : 
                        IllustrationReliability
                      }
                      accent="var(--global-accent)"
                      tint="var(--global-tint)"
                      dark="var(--global-dark-accent)"
                    />`;
                    
const cultureGoodCode = `<div className="w-full aspect-[4/3] rounded-[24px] bg-[var(--global-accent)]/5 flex items-center justify-center p-8 border border-[rgba(20,17,15,0.05)] shadow-[0_10px_40px_rgba(20,17,15,0.02)] transition-colors duration-300">
                      <div className="w-full h-full text-[var(--global-accent)] [&>svg]:!text-[var(--global-accent)] transition-colors duration-300 flex items-center justify-center">
                        {idx === 0 ? <IllustrationImpact /> : 
                         idx === 1 ? <IllustrationInnovation /> : 
                         idx === 2 ? <IllustrationAgentNetwork /> : 
                         <IllustrationReliability />}
                      </div>
                    </div>`;

content = content.replace(cultureBadCode, cultureGoodCode);

// Fix AboutPage - Chapter 0
const aboutBadCode0 = `<IllustrationCard 
                   illustration={IllustrationInnovation}
                   accent="var(--global-accent)"
                   tint="var(--global-tint)"
                   dark="var(--global-dark-accent)"
                 />`;
const aboutGoodCode0 = `<div className="w-full aspect-[4/3] rounded-[24px] bg-[var(--global-accent)]/5 flex items-center justify-center p-8 border border-[rgba(20,17,15,0.05)] shadow-[0_10px_40px_rgba(20,17,15,0.02)] transition-colors duration-300">
                   <div className="w-full h-full text-[var(--global-accent)] [&>svg]:!text-[var(--global-accent)] transition-colors duration-300 flex items-center justify-center">
                     <IllustrationInnovation />
                   </div>
                 </div>`;
content = content.replace(aboutBadCode0, aboutGoodCode0);

// Fix AboutPage - Chapter 1
const aboutBadCode1 = `<IllustrationCard 
                     illustration={IllustrationIntelligentAgents}
                     accent="var(--global-accent)"
                     tint="var(--global-tint)"
                     dark="var(--global-dark-accent)"
                   />`;
const aboutGoodCode1 = `<div className="w-full aspect-[4/3] rounded-[24px] bg-[var(--global-accent)]/5 flex items-center justify-center p-8 border border-[rgba(20,17,15,0.05)] shadow-[0_10px_40px_rgba(20,17,15,0.02)] transition-colors duration-300">
                   <div className="w-full h-full text-[var(--global-accent)] [&>svg]:!text-[var(--global-accent)] transition-colors duration-300 flex items-center justify-center">
                     <IllustrationIntelligentAgents />
                   </div>
                 </div>`;
content = content.replace(aboutBadCode1, aboutGoodCode1);

// Fix AboutPage - Chapter 2
const aboutBadCode2 = `<IllustrationCard 
                   illustration={IllustrationImpact}
                   accent="var(--global-accent)"
                   tint="var(--global-tint)"
                   dark="var(--global-dark-accent)"
                 />`;
const aboutGoodCode2 = `<div className="w-full aspect-[4/3] rounded-[24px] bg-[var(--global-accent)]/5 flex items-center justify-center p-8 border border-[rgba(20,17,15,0.05)] shadow-[0_10px_40px_rgba(20,17,15,0.02)] transition-colors duration-300">
                   <div className="w-full h-full text-[var(--global-accent)] [&>svg]:!text-[var(--global-accent)] transition-colors duration-300 flex items-center justify-center">
                     <IllustrationImpact />
                   </div>
                 </div>`;
content = content.replace(aboutBadCode2, aboutGoodCode2);


fs.writeFileSync(file, content);
console.log('Illustrations fixed successfully');

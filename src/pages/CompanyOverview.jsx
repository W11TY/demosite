import React from 'react';
import { FadeInUp, StaggerContainer } from '../components/shared/Motion';

export default function CompanyOverview() {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 text-center">
        <StaggerContainer>
          <FadeInUp as="h1" className="text-[48px] md:text-[64px] font-semibold tracking-tight text-text-primary mb-8">
            Company
          </FadeInUp>
          <FadeInUp delay={0.1} as="p" className="text-[18px] md:text-[22px] text-text-secondary leading-relaxed max-w-[800px] mx-auto">
            Automate the manual, accelerate the future. Our custom AI solutions deliver measurable growth and operational excellence. Empowering teams with intelligent tools that turn complex challenges into simple workflows.
          </FadeInUp>
        </StaggerContainer>
      </div>
    </div>
  );
}

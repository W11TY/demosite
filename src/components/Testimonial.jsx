import React from 'react';
import { FadeInUp } from './shared/Motion';

export default function Testimonial() {
  return (
    <section className="w-full py-24 md:py-32 bg-background border-b border-border flex items-center justify-center overflow-hidden">
      <FadeInUp 
        yOffset={24}
        className="max-w-[700px] px-6 relative text-center"
      >
        {/* Large decorative quotation mark */}
        <span className="absolute -top-8 md:-top-12 left-0 md:-left-8 text-[80px] md:text-[120px] font-serif leading-none text-text-secondary opacity-10 select-none">
          "
        </span>
        
        <p className="text-[22px] md:text-[28px] text-text-primary leading-relaxed font-medium mb-8 relative z-10">
          "Voxi's AI agents have transformed how we handle customer support and outbound collections. It's not just automation—it feels like a real, empathetic human conversation every single time."
        </p>
        
        <div className="flex flex-col items-center justify-center gap-1">
          {/* Note: This is a placeholder testimonial since the source file lacks actual customer quotes */}
          <span className="text-[13px] font-bold text-text-primary tracking-wider uppercase">
            Placeholder Name
          </span>
          <span className="text-[13px] text-text-secondary uppercase tracking-widest">
            Head of Operations, FinTech Corp
          </span>
        </div>
      </FadeInUp>
    </section>
  );
}

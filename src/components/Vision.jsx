import React from 'react';
import { FadeInUp, FadeIn } from './shared/Motion';

export default function Vision() {
  return (
    <section className="relative w-full pt-[100px] lg:pt-[180px] pb-[80px] lg:pb-[120px] bg-background border-b border-border overflow-hidden flex items-center justify-center text-center">
      
      {/* Subtle Premium Background Depth */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[800px] h-[800px] bg-black opacity-[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="w-full px-6 lg:px-[58px] relative z-10 flex flex-col items-center">
        
        <FadeInUp 
          as="h2"
          className="text-[clamp(36px,10vw,72px)] font-medium tracking-[-0.04em] leading-[1.0] text-[#111111] max-w-[1100px] mb-[32px]"
        >
          One Ecosystem. One Platform. Every Customer Conversation.
        </FadeInUp>

        <FadeInUp
          as="p"
          delay={0.1}
          className="text-[17px] text-black/60 max-w-[700px] leading-relaxed"
        >
          At VoxiFlow AI, we believe customer communication shouldn't be managed through disconnected tools and isolated touchpoints. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent, connected ecosystem.
        </FadeInUp>

      </div>
    </section>
  );
}

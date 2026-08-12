import React from 'react';
import { FadeInUp, FadeIn } from './shared/Motion';

export default function Vision() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-background border-b border-border overflow-hidden flex items-center justify-center text-center">
      
      {/* Background Abstract Graphic */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen">
        <div className="w-[800px] h-[800px] bg-accent-gradient opacity-20 blur-[120px] rounded-full translate-x-1/4 -translate-y-1/4" />
        <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 relative z-10 flex flex-col items-center">
        
        <FadeInUp 
          as="h2"
          className="text-[28px] md:text-[36px] font-medium tracking-tight text-text-primary max-w-[800px] mb-8 leading-tight"
        >
          One Ecosystem. One Platform. Every Customer Conversation.
        </FadeInUp>

        <FadeInUp
          as="p"
          delay={0.1}
          className="text-[16px] md:text-[17px] text-text-secondary max-w-[600px] leading-relaxed"
        >
          At VoxiFlow AI, we believe customer communication shouldn't be managed through disconnected tools and isolated touchpoints. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent, connected ecosystem.
        </FadeInUp>

      </div>
    </section>
  );
}

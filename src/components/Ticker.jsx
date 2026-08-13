import React from 'react';
import { FadeIn } from './shared/Motion';

export default function Ticker() {
  return (
    <div className="w-full bg-surface border-b border-border overflow-hidden py-2.5">
      <div className="w-full px-4 lg:px-[58px] flex items-center gap-4">
        <div className="flex-shrink-0 bg-surface border border-border px-2 py-1 rounded-[4px]">
          <span className="text-[10px] font-mono text-text-secondary font-medium tracking-wider">
            // UPDATE
          </span>
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          <FadeIn 
            delay={0.2}
            className="text-[13px] text-text-primary whitespace-nowrap overflow-hidden text-ellipsis"
          >
            Introducing Voxi CX Operating System: Unifying Voice AI, WhatsApp, and Cloud Telephony into a single intelligent ecosystem.
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

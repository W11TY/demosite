import React from 'react';
import { NumberedRevealList } from './shared/NumberedRevealList';
import { RevealOnScroll } from './shared/RevealOnScroll';

export function Capabilities() {
  const platformData = [
    {
      id: 1,
      number: "001",
      title: "Super Intelligent AI Voice Agents (VOXIFLOW)",
      description: "Autonomous AI voice agents with natural, human-like conversations. Handles inbound & outbound at scale — lead qualification, collections, support, and appointment booking — with real-time language switching across Indian and global languages.",
      image: <img src="https://framerusercontent.com/images/liXydHdt7Kdt6VKUzzjSZwFJ4FA.png" className="img-fade loaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
    },
    {
      id: 2,
      number: "002",
      title: "WhatsApp Business Platform (VOXICHATR)",
      description: "AI-powered WhatsApp chatbot and campaign engine: autonomous customer support 24×7, broadcast campaigns, lead capture & qualification, transactional notifications, and conversational commerce — fully integrated via API/webhooks.",
      image: <img src="https://framerusercontent.com/images/pEct5trUmjDYAblzuKYq2MpHaA.png" className="img-fade loaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
    },
    {
      id: 3,
      number: "003",
      title: "Telephony & Communication Command Center (VOXICONNEX / VOXISTREAMR)",
      description: "Enterprise-grade cloud telephony with IVR, SIP & PRI integration, missed call solutions, number masking, predictive dialer, ACD, and a real-time agent desktop — all on one unified contact center platform.",
      image: <img src="https://framerusercontent.com/images/jnIpVvHAXWiAGa8gLEmWtRuDwQ.png" className="img-fade loaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
    },
    {
      id: 4,
      number: "004",
      title: "AI-Powered Quality Management System (VOXIQUEIQ + VOXILENSA)",
      description: "100% AI call audit — every interaction scored, transcribed, and analysed for sentiment, compliance, and agent performance. Real-time alerts, coaching dashboards, multi-language QA, and custom scorecards with no manual sampling.",
      image: <img src="https://framerusercontent.com/images/v2cZIMtgjEII7EpDnUDGGgCyuiQ.png" className="img-fade loaded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
    }
  ];

  return (
    <section className="section-padding" id="platform">
      <div className="container">
        <RevealOnScroll>
          <span className="eyebrow">PLATFORM</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: '900px', marginBottom: 'var(--space-xl)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            The Voxi Autonomous Customer Orchestration System — four connected layers, one intelligent platform.
          </h2>
          <button className="btn-primary" style={{ marginBottom: 'var(--space-xl)' }}>
            Request a Demo
          </button>
        </RevealOnScroll>
        
        <NumberedRevealList items={platformData} />
      </div>
    </section>
  );
}

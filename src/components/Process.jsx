import React from 'react';
import { NumberedRevealList } from './shared/NumberedRevealList';
import { RevealOnScroll } from './shared/RevealOnScroll';

export function Process() {
  const processData = [
    {
      id: 1,
      number: "01",
      title: "Discovery & Business Process Assessment",
      description: "We map your existing customer journeys, telephony stack, CRM, and business workflows to identify where AI agents create the greatest measurable impact."
    },
    {
      id: 2,
      number: "02",
      title: "Solution Design & AI Configuration",
      description: "We design the conversation flows, prompt architecture, multi-agent setup, and integration blueprint tailored to your specific business use cases."
    },
    {
      id: 3,
      number: "03",
      title: "Implementation & System Integration",
      description: "Connect Voxi to your CRM, telephony, and WhatsApp Business API via SIP trunks, PRI lines, and APIs/webhooks — no rip-and-replace required."
    },
    {
      id: 4,
      number: "04",
      title: "User Training & Change Management",
      description: "We train your team on the platform, configure role-based access, and manage change adoption so the AI works with your people, not against them."
    },
    {
      id: 5,
      number: "05",
      title: "Go-Live & Hypercare Support",
      description: "Launch with real-time monitoring and a dedicated hypercare period — our team stays close until the platform is running stably at full scale."
    },
    {
      id: 6,
      number: "06",
      title: "Performance Monitoring & Optimization",
      description: "Use QMS, analytics, and AI conversation insights to continuously improve agent performance, call quality, and business outcomes post-launch."
    },
    {
      id: 7,
      number: "07",
      title: "Success Measurement Against Business KPIs",
      description: "We measure success not by delivering a platform, but by delivering real business impact — tracked against your KPIs over the first 90 days and beyond."
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--surface-color)', borderRadius: '48px', margin: '0 var(--container-px)' }}>
      <div className="container">
        <RevealOnScroll>
          <span className="eyebrow">HOW WE DEPLOY</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', maxWidth: '900px', marginBottom: 'var(--space-xl)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Our 90-Day Enterprise Implementation &amp; Success Framework.
          </h2>
        </RevealOnScroll>
        
        <NumberedRevealList items={processData} />

        <RevealOnScroll delay={0.2}>
          <div style={{ marginTop: 'var(--space-xl)', textAlign: 'center' }}>
            <button className="btn-primary">
              Request a Demo
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

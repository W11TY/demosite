import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';
import { ExpandableSection } from '../components/shared/ExpandableSection';
import { research } from '../data/research';

export function Research() {
  return (
    <>
      <Helmet>
        <title>Innovation & Research | Voxi</title>
        <meta name="description" content="Discover Voxi's research in Speech LLMs, Multi-Agent AI, and SLMs." />
      </Helmet>
      <PageHero 
        title="Innovation & Research" 
        subtitle="Exploring the frontiers of conversational and agentic AI." 
      />
      <div style={{ padding: '60px 24px', maxWidth: '1000px', margin: '0 auto' }}>
        {research.map((section, idx) => (
          <ExpandableSection key={idx} title={section.category} summary={section.description}>
            {section.items && section.items.length > 0 && (
              <div style={{ padding: '8px 4px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
                  {section.items.map((item, i) => (
                    <div key={i} style={{ background: '#fafafa', padding: '20px', borderRadius: '12px', border: '1px solid #eaeaea' }}>
                      <div style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '8px', color: '#111' }}>{item.stage1}</div>
                      <div style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.5' }}>{item.stage2}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ExpandableSection>
        ))}
      </div>
    </>
  );
}

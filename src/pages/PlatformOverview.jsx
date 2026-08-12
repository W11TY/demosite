import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { platforms } from '../data/platform';

export function PlatformOverview() {
  return (
    <>
      <Helmet>
        <title>Platform | Voxi</title>
        <meta name="description" content="Explore the Voxi Autonomous Customer Orchestration System platform pillars." />
      </Helmet>
      <PageHero 
        title="Our Platform" 
        subtitle="Voxi Autonomous Customer Orchestration System" 
      />
      <div style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {platforms.map(p => (
          <Link to={`/platform/${p.id}`} key={p.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="capability-card" style={{ height: '100%' }}>
              <h3 className="capability-name" style={{ fontSize: '1.4rem' }}>{p.title}</h3>
              <p className="capability-def">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

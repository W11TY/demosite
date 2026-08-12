import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/shared/PageHero';
import { solutions } from '../data/solutions';

export function SolutionsOverview() {
  return (
    <>
      <Helmet>
        <title>Industry Solutions | Voxi</title>
        <meta name="description" content="Industry-specific solutions powered by Voxi." />
      </Helmet>
      <PageHero 
        title="Solutions by Industry" 
        subtitle="Tailored AI orchestrations for every business sector." 
      />
      <div style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {solutions.map(s => (
          <Link to={`/solutions/${s.id}`} key={s.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="capability-card" style={{ height: '100%' }}>
              <h3 className="capability-name" style={{ fontSize: '1.4rem' }}>{s.industry}</h3>
              <p className="capability-def" style={{ fontWeight: '600', color: '#0F83A9', marginBottom: '16px' }}>{s.operatingSystem}</p>
              <p className="capability-def" style={{ fontSize: '0.95rem' }}>{s.benefits}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

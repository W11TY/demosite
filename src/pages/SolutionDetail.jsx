import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';
import { StatCallout } from '../components/shared/StatCallout';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { solutions } from '../data/solutions';

export function SolutionDetail() {
  const { id } = useParams();
  const solution = solutions.find(s => s.id === id);

  if (!solution) {
    return <Navigate to="/solutions" />;
  }

  return (
    <>
      <Helmet>
        <title>{solution.industry} Solutions | Voxi</title>
        <meta name="description" content={solution.benefits} />
      </Helmet>
      <PageHero 
        title={`${solution.industry} Solutions`} 
        subtitle={solution.operatingSystem} 
      >
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Solutions', path: '/solutions' },
          { label: solution.industry, path: `/solutions/${solution.id}` }
        ]} />
      </PageHero>
      <div style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ maxWidth: '800px', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.02em', color: '#111111' }}>Overview</h2>
          <p style={{ fontSize: '1.1rem', color: '#555555', lineHeight: '1.7', marginBottom: '40px' }}>{solution.benefits}</p>
          <StatCallout stats={solution.stats} />
        </div>
        
        <div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.02em', color: '#111111' }}>Key Use Cases</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {solution.useCases.map((useCase, i) => (
              <div key={i} style={{ padding: '20px 24px', background: '#ffffff', border: '1px solid #eaeaea', borderRadius: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', color: '#111111' }}>
                <span style={{ color: 'var(--blue-color)', fontSize: '1.2rem' }}>✓</span> {useCase}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

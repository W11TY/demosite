import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { PageHero } from '../components/shared/PageHero';
import { CapabilityGrid } from '../components/shared/CapabilityGrid';
import { Breadcrumbs } from '../components/shared/Breadcrumbs';
import { platforms } from '../data/platform';

export function PlatformDetail() {
  const { id } = useParams();
  const platform = platforms.find(p => p.id === id);

  if (!platform) {
    return <Navigate to="/platform" />;
  }

  return (
    <>
      <Helmet>
        <title>{platform.title} | Voxi Platform</title>
        <meta name="description" content={platform.description} />
      </Helmet>
      <PageHero 
        title={platform.title} 
        subtitle={platform.description} 
      >
        <Breadcrumbs items={[
          { label: 'Home', path: '/' },
          { label: 'Platform', path: '/platform' },
          { label: platform.title, path: `/platform/${platform.id}` }
        ]} />
      </PageHero>
      <CapabilityGrid capabilities={platform.capabilities} />
    </>
  );
}

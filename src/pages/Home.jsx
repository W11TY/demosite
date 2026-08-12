import React, { Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';
import { LogoTicker } from '../components/LogoTicker';
import { BentoStats } from '../components/BentoStats';
import { AnnouncementTicker } from '../components/AnnouncementTicker';
import { TestimonialQuote } from '../components/TestimonialQuote';
import { Capabilities } from '../components/Capabilities';
import { Process } from '../components/Process';
import { TemplateCTA } from '../components/TemplateCTA';

// Skeletons
import { SkeletonCardGrid, SkeletonTextBlock } from '../components/shared/Skeleton';

// Lazy load heavy/below-fold sections
const Works = lazy(() => import('../components/Works').then(module => ({ default: module.Works })));
const Vision = lazy(() => import('../components/Vision').then(module => ({ default: module.Vision })));
const TestimonialCarousel = lazy(() => import('../components/TestimonialCarousel').then(module => ({ default: module.TestimonialCarousel })));
const Team = lazy(() => import('../components/Team').then(module => ({ default: module.Team })));
const Pricing = lazy(() => import('../components/Pricing').then(module => ({ default: module.Pricing })));
const FAQ = lazy(() => import('../components/FAQ').then(module => ({ default: module.FAQ })));
const Insights = lazy(() => import('../components/Insights').then(module => ({ default: module.Insights })));

export function Home() {
  const voxiAnnouncement = "// VOXI — Now powering AI voice, WhatsApp, and telephony automation for enterprises across Real Estate, Healthcare, Fintech, Consumer Durables, and Utilities on one unified customer orchestration platform.";
  
  return (
    <>
      <Hero />
      <LogoTicker />
      <BentoStats />
      <AnnouncementTicker text={voxiAnnouncement} />
      <TestimonialQuote />
      
      <Suspense fallback={<SkeletonCardGrid cards={6} aspectRatio="4/3" />}>
        <Works />
      </Suspense>

      <AnnouncementTicker text={voxiAnnouncement} />
      <Capabilities />

      <Suspense fallback={<SkeletonTextBlock />}>
        <Vision />
      </Suspense>

      <Suspense fallback={<SkeletonTextBlock />}>
        <TestimonialCarousel />
      </Suspense>

      <Process />

      <Suspense fallback={<SkeletonCardGrid cards={3} aspectRatio="1/1" />}>
        <Team />
      </Suspense>

      <Suspense fallback={<SkeletonCardGrid cards={4} aspectRatio="3/4" />}>
        <Pricing />
      </Suspense>

      <Suspense fallback={<SkeletonTextBlock />}>
        <FAQ />
      </Suspense>

      <Suspense fallback={<SkeletonCardGrid cards={3} aspectRatio="4/3" />}>
        <Insights />
      </Suspense>

      <TemplateCTA />
    </>
  );
}

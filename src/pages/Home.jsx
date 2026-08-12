import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BentoSection from '../components/BentoSection';
import WorksCarousel from '../components/WorksCarousel';
import Capabilities from '../components/Capabilities';
import Vision from '../components/Vision';
import Process from '../components/Process';
import LanguageBand from '../components/LanguageBand';
import TestimonialCarousel from '../components/TestimonialCarousel';
import Ticker from '../components/Ticker';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <BentoSection />
      <WorksCarousel />
      <Capabilities />
      <Vision />
      <Process />
      <LanguageBand />
      <TestimonialCarousel />
      <FAQ />
    </>
  );
}

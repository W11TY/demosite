import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeInUp, easing } from './shared/Motion';

/* 
  TODO: PLACEHOLDER DATA
  These quotes are reasonably inferred from the Voxi MD file capabilities.
  They MUST be replaced with real customer quotes before going live, as requested.
*/
const testimonials = [
  {
    id: 1,
    quote: "The ability to seamlessly switch between Hindi and English in the same conversation without any latency has completely changed our customer support dynamic. It's incredibly natural.",
    name: "Placeholder Name",
    title: "CX Director, Retail Co"
  },
  {
    id: 2,
    quote: "We deployed the Voxi Collections OS and saw a 50% increase in promise-to-pay within the first month. The AI handles objections just like our best human agents.",
    name: "Placeholder Name",
    title: "Head of Collections, FinTech"
  },
  {
    id: 3,
    quote: "Integrating the WhatsApp Business platform with our existing CRM was flawless. Now, our appointment reminders and follow-ups are entirely autonomous, dropping no-shows by 80%.",
    name: "Placeholder Name",
    title: "Operations Lead, Healthcare Provider"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <section className="w-full py-24 md:py-32 bg-background border-b border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <FadeInUp as="span" className="text-eyebrow block mb-4">Customer Stories</FadeInUp>
          <FadeInUp as="h2" delay={0.1} className="text-[32px] md:text-[40px] font-semibold tracking-tight text-text-primary">
            Trusted by innovators.
          </FadeInUp>
        </div>
        
        {/* Navigation Arrows */}
        <FadeInUp delay={0.2} className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-background transition-colors duration-200"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-primary hover:bg-text-primary hover:text-background transition-colors duration-200"
          >
            <ChevronRight size={18} />
          </button>
        </FadeInUp>
      </div>

      <div 
        className="w-full relative h-[360px] md:h-[400px] flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1, zIndex: 10 }}
            exit={{ opacity: 0, x: direction * -100, scale: 0.95, zIndex: 0 }}
            transition={{ duration: 0.5, ease: easing }}
            className="absolute w-[90%] md:w-[70%] max-w-[800px] bg-surface border border-border p-8 md:p-12 rounded-card shadow-xl"
          >
            <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
              <div className="w-14 h-14 rounded-full bg-border flex-shrink-0 flex items-center justify-center text-text-secondary">
                {/* Avatar Placeholder */}
                <span className="text-xl font-medium">
                  {testimonials[currentIndex].name.charAt(0)}
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-[18px] md:text-[22px] text-text-primary leading-relaxed font-medium">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="flex flex-col">
                  <span className="text-[14px] font-bold text-text-primary">
                    {testimonials[currentIndex].name}
                  </span>
                  <span className="text-[13px] text-text-secondary">
                    {testimonials[currentIndex].title}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Peek Neighbors (Decorative only, handled simply by fixed sizes and overflow hidden on parent) */}
      </div>

      {/* Progress Line */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 mt-8">
        <div className="w-full h-[2px] bg-surface relative overflow-hidden rounded-full">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-text-secondary rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: isHovered ? 'auto' : '100%' }}
            key={currentIndex}
            transition={{ duration: 6, ease: "linear" }}
            style={{ width: isHovered ? `${((currentIndex + 1) / testimonials.length) * 100}%` : '100%' }}
          />
        </div>
      </div>
    </section>
  );
}

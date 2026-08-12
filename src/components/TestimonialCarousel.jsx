import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './TestimonialCarousel.css';

const testimonials = [
  {
    id: 1,
    quote: "AI-qualified leads and 3x lower CAC changed how we run outbound.",
    name: "Michael Chen",
    title: "VP of Sales, Real Estate",
    avatar: "/avatar_1.png"
  },
  {
    id: 2,
    quote: "100% of our calls get audited now instead of a 5% sample.",
    name: "Sarah Jenkins",
    title: "Head of Support, Consumer Durable",
    avatar: "/avatar_2.png"
  },
  {
    id: 3,
    quote: "Collections went from manual follow-up to automated, and recovery got faster.",
    name: "David Ross",
    title: "Director of Operations, Fintech",
    avatar: "/avatar_3.png"
  },
  {
    id: 4,
    quote: "No more missed appointment reminders — our no-show rate dropped.",
    name: "Dr. Emily Stone",
    title: "Clinic Administrator, Healthcare",
    avatar: "/avatar_4.png"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const onTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section className="carousel-section section-padding">
      <RevealOnScroll className="container carousel-container glass">
        <div 
          className="carousel-content"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="carousel-avatar-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="carousel-avatar"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
          
          <div className="carousel-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="carousel-quote">"{testimonials[currentIndex].quote}"</h3>
                <div className="carousel-author">
                  <strong>{testimonials[currentIndex].name}</strong><br/>
                  <span className="text-muted">{testimonials[currentIndex].title}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="carousel-controls">
          <button onClick={handlePrev} className="control-btn" aria-label="Previous Testimonial">
            ←
          </button>
          <button onClick={handleNext} className="control-btn" aria-label="Next Testimonial">
            →
          </button>
        </div>
      </RevealOnScroll>
    </section>
  );
}

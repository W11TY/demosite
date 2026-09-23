import React, { useRef, useEffect } from 'react';
import { FadeInUp } from './shared/Motion';
import SectionMarquee from './shared/SectionMarquee';
import cr1 from '../assets/cards/cr1.png';
import cr2 from '../assets/cards/cr2.png';
import cr3 from '../assets/cards/cr3.png';
import cr4 from '../assets/cards/cr4.png';
import cr5 from '../assets/cards/cr5.png';
import cr6 from '../assets/cards/cr6.png';
import { Globe, Smartphone, Code2, ShieldCheck, Zap, Car } from 'lucide-react';

const works = [
  {
    industry: "Real Estate AI",
    icon: Globe,
    image: cr1,
    desc: "Automated follow-ups and lead qualification to ensure zero missed opportunities and 3x lower CAC."
  },
  {
    industry: "Consumer Durable",
    icon: Smartphone,
    image: cr2,
    desc: "Automate 80% of support queries while tripling customer satisfaction and cutting costs."
  },
  {
    industry: "Fintech Solutions",
    icon: ShieldCheck,
    image: cr3,
    desc: "Cut cost-to-collect by 75% using AI agents that outperform human collectors on every metric."
  },
  {
    industry: "Healthcare Systems",
    icon: Code2,
    image: cr4,
    desc: "Reduce patient no-shows by 80% with intelligent scheduling and fully automated reminders."
  },
  {
    industry: "Utilities AI",
    icon: Zap,
    image: cr5,
    desc: "Achieve a 4.8/5 CSAT score with query resolution and bill reminders running on autopilot."
  },
  {
    industry: "Automobile Tech",
    icon: Car,
    image: cr6,
    desc: "Boost conversion by 30% with instant lead qualification and automated service booking."
  }
];

export default function WorksCarousel() {
  const scrollRef = useRef(null);
  const set1Ref = useRef(null);

  useEffect(() => {
    let animationId;
    let isDown = false;
    let isHovered = false;
    let startX;
    let scrollLeft;
    
    const slider = scrollRef.current;
    if (!slider) return;

    let resetWidth = 0;
    let lastScrollLeft = slider.scrollLeft;

    // Delay initialization slightly to let layout settle
    setTimeout(() => {
      if (set1Ref.current && slider) {
        resetWidth = set1Ref.current.offsetWidth + 24;
        slider.scrollLeft = resetWidth * 4;
        lastScrollLeft = slider.scrollLeft;
      }
    }, 200);

    const onMouseDown = (e) => {
      isDown = true;
      slider.classList.add('cursor-grabbing');
      slider.classList.remove('cursor-grab');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    
    const onMouseLeave = () => {
      isDown = false;
      isHovered = false;
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('cursor-grab');
    };
    
    const onMouseUp = () => {
      isDown = false;
      slider.classList.remove('cursor-grabbing');
      slider.classList.add('cursor-grab');
    };
    
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };
    
    const onMouseEnter = () => { isHovered = true; };
    const onTouchStart = () => { isHovered = true; };
    const onTouchEnd = () => { isHovered = false; };

    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);
    slider.addEventListener('mouseenter', onMouseEnter);
    slider.addEventListener('touchstart', onTouchStart, { passive: true });
    slider.addEventListener('touchend', onTouchEnd);

    const step = () => {
      if (set1Ref.current && resetWidth > 0) {
        const currentScroll = slider.scrollLeft;
        const delta = Math.abs(currentScroll - lastScrollLeft);
        // If delta > 2, user is momentum scrolling or dragging fast
        const isMomentumScrolling = delta > 2;

        if (!isHovered && !isDown && !isMomentumScrolling) {
          slider.scrollLeft += 1.5;
        }

        // Only wrap when completely safe (not dragging, not momentum scrolling)
        if (!isDown && !isMomentumScrolling) {
          if (slider.scrollLeft >= resetWidth * 6) {
            slider.scrollLeft -= resetWidth;
          } else if (slider.scrollLeft <= resetWidth * 2) {
            slider.scrollLeft += resetWidth;
          }
        }
        
        lastScrollLeft = slider.scrollLeft;
      }
      animationId = requestAnimationFrame(step);
    };
    
    animationId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationId);
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
      slider.removeEventListener('mouseenter', onMouseEnter);
      slider.removeEventListener('touchstart', onTouchStart);
      slider.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <section className="w-full pt-[100px] lg:pt-[180px] pb-[80px] lg:pb-[120px] border-b border-border bg-[#F7F7F7] overflow-hidden relative">

      {/* Massive Marquee */}
      <SectionMarquee title="Our Works" />

      <div className="w-full px-6 lg:px-[58px] mb-12 mt-12">
        <h2 className="text-[clamp(32px,5vw,56px)] font-medium tracking-tight leading-[1.1] text-[#111111] max-w-[800px]">
          Everything you need, from one team, on a fixed deadline
        </h2>
      </div>

      {/* Auto-scrolling Carousel Layout */}
      <div 
        ref={scrollRef}
        className="w-full pb-12 overflow-x-auto cursor-grab scrollbar-hide select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex w-max gap-[24px]">
          {/* Create 10 identical sets to ensure a massive runway for scrolling in both directions */}
          {[...Array(10)].map((_, trackIndex) => (
            <div 
              key={`set-${trackIndex}`} 
              ref={trackIndex === 0 ? set1Ref : null} 
              className="flex gap-[24px] shrink-0"
            >
              {works.map((work, i) => {
                const Icon = work.icon;
                return (
                  <div
                    key={`set${trackIndex}-${i}`}
                    className="w-[300px] md:w-[340px] shrink-0 group"
                  >
                    {/* Card */}
                    <div className="relative flex flex-col bg-white overflow-hidden h-[480px] md:h-[520px] rounded-[24px] border border-black/10 shadow-lg hover:shadow-xl transition-shadow duration-300 pointer-events-none">
                      
                      {/* Background Image */}
                      <div className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 flex items-center justify-center p-6">
                        <img
                          src={work.image}
                          alt={work.industry}
                          className="w-full h-full object-contain object-top animate-float"
                          style={{
                            animationDelay: `-${i * 0.8}s`,
                            animationDuration: `${4 + (i % 3) * 0.7}s`
                          }}
                        />
                      </div>

                      {/* White gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent to-70%" />

                      {/* Top Left Icon Removed */}

                      {/* Bottom Content */}
                      <div className="relative z-10 mt-auto p-6 pt-20">
                        <h3 className="text-[22px] font-semibold text-[#111111] tracking-tight mb-2">
                          {work.industry}
                        </h3>
                        <p className="text-[14px] text-black/60 leading-relaxed">
                          {work.desc}
                        </p>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

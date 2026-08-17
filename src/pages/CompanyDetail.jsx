import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { FadeInUp, StaggerContainer, StaggerItem } from '../components/shared/Motion';
import { company } from '../data/company';

export default function CompanyDetail() {
  const { id } = useParams();
  
  const pageData = company.find(item => item.id === id);

  if (!pageData) {
    return <Navigate to="/company" replace />;
  }

  // Specifically rendering the About Us layout if the id is 'about'
  if (id === 'about') {
    return (
      <div className="w-full bg-background pt-24 pb-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <StaggerContainer>
            
            {/* Header */}
            <FadeInUp as="h1" className="text-[48px] md:text-[64px] font-semibold tracking-tight text-text-primary mb-12">
              About Us
            </FadeInUp>
            
            <div className="flex flex-col lg:flex-row gap-16 items-start mb-32">
              <FadeInUp delay={0.1} as="div" className="flex-1 text-[18px] md:text-[20px] text-text-secondary leading-relaxed space-y-6">
                <p>
                  At VoxiFlow AI, we believe customer communication shouldn't be managed through disconnected tools and isolated touchpoints. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent, connected ecosystem.
                </p>
                <p>
                  That's why we built the Voxi CX Operating System—an AI-powered platform that unifies Voice AI, WhatsApp, Contact Center, Telephony, Workflow Automation, Quality Management, CRM Integration, and Customer Journey Orchestration into a single intelligent ecosystem.
                </p>
                <p>
                  Our AI Voice Agents don't just automate calls—they understand context, remember conversations, adapt in real time, and communicate naturally like a human. Every interaction is personalized, every conversation is meaningful, and every customer journey is intelligently orchestrated.
                </p>
                <p className="font-semibold text-text-primary text-[24px] pt-4">Our mission is simple:</p>
                <p className="text-[24px] text-text-primary leading-tight font-medium">
                  To help businesses deliver exceptional customer experiences while improving operational efficiency, increasing conversions, and reducing communication costs.
                </p>
                <p>
                  Whether it's sales, customer support, collections, appointment booking, or proactive customer engagement, Voxi enables enterprises to manage every customer conversation through one unified AI platform.
                </p>
                <p className="font-semibold text-text-primary">
                  One Ecosystem. One Platform. Every Customer Conversation.
                </p>
                <p>
                  Start your pilot today and experience the future of customer engagement.
                </p>
              </FadeInUp>
            </div>

            {/* Founding Team */}
            <FadeInUp delay={0.2} className="mb-32">
              <div className="flex items-center gap-4 mb-12">
                 <div className="w-10 h-6 rounded-full border border-border flex items-center justify-center bg-surface shrink-0" />
                 <div className="h-px bg-border flex-1 max-w-[120px]" />
                 <span className="text-[12px] font-mono tracking-[0.15em] text-text-secondary uppercase">
                   Founding Team
                 </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { name: "Manish Joshi", title: "CEO" },
                  { name: "Rakesh Kanugula", title: "COO" },
                  { name: "Abhinash Khare", title: "CTO" }
                ].map((founder, idx) => (
                  <div key={idx} className="bg-surface border border-border rounded-[24px] p-8 flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-border mb-6 flex items-center justify-center">
                      <span className="text-[24px] font-medium text-text-secondary">{founder.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-[20px] font-semibold text-text-primary tracking-tight mb-1">{founder.name}</h3>
                    <p className="text-[14px] font-mono text-text-secondary tracking-widest uppercase">{founder.title}</p>
                  </div>
                ))}
              </div>
            </FadeInUp>

            {/* Why Voxi */}
            <FadeInUp delay={0.3} className="bg-[#111] text-white rounded-[32px] p-8 md:p-16 lg:p-20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-[#1a1a1a] z-0" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-10 h-6 rounded-full border border-white/20 flex items-center justify-center bg-transparent shrink-0" />
                   <div className="h-px bg-white/10 flex-1 max-w-[120px]" />
                   <span className="text-[12px] font-mono tracking-[0.15em] text-white/50 uppercase">
                     Why Voxi
                   </span>
                </div>

                <h2 className="text-[36px] md:text-[54px] font-medium tracking-tight text-white leading-[1.1] mb-16 max-w-[800px]">
                  One Ecosystem. One Platform. Unlimited Possibilities.
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="space-y-6 text-[16px] md:text-[18px] text-white/70 leading-relaxed">
                    <p>
                      Everything you need to build, deploy, and scale enterprise AI—from Voice AI and WhatsApp Automation to Workflow Orchestration, CRM Integrations, Analytics, and AI Intelligence. No complex pricing tiers. No hidden add-ons. Just one intelligent platform delivering measurable business outcomes.
                    </p>
                    <p className="text-[20px] md:text-[24px] font-medium text-white leading-snug pt-4">
                      Technology Alone Doesn't Deliver Success. Implementation Does.
                    </p>
                    <p>
                      At Voxi, we believe that the success of an AI solution is not determined by the technology itself, but by how effectively it is implemented, adopted, and optimized within the customer's business.
                    </p>
                  </div>
                  <div className="space-y-6 text-[16px] md:text-[18px] text-white/70 leading-relaxed">
                    <p>
                      That's why we've built a structured Enterprise Implementation & Success Framework that ensures every deployment delivers measurable business outcomes—not just a successful go-live.
                    </p>
                    <p>
                      Our engagement doesn't end after deployment. That's where it truly begins.
                    </p>
                    <p>
                      Our Customer Success and Implementation teams work closely with customers through every stage—from discovery and solution design to deployment, user adoption, optimization, and continuous performance improvement.
                    </p>
                    <p className="font-semibold text-white">
                      We measure success not by delivering a platform, but by delivering real business impact over the first 90 days and beyond.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
            
          </StaggerContainer>
        </div>
      </div>
    );
  }

  // Render the Culture Manifesto layout if the id is 'culture'
  if (id === 'culture') {
    const culturePoints = [
      { title: "Customer Success Begins After the Sale", desc: "We don't celebrate signed contracts—we celebrate customers achieving measurable business outcomes." },
      { title: "We Measure Impact, Not Attendance", desc: "We believe great work is measured by impact, not by the number of hours you spend working." },
      { title: "Trust is Given, Ownership is Expected", desc: "We trust every team member to make the right decisions and take complete ownership of their work." },
      { title: "Think Like a Founder", desc: "Don't wait for permission. If you see an opportunity to improve something, own it and make it happen." },
      { title: "Family Before Everything", desc: "We believe success is truly meaningful only when it's shared with loved ones. That's why every employee receives one dedicated Family Leave and a monthly Voxi-sponsored Family Dinner to celebrate life beyond work." },
      { title: "Health is Our Greatest Investment", desc: "We provide health insurance for every employee and their immediate family because peace of mind creates better work." },
      { title: "Build a Healthy Lifestyle", desc: "Complete 10,000 steps for at least 15 days in a month and we'll reward your commitment to a healthier life." },
      { title: "Building Wealth Together", desc: "We sponsor a monthly SIP contribution for our employees because financial well-being is just as important as professional growth." },
      { title: "Less Mobile. More Life.", desc: "Employees who achieve the monthly mobile screen-time goals will be recognized and rewarded for promoting a healthier and more balanced digital lifestyle." },
      { title: "Rewards That Improve Your Life", desc: "We don't reward you with gadgets—we reward you with books, plants, family experiences, wellness activities, and opportunities to grow." },
      { title: "Never Stop Learning", desc: "Every team member receives a dedicated monthly learning budget for books, empowering them to continuously learn, grow, and innovate." },
      { title: "Stay Close to Nature.", desc: "Every quarter, we organize a team mountain retreat to recharge, reconnect, and rediscover the creativity that nature inspires." },
      { title: "Sports Build Better Teams", desc: "Every month we play together because stronger teams are built through shared experiences, not just shared projects." },
      { title: "Work From Hometown", desc: "Every six months, we take Voxi to one teammate's hometown to experience their culture, meet their family, and strengthen our bonds as one team." },
      { title: "Start with Wellness.", desc: "Every workday begins with a 15-minute team yoga and mindfulness session because great work starts with a healthy mind and body." }
    ];

    return (
      <div className="w-full bg-background pt-24 pb-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <StaggerContainer>
            {/* Header */}
            <FadeInUp as="h1" className="text-[48px] md:text-[64px] font-semibold tracking-tight text-text-primary mb-6">
              The Voxi Culture Manifesto
            </FadeInUp>
            <FadeInUp delay={0.1} as="p" className="text-[20px] md:text-[24px] text-text-secondary leading-relaxed max-w-[800px] mb-24">
              Life at Voxi is built on purpose, trust, and well-being. Here is what we stand for.
            </FadeInUp>

            {/* Culture Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
              {culturePoints.map((point, idx) => (
                <StaggerItem key={idx} className="bg-surface border border-border rounded-[24px] p-8 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
                  <div className="w-10 h-10 rounded-full bg-[#f1f1f1] text-text-primary flex items-center justify-center font-semibold text-[15px] mb-6">
                    {idx + 1}
                  </div>
                  <h3 className="text-[20px] font-semibold text-text-primary tracking-tight mb-3">{point.title}</h3>
                  <p className="text-[15px] text-text-secondary leading-relaxed flex-1">{point.desc}</p>
                </StaggerItem>
              ))}
            </div>

            {/* The Voxi Promise */}
            <FadeInUp delay={0.2} className="bg-[#111] text-white rounded-[32px] p-8 md:p-16 lg:p-20 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-black to-[#1a1a1a] z-0" />
              <div className="relative z-10 text-center max-w-[1000px] mx-auto">
                <span className="text-[12px] font-mono tracking-[0.15em] text-white/50 uppercase block mb-8">
                  The Voxi Promise
                </span>
                <h2 className="text-[32px] md:text-[48px] font-medium tracking-tight text-white leading-[1.2]">
                  At Voxi, you're not joining a company—you're joining a mission to build world-class AI while living a healthier, happier, and more meaningful life.
                </h2>
              </div>
            </FadeInUp>
          </StaggerContainer>
        </div>
      </div>
    );
  }

  // Fallback layout for other company pages
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center pt-24 pb-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20 text-center">
        <StaggerContainer>
          <FadeInUp as="h1" className="text-[48px] md:text-[64px] font-semibold tracking-tight text-text-primary mb-8">
            {pageData.title}
          </FadeInUp>
          <FadeInUp delay={0.1} as="p" className="text-[18px] md:text-[22px] text-text-secondary leading-relaxed max-w-[800px] mx-auto">
            {pageData.description}
          </FadeInUp>
        </StaggerContainer>
      </div>
    </div>
  );
}

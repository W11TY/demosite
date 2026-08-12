import React from 'react';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './Works.css';

export function Works() {
  const worksData = [
    {
      id: 1,
      tag: "Real Estate",
      title: "Revenue Intelligence Platform",
      useCases: "Lead Qualification & Nurturing, Appointment Booking & Reminders, Outbound Calling for Promotions, Follow-ups & Meeting Scheduling",
      stat1Label: "Connectivity",
      stat1Value: "0.9",
      stat2Label: "Lower CAC",
      stat2Value: "3x",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      tag: "Consumer Durable",
      title: "Customer Service Operating System",
      useCases: "Inbound Query Handling, Complaint Registration & Status Tracking, Service Ticket Updates, Order Status/Returns/Exchanges, Multilingual Voice Assistance",
      stat1Label: "Automation",
      stat1Value: "0.8",
      stat2Label: "Increase in CSAT",
      stat2Value: "3x",
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      tag: "Fintech",
      title: "Collections Operating System",
      useCases: "Payment Reminders, Renewal & Recovery, EMI Collection Calls, Invoice & Billing Queries, Document Collection for KYC, Auto Follow-up on Dues",
      stat1Label: "Lower Cost to Collect",
      stat1Value: "0.75",
      stat2Label: "Right Party Connectivity",
      stat2Value: "0.9",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 4,
      tag: "Healthcare",
      title: "Appointment Management Operating System",
      useCases: "Appointment Booking & Reminders, Prescription Refill Reminders, Insurance Claims Filing Assistance, Eligibility Checks for Policies, Health Record Update Notifications",
      stat1Label: "Lead Connectivity",
      stat1Value: "0.9",
      stat2Label: "Lower CAC",
      stat2Value: "3x",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 5,
      tag: "Automobile",
      title: "Customer Engagement Automation",
      useCases: "Feedback & Survey Collection, Customer Engagement Campaigns, Event/Offer Reminders, Brand Awareness via Voice Campaigns, Lead Generation Campaigns",
      stat1Label: "Engagement",
      stat1Value: "High",
      stat2Label: "Lead Gen",
      stat2Value: "Automated",
      imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 6,
      tag: "Utilities",
      title: "Customer Engagement Operating System",
      useCases: "Recharge/Balance Enquiry, Plan Change Requests, Power/Water Bill Alerts, Complaint Resolution, Usage Alerts & Offers",
      stat1Label: "Query Resolution",
      stat1Value: "Instant",
      stat2Label: "Support",
      stat2Value: "24/7",
      imageUrl: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="works-section section-padding" id="industries">
      <div className="container" style={{ overflow: 'hidden' }}>
        <RevealOnScroll>
          <span className="eyebrow">Industries We Power</span>
        </RevealOnScroll>
      </div>

      <div className="works-marquee">
        <div className="works-marquee-track">
          {/* First set */}
          {worksData.map((work) => (
            <div className="work-card glass" key={`a-${work.id}`}>
              <div className="work-image-wrapper">
                <img src={work.imageUrl} alt={work.tag} className="work-image" />
                <span className="work-tag">{work.tag}</span>
              </div>
              <div style={{ padding: '0 0.5rem 1rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{titleCase(work.title)}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.4' }}>
                  <strong>Use cases:</strong> {work.useCases}
                </p>
              </div>
              <div className="work-stats">
                <div className="stat-item">
                  <span className="stat-value">{work.stat1Value}</span>
                  <span className="stat-label">{work.stat1Label}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{work.stat2Value}</span>
                  <span className="stat-label">{work.stat2Label}</span>
                </div>
              </div>
            </div>
          ))}
          {/* Second set for infinite loop */}
          {worksData.map((work) => (
            <div className="work-card glass" key={`b-${work.id}`}>
              <div className="work-image-wrapper">
                <img src={work.imageUrl} alt={work.tag} className="work-image" />
                <span className="work-tag">{work.tag}</span>
              </div>
              <div style={{ padding: '0 0.5rem 1rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{titleCase(work.title)}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: '1.4' }}>
                  <strong>Use cases:</strong> {work.useCases}
                </p>
              </div>
              <div className="work-stats">
                <div className="stat-item">
                  <span className="stat-value">{work.stat1Value}</span>
                  <span className="stat-label">{work.stat1Label}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{work.stat2Value}</span>
                  <span className="stat-label">{work.stat2Label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function titleCase(str) {
  return str;
}

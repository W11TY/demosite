import React from 'react';
import { RevealOnScroll } from './shared/RevealOnScroll';
import './Insights.css';

export function Insights() {
  const articles = [
    {
      id: 1,
      tag: "Speech AI",
      title: "Why Speech LLMs Are Closing the Gap Between AI and Human Conversation",
      excerpt: "How Voxi's low-latency Speech Language Models deliver real-time, natural voice interactions that truly feel human.",
      author: "Voxi Research"
    },
    {
      id: 2,
      tag: "Multi-Agent AI",
      title: "Multi-Agent Orchestration: Why One AI Agent Isn’t Enough for Enterprise Customer Journeys",
      excerpt: "How specialized AI agents collaborating across workflows outperform any single generalist model.",
      author: "Voxi Engineering"
    },
    {
      id: 3,
      tag: "QMS & Compliance",
      title: "100% Call Audit vs. Manual Sampling: The Business Case for AI-Driven Quality Management",
      excerpt: "Why reviewing every customer interaction with AI beats reviewing 5% of them with a human team.",
      author: "Voxi Quality Team"
    }
  ];

  return (
    <section className="insights-section section-padding" id="insights">
      <div className="container">
        <RevealOnScroll className="insights-header">
          <div className="section-title">
            <span className="eyebrow">INSIGHTS & RESEARCH</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginTop: 'var(--space-sm)' }}>
              The latest on enterprise AI orchestration.
            </h2>
          </div>
          <a href="#blog" className="insights-link">View all articles →</a>
        </RevealOnScroll>

        <div className="insights-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {articles.map((article, index) => (
            <RevealOnScroll key={article.id} delay={index * 0.1}>
              <div className="article-card">
                <div className="article-image-wrapper placeholder-image">
                  <div className="article-image"></div>
                  <span className="article-tag">{article.tag}</span>
                </div>
                <div className="article-content">
                  <h3 className="article-title">{article.title}</h3>
                  <p className="article-excerpt text-muted">{article.excerpt}</p>
                  <p className="article-author" style={{ fontSize: '0.75rem' }}>{article.author}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

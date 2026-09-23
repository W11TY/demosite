import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, HeadphonesIcon, CreditCard, TrendingUp, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const stages = [
  { name: 'Enquiry',     icon: MessageSquare,   color: '#10b981', status: 'Active',    desc: 'First touch — captured, qualified, responded.' },
  { name: 'Support',     icon: HeadphonesIcon,  color: '#6366f1', status: 'Automated', desc: 'Resolve 80% of queries without human intervention.' },
  { name: 'Collections', icon: CreditCard,      color: '#f59e0b', status: 'Running',   desc: 'Intelligent follow-ups that outperform human collectors.' },
  { name: 'Retention',   icon: TrendingUp,      color: '#8b5cf6', status: 'Learning',  desc: 'Proactive re-engagement before churn happens.' },
];

export default function Ecosystem() {
  return (
    <section className="w-full bg-[#F7F7F7] py-24 border-t border-b border-border">
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
        
        <h2 className="text-[clamp(32px,5vw,54px)] font-medium tracking-tight text-[#111111] leading-[1.1] mb-16 max-w-[800px]">
          One Ecosystem. One Platform. Every Customer Conversation.
        </h2>

        <div className="flex flex-col gap-8 lg:gap-12">

          {/* Main row */}
          <div className="bg-white rounded-[24px] border border-black/5 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr]">

              {/* Left — Product card visual */}
              <div className="border-b lg:border-b-0 lg:border-r border-black/5 p-8 lg:p-10">
                {/* Card shell */}
                <div className="rounded-2xl border border-black/6 bg-[#fafafa] overflow-hidden shadow-sm">
                  
                  {/* Card header */}
                  <div className="px-5 py-3.5 border-b border-black/5 bg-white flex items-center gap-3">
                    <img src={logo} alt="VoxiFlow" className="h-5 w-auto object-contain" />
                    <span className="text-[11px] text-black/35 font-medium tracking-wide">Customer Intelligence Platform</span>
                    <div className="ml-auto flex items-center gap-1.5">
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      />
                      <span className="text-[10px] text-emerald-600 font-semibold">Live</span>
                    </div>
                  </div>

                  {/* Pipeline stages */}
                  <div className="px-5 py-5">
                    {stages.map((stage, i) => {
                      const Icon = stage.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.1 }}
                          className="flex items-start gap-3.5 relative"
                        >
                          {/* Vertical connector */}
                          {i < stages.length - 1 && (
                            <div className="absolute left-[8px] top-[22px] bottom-[-8px] w-px bg-black/8" />
                          )}

                          {/* Node dot */}
                          <div className="mt-1.5 w-[18px] h-[18px] rounded-full border-[1.5px] border-black/10 bg-white flex items-center justify-center shrink-0 z-10">
                            <motion.div
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity }}
                              className="w-[7px] h-[7px] rounded-full"
                              style={{ backgroundColor: stage.color }}
                            />
                          </div>

                          {/* Row content */}
                          <div className="pb-5 flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                              <Icon size={12} style={{ color: stage.color }} strokeWidth={2} />
                              <span className="text-[13px] font-semibold text-[#111]">{stage.name}</span>
                              <span
                                className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full"
                                style={{ color: stage.color, backgroundColor: `${stage.color}15` }}
                              >
                                {stage.status}
                              </span>
                            </div>
                            <p className="text-[12px] text-black/45 leading-relaxed">{stage.desc}</p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Card footer */}
                  <div className="px-5 py-3 border-t border-black/5 bg-white flex items-center gap-2">
                    <span className="text-[11px] text-black/35">All channels unified</span>
                    <ArrowRight size={11} className="text-black/25" />
                    <span className="text-[11px] text-black/35">One intelligent layer</span>
                  </div>
                </div>
              </div>

              {/* Right — Text content */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-[26px] md:text-[32px] font-medium text-[#111111] leading-tight mb-5 tracking-tight">
                  Every Customer Conversation, connected.
                </h3>
                <p className="text-[15px] md:text-[16px] text-black/55 leading-relaxed mb-8">
                  At VoxiFlow AI, we believe customer communication shouldn't be managed through disconnected tools and isolated touchpoints. Every customer interaction—from the first enquiry to post-sales support, collections, and retention—should operate as one intelligent, connected ecosystem.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: MessageSquare,  label: "Unified Context",      desc: "Agents remember past interactions across all channels." },
                    { icon: HeadphonesIcon, label: "Seamless Handoffs",    desc: "Transition perfectly from AI to human operators." },
                    { icon: TrendingUp,     label: "Proactive Engagement", desc: "Anticipate customer needs before they ask." },
                  ].map((feat, j) => {
                    const FIcon = feat.icon;
                    return (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + j * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#f4f4f5] flex items-center justify-center shrink-0 mt-0.5">
                          <FIcon size={13} strokeWidth={1.8} className="text-[#555]" />
                        </div>
                        <div>
                          <span className="text-[13px] font-semibold text-[#111111]">{feat.label}: </span>
                          <span className="text-[13px] text-black/50">{feat.desc}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Methodology & 90-Day Framework */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 border border-black/5 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
              <div className="max-w-[560px]">
                <h3 className="text-[24px] md:text-[30px] font-medium text-[#111111] leading-tight mb-3 tracking-tight">
                  Our Methodology
                </h3>
                <p className="text-[15px] text-black/55 leading-relaxed">
                  Technology alone doesn't deliver success. <span className="text-[#111111] font-semibold">Implementation does.</span> We work closely with you from discovery to optimization.
                </p>
              </div>
              <div className="shrink-0 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700 text-[11px] font-bold tracking-widest uppercase">
                90-Day Success Framework
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pt-6">
              <div className="absolute top-10 left-0 w-full h-px bg-black/6" />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 1.4, ease: 'easeOut' }}
                className="absolute top-10 left-0 h-px bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                {[
                  { day: 'Day 1–14',  title: 'Discovery & Design',      desc: 'Mapping journeys, defining AI workflows.',          color: '#3b82f6' },
                  { day: 'Day 15–45', title: 'Deployment',              desc: 'Integration, testing, intelligent rollout.',         color: '#6366f1' },
                  { day: 'Day 46–75', title: 'Adoption & Tuning',       desc: 'Responses fine-tuned, teams onboarded.',            color: '#10b981' },
                  { day: 'Day 76–90', title: 'Business Outcomes',       desc: 'Higher CSAT, lower CAC, automated resolution.',     color: '#f59e0b' },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.12 }}
                    className="relative pt-7"
                  >
                    <div className="absolute top-[-4px] left-0 w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-black/12" />
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.9 + i * 0.12, type: 'spring' }}
                      className="absolute top-[-1.5px] left-[3px] w-[7px] h-[7px] rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                    <span className="text-[10px] font-bold tracking-widest uppercase mb-2 block" style={{ color: step.color }}>
                      {step.day}
                    </span>
                    <h4 className="text-[15px] font-semibold text-[#111111] mb-1.5 tracking-tight">{step.title}</h4>
                    <p className="text-[12px] text-black/50 leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

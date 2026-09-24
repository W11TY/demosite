import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart2, MessageSquare, Phone, Star } from 'lucide-react';
import { FadeInUp } from './shared/Motion';

const products = [
  {
    id: "01",
    name: "Super Intelligent AI Voice Agents",
    shortName: "VOXIFLOW",
    pill: "Voice AI",
    pillColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    desc: "Autonomous Customer Journey & Follow-up Automation that speaks naturally like a human."
  },
  {
    id: "02",
    name: "WhatsApp Business Platform",
    shortName: "VOXICHATR",
    pill: "Messaging",
    pillColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    desc: "Automate customer conversations with an intelligent AI chatbot that understands, responds, and resolves queries 24x7."
  },
  {
    id: "03",
    name: "Telephony Command Center",
    shortName: "VOXICONNEX",
    pill: "Telephony",
    pillColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    desc: "Enterprise-grade cloud calling platform for managing inbound, outbound, and automated business communications."
  },
  {
    id: "04",
    name: "Quality Management System",
    shortName: "VOXIQUEIQ",
    pill: "QA & Compliance",
    pillColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    desc: "Automatically evaluates customer conversations using AI-driven quality parameters and scorecards."
  },
  {
    id: "05",
    name: "AI Analytics & Intelligence",
    shortName: "VOXILENSA",
    pill: "Analytics",
    pillColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    desc: "Advanced insights, sentiment analysis, conversation analytics, and performance optimization powered by AI."
  }
];

const stats = [
  { value: "10M+", label: "Conversations/month" },
  { value: "98%",  label: "Resolution rate" },
  { value: "4.8★", label: "Avg CSAT score" },
  { value: "75%",  label: "Cost reduction" },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full pt-[80px] lg:pt-[160px] pb-[60px] lg:pb-[120px] bg-background border-b border-border">
      <div className="w-full px-5 lg:px-[58px]">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-12">
          <div className="max-w-[620px]">
            <FadeInUp as="span" className="text-eyebrow block mb-4">Core Platform</FadeInUp>
            <FadeInUp as="h2" delay={0.1} className="text-[clamp(36px,5vw,64px)] font-medium tracking-[-0.03em] leading-[1.05] text-text-primary">
              The complete toolkit for autonomous customer orchestration.
            </FadeInUp>
          </div>
          <FadeInUp delay={0.2} className="self-start md:self-end">
            <a
              href="#platform"
              className="inline-flex items-center justify-center bg-surface border border-border text-text-primary rounded-full px-6 py-3 text-[14px] font-medium transition-colors duration-200 hover:bg-black/5 whitespace-nowrap"
            >
              Explore Platform
            </a>
          </FadeInUp>
        </div>

        {/* Stats Bar */}
        <FadeInUp delay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-[20px] overflow-hidden border border-border mb-16 md:mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="bg-background px-6 py-5 flex flex-col gap-1">
              <span className="text-[28px] md:text-[32px] font-semibold tracking-tight text-text-primary leading-none">{stat.value}</span>
              <span className="text-[13px] text-text-secondary">{stat.label}</span>
            </div>
          ))}
        </FadeInUp>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Accordion — Left (always visible) */}
          <div className="col-span-1 lg:col-span-7 flex flex-col w-full order-1">
            <div className="border-t border-border">
              {products.map((product, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <FadeInUp
                    key={product.id}
                    delay={idx * 0.06}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative border-b border-border cursor-pointer transition-all duration-300 overflow-hidden touch-manipulation ${isActive ? 'pl-5' : 'pl-0 hover:pl-2'}`}
                  >
                    {/* Active left bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[#111] rounded-r-full transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                    <div className="py-5 md:py-6 flex items-center justify-between gap-4">
                      <div className="flex items-start gap-5 w-full min-w-0">
                        {/* Large watermark number */}
                        <span className={`text-[28px] md:text-[38px] font-bold leading-none shrink-0 transition-all duration-300 select-none tabular-nums ${isActive ? 'text-[#111]' : 'text-black/10 group-hover:text-black/20'}`}>
                          {product.id}
                        </span>

                        <div className="flex flex-col gap-1.5 min-w-0 pt-1">
                          <h3 className={`text-[20px] md:text-[24px] transition-colors duration-200 tracking-tight leading-tight ${isActive ? 'font-semibold text-text-primary' : 'font-medium text-text-secondary group-hover:text-text-primary'}`}>
                            {product.name}
                          </h3>
                          {/* Colourful pill */}
                          <span className={`inline-flex w-fit items-center text-[10px] uppercase tracking-[0.1em] font-medium px-2.5 py-0.5 rounded-full border transition-all duration-200 ${isActive ? product.pillColor : 'border-transparent text-black/20 bg-transparent'}`}>
                            {product.pill}
                          </span>
                        </div>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                        transition={{ duration: 0.2 }}
                        className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-black/10 bg-black text-white shrink-0"
                      >
                        <ArrowRight size={14} />
                      </motion.div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[68px] pr-4 pb-6 flex flex-col gap-3">
                            <p className="text-[15px] text-text-secondary leading-relaxed max-w-[460px]">
                              {product.desc}
                            </p>
                            <a href="#platform" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text-primary hover:gap-3 transition-all duration-200 w-fit">
                              Learn more <ArrowRight size={13} />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </FadeInUp>
                );
              })}
            </div>
          </div>

          {/* Preview Card — Right */}
          <div className="col-span-1 lg:col-span-5 order-2 lg:sticky lg:top-28 w-full max-w-[420px] mx-auto mt-12 lg:mt-0">
            <FadeInUp delay={0.2} className="relative w-full h-[380px] lg:h-[520px]">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ y: 25, scale: 0.95, opacity: 0 }}
                  animate={{ y: 0, scale: 1, opacity: 1 }}
                  exit={{ y: -20, scale: 0.97, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full flex items-center justify-center"
                >
                  <div className="w-full rounded-[28px] border border-white/8 bg-[#111] shadow-[0_24px_60px_rgba(0,0,0,0.22)] overflow-hidden">

                    {/* Top bar */}
                    <div className="px-5 py-3.5 border-b border-white/8 flex items-center gap-2 bg-white/[0.03]">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[11px] font-mono text-white/30 tracking-wide">{products[activeIndex].shortName}</span>
                      </div>
                      <span className={`ml-auto text-[9px] font-medium px-2 py-0.5 rounded-full border ${products[activeIndex].pillColor}`}>
                        {products[activeIndex].pill}
                      </span>
                    </div>

                    {/* Body */}
                    <div className="p-5">

                      {/* 01 — Voice Agent */}
                      {activeIndex === 0 && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 mb-1">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Live Call · 02:14</span>
                          </div>
                          {[
                            { agent: true,  text: "Hi, I'm calling about your policy renewal. Is now a good time?" },
                            { agent: false, text: "Sure, go ahead." },
                            { agent: true,  text: "Great! Your plan expires in 7 days. I can renew it right now at the same rate." },
                            { agent: false, text: "Yes please, go ahead." },
                          ].map((msg, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.5, duration: 0.3 }} className={`flex ${msg.agent ? 'justify-start' : 'justify-end'}`}>
                              <div className={`px-3 py-2 rounded-[10px] max-w-[80%] text-[11px] leading-relaxed ${msg.agent ? 'bg-white/10 text-white/70 rounded-tl-[3px]' : 'bg-violet-500 text-white rounded-tr-[3px]'}`}>{msg.text}</div>
                            </motion.div>
                          ))}
                          <div className="mt-2 flex items-center gap-[3px] h-5 overflow-hidden px-1">
                            {[4,7,11,8,13,5,10,14,6,5,12,9,13,6,8,4,10,12,7,9].map((h, i) => (
                              <motion.div key={i} animate={{ height: [Math.max(2, h*0.3), h, Math.max(2, h*0.3)] }} transition={{ repeat: Infinity, duration: 0.6+(i%3)*0.2, ease:"easeInOut", delay: i*0.05 }} className="w-[3px] rounded-full bg-violet-400" style={{ opacity: 0.6+(i%3)*0.2 }} />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 02 — WhatsApp */}
                      {activeIndex === 1 && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 rounded-[10px] px-3 py-2 mb-1">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.115 1.522 5.847L0 24l6.335-1.502A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.001-1.368l-.359-.213-3.722.882.937-3.625-.234-.373A9.818 9.818 0 1112 21.818z"/></svg>
                            <span className="text-[11px] font-medium text-[#25D366]">WhatsApp Business</span>
                            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                          </div>
                          {[
                            { from: "Customer", text: "What's the status of order #4821?" },
                            { from: "Voxi AI",  text: "Your order #4821 is out for delivery! Expected by 4 PM today. Track here 👉 voxi.link/4821" },
                            { from: "Customer", text: "Thank you!" },
                          ].map((msg, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: msg.from==='Voxi AI' ? -10 : 10 }} animate={{ opacity:1, x:0 }} transition={{ delay: 0.3+i*0.6, duration:0.4 }} className="flex flex-col gap-0.5">
                              <span className="text-[9px] font-mono text-white/30 px-1">{msg.from}</span>
                              <div className={`px-3 py-2 rounded-[10px] text-[11px] leading-relaxed ${msg.from==='Voxi AI' ? 'bg-[#25D366]/15 text-white/70 border border-[#25D366]/20' : 'bg-white/10 text-white/70'}`}>{msg.text}</div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* 03 — Telephony */}
                      {activeIndex === 2 && (
                        <div className="flex flex-col gap-3">
                          <div className="grid grid-cols-3 gap-2 mb-2">
                            {[{label:'Active Calls',val:'124',color:'text-blue-400'},{label:'Avg Wait',val:'0:34',color:'text-amber-400'},{label:'Resolved',val:'98%',color:'text-emerald-400'}].map((s,i)=>(
                              <motion.div key={i} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.2+i*0.1}} className="bg-white/5 border border-white/8 rounded-[10px] p-2.5 flex flex-col">
                                <span className={`text-[16px] font-semibold ${s.color}`}>{s.val}</span>
                                <span className="text-[9px] text-white/30 leading-tight mt-0.5">{s.label}</span>
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {['Inbound Queue','Outbound Dialer','IVR Flow','Call Recording'].map((item,i)=>(
                              <motion.div key={i} initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:0.4+i*0.1}} className="flex items-center gap-2 px-3 py-2 rounded-[8px] bg-white/5 border border-white/8">
                                <div className={`w-1.5 h-1.5 rounded-full ${i===0?'bg-blue-400 animate-pulse':i===1?'bg-emerald-400':'bg-white/20'}`} />
                                <span className="text-[11px] text-white/60">{item}</span>
                                <span className={`ml-auto text-[9px] font-mono ${i<2?'text-emerald-400':'text-white/20'}`}>{i<2?'ACTIVE':'IDLE'}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* 04 — QMS */}
                      {activeIndex === 3 && (
                        <div className="flex flex-col gap-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[11px] font-medium text-white/50">QA Scorecard</span>
                            <span className="text-[11px] font-semibold text-emerald-400">92 / 100</span>
                          </div>
                          {[{label:'Tone & Empathy',score:95},{label:'Script Adherence',score:88},{label:'Resolution Rate',score:94},{label:'Objection Handling',score:91}].map((item,i)=>(
                            <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2+i*0.1}} className="flex flex-col gap-1">
                              <div className="flex justify-between">
                                <span className="text-[10px] text-white/40">{item.label}</span>
                                <span className="text-[10px] font-mono text-white/50">{item.score}%</span>
                              </div>
                              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{width:0}} animate={{width:`${item.score}%`}} transition={{delay:0.4+i*0.2,duration:0.8,ease:'easeOut'}} className="h-full bg-emerald-400 rounded-full" />
                              </div>
                            </motion.div>
                          ))}
                          <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{delay:1.2,duration:0.4}} className="px-3 py-2 bg-amber-500/10 border border-amber-500/20 rounded-[8px] mt-1">
                            <span className="text-[10px] text-amber-400 flex items-center gap-1.5"><span className="animate-pulse">⚠</span> Auto-flagged deviation at 03:12</span>
                          </motion.div>
                        </div>
                      )}

                      {/* 05 — Analytics */}
                      {activeIndex === 4 && (
                        <div className="flex flex-col gap-3">
                          <span className="text-[11px] font-medium text-white/50">Sentiment Trend · Last 7 days</span>
                          <div className="flex items-end gap-1 h-14 border-b border-white/8 pb-1">
                            {[55,62,58,70,74,68,82,88].map((v,i)=>(
                              <motion.div key={i} initial={{height:0}} animate={{height:`${v}%`}} transition={{delay:0.2+i*0.08,duration:0.5,type:'spring',stiffness:100}} className="flex-1 rounded-t-[3px] relative group" style={{background:`hsl(${120+v},60%,52%)`,opacity:0.6+i*0.05}}>
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-[8px] px-1.5 py-0.5 rounded shadow-lg pointer-events-none">{v}%</div>
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex gap-2 flex-wrap mt-1">
                            {[{l:'😊 Positive (68%)',c:'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'},{l:'😐 Neutral (22%)',c:'bg-amber-500/10 text-amber-400 border-amber-500/20'},{l:'😠 Negative (10%)',c:'bg-red-500/10 text-red-400 border-red-500/20'}].map((s,i)=>(
                              <motion.div key={i} initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{delay:0.8+i*0.1}} className={`px-2 py-1 rounded-[6px] text-[9px] font-medium border ${s.c}`}>{s.l}</motion.div>
                            ))}
                          </div>
                          <div className="px-3 py-2 bg-white/5 border border-white/8 rounded-[8px] text-[10px] text-white/40 leading-relaxed">
                            Top keyword: <span className="font-medium text-white/70">"billing issue"</span> — mentioned in 34% of calls this week.
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </FadeInUp>
          </div>

        </div>
      </div>
    </section>
  );
}

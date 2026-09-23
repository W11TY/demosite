import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { solutions } from '../data/solutions';
import {
  IllustrationAutomobile,
  IllustrationConsumerDurable,
  IllustrationFintech,
  IllustrationHealthcare,
  IllustrationUtilities
} from '../components/shared/CardIllustrations';
import revenueImg from '../assets/solution/revenue.png';

const gradients = [
  'from-blue-500/20 to-indigo-900/40',
  'from-green-500/20 to-emerald-900/40',
  'from-purple-500/20 to-fuchsia-900/40',
  'from-orange-500/20 to-red-900/40',
  'from-cyan-500/20 to-blue-900/40',
  'from-amber-500/20 to-yellow-900/40'
];

const darkGradients = [
  'bg-gradient-to-t from-blue-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-indigo-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-sky-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-cyan-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-violet-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y'
];

export default function SolutionsOverview() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Cinematic Header */}
      <div className="w-full flex justify-center p-3 lg:p-[12px]">
        <section className="relative w-full max-w-[1600px] min-h-[50vh] lg:min-h-[400px] rounded-[24px] overflow-hidden bg-[#0a0a0a] shadow-sm isolate flex flex-col justify-end pb-16 lg:pb-20 px-6 lg:px-[58px]">
          {/* Abstract Dark Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          </div>

          <div className="relative z-20 max-w-[800px] mt-32 mx-auto text-center flex flex-col items-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase mb-6 block text-center"
            >
              Industry Solutions
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(44px,8vw,72px)] font-medium tracking-[-0.04em] leading-[1.05] text-white"
            >
              Tailored AI orchestration for every industry.
            </motion.h1>
          </div>
        </section>
      </div>

      {/* Grid Section */}
      <section className="w-full pt-[60px] pb-[120px] bg-[#F7F7F7]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/solutions/${solution.id}`} className="block group h-full">
                <div className="flex flex-col bg-surface border border-border rounded-card overflow-hidden h-full brutalist-card">
                  {/* Visual Top — Full bleed illustration */}
                  <div className={`relative w-full aspect-[4/3] border-b border-border overflow-hidden`}>
                    {/* Full-bleed white illustration card */}
                    <div className="absolute inset-0 bg-white flex flex-col">
                      {/* Mac titlebar */}
                      <div className="px-4 py-3 border-b border-black/5 flex items-center gap-1.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                        <span className="text-[10px] font-mono text-black/30 ml-2 tracking-wide uppercase">{solution.industry}</span>
                      </div>
                      <div className="p-4 flex-1 overflow-hidden flex flex-col gap-2.5">

                        {solution.id === 'real-estate' && (
                          <>
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest">Lead Pipeline</span>
                            </div>
                            {[{name:'Raj Mehta',val:'₹45L',hot:true},{name:'Priya Singh',val:'₹28L',hot:false},{name:'Amit Joshi',val:'₹62L',hot:true}].map((lead,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + j * 0.1 }}
                                className="flex items-center gap-2 px-2.5 py-2 rounded-[8px] bg-[#f7f7f7] shadow-sm"
                              >
                                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${lead.hot?'bg-emerald-400':'bg-black/20'}`}/>
                                <span className="text-[10px] text-black/70 flex-1">{lead.name}</span>
                                <span className={`text-[10px] font-semibold ${lead.hot?'text-emerald-600':'text-black/40'}`}>{lead.val}</span>
                              </motion.div>
                            ))}
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6, duration: 0.3 }}
                              className="flex items-center gap-2 mt-auto px-2.5 py-2 rounded-[8px] bg-blue-50 border border-blue-100 shadow-sm"
                            >
                              <span className="text-[9px] text-blue-600 font-medium">AI Follow-up sent · 3 leads re-engaged today</span>
                            </motion.div>
                          </>
                        )}

                        {solution.id === 'automobile' && (
                          <>
                            <div className="grid grid-cols-3 gap-2 mb-1">
                              {[{l:'Test Drives',v:'+30%',c:'text-emerald-500'},{l:'Qualified',v:'Instant',c:'text-blue-500'},{l:'Booked',v:'Auto',c:'text-purple-500'}].map((s,j)=>(
                                <motion.div 
                                  key={j} 
                                  initial={{ opacity: 0, y: 5 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 + j * 0.1 }}
                                  className="bg-[#f7f7f7] rounded-[8px] p-2 shadow-sm"
                                >
                                  <span className={`text-[12px] font-semibold ${s.c}`}>{s.v}</span>
                                  <span className="text-[8px] text-black/40 block mt-0.5">{s.l}</span>
                                </motion.div>
                              ))}
                            </div>
                            {[{t:'New inquiry: Fortuner 4WD',st:'Qualified by AI'},{ t:'Service booking: Baleno',st:'Auto-confirmed'},{t:'Survey follow-up: City',st:'Completed · 65%'}].map((item,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + j * 0.15 }}
                                className="flex items-center gap-2 px-2.5 py-1.5 rounded-[8px] bg-[#f7f7f7] shadow-sm border border-black/5"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"/>
                                <div><span className="text-[9px] font-medium text-black/70 block">{item.t}</span><span className="text-[8px] text-black/40">{item.st}</span></div>
                              </motion.div>
                            ))}
                          </>
                        )}

                        {solution.id === 'consumer-durables' && (
                          <>
                            <div className="flex items-center gap-2 bg-purple-50 rounded-[8px] px-2.5 py-2 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"/>
                              <span className="text-[9px] font-medium text-purple-700">80% Queries Automated</span>
                            </div>
                            {[{q:'Warranty claim status?',a:'Your claim #WC-4821 is approved. Pickup scheduled Fri.'},{q:'AC not cooling.',a:'Technician visit booked for tomorrow 10–12 AM.'}].map((msg,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + j * 0.4 }}
                                className="flex flex-col gap-1"
                              >
                                <div className="self-end px-2.5 py-1.5 rounded-[8px] bg-[#f4f4f4] text-[9px] text-black/60 max-w-[85%] shadow-sm">{msg.q}</div>
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.4 + j * 0.4 }}
                                  className="self-start px-2.5 py-1.5 rounded-[8px] bg-purple-100 text-[9px] text-purple-800 max-w-[90%] shadow-sm border border-purple-200"
                                >
                                  {msg.a}
                                </motion.div>
                              </motion.div>
                            ))}
                          </>
                        )}

                        {solution.id === 'fintech' && (
                          <>
                            <div className="flex justify-between mb-1">
                              <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest">Collections OS</span>
                              <span className="text-[9px] font-semibold text-emerald-500">+50% PTP</span>
                            </div>
                            {[{label:'Cost to Collect',val:'-75%',c:'text-emerald-600'},{label:'Recovery Cycle',val:'-40%',c:'text-blue-600'},{label:'Right Party Conn.',val:'90%',c:'text-purple-600'}].map((s,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0, x: -5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + j * 0.1 }}
                                className="flex items-center gap-2 px-2.5 py-2 rounded-[8px] bg-[#f7f7f7] shadow-sm border border-black/5"
                              >
                                <span className={`text-[14px] font-bold ${s.c} w-12 shrink-0`}>{s.val}</span>
                                <span className="text-[9px] text-black/50">{s.label}</span>
                              </motion.div>
                            ))}
                            <div className="flex items-center gap-[3px] h-5 mt-auto overflow-hidden">
                              {[3,6,10,7,12,5,9,14,6,4,11,8,13,5,7,3,9,12].map((h,j)=>(
                                <motion.div 
                                  key={j} 
                                  animate={{ height: [Math.max(2, h * 0.3), h, Math.max(2, h * 0.3)] }}
                                  transition={{ repeat: Infinity, duration: 0.5 + (j % 3) * 0.2, ease: "easeInOut", delay: j * 0.05 }}
                                  className="w-[3px] rounded-full bg-emerald-400" 
                                  style={{ opacity: 0.4 + (j % 3) * 0.2 }}
                                />
                              ))}
                            </div>
                          </>
                        )}

                        {solution.id === 'healthcare' && (
                          <>
                            <div className="flex items-center gap-2 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"/>
                              <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest">Appointment AI</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {[{l:'No-Shows',v:'-80%',c:'text-emerald-500'},{l:'Lead Conn.',v:'90%',c:'text-cyan-500'},{l:'Lower CAC',v:'3x',c:'text-blue-500'},{l:'Conversions',v:'+40%',c:'text-purple-500'}].map((s,j)=>(
                                <motion.div 
                                  key={j} 
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.1 + j * 0.1 }}
                                  className="bg-[#f7f7f7] rounded-[8px] p-2 shadow-sm border border-black/5"
                                >
                                  <span className={`text-[13px] font-semibold ${s.c}`}>{s.v}</span>
                                  <span className="text-[8px] text-black/40 block">{s.l}</span>
                                </motion.div>
                              ))}
                            </div>
                            <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6, duration: 0.3 }}
                              className="px-2.5 py-2 bg-cyan-50 border border-cyan-100 rounded-[8px] mt-auto shadow-sm"
                            >
                              <span className="text-[9px] text-cyan-700">AI rescheduled 14 appointments today — 0 no-shows</span>
                            </motion.div>
                          </>
                        )}

                        {solution.id === 'utilities' && (
                          <>
                            <div className="flex justify-between mb-1">
                              <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest">CSAT Score</span>
                              <span className="text-[10px] font-semibold text-amber-500">4.8 / 5</span>
                            </div>
                            {[{l:'Query Resolution',v:'85%',c:'bg-emerald-400'},{l:'Support Costs',v:'55%',c:'bg-blue-400'},{l:'Bill Reminders',v:'100%',c:'bg-amber-400'}].map((item,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.1 + j * 0.1 }}
                                className="flex flex-col gap-1"
                              >
                                <div className="flex justify-between">
                                  <span className="text-[9px] text-black/50">{item.l}</span>
                                  <span className="text-[9px] font-mono text-black/50">{item.v}</span>
                                </div>
                                <div className="h-1.5 bg-black/5 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: item.v }}
                                    transition={{ delay: 0.3 + j * 0.2, duration: 0.8, ease: "easeOut" }}
                                    className={`h-full ${item.c} rounded-full`} 
                                  />
                                </div>
                              </motion.div>
                            ))}
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.9, duration: 0.3 }}
                              className="px-2.5 py-2 bg-amber-50 border border-amber-100 rounded-[8px] mt-1 shadow-sm"
                            >
                              <span className="text-[9px] text-amber-700">Bill reminder sent to 2,340 customers · Auto</span>
                            </motion.div>
                          </>
                        )}

                      </div>
                    </div>
                  </div>

                  {/* Content Bottom */}
                  <div className={`p-6 md:p-8 flex flex-col flex-grow ${darkGradients[i % darkGradients.length]}`}>
                    <h3 className="text-[20px] font-semibold tracking-tight text-white mb-6">
                      {solution.area || 'Customer Intelligence'}
                    </h3>
                    
                    {/* Stat Row */}
                    {solution.stats && solution.stats.length > 0 ? (
                      <div className="grid grid-cols-2 gap-4 mt-auto">
                        {solution.stats.slice(0, 4).map((stat, idx) => (
                          <div key={idx} className="flex flex-col">
                            <span className="text-[20px] font-medium text-white tabular-nums tracking-tight">
                              {stat.value === 0 && stat.label === 'Missed Follow-Ups' 
                                ? 'Zero' 
                                : `${stat.prefix || ''}${stat.value}${stat.suffix || ''}`
                              }
                            </span>
                            <span className="text-[11px] text-white/70 uppercase tracking-wider font-medium mt-1">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="mt-auto">
                        <span className="inline-flex items-center text-[14px] font-medium text-white group-hover:opacity-70 transition-opacity">
                          View Use Cases &rarr;
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}

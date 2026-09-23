import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { platforms } from '../data/platform';

const gradients = [
  'from-blue-500/10 to-indigo-100',
  'from-green-500/10 to-emerald-100',
  'from-purple-500/10 to-fuchsia-100',
  'from-orange-500/10 to-red-100',
  'from-cyan-500/10 to-blue-100'
];

const darkGradients = [
  'bg-gradient-to-t from-blue-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-indigo-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-sky-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-cyan-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y',
  'bg-gradient-to-t from-violet-800 via-[#1a1a1a] to-[#1a1a1a] animate-gradient-y'
];

export default function PlatformOverview() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Cinematic Header */}
      <div className="w-full flex justify-center p-3 lg:p-[12px]">
        <section className="relative w-full max-w-[1600px] min-h-[50vh] lg:min-h-[400px] rounded-[24px] overflow-hidden bg-[#0a0a0a] shadow-sm isolate flex flex-col justify-end pb-16 lg:pb-20 px-6 lg:px-[58px]">
          {/* Abstract Dark Background */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          </div>

          <div className="relative z-20 max-w-[800px] mt-32">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-mono tracking-[0.15em] text-white/50 uppercase mb-6 block"
            >
              The Platform
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[clamp(44px,8vw,72px)] font-medium tracking-[-0.04em] leading-[1.05] text-white"
            >
              The complete toolkit for autonomous customer orchestration.
            </motion.h1>
          </div>
        </section>
      </div>

      {/* Grid Section */}
      <section className="w-full pt-[60px] pb-[120px] bg-[#F7F7F7]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/platform/${platform.id}`} className="block group h-full">
                <div className="flex flex-col bg-surface border border-border rounded-card overflow-hidden h-full brutalist-card">
                  {/* Visual Top — UI Illustration fills full area */}
                  <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${gradients[i % gradients.length]} border-b border-border overflow-hidden flex flex-col`}>

                    {/* Per-platform illustration — full bleed white card */}
                    <div className="absolute inset-0 bg-white flex flex-col">
                      {/* Mac-style titlebar */}
                      <div className="px-4 py-3 border-b border-black/5 flex items-center gap-1.5 shrink-0">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                        <span className="text-[10px] font-mono text-black/30 ml-2 tracking-wide">{platform.shortName}</span>
                      </div>
                      <div className="p-4 flex-1 overflow-hidden">
                        {platform.id === 'ai-voice-agents' && (
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1.5 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest">Live Call · 01:24</span>
                            </div>
                            {[{a:true,t:'Hi! Calling about your policy renewal.'},{a:false,t:'Yes, go ahead.'},{a:true,t:'I can renew it right now at same rate.'}].map((m,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + j * 0.4, duration: 0.3 }}
                                className={`flex ${m.a?'justify-start':'justify-end'}`}
                              >
                                <div className={`px-2 py-1 rounded-[6px] text-[9px] leading-relaxed max-w-[85%] ${m.a?'bg-[#f4f4f4] text-black/70':'bg-[#111] text-white'}`}>{m.t}</div>
                              </motion.div>
                            ))}
                            <div className="flex items-center gap-[2px] h-4 mt-1 overflow-hidden px-1">
                              {[3,6,9,7,11,5,8,12,6,4,9,7].map((h,j)=>(
                                <motion.div 
                                  key={j} 
                                  animate={{ height: [Math.max(2, h * 0.3), h, Math.max(2, h * 0.3)] }}
                                  transition={{ repeat: Infinity, duration: 0.5 + (j % 3) * 0.2, ease: "easeInOut", delay: j * 0.05 }}
                                  className="w-[2px] rounded-full bg-emerald-400" 
                                  style={{ opacity: 0.5 + (j % 3) * 0.15 }} 
                                />
                              ))}
                            </div>
                          </div>
                        )}
                        {platform.id === 'whatsapp-business' && (
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-1.5 bg-[#25D366]/10 rounded-[6px] px-2 py-1 mb-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                              <span className="text-[9px] font-medium text-[#25D366]">WhatsApp Business</span>
                            </div>
                            {[{from:'User',t:'Order #4821 status?'},{from:'AI',t:'Out for delivery! ETA 4PM 👉 trk.link/4821'},{from:'User',t:'Thanks!'}].map((m,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0, x: m.from === 'AI' ? -5 : 5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + j * 0.5, duration: 0.3 }}
                                className="flex flex-col gap-0.5"
                              >
                                <span className="text-[7px] font-mono text-black/30 px-1">{m.from}</span>
                                <div className={`px-2 py-1 rounded-[6px] text-[9px] leading-relaxed ${m.from==='AI'?'bg-[#25D366]/10 text-black/70':'bg-[#f4f4f4] text-black/70'}`}>{m.t}</div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                        {platform.id === 'telephony-command-center' && (
                          <div className="flex flex-col gap-2">
                            <div className="grid grid-cols-3 gap-1.5 mb-1">
                              {[{l:'Active',v:'124',c:'text-blue-500'},{l:'Wait',v:'0:34',c:'text-amber-500'},{l:'Resolved',v:'98%',c:'text-emerald-500'}].map((s,j)=>(
                                <motion.div 
                                  key={j} 
                                  initial={{ opacity: 0, y: 5 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 + j * 0.1 }}
                                  className="bg-[#f7f7f7] rounded-[6px] p-1.5"
                                >
                                  <span className={`text-[11px] font-semibold ${s.c}`}>{s.v}</span>
                                  <span className="text-[7px] text-black/40 block">{s.l}</span>
                                </motion.div>
                              ))}
                            </div>
                            {['Inbound Queue','Outbound Dialer','IVR Flow'].map((item,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0, x: -5 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + j * 0.1 }}
                                className="flex items-center gap-1.5 px-2 py-1 rounded-[6px] bg-[#f7f7f7]"
                              >
                                <div className={`w-1 h-1 rounded-full ${j===0?'bg-blue-400 animate-pulse':j===1?'bg-emerald-400':'bg-black/20'}`} />
                                <span className="text-[9px] text-black/60">{item}</span>
                                <span className={`ml-auto text-[7px] font-mono ${j<2?'text-emerald-500':'text-black/30'}`}>{j<2?'ACTIVE':'IDLE'}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                        {platform.id === 'quality-management-system' && (
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between mb-1"><span className="text-[9px] font-medium text-black/50">QA Score</span><span className="text-[9px] font-semibold text-emerald-500">92/100</span></div>
                            {[{l:'Tone & Empathy',s:95},{l:'Script Adherence',s:88},{l:'Resolution',s:94}].map((item,j)=>(
                              <motion.div 
                                key={j} 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.1 + j * 0.1 }}
                                className="flex flex-col gap-0.5"
                              >
                                <div className="flex justify-between">
                                  <span className="text-[8px] text-black/50">{item.l}</span>
                                  <span className="text-[8px] font-mono text-black/50">{item.s}%</span>
                                </div>
                                <div className="h-1 bg-black/5 rounded-full overflow-hidden">
                                  <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.s}%` }}
                                    transition={{ delay: 0.3 + j * 0.2, duration: 0.8, ease: "easeOut" }}
                                    className="h-full bg-emerald-400 rounded-full" 
                                  />
                                </div>
                              </motion.div>
                            ))}
                            <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1, duration: 0.3 }}
                              className="px-2 py-1 bg-amber-50 border border-amber-200 rounded-[6px] mt-1"
                            >
                              <span className="text-[8px] text-amber-700"><span className="animate-pulse">⚠</span> Deviation at 01:42 — flagged</span>
                            </motion.div>
                          </div>
                        )}
                        {platform.id === 'customer-engagement' && (
                          <div className="flex flex-col gap-2">
                            <span className="text-[9px] font-medium text-black/50 mb-1">Sentiment · Last 7 days</span>
                            <div className="flex items-end gap-0.5 h-10 border-b border-black/5 pb-1 relative">
                              {[55,62,58,70,74,68,82].map((v,j)=>(
                                <motion.div 
                                  key={j} 
                                  initial={{ height: 0 }}
                                  whileInView={{ height: `${v*0.9}%` }}
                                  transition={{ delay: 0.1 + j * 0.08, duration: 0.5, type: "spring", stiffness: 100 }}
                                  className="flex-1 rounded-t-[2px]" 
                                  style={{ background: `hsl(${120+v},60%,52%)`, opacity: 0.7+j*0.04 }} 
                                />
                              ))}
                            </div>
                            <div className="flex gap-1 flex-wrap mt-1">
                              {[{l:'😊 68%',c:'bg-emerald-50 text-emerald-700'},{l:'😐 22%',c:'bg-amber-50 text-amber-700'},{l:'😠 10%',c:'bg-red-50 text-red-700'}].map((s,j)=>(
                                <motion.div 
                                  key={j} 
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: 0.6 + j * 0.1 }}
                                  className={`px-1.5 py-0.5 rounded-full text-[8px] font-medium border border-black/5 ${s.c}`}
                                >
                                  {s.l}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Bottom */}
                  <div className={`p-6 md:p-8 flex flex-col flex-grow ${darkGradients[i % darkGradients.length]}`}>
                    <h3 className="text-[24px] font-semibold tracking-tight text-white mb-3">
                      {platform.name}
                    </h3>
                    <p className="text-[15px] text-white/70 leading-relaxed mb-6">
                      {platform.description}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-[14px] font-medium text-white group-hover:opacity-70 transition-opacity">
                        Explore capabilities &rarr;
                      </span>
                    </div>
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

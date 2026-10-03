import React from 'react';
import { motion } from 'framer-motion';

/* Shared helpers */
const Glow = ({ r = 36 }) => (
  <circle cx="100" cy="50" r={r} fill="var(--global-accent)" opacity="0.07" filter="url(#rm-blur)" />
);

const SharedDefs = () => (
  <defs>
    <filter id="rm-blur"><feGaussianBlur stdDeviation="4" /></filter>
  </defs>
);

/* ── reasoning-ai ── */
const ReasoningMotifs = [
  /* 0 — Multi-step AI Reasoning Engines: branching tree */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* root → branches */}
      <circle cx="100" cy="20" r="5" fill="var(--global-accent)" fillOpacity="0.8" />
      <motion.line x1="100" y1="25" x2="70" y2="50" stroke="var(--global-accent)" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 3" animate={{ strokeDashoffset: [0, -12] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />
      <motion.line x1="100" y1="25" x2="130" y2="50" stroke="var(--global-accent)" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="3 3" animate={{ strokeDashoffset: [0, -12] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.3 }} />
      <circle cx="70" cy="55" r="4" fill="var(--global-accent)" fillOpacity="0.6" />
      <circle cx="130" cy="55" r="4" fill="var(--global-accent)" fillOpacity="0.6" />
      <line x1="70" y1="59" x2="55" y2="78" stroke="#14110F" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="70" y1="59" x2="85" y2="78" stroke="#14110F" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="130" y1="59" x2="115" y2="78" stroke="#14110F" strokeOpacity="0.2" strokeWidth="1" />
      <line x1="130" y1="59" x2="145" y2="78" stroke="#14110F" strokeOpacity="0.2" strokeWidth="1" />
      {[55, 85, 115, 145].map((x, i) => (
        <motion.circle key={i} cx={x} cy="81" r="3" fill="var(--global-accent)" fillOpacity="0.4"
          animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }} />
      ))}
    </g>
  ),

  /* 1 — Decision Intelligence Systems: funnel */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* funnel */}
      <path d="M55 20 L145 20 L120 55 L80 55 Z" fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.4" />
      <path d="M80 55 L120 55 L110 78 L90 78 Z" fill="var(--global-accent)" fillOpacity="0.15" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.5" />
      {/* data dots flowing down */}
      {[0, 1, 2].map(i => (
        <motion.circle key={i} cx={75 + i * 25} cy="30" r="2.5" fill="var(--global-accent)" fillOpacity="0.7"
          animate={{ cy: [30, 65], opacity: [0.8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: 'easeIn' }} />
      ))}
      <motion.circle cx="100" cy="82" r="4" fill="var(--global-accent)"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  ),

  /* 2 — AI-based Workflow Reasoning: flowchart boxes */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={55 + i * 35} y={30 + i * 18} width="28" height="16" rx="4"
            fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.5" />
          {i < 2 && <motion.path d={`M${83 + i * 35} ${38 + i * 18} L${90 + i * 35} ${38 + i * 18} L${90 + i * 35} ${48 + i * 18} L${55 + (i + 1) * 35} ${48 + i * 18}`}
            fill="none" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="3 3"
            animate={{ strokeDashoffset: [0, -12] }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} />}
        </g>
      ))}
    </g>
  ),

  /* 3 — Autonomous Problem-solving Agents: target/bullseye */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {[38, 26, 14].map((r, i) => (
        <circle key={r} cx="100" cy="50" r={r} fill="none" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity={0.2 + i * 0.15} />
      ))}
      <motion.circle cx="100" cy="50" r="6" fill="var(--global-accent)" fillOpacity="0.9"
        animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      {/* path approaching */}
      <motion.path d="M50 85 Q75 60 100 50" fill="none" stroke="var(--global-accent)" strokeWidth="1.5" strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
      <circle cx="50" cy="85" r="3" fill="var(--global-accent)" fillOpacity="0.5" />
    </g>
  ),

  /* 4 — AI Planning & Recommendation Systems: grid + highlighted path */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* grid */}
      {[0, 1, 2].map(row => [0, 1, 2, 3].map(col => (
        <rect key={`${row}-${col}`} x={58 + col * 24} y={18 + row * 24} width="18" height="18" rx="3"
          fill="var(--global-accent)" fillOpacity={row === 0 && col === 0 ? 0.6 : row === 1 && col === 1 ? 0.5 : row === 2 && col === 3 ? 0.7 : 0.08}
          stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity={0.3} />
      )))}
      {/* path line */}
      <motion.polyline points="67,27 91,51 115,51 139,75" fill="none" stroke="var(--global-accent)" strokeWidth="2"
        strokeDasharray="6 4" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
    </g>
  ),

  /* 5 — Context-aware Enterprise AI: nested context rings */
  () => (
    <g>
      <SharedDefs />
      <Glow r={40} />
      {[40, 30, 20, 10].map((r, i) => (
        <circle key={r} cx="100" cy="50" r={r} fill="none" stroke="var(--global-accent)" strokeWidth="1.2"
          strokeOpacity={0.15 + i * 0.12} strokeDasharray={i % 2 === 0 ? '4 4' : 'none'} />
      ))}
      <motion.circle cx="100" cy="50" r="5" fill="var(--global-accent)"
        animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
      {/* context labels */}
      {[{ label: 'USER', r: 40, deg: -60 }, { label: 'ORG', r: 40, deg: 60 }, { label: 'DOMAIN', r: 40, deg: 180 }].map(({ label, r, deg }, i) => {
        const rad = deg * Math.PI / 180;
        return (
          <text key={i} x={100 + r * Math.cos(rad)} y={50 + r * Math.sin(rad) + 2}
            fontSize="5" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.6" textAnchor="middle">{label}</text>
        );
      })}
    </g>
  ),
];

/* ── agentic-ai ── */
const AgenticMotifs = [
  /* 0 — Autonomous AI Agents: agent icon + action rays */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      <circle cx="100" cy="50" r="14" fill="var(--global-accent)" fillOpacity="0.12" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.5" />
      <circle cx="100" cy="46" r="5" fill="var(--global-accent)" fillOpacity="0.7" />
      <path d="M90 62 Q100 56 110 62" fill="none" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.6" />
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const r = deg * Math.PI / 180;
        return (
          <motion.line key={i}
            x1={100 + 16 * Math.cos(r)} y1={50 + 16 * Math.sin(r)}
            x2={100 + 30 * Math.cos(r)} y2={50 + 30 * Math.sin(r)}
            stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.3"
            animate={{ opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
        );
      })}
    </g>
  ),

  /* 1 — Multi-agent AI Ecosystems: mesh network */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* nodes */}
      {[[100, 30], [65, 55], [135, 55], [80, 78], [120, 78]].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="5" fill="var(--global-accent)" fillOpacity={i === 0 ? 0.9 : 0.5}
          animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }} />
      ))}
      {/* edges */}
      {[[0, 1], [0, 2], [1, 3], [2, 4], [1, 2], [3, 4]].map(([a, b], i) => {
        const pts = [[100, 30], [65, 55], [135, 55], [80, 78], [120, 78]];
        return <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.25" />;
      })}
    </g>
  ),

  /* 2 — AI Task Automation Agents: gear + checkmarks */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* gear teeth (simplified) */}
      <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '100px 50px' }}>
        <circle cx="100" cy="50" r="16" fill="none" stroke="var(--global-accent)" strokeWidth="8" strokeOpacity="0.15" strokeDasharray="8 4" />
        <circle cx="100" cy="50" r="10" fill="var(--global-accent)" fillOpacity="0.12" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.5" />
      </motion.g>
      {/* checkmarks flowing right */}
      {[0, 1, 2].map(i => (
        <motion.g key={i} animate={{ x: [0, 30], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: 'easeIn' }}>
          <path d={`M${122} ${38 + i * 12} L${127} ${43 + i * 12} L${135} ${34 + i * 12}`} fill="none" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" />
        </motion.g>
      ))}
    </g>
  ),

  /* 3 — Self-learning AI Systems: feedback loop */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* loop arrow */}
      <motion.path d="M100 20 A32 32 0 1 1 68 50" fill="none" stroke="var(--global-accent)" strokeWidth="2" strokeOpacity="0.5"
        strokeDasharray="8 4" animate={{ strokeDashoffset: [0, -24] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
      <polygon points="64,42 68,56 74,44" fill="var(--global-accent)" fillOpacity="0.7" />
      {/* inner: learning pulse */}
      <motion.circle cx="100" cy="50" r="10" fill="none" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.4"
        animate={{ r: [10, 18, 10], opacity: [0.5, 0.1, 0.5] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <circle cx="100" cy="50" r="5" fill="var(--global-accent)" fillOpacity="0.8" />
    </g>
  ),

  /* 4 — AI Orchestration Platforms: conductor lines */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* central hub */}
      <circle cx="100" cy="50" r="8" fill="var(--global-accent)" fillOpacity="0.2" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.6" />
      {/* orchestrated lanes */}
      {[22, 36, 50, 64, 78].map((y, i) => (
        <g key={i}>
          <line x1="55" y1={y} x2="90" y2={y} stroke="#14110F" strokeOpacity="0.1" strokeWidth="1" />
          <line x1="110" y1={y} x2="145" y2={y} stroke="#14110F" strokeOpacity="0.1" strokeWidth="1" />
          <motion.circle cx="55" cy={y} r="3" fill="var(--global-accent)" fillOpacity="0.5"
            animate={{ cx: [55, 88] }} transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse', delay: i * 0.2 }} />
        </g>
      ))}
    </g>
  ),
];

/* ── small-language-models ── */
const SLMMotifs = [
  /* 0 — Domain-specific AI Models: compact box + domain tags */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      <rect x="78" y="34" width="44" height="32" rx="6" fill="var(--global-accent)" fillOpacity="0.12" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.5" />
      <text x="100" y="54" fontSize="7" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.9" textAnchor="middle">SLM</text>
      {[['BANK', 155, 25], ['MED', 148, 50], ['LAW', 152, 75]].map(([label, x, y]) => (
        <g key={label}>
          <rect x={x - 10} y={y - 7} width="24" height="14" rx="3" fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.4" />
          <text x={x + 2} y={y + 2.5} fontSize="5" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.7" textAnchor="middle">{label}</text>
          <line x1="122" y1="50" x2={x - 10} y2={y} stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 3" />
        </g>
      ))}
    </g>
  ),

  /* 1 — Lightweight On-prem AI: server + lock */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* server stack */}
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x="72" y={22 + i * 22} width="44" height="16" rx="3" fill="var(--global-accent)" fillOpacity="0.08" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.4" />
          <motion.circle cx="108" cy={30 + i * 22} r="2" fill="var(--global-accent)" fillOpacity="0.7"
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }} />
        </g>
      ))}
      {/* shield/lock */}
      <path d="M125 38 L125 30 Q125 26 132 26 L139 26 Q146 26 146 30 L146 38 Q146 46 135.5 50 Q125 46 125 38Z"
        fill="var(--global-accent)" fillOpacity="0.15" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.6" />
      <rect x="131" y="36" width="9" height="8" rx="1.5" fill="var(--global-accent)" fillOpacity="0.5" />
      <path d="M133 36 Q133 33 135.5 33 Q138 33 138 36" fill="none" stroke="var(--global-accent)" strokeWidth="1.2" strokeOpacity="0.7" />
    </g>
  ),

  /* 2 — Industry-trained Conversational Models: chat bubble + data lines */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      <rect x="60" y="24" width="68" height="36" rx="10" fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="1.2" strokeOpacity="0.5" />
      <path d="M74 60 L68 70 L84 60 Z" fill="var(--global-accent)" fillOpacity="0.2" />
      {/* data lines inside bubble */}
      {[0, 1, 2].map(i => (
        <motion.rect key={i} x={68} y={33 + i * 9} width={i === 2 ? 30 : 50} height="4" rx="2"
          fill="var(--global-accent)" fillOpacity={0.2 + i * 0.05}
          animate={{ width: [i === 2 ? 30 : 50, i === 2 ? 45 : 55, i === 2 ? 30 : 50] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
      ))}
    </g>
  ),

  /* 3 — Low-latency AI Processing: lightning + timer */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* lightning bolt */}
      <motion.polygon points="105,18 93,50 102,50 95,82 117,45 106,45 115,18"
        fill="var(--global-accent)" fillOpacity="0.25" stroke="var(--global-accent)" strokeWidth="1.2" strokeOpacity="0.6"
        animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
      {/* timer arcs */}
      <circle cx="100" cy="50" r="36" fill="none" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.1" />
      <motion.path d="M100 14 A36 36 0 0 1 136 50" fill="none" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.4"
        animate={{ strokeDasharray: ['20 100', '80 100', '20 100'] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  ),

  /* 4 — Edge AI Deployments: circuit chip */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* chip body */}
      <rect x="78" y="28" width="44" height="44" rx="4" fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.5" />
      <rect x="84" y="34" width="32" height="32" rx="2" fill="var(--global-accent)" fillOpacity="0.08" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.3" />
      {/* pins left */}
      {[38, 50, 62].map(y => <line key={y} x1="68" y1={y} x2="78" y2={y} stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.5" />)}
      {/* pins right */}
      {[38, 50, 62].map(y => <line key={y} x1="122" y1={y} x2="132" y2={y} stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.5" />)}
      {/* data pulse */}
      <motion.circle cx="100" cy="50" r="4" fill="var(--global-accent)"
        animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
    </g>
  ),

  /* 5 — Private AI Infrastructure: vault */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* vault door */}
      <circle cx="100" cy="50" r="30" fill="var(--global-accent)" fillOpacity="0.08" stroke="var(--global-accent)" strokeWidth="2" strokeOpacity="0.5" />
      <circle cx="100" cy="50" r="18" fill="none" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.3" />
      {/* spokes */}
      {[0, 45, 90, 135].map(deg => {
        const r = deg * Math.PI / 180;
        return <line key={deg} x1={100 + 18 * Math.cos(r)} y1={50 + 18 * Math.sin(r)} x2={100 + 28 * Math.cos(r)} y2={50 + 28 * Math.sin(r)} stroke="var(--global-accent)" strokeWidth="3" strokeOpacity="0.4" strokeLinecap="round" />;
      })}
      <motion.circle cx="100" cy="50" r="7" fill="var(--global-accent)" fillOpacity="0.3" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.6"
        animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} style={{ transformOrigin: '100px 50px' }} />
      <circle cx="100" cy="50" r="3" fill="var(--global-accent)" fillOpacity="0.8" />
    </g>
  ),
];

/* ── ai-infrastructure ── */
const InfraMotifs = [
  /* 0 — AI Model Hosting: server layers */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x={65 + i * 3} y={22 + i * 16} width={70 - i * 6} height="12" rx="3"
            fill="var(--global-accent)" fillOpacity={0.06 + i * 0.04} stroke="var(--global-accent)" strokeWidth="1" strokeOpacity={0.2 + i * 0.1} />
          <motion.rect x={122 - i * 3} y={25 + i * 16} width="4" height="6" rx="1"
            fill="var(--global-accent)" fillOpacity="0.6"
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }} />
        </g>
      ))}
    </g>
  ),

  /* 1 — GPU Cloud & Compute: cluster of nodes */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* 3x3 grid of compute nodes */}
      {[[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]].map(([col, row], i) => (
        <motion.rect key={i} x={68 + col * 24} y={26 + row * 20} width="16" height="12" rx="3"
          fill="var(--global-accent)" fillOpacity={0.08 + (i % 3) * 0.06} stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.4"
          animate={{ fillOpacity: [0.08, 0.25, 0.08] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }} />
      ))}
      {/* cloud arc */}
      <path d="M70 88 Q100 76 130 88" fill="none" stroke="var(--global-accent)" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="4 3" />
    </g>
  ),

  /* 2 — AI Security & Governance: shield pattern */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      <path d="M100 18 L130 30 L130 56 Q130 72 100 82 Q70 72 70 56 L70 30 Z"
        fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.5" />
      {/* inner grid pattern */}
      {[38, 50, 62].map(y => (
        <line key={y} x1="80" y1={y} x2="120" y2={y} stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.2" />
      ))}
      {[85, 100, 115].map(x => (
        <line key={x} x1={x} y1="32" x2={x} y2="70" stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.2" />
      ))}
      <motion.circle cx="100" cy="50" r="8" fill="var(--global-accent)" fillOpacity="0.3" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.7"
        animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
      <rect x="96" y="47" width="8" height="7" rx="1.5" fill="var(--global-accent)" fillOpacity="0.8" />
      <path d="M97.5 47 Q97.5 44 100 44 Q102.5 44 102.5 47" fill="none" stroke="var(--global-accent)" strokeWidth="1.2" strokeOpacity="0.9" />
    </g>
  ),

  /* 3 — Vector Database: grid of dots + arrows */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* dot grid */}
      {[0, 1, 2, 3].map(col => [0, 1, 2, 3].map(row => (
        <circle key={`${col}-${row}`} cx={68 + col * 22} cy={24 + row * 20} r="3"
          fill="var(--global-accent)" fillOpacity={col === 1 && row === 2 ? 0.9 : col === 3 && row === 0 ? 0.8 : 0.2} />
      )))}
      {/* similarity vector arrows */}
      <motion.line x1="79" y1="64" x2="134" y2="24" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.5"
        strokeDasharray="5 3" animate={{ strokeDashoffset: [0, -16] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }} />
      <polygon points="134,20 130,26 138,26" fill="var(--global-accent)" fillOpacity="0.7" />
    </g>
  ),

  /* 4 — AI Observability & Monitoring: line chart + dots */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* axes */}
      <line x1="62" y1="78" x2="62" y2="22" stroke="#14110F" strokeOpacity="0.12" strokeWidth="1" />
      <line x1="62" y1="78" x2="142" y2="78" stroke="#14110F" strokeOpacity="0.12" strokeWidth="1" />
      {/* chart line */}
      <motion.polyline points="62,65 82,48 102,55 122,32 142,40" fill="none" stroke="var(--global-accent)" strokeWidth="2" strokeOpacity="0.7"
        strokeDasharray="120" strokeDashoffset="120" animate={{ strokeDashoffset: 0 }} transition={{ duration: 2, ease: 'easeOut' }} />
      {/* dots on line */}
      {[[62, 65], [82, 48], [102, 55], [122, 32], [142, 40]].map(([x, y], i) => (
        <motion.circle key={i} cx={x} cy={y} r="3.5" fill="var(--global-accent)"
          animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
      ))}
    </g>
  ),

  /* 5 — Enterprise AI APIs & SDKs: code brackets + plug */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* code brackets */}
      <path d="M80 30 L68 50 L80 70" fill="none" stroke="var(--global-accent)" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M120 30 L132 50 L120 70" fill="none" stroke="var(--global-accent)" strokeWidth="2.5" strokeOpacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* inner lines */}
      {[40, 50, 60].map((y, i) => (
        <motion.line key={i} x1="88" y1={y} x2={100 + i * 4} y2={y} stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity={0.3 + i * 0.1}
          animate={{ x2: [100 + i * 4, 108 + i * 4, 100 + i * 4] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
      ))}
    </g>
  ),
];

/* ── llm-solutions ── */
const LLMMotifs = [
  /* 0 — Enterprise LLM Platforms: token stream */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* token boxes flowing */}
      {['ENT', 'LLM', 'API', 'CTX', '...'].map((token, i) => (
        <motion.g key={i} animate={{ x: [-20, 0], opacity: [0, 1] }} transition={{ duration: 0.6, delay: i * 0.25, repeat: Infinity, repeatDelay: 1.5 }}>
          <rect x={58 + i * 18} y="42" width="14" height="16" rx="3" fill="var(--global-accent)" fillOpacity="0.12" stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.5" />
          <text x={65 + i * 18} y="53.5" fontSize="4.5" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.8" textAnchor="middle">{token}</text>
        </motion.g>
      ))}
      {/* waveform underneath */}
      <path d="M58 70 Q70 62 82 70 T106 70 T130 70 T154 70" fill="none" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.25" />
    </g>
  ),

  /* 1 — Custom-trained GPT Models: brain + training lines */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* brain outline (simplified) */}
      <path d="M88 34 Q78 28 72 38 Q64 44 70 54 Q72 62 80 64 L100 68 L120 64 Q128 62 130 54 Q136 44 128 38 Q122 28 112 34 Q106 28 100 30 Q94 28 88 34Z"
        fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="1.2" strokeOpacity="0.45" />
      {/* training data lines flowing in */}
      {[0, 1, 2].map(i => (
        <motion.line key={i} x1="58" y1={36 + i * 10} x2="72" y2={44 + i * 4} stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.4"
          strokeDasharray="4 3" animate={{ strokeDashoffset: [0, -14] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }} />
      ))}
      <motion.circle cx="100" cy="50" r="4" fill="var(--global-accent)" fillOpacity="0.8"
        animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
    </g>
  ),

  /* 2 — Private LLM Deployments: server + lock (different from SLM) */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* data center rack */}
      <rect x="74" y="20" width="52" height="60" rx="5" fill="var(--global-accent)" fillOpacity="0.07" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.4" />
      {[0, 1, 2, 3].map(i => (
        <g key={i}>
          <rect x="80" y={27 + i * 13} width="40" height="9" rx="2" fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.35" />
          <motion.circle cx="113" cy={31.5 + i * 13} r="2" fill={i === 0 ? 'var(--global-accent)' : '#14110F'} fillOpacity={i === 0 ? 0.9 : 0.2}
            animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }} />
        </g>
      ))}
      {/* padlock overlay */}
      <rect x="133" y="28" width="18" height="14" rx="3" fill="var(--global-accent)" fillOpacity="0.2" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.6" />
      <path d="M137 28 Q137 24 142 24 Q147 24 147 28" fill="none" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.7" />
    </g>
  ),

  /* 3 — RAG: magnifier + knowledge base */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* knowledge docs */}
      {[0, 1, 2].map(i => (
        <g key={i}>
          <rect x={58 + i * 5} y={26 + i * 5} width="28" height="36" rx="3"
            fill="var(--global-accent)" fillOpacity={0.06 + i * 0.04} stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity={0.2 + i * 0.1} />
          {[0, 1, 2].map(j => (
            <line key={j} x1={62 + i * 5} y1={34 + i * 5 + j * 8} x2={82 + i * 5} y2={34 + i * 5 + j * 8} stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.2" />
          ))}
        </g>
      ))}
      {/* magnifier */}
      <motion.g animate={{ x: [-5, 5, -5], y: [-3, 3, -3] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
        <circle cx="126" cy="40" r="14" fill="none" stroke="var(--global-accent)" strokeWidth="2" strokeOpacity="0.6" />
        <line x1="136" y1="50" x2="148" y2="62" stroke="var(--global-accent)" strokeWidth="2.5" strokeOpacity="0.6" strokeLinecap="round" />
        <circle cx="122" cy="37" r="4" fill="var(--global-accent)" fillOpacity="0.2" />
      </motion.g>
    </g>
  ),

  /* 4 — AI Knowledge Management: organized filing nodes */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* top node (master) */}
      <rect x="84" y="18" width="32" height="18" rx="4" fill="var(--global-accent)" fillOpacity="0.2" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.6" />
      <text x="100" y="30" fontSize="6" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.8" textAnchor="middle">KMS</text>
      {/* category nodes */}
      {[['DOC', 64, 52], ['DATA', 100, 58], ['PROC', 136, 52]].map(([label, x, y]) => (
        <g key={label}>
          <line x1="100" y1="36" x2={x} y2={y} stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
          <rect x={x - 14} y={y} width="28" height="14" rx="3" fill="var(--global-accent)" fillOpacity="0.1" stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.4" />
          <text x={x} y={y + 9.5} fontSize="5" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.7" textAnchor="middle">{label}</text>
        </g>
      ))}
      {/* leaf lines */}
      {[[64, 66], [100, 72], [136, 66]].map(([x, y], i) => (
        <g key={i}>
          {[0, 1].map(j => <line key={j} x1={x - 12 + j * 24} y1={y} x2={x - 12 + j * 24} y2={y + 12} stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.25" />)}
        </g>
      ))}
    </g>
  ),

  /* 5 — Generative AI Applications: sparkle star generating content */
  () => (
    <g>
      <SharedDefs />
      <Glow />
      {/* sparkle */}
      {[0, 45, 90, 135].map((deg, i) => {
        const r = deg * Math.PI / 180;
        return (
          <motion.line key={i}
            x1={100 + 6 * Math.cos(r)} y1={46 + 6 * Math.sin(r)}
            x2={100 + 22 * Math.cos(r)} y2={46 + 22 * Math.sin(r)}
            stroke="var(--global-accent)" strokeWidth={i % 2 === 0 ? 2 : 1.2} strokeOpacity="0.7" strokeLinecap="round"
            animate={{ scaleY: [1, 1.4, 1] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.2 }} style={{ transformOrigin: '100px 46px' }} />
        );
      })}
      <motion.circle cx="100" cy="46" r="5" fill="var(--global-accent)" fillOpacity="0.9"
        animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      {/* generated content lines flowing out */}
      {[0, 1, 2, 3].map(i => (
        <motion.rect key={i} x="62" y={66 + i * 9} height="5" rx="2.5"
          fill="var(--global-accent)" fillOpacity="0.25"
          animate={{ width: [0, 20 + i * 15] }} transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3, repeatDelay: 0.5 }} />
      ))}
    </g>
  ),
];

/* ── Master lookup ── */
export const ResearchMotifs = {
  'reasoning-ai': ReasoningMotifs,
  'agentic-ai': AgenticMotifs,
  'small-language-models': SLMMotifs,
  'ai-infrastructure': InfraMotifs,
  'llm-solutions': LLMMotifs,
};

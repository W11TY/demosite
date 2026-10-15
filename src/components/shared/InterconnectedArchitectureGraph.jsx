import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, HeartPulse, Activity, Pill, ShieldCheck,
  TrendingUp, Wrench, Users, Settings, BarChart3,
  CreditCard, CalendarCheck, BellRing, AlertTriangle,
  Bot, Headphones, Workflow, BookOpen, CheckCircle2, Inbox,
  MessageCircle, Sparkles, Target, Zap, Receipt, Truck, Gauge, Radio,
  Cpu, Layers, Sparkle
} from 'lucide-react';

// 3D Glass Render Assets
import revenueIntelligenceImg from '../../assets/solutioncards/revenue inteligenceplatform.png';
import carDealershipImg from '../../assets/solutioncards/cardealership.png';
import customerServiceImg from '../../assets/solutioncards/customerservice.png';
import collectionsImg from '../../assets/solutioncards/collections.png';
import appointmentImg from '../../assets/solutioncards/appointment.png';
import utilitiesImg from '../../assets/solutioncards/utilities.png';

const IMAGE_MAP = {
  'healthcare': appointmentImg,
  'automobile': carDealershipImg,
  'fintech': collectionsImg,
  'consumer-durables': customerServiceImg,
  'real-estate': revenueIntelligenceImg,
  'utilities': utilitiesImg,
};

// Icon resolver for capability text
const getCapabilityIcon = (text) => {
  const t = text.toLowerCase();
  if (t.includes('schedul')) return Calendar;
  if (t.includes('patient')) return HeartPulse;
  if (t.includes('health') || t.includes('analyt')) return Activity;
  if (t.includes('prescript') || t.includes('refill')) return Pill;
  if (t.includes('claim') || t.includes('insurance') || t.includes('kyc') || t.includes('complian')) return ShieldCheck;
  if (t.includes('sale') || t.includes('predict')) return TrendingUp;
  if (t.includes('servic') && !t.includes('customer')) return Wrench;
  if (t.includes('customer') || t.includes('engag') || t.includes('360')) return Users;
  if (t.includes('operat')) return Settings;
  if (t.includes('analyt') || t.includes('insight')) return BarChart3;
  if (t.includes('recov') || t.includes('pay') || t.includes('bill')) return CreditCard;
  if (t.includes('emi')) return CalendarCheck;
  if (t.includes('remind')) return BellRing;
  if (t.includes('risk')) return AlertTriangle;
  if (t.includes('bot') || t.includes('ai agent') || t.includes('automat')) return Bot;
  if (t.includes('enablement')) return Headphones;
  if (t.includes('workflow')) return Workflow;
  if (t.includes('knowledge')) return BookOpen;
  if (t.includes('quality') || t.includes('check')) return CheckCircle2;
  if (t.includes('inbox') || t.includes('omnichannel')) return Inbox;
  if (t.includes('convers')) return MessageCircle;
  if (t.includes('deal') || t.includes('target')) return Target;
  if (t.includes('outage') || t.includes('power')) return Zap;
  if (t.includes('dispatch') || t.includes('field')) return Truck;
  if (t.includes('usage') || t.includes('gauge')) return Gauge;
  if (t.includes('grid') || t.includes('network') || t.includes('monitor')) return Radio;
  return Sparkles;
};

// Coordinate maps in a 600x320 SVG space
// Node positions carefully optimized for readable text, zero overlap, and elegant bezier curve routing
const getNodeCoordinates = (solutionId, capabilities) => {
  const count = capabilities.length;
  
  if (count === 4) {
    // 4-corner Quad layout (e.g. AI-Powered Revenue Intelligence)
    return [
      { x: 135, y: 84, align: 'left' },    // Top Left: Conversation Intelligence
      { x: 465, y: 84, align: 'right' },   // Top Right: Customer Intelligence
      { x: 465, y: 245, align: 'right' },  // Bottom Right: Deal Intelligence
      { x: 135, y: 245, align: 'left' }    // Bottom Left: Predictive Insights
    ];
  }

  if (count === 8) {
    // 8-node Dual-Column Architecture Bus (e.g. Customer Service OS)
    return [
      // Left Column (4 items)
      { x: 120, y: 72, align: 'left' },   // AI Agent & Automation
      { x: 92,  y: 132, align: 'left' },  // Agent Enablement
      { x: 92,  y: 194, align: 'left' },  // Analytics & Insights
      { x: 120, y: 256, align: 'left' },  // Workflow Automation
      // Right Column (4 items)
      { x: 480, y: 72, align: 'right' },  // Knowledge Management
      { x: 508, y: 132, align: 'right' }, // Customer 360° View
      { x: 508, y: 194, align: 'right' }, // Quality & Compliance
      { x: 480, y: 256, align: 'right' }  // Omnichannel Inbox
    ];
  }

  // 5-node Orbital Layout (Healthcare, Automobile, Fintech, Utilities)
  return [
    { x: 300, y: 56, align: 'center' },  // Top center
    { x: 485, y: 110, align: 'right' },  // Top right
    { x: 440, y: 258, align: 'right' },  // Bottom right
    { x: 160, y: 258, align: 'left' },   // Bottom left
    { x: 115, y: 110, align: 'left' }    // Top left
  ];
};

export default function InterconnectedArchitectureGraph({ solution, accentColor = '#0d83a9' }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [viewMode, setViewMode] = useState('graph'); // 'graph' | '3d'
  
  const capabilities = solution.coreCapabilities || [];
  const coords = getNodeCoordinates(solution.id, capabilities);
  const center = { x: 300, y: 160 };

  const imageSrc = IMAGE_MAP[solution.id];

  return (
    <div className="relative w-full h-full select-none overflow-hidden flex items-center justify-center">
      {/* Blueprint Dot Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxNDExMEYiIGZpbGwtb3BhY2l0eT0iMC4wNiIvPjwvc3ZnPg==')] pointer-events-none" />

      {/* Ambient Pulsing Glow */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.12, 0.22, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full blur-[70px] pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />

      {/* Top Header Controls (Mesh status badge & 3D view toggle) */}
      <div className="absolute top-2.5 left-3 right-3 z-30 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/70 backdrop-blur-md border border-[#14110F]/10 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--global-accent,#0d83a9)] animate-pulse" />
          <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#14110F]/60 font-semibold">
            Mesh Network
          </span>
        </div>

        <div className="pointer-events-auto flex items-center bg-white/85 backdrop-blur-md rounded-full p-0.5 border border-[#14110F]/10 shadow-xs text-[9.5px] font-mono">
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setViewMode('graph'); }}
            className={`px-2.5 py-0.5 rounded-full transition-all duration-200 uppercase tracking-wider font-semibold ${
              viewMode === 'graph' 
                ? 'bg-[#16130F] text-white shadow-xs' 
                : 'text-[#14110F]/60 hover:text-[#14110F]'
            }`}
          >
            Graph
          </button>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setViewMode('3d'); }}
            className={`px-2.5 py-0.5 rounded-full transition-all duration-200 uppercase tracking-wider font-semibold ${
              viewMode === '3d' 
                ? 'bg-[#16130F] text-white shadow-xs' 
                : 'text-[#14110F]/60 hover:text-[#14110F]'
            }`}
          >
            3D Model
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === '3d' ? (
          /* ── 3D GLASS ARTWORK VIEW ── */
          <motion.div
            key="3d-view"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full flex items-center justify-center p-3"
          >
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={solution.area}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
            ) : (
              <div className="text-xs font-mono text-[#14110F]/40">3D Preview Not Available</div>
            )}
          </motion.div>
        ) : (
          /* ── LIVE INTERCONNECTED ARCHITECTURE GRAPH ── */
          <motion.div
            key="graph-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full"
          >
            {/* SVG Connecting Wiring & Data Flow Pulses */}
            <svg
              viewBox="0 0 600 320"
              preserveAspectRatio="xMidYMid meet"
              className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10"
            >
              <defs>
                {/* Core Radial Gradient Glow */}
                <radialGradient id={`coreGlow-${solution.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={accentColor} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
                </radialGradient>

                {/* Wire Gradient */}
                <linearGradient id={`wireGrad-${solution.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#14110F" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* 1. Mutual Lateral Mesh Lines between Adjacent Nodes */}
              {capabilities.map((_, i) => {
                if (capabilities.length <= 1) return null;
                const nextIndex = (i + 1) % capabilities.length;
                // For 8-node dual-column, connect within columns
                if (capabilities.length === 8 && (i === 3 || i === 7)) return null;

                const curr = coords[i];
                const next = coords[nextIndex];
                if (!curr || !next) return null;

                return (
                  <path
                    key={`mesh-${i}`}
                    d={`M ${curr.x} ${curr.y} Q ${(curr.x + next.x) / 2} ${(curr.y + next.y) / 2} ${next.x} ${next.y}`}
                    fill="none"
                    stroke={accentColor}
                    strokeWidth="1"
                    strokeDasharray="3 4"
                    strokeOpacity="0.22"
                  />
                );
              })}

              {/* 2. Core-to-Capability Highway Connectors */}
              {capabilities.map((_, i) => {
                const node = coords[i];
                if (!node) return null;

                // Curved bezier with mild tension towards center axis
                const dx = node.x - center.x;
                const dy = node.y - center.y;
                const controlX = center.x + dx * 0.45;
                const controlY = center.y + dy * 0.15;
                const pathD = `M ${center.x} ${center.y} Q ${controlX} ${controlY} ${node.x} ${node.y}`;

                const isHovered = hoveredIndex === i;

                return (
                  <g key={`wire-${i}`}>
                    {/* Underlying static bus line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={accentColor}
                      strokeWidth={isHovered ? '2.5' : '1.5'}
                      strokeOpacity={isHovered ? '0.7' : '0.25'}
                      className="transition-all duration-300"
                    />

                    {/* Animated Data Packets / Flowing Photons */}
                    <motion.path
                      d={pathD}
                      fill="none"
                      stroke={accentColor}
                      strokeWidth={isHovered ? '3' : '2'}
                      strokeOpacity={isHovered ? '0.95' : '0.75'}
                      strokeDasharray="5 26"
                      strokeLinecap="round"
                      animate={{
                        strokeDashoffset: i % 2 === 0 ? [31, 0] : [0, 31],
                      }}
                      transition={{
                        duration: isHovered ? 1.0 : 1.8,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />

                    {/* Junction Dot at Core Exit */}
                    <circle
                      cx={center.x + (dx * 0.22)}
                      cy={center.y + (dy * 0.22)}
                      r={isHovered ? '2.5' : '1.5'}
                      fill={accentColor}
                      opacity={isHovered ? 0.9 : 0.4}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Central Node: CORE PLATFORM Hub */}
            <div
              className="absolute z-20"
              style={{
                left: `${(center.x / 600) * 100}%`,
                top: `${(center.y / 320) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative flex flex-col items-center justify-center p-3 rounded-2xl backdrop-blur-xl border border-white/90 shadow-[0_8px_24px_rgba(20,17,15,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(240,246,249,0.85) 100%)',
                  minWidth: '128px',
                }}
              >
                {/* Radial Glow Halo */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur-md"
                  style={{ backgroundColor: accentColor }}
                />

                <div className="relative flex items-center gap-1.5 mb-1">
                  <span
                    className="w-2 h-2 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: accentColor }}
                  />
                  <span className="font-mono text-[9px] font-bold tracking-[0.16em] uppercase text-[#14110F]/70">
                    CORE PLATFORM
                  </span>
                </div>

                <div className="relative flex items-center gap-1.5">
                  <div
                    className="w-5 h-5 rounded-md flex items-center justify-center text-white shadow-xs"
                    style={{ backgroundColor: accentColor }}
                  >
                    <Cpu size={12} strokeWidth={2.2} />
                  </div>
                  <span className="text-[11px] font-semibold text-[#14110F] tracking-tight whitespace-nowrap">
                    {solution.area.length > 24 ? solution.area.split(' ')[0] + ' OS' : solution.area}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Peripheral Capability Nodes */}
            {capabilities.map((cap, i) => {
              const node = coords[i];
              if (!node) return null;

              const Icon = getCapabilityIcon(cap);
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={`cap-node-${i}`}
                  className="absolute z-20"
                  style={{
                    left: `${(node.x / 600) * 100}%`,
                    top: `${(node.y / 320) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-xl backdrop-blur-md whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isHovered
                        ? 'border shadow-[0_6px_20px_rgba(13,131,169,0.22)] bg-white/95 scale-105'
                        : 'border border-white/80 bg-white/75 shadow-[0_2px_12px_rgba(20,17,15,0.05)] hover:bg-white/90'
                    }`}
                    style={{
                      borderColor: isHovered ? accentColor : 'rgba(255,255,255,0.85)',
                    }}
                  >
                    {/* Node Icon */}
                    <div
                      className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-colors duration-200"
                      style={{
                        backgroundColor: isHovered
                          ? accentColor
                          : 'color-mix(in srgb, ' + accentColor + ' 12%, transparent)',
                        color: isHovered ? '#FFFFFF' : accentColor,
                      }}
                    >
                      <Icon size={12} strokeWidth={2} />
                    </div>

                    {/* Capability Text */}
                    <span
                      className={`text-[10px] md:text-[11px] font-medium tracking-tight transition-colors duration-200 ${
                        isHovered ? 'text-[#0d83a9] font-semibold' : 'text-[#14110F]'
                      }`}
                    >
                      {cap}
                    </span>

                    {/* Micro Active Pulse Dot */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 transition-opacity duration-200 ${
                        isHovered ? 'opacity-100' : 'opacity-40'
                      }`}
                      style={{ backgroundColor: accentColor }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

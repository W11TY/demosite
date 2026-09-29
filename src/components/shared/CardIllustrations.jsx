/**
 * CardIllustrations.jsx
 * Five precision, geometric "systems diagram" SVG illustrations for the About page.
 * Palette: steel-blue/teal (#3F87B0 → #A9CADB) on pale surface.
 * Accent 1 (Innovation): soft violet  #8B7FD6
 * Accent 2 (Impact):     warm coral   #E8896B
 * All motion: CSS @keyframes inside each SVG, 6-10s ease-in-out loops.
 */

import React from 'react';

/* ─── shared CSS, injected inline per SVG to keep them self-contained ─── */
const sharedCSS = `
  @media (prefers-reduced-motion: reduce) {
    .il-dot, .il-pulse, .il-grow, .il-dash { animation: none !important; }
  }
`;

/* ══════════════════════════════════════════════════════════════════════════════
   1) HERO — "Conversations happening everywhere, converging to one hub"
      viewBox="0 0 480 360"
   ══════════════════════════════════════════════════════════════════════════════ */
export function IllustrationInnovation() {
  // Channel nodes: [x, y, glyph-type]
  const channels = [
    { x: 72,  y: 60,  label: 'WA',     path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h10V12C22 6.48 17.52 2 12 2z M8 13h4v4H8v-4z M14 9h4v4h-4V9z', opacity: 1    },
    { x: 48,  y: 160, label: 'CALL',   path: 'M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z', opacity: 1    },
    { x: 80,  y: 270, label: 'EMAIL',  path: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', opacity: 1    },
    { x: 210, y: 36,  label: 'SMS',    path: 'M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z', opacity: 0.75 },
    { x: 390, y: 55,  label: 'CHAT',   path: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', opacity: 0.75 },
    { x: 408, y: 180, label: 'DM',     path: 'M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z', opacity: 0.6  },
    { x: 370, y: 295, label: 'VOICE',  path: 'M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zM19 10v2a7 7 0 0 1-14 0v-2H3v2a9 9 0 0 0 8 8.94V22H7v2h10v-2h-4v-1.06A9 9 0 0 0 21 12v-2h-2z', opacity: 0.6  },
  ];

  const hub = { x: 240, y: 180 };

  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        ${sharedCSS}
        @keyframes travel { 0%{offset-distance:0%} 100%{offset-distance:100%} }
        @keyframes hubpulse { 0%,100%{opacity:.15} 50%{opacity:.35} }
        @keyframes msgdrift { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .il-hub-ring { animation: hubpulse 4s ease-in-out infinite; }
        .il-msg { animation: msgdrift 7s ease-in-out infinite; }
        .il-msg2 { animation: msgdrift 9s ease-in-out infinite 1.5s; }
        .il-msg3 { animation: msgdrift 8s ease-in-out infinite 3s; }
      `}</style>

      <defs>
        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3F87B0" stopOpacity="0.22"/>
          <stop offset="100%" stopColor="#3F87B0" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A9CADB" stopOpacity="0"/>
          <stop offset="50%" stopColor="#6BAECE" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#3F87B0" stopOpacity="0.8"/>
        </linearGradient>
        <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6"/>
        </filter>
        <filter id="tinyBlur">
          <feGaussianBlur stdDeviation="1.5"/>
        </filter>
        <marker id="dot" markerWidth="4" markerHeight="4" refX="2" refY="2">
          <circle cx="2" cy="2" r="2" fill="#6BAECE" opacity="0.7"/>
        </marker>
      </defs>

      {/* ambient glow behind hub */}
      <circle cx={hub.x} cy={hub.y} r="110" fill="url(#hubGlow)" filter="url(#softBlur)"/>

      {/* connections + traveling dots */}
      {channels.map((ch, i) => {
        const id = `path${i}`;
        const dur = 5 + i * 0.6;
        const delay = i * 0.9;
        // cubic bezier: start at channel, curve inward toward hub
        const mx = (ch.x + hub.x) / 2 + (i % 2 === 0 ? 30 : -30);
        const my = (ch.y + hub.y) / 2 + (i % 2 === 0 ? -30 : 20);
        const d  = `M${ch.x},${ch.y} Q${mx},${my} ${hub.x},${hub.y}`;
        return (
          <g key={i} opacity={ch.opacity}>
            <path id={id} d={d} stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.28"
              strokeDasharray="4 6" fill="none"/>
            {/* traveling dot via SMIL */}
            <circle r="2.5" fill="#6BAECE" fillOpacity="0.85" filter="url(#tinyBlur)">
              <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" calcMode="spline"
                keySplines="0.4 0 0.6 1">
                <mpath xlinkHref={`#${id}`}/>
              </animateMotion>
            </circle>
            {/* second offset dot */}
            <circle r="1.8" fill="#A9CADB" fillOpacity="0.6">
              <animateMotion dur={`${dur}s`} begin={`${delay + dur * 0.45}s`} repeatCount="indefinite" calcMode="spline"
                keySplines="0.4 0 0.6 1">
                <mpath xlinkHref={`#${id}`}/>
              </animateMotion>
            </circle>
          </g>
        );
      })}

      {/* channel nodes */}
      {channels.map((ch, i) => (
        <g key={i} opacity={ch.opacity}>
          {/* glass card */}
          <rect x={ch.x - 22} y={ch.y - 22} width="44" height="44" rx="10"
            fill="#F0F6FA" fillOpacity="0.55" stroke="#6BAECE" strokeWidth="1.2" strokeOpacity="0.4"/>
          {/* glyph */}
          <g transform={`translate(${ch.x - 12}, ${ch.y - 12})`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3F87B0"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d={ch.path}/>
            </svg>
          </g>
          {/* label */}
          <text x={ch.x} y={ch.y + 32} textAnchor="middle" fontSize="7" fontFamily="monospace"
            fill="#3F87B0" fillOpacity="0.55" letterSpacing="1.5">{ch.label}</text>
        </g>
      ))}

      {/* floating skeleton message bubbles */}
      <g className="il-msg" style={{transformOrigin:`${hub.x - 80}px ${hub.y - 60}px`}}>
        <rect x={hub.x - 115} y={hub.y - 75} width="70" height="30" rx="8"
          fill="#E8F4FA" fillOpacity="0.55" stroke="#6BAECE" strokeWidth="0.9" strokeOpacity="0.35"/>
        <rect x={hub.x - 108} y={hub.y - 65} width="30" height="4" rx="2" fill="#6BAECE" fillOpacity="0.3"/>
        <rect x={hub.x - 108} y={hub.y - 57} width="44" height="4" rx="2" fill="#6BAECE" fillOpacity="0.2"/>
      </g>
      <g className="il-msg2" style={{transformOrigin:`${hub.x + 80}px ${hub.y - 50}px`}}>
        <rect x={hub.x + 52} y={hub.y - 65} width="58" height="26" rx="8"
          fill="#E8F4FA" fillOpacity="0.45" stroke="#6BAECE" strokeWidth="0.9" strokeOpacity="0.3"/>
        <rect x={hub.x + 60} y={hub.y - 57} width="38" height="4" rx="2" fill="#6BAECE" fillOpacity="0.25"/>
        <rect x={hub.x + 60} y={hub.y - 49} width="22" height="4" rx="2" fill="#6BAECE" fillOpacity="0.15"/>
      </g>
      <g className="il-msg3" style={{transformOrigin:`${hub.x}px ${hub.y + 80}px`}}>
        <rect x={hub.x - 35} y={hub.y + 65} width="70" height="26" rx="8"
          fill="#E8F4FA" fillOpacity="0.4" stroke="#6BAECE" strokeWidth="0.9" strokeOpacity="0.25"/>
        <rect x={hub.x - 28} y={hub.y + 73} width="44" height="4" rx="2" fill="#6BAECE" fillOpacity="0.2"/>
        <rect x={hub.x - 28} y={hub.y + 81} width="28" height="4" rx="2" fill="#6BAECE" fillOpacity="0.15"/>
      </g>

      {/* hub rings */}
      {[52, 40, 28].map((r, i) => (
        <circle key={i} cx={hub.x} cy={hub.y} r={r}
          fill="none" stroke="#3F87B0" strokeWidth={i === 2 ? 1.5 : 0.8}
          strokeOpacity={i === 2 ? 0.45 : 0.18} className="il-hub-ring"
          style={{animationDelay: `${i * 0.6}s`}}
        />
      ))}
      {/* hub core */}
      <rect x={hub.x - 18} y={hub.y - 18} width="36" height="36" rx="9"
        fill="#3F87B0" fillOpacity="0.14" stroke="#3F87B0" strokeWidth="1.5" strokeOpacity="0.6"/>
      {/* voxi chevron mark */}
      <polyline points={`${hub.x - 7},${hub.y - 2} ${hub.x},${hub.y + 7} ${hub.x + 7},${hub.y - 2}`}
        stroke="#3F87B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points={`${hub.x - 7},${hub.y - 8} ${hub.x},${hub.y + 1} ${hub.x + 7},${hub.y - 8}`}
        stroke="#3F87B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   2) UNIFIED PLATFORM — Hub-and-spoke, one central system
      viewBox="0 0 240 180"
   ══════════════════════════════════════════════════════════════════════════════ */
export function IllustrationAgentNetwork() {
  const cx = 120, cy = 90;
  const spokes = [
    { angle: -70, r: 70 },
    { angle: -20, r: 72 },
    { angle: 38,  r: 68 },
    { angle: 105, r: 72 },
    { angle: 160, r: 70 },
    { angle: 215, r: 68 },
  ];

  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        ${sharedCSS}
        @keyframes radglow { 0%,100%{opacity:.12} 50%{opacity:.28} }
        @keyframes nodepop { 0%,100%{r:5} 50%{r:6.5} }
        .il-pulse { animation: radglow 5s ease-in-out infinite; }
      `}</style>
      <defs>
        <radialGradient id="upGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3F87B0" stopOpacity="0.28"/>
          <stop offset="100%" stopColor="#3F87B0" stopOpacity="0"/>
        </radialGradient>
      </defs>

      <circle cx={cx} cy={cy} r="80" fill="url(#upGlow)" className="il-pulse"/>

      {spokes.map((sp, i) => {
        const rad = sp.angle * Math.PI / 180;
        const nx = cx + sp.r * Math.cos(rad);
        const ny = cy + sp.r * Math.sin(rad);
        const pathId = `sp${i}`;
        return (
          <g key={i}>
            <path id={pathId}
              d={`M${cx},${cy} L${nx},${ny}`}
              stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 5"/>
            {/* traveling dot */}
            <circle r="2" fill="#6BAECE" fillOpacity="0.7">
              <animateMotion dur={`${6 + i * 0.5}s`} begin={`${i * 0.8}s`} repeatCount="indefinite">
                <mpath xlinkHref={`#sp${i}`}/>
              </animateMotion>
            </circle>
            {/* spoke node */}
            <circle cx={nx} cy={ny} r="8"
              fill="#EDF5FA" fillOpacity="0.6" stroke="#6BAECE" strokeWidth="1.2" strokeOpacity="0.5"/>
            <circle cx={nx} cy={ny} r="3" fill="#3F87B0" fillOpacity="0.6"/>
          </g>
        );
      })}

      {/* centre node */}
      <circle cx={cx} cy={cy} r="22" fill="#D6EAF4" fillOpacity="0.5"
        stroke="#3F87B0" strokeWidth="1.5" strokeOpacity="0.55"/>
      <circle cx={cx} cy={cy} r="14" fill="#3F87B0" fillOpacity="0.18"
        stroke="#3F87B0" strokeWidth="1" strokeOpacity="0.4"/>
      <circle cx={cx} cy={cy} r="6" fill="#3F87B0" fillOpacity="0.8"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   3) SCALABLE ARCHITECTURE — Isometric server layer stack
      viewBox="0 0 240 180"
   ══════════════════════════════════════════════════════════════════════════════ */
export function IllustrationReliability() {
  // Isometric layer: draw 3 thin translucent slab pairs
  // Each slab = top face (parallelogram) + right side + left side
  const layers = [
    { yOff: 0,   opac: 0.55, topFill: '#D6EAF4', sideFillR: '#B3D5E8', sideFillL: '#C4DDF0' },
    { yOff: 28,  opac: 0.45, topFill: '#D6EAF4', sideFillR: '#B3D5E8', sideFillL: '#C4DDF0' },
    { yOff: 56,  opac: 0.35, topFill: '#D6EAF4', sideFillR: '#B3D5E8', sideFillL: '#C4DDF0' },
  ];

  // Isometric params
  const ox = 120, oy = 62, W = 84, H = 14, D = 18;
  // Top face corners (isometric): 4 pts
  // Centered on ox,oy
  const tp = [
    { x: ox,       y: oy },           // top
    { x: ox + W/2, y: oy + H },       // right
    { x: ox,       y: oy + H*2 },     // bottom
    { x: ox - W/2, y: oy + H },       // left
  ];

  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        ${sharedCSS}
        @keyframes basepulse { 0%,100%{opacity:0.3} 50%{opacity:0.7} }
        .il-pulse { animation: basepulse 4s ease-in-out infinite; }
        .il-dot2 { animation: basepulse 6s ease-in-out infinite; }
      `}</style>
      <defs>
        <linearGradient id="slabTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D6EAF4" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#A9CADB" stopOpacity="0.3"/>
        </linearGradient>
        <linearGradient id="slabSide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3F87B0" stopOpacity="0.18"/>
          <stop offset="100%" stopColor="#3F87B0" stopOpacity="0.08"/>
        </linearGradient>
      </defs>

      {layers.map((lay, li) => {
        const y = lay.yOff;
        // top-face polygon
        const top   = `${ox},${tp[0].y+y} ${tp[1].x},${tp[1].y+y} ${tp[2].x},${tp[2].y+y} ${tp[3].x},${tp[3].y+y}`;
        // right side
        const right = `${tp[1].x},${tp[1].y+y} ${tp[2].x},${tp[2].y+y} ${tp[2].x},${tp[2].y+y+D} ${tp[1].x},${tp[1].y+y+D}`;
        // left side
        const left  = `${tp[3].x},${tp[3].y+y} ${tp[2].x},${tp[2].y+y} ${tp[2].x},${tp[2].y+y+D} ${tp[3].x},${tp[3].y+y+D}`;

        return (
          <g key={li} opacity={lay.opac}>
            <polygon points={left}  fill="url(#slabSide)" stroke="#6BAECE" strokeWidth="0.8" strokeOpacity="0.4"/>
            <polygon points={right} fill="url(#slabSide)" stroke="#6BAECE" strokeWidth="0.8" strokeOpacity="0.5"/>
            <polygon points={top}   fill="url(#slabTop)"  stroke="#6BAECE" strokeWidth="1"   strokeOpacity="0.6"/>

            {/* node grid on top layer only */}
            {li === 0 && [-28, -14, 0, 14, 28].map((dx, di) => (
              <circle key={di} cx={ox + dx} cy={tp[0].y + y + H} r="2"
                fill="#3F87B0" fillOpacity={0.7 - di * 0.1} className="il-dot2"
                style={{animationDelay:`${di*0.4}s`}}/>
            ))}
          </g>
        );
      })}

      {/* base pulse line — zero downtime signal */}
      <line x1="36" y1="158" x2="204" y2="158" stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.25"/>
      <line x1="36" y1="158" x2="36" y2="155" stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.35"/>
      <line x1="204" y1="158" x2="204" y2="155" stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.35"/>
      {/* pulse travelling dot */}
      <circle r="3" fill="#3F87B0" fillOpacity="0.7" className="il-pulse">
        <animateMotion dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1">
          <mpath xlinkHref="#baseLine"/>
        </animateMotion>
      </circle>
      <path id="baseLine" d="M36,158 L204,158" opacity="0"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   4) CONTINUOUS INNOVATION — Self-learning arc loop with growing rings
      viewBox="0 0 240 180"
      Accent: soft violet #8B7FD6
   ══════════════════════════════════════════════════════════════════════════════ */
export function IllustrationInnovation_Full() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        ${sharedCSS}
        @keyframes ringgrow { 0%{r:12;opacity:.6} 60%{r:36;opacity:0} 100%{r:36;opacity:0} }
        @keyframes arcspin  { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        .il-ring1 { animation: ringgrow 4s ease-out infinite 0s; transform-origin: 120px 90px; }
        .il-ring2 { animation: ringgrow 4s ease-out infinite 1.3s; transform-origin: 120px 90px; }
        .il-ring3 { animation: ringgrow 4s ease-out infinite 2.6s; transform-origin: 120px 90px; }
        .il-arc   { animation: arcspin 8s linear infinite; transform-origin: 120px 90px; }
      `}</style>
      <defs>
        <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6BAECE" stopOpacity="0"/>
          <stop offset="60%" stopColor="#6BAECE" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#3F87B0" stopOpacity="0.8"/>
        </linearGradient>
      </defs>

      {/* outer guide circle (static, very faint) */}
      <circle cx="120" cy="90" r="66" stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="3 7"/>

      {/* spinning arc */}
      <g className="il-arc">
        {/* 300° arc, gap at top = arrowhead */}
        <path
          d="M120,24 A66,66 0 1,1 86.2,148.8"
          stroke="url(#arcGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
        {/* arrowhead */}
        <polyline points="80,142 86,150 94,145"
          stroke="#3F87B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8"/>
      </g>

      {/* growing ring pulses — violet accent on center */}
      <circle cx="120" cy="90" r="12" fill="#8B7FD6" fillOpacity="0.15" className="il-ring1"/>
      <circle cx="120" cy="90" r="12" fill="#8B7FD6" fillOpacity="0.12" className="il-ring2"/>
      <circle cx="120" cy="90" r="12" fill="#8B7FD6" fillOpacity="0.1"  className="il-ring3"/>

      {/* centre node — violet accent */}
      <circle cx="120" cy="90" r="12" fill="#8B7FD6" fillOpacity="0.22"
        stroke="#8B7FD6" strokeWidth="1.5" strokeOpacity="0.7"/>
      <circle cx="120" cy="90" r="5"  fill="#8B7FD6" fillOpacity="0.85"/>

      {/* orbit tick marks at 90° intervals */}
      {[0, 90, 180, 270].map((deg, i) => {
        const rad = deg * Math.PI / 180;
        return (
          <line key={i}
            x1={120 + 60 * Math.cos(rad)} y1={90 + 60 * Math.sin(rad)}
            x2={120 + 66 * Math.cos(rad)} y2={90 + 66 * Math.sin(rad)}
            stroke="#6BAECE" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round"/>
        );
      })}
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   5) MEASURABLE IMPACT — Ascending bar chart + trend line
      viewBox="0 0 240 180"
      Accent: warm coral #E8896B on trend endpoint
   ══════════════════════════════════════════════════════════════════════════════ */
export function IllustrationImpact() {
  const bars = [
    { x: 44,  h: 38, delay: 0    },
    { x: 84,  h: 58, delay: 0.15 },
    { x: 124, h: 80, delay: 0.30 },
    { x: 164, h: 104,delay: 0.45 },
    { x: 204, h: 126,delay: 0.60 },
  ];
  const baseline = 150;
  const trendPts = bars.map(b => ({ x: b.x + 14, y: baseline - b.h }));

  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <style>{`
        ${sharedCSS}
        @keyframes barrise { 0%{transform:scaleY(0)} 100%{transform:scaleY(1)} }
        @keyframes endpulse { 0%,100%{r:5} 50%{r:7} }
        .il-bar { animation: barrise 1.2s ease-out forwards; transform-origin: bottom; }
        .il-endpulse { animation: endpulse 3s ease-in-out infinite; }
      `}</style>
      <defs>
        <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3F87B0" stopOpacity="0.45"/>
          <stop offset="100%" stopColor="#3F87B0" stopOpacity="0.1"/>
        </linearGradient>
        <linearGradient id="trendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6BAECE" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#3F87B0" stopOpacity="0.9"/>
        </linearGradient>
      </defs>

      {/* faint horizontal gridlines */}
      {[30, 50, 70, 90].map(y => (
        <line key={y} x1="30" y1={baseline - y} x2="230" y2={baseline - y}
          stroke="#6BAECE" strokeWidth="0.8" strokeOpacity="0.18" strokeDasharray="3 5"/>
      ))}

      {/* axis */}
      <line x1="30" y1="24" x2="30" y2={baseline} stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.25"/>
      <line x1="30" y1={baseline} x2="230" y2={baseline} stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.25"/>

      {/* bars — glass style */}
      {bars.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={baseline - b.h} width="28" height={b.h} rx="4"
            fill="url(#barGrad)" stroke="#6BAECE" strokeWidth="1" strokeOpacity="0.4"
            className="il-bar" style={{animationDelay:`${b.delay}s`}}/>
          {/* inner highlight */}
          <rect x={b.x + 3} y={baseline - b.h + 3} width="6" height={Math.min(b.h - 6, 18)} rx="2"
            fill="#A9CADB" fillOpacity="0.4"/>
        </g>
      ))}

      {/* trend line */}
      <polyline
        points={trendPts.map(p => `${p.x},${p.y}`).join(' ')}
        stroke="url(#trendGrad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>

      {/* trend nodes */}
      {trendPts.slice(0, -1).map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3"
          fill="white" fillOpacity="0.8" stroke="#3F87B0" strokeWidth="1.2" strokeOpacity="0.6"/>
      ))}

      {/* endpoint — coral accent */}
      <circle cx={trendPts[4].x} cy={trendPts[4].y} r="5"
        fill="#E8896B" fillOpacity="0.2" stroke="#E8896B" strokeWidth="1.5" strokeOpacity="0.8"
        className="il-endpulse"/>
      <circle cx={trendPts[4].x} cy={trendPts[4].y} r="3" fill="#E8896B" fillOpacity="0.9"/>

      {/* pill label */}
      <rect x={trendPts[4].x + 9} y={trendPts[4].y - 10} width="22" height="14" rx="5"
        fill="#E8896B" fillOpacity="0.15" stroke="#E8896B" strokeWidth="1" strokeOpacity="0.55"/>
      <text x={trendPts[4].x + 20} y={trendPts[4].y + 1} textAnchor="middle" fontSize="8"
        fontFamily="monospace" fill="#E8896B" fillOpacity="0.9">↑</text>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   ICON-SIZE TILE VARIANTS (24×24 viewBox, used inside 44px tiles)
   ══════════════════════════════════════════════════════════════════════════════ */

/* Unified Platform tile */
export function IllustrationAgentNetwork_Tile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="#3F87B0" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="3" strokeOpacity="0.9"/>
      {[[12,4],[20,8],[20,16],[12,20],[4,16],[4,8]].map(([x,y],i) => (
        <g key={i}>
          <line x1="12" y1="12" x2={x} y2={y} strokeOpacity="0.4" strokeDasharray="2 2"/>
          <circle cx={x} cy={y} r="1.8" fill="#3F87B0" fillOpacity="0.7" stroke="none"/>
        </g>
      ))}
    </svg>
  );
}

/* Scalable Architecture tile */
export function IllustrationReliability_Tile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="#3F87B0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="14" width="18" height="4" rx="1.5" strokeOpacity="0.8"/>
      <rect x="5" y="9"  width="14" height="4" rx="1.5" strokeOpacity="0.6"/>
      <rect x="7" y="4"  width="10" height="4" rx="1.5" strokeOpacity="0.4"/>
    </svg>
  );
}

/* Continuous Innovation tile */
export function IllustrationInnovation_Tile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 A9 9 0 1 1 6 17.5" stroke="#3F87B0" strokeWidth="1.5" fill="none"/>
      <polyline points="4,15 6,18 9,16" stroke="#3F87B0" strokeWidth="1.5" fill="none"/>
      <circle cx="12" cy="12" r="3" fill="#8B7FD6" fillOpacity="0.8" stroke="none"/>
    </svg>
  );
}

/* Measurable Impact tile */
export function IllustrationImpact_Tile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="21" x2="21" y2="21" stroke="#3F87B0" strokeWidth="1.2" strokeOpacity="0.4"/>
      <rect x="4"  y="16" width="4" height="5" rx="1" fill="#3F87B0" fillOpacity="0.3" stroke="#3F87B0" strokeWidth="1"/>
      <rect x="10" y="11" width="4" height="10" rx="1" fill="#3F87B0" fillOpacity="0.4" stroke="#3F87B0" strokeWidth="1"/>
      <rect x="16" y="7"  width="4" height="14" rx="1" fill="#3F87B0" fillOpacity="0.5" stroke="#3F87B0" strokeWidth="1"/>
      <circle cx="18" cy="6" r="2.5" fill="#E8896B" fillOpacity="0.85" stroke="none"/>
    </svg>
  );
}

/* ── Re-exports so CompanyDetail.jsx import names stay unchanged ── */
export { IllustrationInnovation_Full as IllustrationInnovation_Hero };
export { IllustrationAgentNetwork_Tile  as IllustrationAgentNetwork_Small  };
export { IllustrationReliability_Tile   as IllustrationReliability_Small   };
export { IllustrationImpact_Tile        as IllustrationImpact_Small        };

/* ── Kept for SolutionsOverview or other pages that import these ── */
export function IllustrationRealEstate()     { return <IllustrationAgentNetwork_Tile />; }
export function IllustrationAutomobile()     { return <IllustrationReliability_Tile />; }
export function IllustrationConsumerDurable(){ return <IllustrationInnovation_Tile />; }
export function IllustrationFintech()        { return <IllustrationImpact_Tile />; }
export function IllustrationHealthcare()     { return <IllustrationAgentNetwork_Tile />; }
export function IllustrationUtilities()      { return <IllustrationReliability_Tile />; }
export function IllustrationIntelligentAgents() {
  // Chapter 2: Intelligence — reuse the hub-and-spoke (full-size)
  return <IllustrationAgentNetwork />;
}
export function IllustrationResearchNodes()  { return <IllustrationAgentNetwork_Tile />; }

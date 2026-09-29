/**
 * SolutionScenes.jsx — v5
 * Scenes for all 6 industries. Fixed-height card, messages scroll up inside.
 * ResizeObserver drives compact mode (< 440px = thread only, no action panel).
 */

import React, { useEffect, useRef, useState, useCallback } from 'react';

/* ─── CSS ──────────────────────────────────────────────────────────────────── */
const SCENE_CSS = `
  @keyframes sceneDot   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
  @keyframes scenePulse { 0%,100%{opacity:0.35} 50%{opacity:1} }
  @keyframes slideUp    { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
`;
function injectCSS() {
  if (typeof document === 'undefined' || document.getElementById('voxi-scene-css')) return;
  const s = document.createElement('style');
  s.id = 'voxi-scene-css';
  s.textContent = SCENE_CSS;
  document.head.appendChild(s);
}

const prefersReduced = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

/* ─── Container-width hook ─────────────────────────────────────────────────── */
function useContainerWidth(ref) {
  const [width, setWidth] = useState(9999);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return width;
}

/* ─── Step loop + IntersectionObserver ─────────────────────────────────────── */
function useSceneStep(steps, holdLast = 2200) {
  const [step, setStep] = useState(prefersReduced ? steps.length - 1 : 0);
  const rootRef = useRef(null);
  const active = useRef(false);
  const timer  = useRef(null);

  const run = useCallback((cur) => {
    if (!active.current) return;
    timer.current = setTimeout(() => {
      const next = cur + 1;
      if (next < steps.length) { setStep(next); run(next); }
      else {
        timer.current = setTimeout(() => {
          if (!active.current) return;
          setStep(0); run(0);
        }, holdLast);
      }
    }, steps[cur].delay);
  }, [steps, holdLast]);

  useEffect(() => {
    injectCSS();
    if (prefersReduced) return;
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { active.current = true;  run(0); }
      else                  { active.current = false; clearTimeout(timer.current); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => { io.disconnect(); clearTimeout(timer.current); };
  }, [run]);

  return { step, rootRef };
}

/* ═══════════════════════════════════════════════════════════════════════════
   SHARED UI PRIMITIVES  (all text single-line + ellipsis, no wrapping)
   ═══════════════════════════════════════════════════════════════════════════ */

function Bubble({ text, visible, ai, isNew }) {
  return (
    <div style={{ display:'flex', justifyContent:ai?'flex-start':'flex-end', flexShrink:0,
      animation: visible&&isNew&&!prefersReduced?'slideUp 0.35s ease-out both':'none',
      opacity: visible?1:0 }}>
      <div style={{ maxWidth:'88%', padding:'5px 10px',
        borderRadius:ai?'10px 10px 10px 3px':'10px 10px 3px 10px',
        fontSize:10.5, lineHeight:1.35,
        whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
        background:ai?'#3F4FD0':'#E8E4DF', color:ai?'#fff':'#14110F',
        border:ai?'none':'1px solid rgba(20,17,15,0.08)',
        boxShadow:ai?'0 2px 8px rgba(63,79,208,0.2)':'none', flexShrink:0 }}>
        {text}
      </div>
    </div>
  );
}

function VoxiChip({ visible }) {
  return visible ? (
    <div style={{ display:'flex', alignItems:'center', gap:5, flexShrink:0,
      animation:!prefersReduced?'slideUp 0.3s ease-out both':'none' }}>
      <div style={{ width:5, height:5, borderRadius:'50%', background:'#3F4FD0', flexShrink:0,
        animation:prefersReduced?'none':'scenePulse 2s ease-in-out infinite' }}/>
      <span style={{ fontSize:8, fontFamily:'monospace', textTransform:'uppercase',
        letterSpacing:'0.14em', color:'#3F4FD0', whiteSpace:'nowrap' }}>Voxi AI</span>
    </div>
  ) : null;
}

function TypingDots() {
  return (
    <div style={{ display:'flex', gap:3, padding:'5px 9px', background:'#F0F0F0',
      borderRadius:'10px 10px 3px 10px', width:'fit-content', flexShrink:0,
      animation:!prefersReduced?'slideUp 0.3s ease-out both':'none' }}>
      {[0,1,2].map(i=>(
        <div key={i} style={{ width:5, height:5, borderRadius:'50%',
          background:'rgba(20,17,15,0.25)',
          animation:prefersReduced?'none':`sceneDot 1s ease-in-out infinite ${i*0.2}s` }}/>
      ))}
    </div>
  );
}

function ActionRow({ label, checked }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:6, padding:'3px 0', flexShrink:0,
      opacity:checked?1:0.22, transform:checked?'none':'translateX(-3px)',
      transition:prefersReduced?'none':'opacity 0.4s ease-out, transform 0.4s ease-out' }}>
      <div style={{ flexShrink:0, width:14, height:14, borderRadius:'50%',
        display:'flex', alignItems:'center', justifyContent:'center',
        background:checked?'#22C55E':'transparent',
        border:checked?'1.5px solid #22C55E':'1.5px solid rgba(20,17,15,0.2)',
        transition:'background 0.3s, border-color 0.3s' }}>
        {checked&&(
          <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
            <path d="M1.5 4l2 2 3-3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span style={{ fontSize:9.5, color:checked?'#14110F':'#14110F80',
        whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:120 }}>
        {label}
      </span>
    </div>
  );
}

function OutcomeCard({ label, visible }) {
  return (
    <div style={{ marginTop:4, padding:'5px 8px', borderRadius:8, flexShrink:0,
      background:'linear-gradient(135deg,#3F4FD0,#5563E8)',
      opacity:visible?1:0.15, transform:visible?'none':'translateX(-3px)',
      transition:prefersReduced?'none':'opacity 0.5s ease-out, transform 0.5s ease-out',
      boxShadow:visible?'0 3px 12px rgba(63,79,208,0.3)':'none',
      fontSize:9, color:'#fff', fontWeight:500,
      whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
      <span style={{ marginRight:4 }}>✓</span>{label}
    </div>
  );
}

function TimerChip({ label, visible }) {
  return (
    <div style={{ position:'absolute', top:8, right:8,
      display:'flex', alignItems:'center', gap:5,
      padding:'3px 8px', borderRadius:99,
      background:'rgba(34,197,94,0.12)', border:'1px solid rgba(34,197,94,0.3)',
      fontSize:8.5, fontFamily:'monospace', color:'#16A34A',
      opacity:visible?1:0, transform:visible?'none':'translateY(-4px)',
      transition:prefersReduced?'none':'opacity 0.4s ease-out, transform 0.4s ease-out',
      whiteSpace:'nowrap', zIndex:10 }}>
      <div style={{ width:5, height:5, borderRadius:'50%', background:'#22C55E',
        animation:prefersReduced?'none':'scenePulse 1.5s ease-in-out infinite' }}/>
      {label}
    </div>
  );
}

function ChannelTag({ icon, label }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:5,
      padding:'3px 7px', borderRadius:6, marginBottom:7,
      background:'rgba(20,17,15,0.06)', border:'1px solid rgba(20,17,15,0.1)',
      fontSize:8, fontFamily:'monospace', textTransform:'uppercase',
      letterSpacing:'0.1em', color:'#14110F99', flexShrink:0,
      maxWidth:'100%', overflow:'hidden' }}>
      <span style={{ flexShrink:0 }}>{icon}</span>
      <span style={{ whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>{label}</span>
    </div>
  );
}

function OldWayFooter({ text }) {
  return (
    <div style={{ position:'absolute', bottom:0, left:0, right:0,
      padding:'4px 10px', display:'flex', alignItems:'center', gap:5,
      borderTop:'1px solid rgba(20,17,15,0.08)', background:'rgba(234,228,216,0.85)', zIndex:10 }}>
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="5" stroke="#14110F" strokeOpacity="0.25" strokeWidth="1"/>
        <path d="M2 6h8" stroke="#14110F" strokeOpacity="0.35" strokeWidth="1" strokeLinecap="round"/>
      </svg>
      <span style={{ fontSize:8.5, fontFamily:'monospace', textDecoration:'line-through',
        color:'#14110F50', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
        {text}
      </span>
    </div>
  );
}

/* ─── ScrollingThread ────────────────────────────────────────────────────────
   Fixed-height overflow:hidden wrapper. Measures inner vs outer height and
   applies a smooth translateY to keep the latest message always in view.
   ─────────────────────────────────────────────────────────────────────────── */
function ScrollingThread({ children }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;
    const overflow = inner.scrollHeight - outer.clientHeight;
    setOffset(overflow > 0 ? overflow : 0);
  });

  return (
    <div ref={outerRef} style={{ flex:'1 1 0', overflow:'hidden', position:'relative', minHeight:0 }}>
      <div ref={innerRef} style={{ display:'flex', flexDirection:'column', gap:5,
        transform:`translateY(-${offset}px)`,
        transition:prefersReduced?'none':'transform 0.45s cubic-bezier(0.4,0,0.2,1)',
        willChange:'transform' }}>
        {children}
      </div>
    </div>
  );
}

/* ─── SceneShell — layout wrapper used by all scenes ────────────────────────── */
function SceneShell({ combinedRef, compact, watermark, children, actions, outcomeLabel, timerLabel, footerText, actionsVisible }) {
  return (
    <div ref={combinedRef} style={{
      position:'relative', width:'100%', height:'100%',
      display:'flex', gap:compact?0:10,
      padding:'8px 10px 26px 10px', overflow:'hidden',
      userSelect:'none', boxSizing:'border-box' }}>
      {watermark}

      {/* LEFT: conversation thread */}
      <div style={{ display:'flex', flexDirection:'column', flex:'1 1 0',
        minWidth:0, position:'relative', zIndex:1 }}>
        {children}
      </div>

      {/* RIGHT: actions (hidden when compact) */}
      {!compact && (
        <>
          <div style={{ width:1, flexShrink:0, alignSelf:'stretch',
            background:'rgba(20,17,15,0.1)', margin:'0 2px' }}/>
          <div style={{ display:'flex', flexDirection:'column', width:126,
            flexShrink:0, paddingTop:24, overflow:'hidden' }}>
            <div style={{ fontSize:7.5, fontFamily:'monospace', textTransform:'uppercase',
              letterSpacing:'0.18em', marginBottom:6, color:'#14110F50', flexShrink:0 }}>
              Actions
            </div>
            {actions.map((a,i) => <ActionRow key={i} label={a.label} checked={a.checked}/>)}
            {outcomeLabel && <OutcomeCard label={outcomeLabel} visible={actionsVisible}/>}
          </div>
        </>
      )}

      {timerLabel && <TimerChip label={timerLabel} visible={actionsVisible}/>}
      <OldWayFooter text={footerText}/>
    </div>
  );
}

/* ─── Icon helpers ───────────────────────────────────────────────────────────── */
const HomeIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const CarIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 17H5v-5l2-5h10l2 5z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="7.5" cy="17.5" r="1.5" fill="currentColor"/>
    <circle cx="16.5" cy="17.5" r="1.5" fill="currentColor"/>
  </svg>
);
const WrenchIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const CreditCardIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);
const HeartIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const ZapIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

/* ─── Watermarks ─────────────────────────────────────────────────────────────── */
function BuildingWatermark() {
  return (
    <svg aria-hidden viewBox="0 0 120 140" fill="none"
      style={{ position:'absolute',bottom:20,right:6,width:100,height:120,opacity:0.055,pointerEvents:'none',zIndex:0 }}>
      <rect x="30" y="20" width="60" height="110" rx="2" fill="#14110F"/>
      <rect x="0"  y="55" width="32" height="75"  rx="2" fill="#14110F"/>
      <rect x="88" y="45" width="32" height="85"  rx="2" fill="#14110F"/>
      {[30,46,62,78,94].map(y=>[38,52,66,74].map(x=>(
        <rect key={`m${x}${y}`} x={x} y={y} width="8" height="10" rx="1" fill="white" fillOpacity="0.6"/>
      )))}
      {[64,80,96,112].map(y=>[5,17].map(x=>(
        <rect key={`l${x}${y}`} x={x} y={y} width="7" height="8" rx="1" fill="white" fillOpacity="0.5"/>
      )))}
      <rect x="52" y="108" width="16" height="22" rx="2" fill="white" fillOpacity="0.4"/>
    </svg>
  );
}
function CarWatermark() {
  return (
    <svg aria-hidden viewBox="0 0 180 90" fill="none"
      style={{ position:'absolute',bottom:18,right:4,width:140,height:70,opacity:0.055,pointerEvents:'none',zIndex:0 }}>
      <path d="M18 60 Q22 42 36 38 L60 32 Q80 22 100 22 Q124 22 136 32 L158 40 Q168 44 170 52 L172 60Z" fill="#14110F"/>
      <path d="M56 38 Q70 20 104 20 Q128 20 140 34 L158 40 Q140 36 56 38Z" fill="#14110F" fillOpacity="0.7"/>
      <path d="M62 37 L76 24 Q80 21 86 21 L102 21 L100 37Z" fill="white" fillOpacity="0.5"/>
      <path d="M104 37 L103 21 L118 21 Q128 21 135 30 L142 37Z" fill="white" fillOpacity="0.5"/>
      <rect x="14" y="58" width="158" height="10" rx="4" fill="#14110F" fillOpacity="0.5"/>
      <circle cx="48"  cy="66" r="16" fill="#14110F"/>
      <circle cx="48"  cy="66" r="8"  fill="white" fillOpacity="0.4"/>
      <circle cx="140" cy="66" r="16" fill="#14110F"/>
      <circle cx="140" cy="66" r="8"  fill="white" fillOpacity="0.4"/>
      <ellipse cx="168" cy="52" rx="4" ry="6" fill="white" fillOpacity="0.6"/>
    </svg>
  );
}
function TVWatermark() {
  return (
    <svg aria-hidden viewBox="0 0 120 100" fill="none"
      style={{ position:'absolute',bottom:18,right:6,width:110,height:90,opacity:0.055,pointerEvents:'none',zIndex:0 }}>
      <rect x="5" y="5" width="110" height="75" rx="8" fill="#14110F"/>
      <rect x="12" y="12" width="96" height="61" rx="4" fill="white" fillOpacity="0.25"/>
      <rect x="45" y="82" width="30" height="6" rx="2" fill="#14110F"/>
      <rect x="30" y="88" width="60" height="5" rx="2" fill="#14110F" fillOpacity="0.6"/>
      <circle cx="110" cy="18" r="4" fill="white" fillOpacity="0.4"/>
    </svg>
  );
}
function CoinWatermark() {
  return (
    <svg aria-hidden viewBox="0 0 120 120" fill="none"
      style={{ position:'absolute',bottom:14,right:6,width:100,height:100,opacity:0.055,pointerEvents:'none',zIndex:0 }}>
      <circle cx="60" cy="55" r="50" fill="#14110F"/>
      <circle cx="60" cy="55" r="40" fill="white" fillOpacity="0.15"/>
      <text x="60" y="68" textAnchor="middle" fontSize="36" fill="white" fillOpacity="0.5" fontWeight="bold">₹</text>
      <ellipse cx="60" cy="98" rx="42" ry="8" fill="#14110F" fillOpacity="0.25"/>
    </svg>
  );
}
function HeartbeatWatermark() {
  return (
    <svg aria-hidden viewBox="0 0 140 90" fill="none"
      style={{ position:'absolute',bottom:18,right:4,width:130,height:80,opacity:0.055,pointerEvents:'none',zIndex:0 }}>
      <path d="M10 45 L35 45 L50 15 L65 75 L80 30 L90 45 L130 45"
        stroke="#14110F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}
function BoltWatermark() {
  return (
    <svg aria-hidden viewBox="0 0 80 130" fill="none"
      style={{ position:'absolute',bottom:14,right:10,width:70,height:115,opacity:0.055,pointerEvents:'none',zIndex:0 }}>
      <path d="M50 5 L10 70 L38 70 L30 125 L70 55 L42 55 Z" fill="#14110F"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   1. REAL ESTATE
   ═══════════════════════════════════════════════════════════════════════════ */
const RE_STEPS = [
  {delay:500},{delay:650},{delay:450},{delay:700},
  {delay:650},{delay:450},{delay:700},{delay:550},{delay:600},
];
export function RealEstateScene() {
  const { step:s, rootRef } = useSceneStep(RE_STEPS);
  const widthRef = useRef(null);
  const combinedRef = useCallback(node=>{ rootRef.current=node; widthRef.current=node; },[rootRef]);
  const compact = useContainerWidth(widthRef) < 440;

  const actions = [
    { label:'Lead captured',       checked:s>=3 },
    { label:'Qualified',           checked:s>=6 },
    { label:'Site visit booked',   checked:s>=6 },
    { label:'Reminder scheduled',  checked:s>=7 },
    { label:'Follow-up armed',     checked:s>=8 },
  ];

  return (
    <SceneShell combinedRef={combinedRef} compact={compact} watermark={<BuildingWatermark/>}
      actions={actions} outcomeLabel="Site visit confirmed. No agent." actionsVisible={s>=8}
      timerLabel="Replied in 8s" footerText="Enquiry answered next morning">
      <ChannelTag icon={<HomeIcon/>} label="Property portal · 11:47 PM"/>
      <ScrollingThread>
        {s<1  && <TypingDots/>}
        {s>=1 && <Bubble text="Interested in 3BHK, Gomti Nagar. Available?" visible ai={false} isNew={s===1}/>}
        {s===2 && <TypingDots/>}
        {s>=3 && <VoxiChip visible/>}
        {s>=3 && <Bubble text="Yes, 2 units left. Budget 1.2–1.5 Cr?" visible ai isNew={s===3}/>}
        {s>=4 && <Bubble text="Yes. Can I visit this weekend?" visible ai={false} isNew={s===4}/>}
        {s===5 && <TypingDots/>}
        {s>=6 && <Bubble text="Booked: Sat 11 AM. Pin & reminder sent ✓" visible ai isNew={s===6}/>}
      </ScrollingThread>
    </SceneShell>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   2. AUTOMOBILE
   ═══════════════════════════════════════════════════════════════════════════ */
const AUTO_STEPS = [
  {delay:500},{delay:650},{delay:600},{delay:450},
  {delay:700},{delay:550},{delay:600},{delay:600},{delay:700},
];
export function AutomobileScene() {
  const { step:s, rootRef } = useSceneStep(AUTO_STEPS);
  const widthRef = useRef(null);
  const combinedRef = useCallback(node=>{ rootRef.current=node; widthRef.current=node; },[rootRef]);
  const compact = useContainerWidth(widthRef) < 440;

  const actions = [
    { label:'Missed call recovered',  checked:s>=1 },
    { label:'Test drive booked',       checked:s>=4 },
    { label:'Service reminder sent',   checked:s>=5 },
    { label:'Slot confirmed',          checked:s>=7 },
    { label:'Survey queued',           checked:s>=8 },
  ];

  return (
    <SceneShell combinedRef={combinedRef} compact={compact} watermark={<CarWatermark/>}
      actions={actions} outcomeLabel="Test drive & service booked auto." actionsVisible={s>=8}
      timerLabel="Replied in 5s" footerText="Missed call never returned">
      <ChannelTag icon={<CarIcon/>} label="Missed call · Sunday 7:15 PM"/>
      <ScrollingThread>
        {s===0 && <TypingDots/>}
        {s>=1 && <VoxiChip visible/>}
        {s>=1 && <Bubble text="Sorry we missed you. Book a test drive?" visible ai isNew={s===1}/>}
        {s>=2 && <Bubble text="Yes, the SUV, tomorrow evening." visible ai={false} isNew={s===2}/>}
        {s===3 && <TypingDots/>}
        {s>=4 && <Bubble text="Booked: Mon 5 PM with sales exec. Sent ✓" visible ai isNew={s===4}/>}
        {s>=6 && <Bubble text="Service due at 10k km. Book a slot?" visible ai isNew={s===6}/>}
        {s>=7 && <Bubble text="Yes please." visible ai={false} isNew={s===7}/>}
        {s>=8 && <Bubble text="Booked: Thu 10 AM. Reminder set ✓" visible ai isNew={s===8}/>}
      </ScrollingThread>
    </SceneShell>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   3. CONSUMER DURABLES
   ═══════════════════════════════════════════════════════════════════════════ */
const CD_STEPS = [
  {delay:500},{delay:650},{delay:450},{delay:700},
  {delay:600},{delay:450},{delay:700},{delay:550},{delay:600},
];
export function ConsumerDurablesScene() {
  const { step:s, rootRef } = useSceneStep(CD_STEPS);
  const widthRef = useRef(null);
  const combinedRef = useCallback(node=>{ rootRef.current=node; widthRef.current=node; },[rootRef]);
  const compact = useContainerWidth(widthRef) < 440;

  const actions = [
    { label:'Complaint registered',     checked:s>=3 },
    { label:'Ticket #4821 created',      checked:s>=3 },
    { label:'Technician assigned',       checked:s>=6 },
    { label:'Visit scheduled',           checked:s>=7 },
    { label:'Customer notified',         checked:s>=8 },
  ];

  return (
    <SceneShell combinedRef={combinedRef} compact={compact} watermark={<TVWatermark/>}
      actions={actions} outcomeLabel="Issue resolved without human agent." actionsVisible={s>=8}
      timerLabel="Registered in 12s" footerText="Complaint stuck in IVR for 40 min">
      <ChannelTag icon={<WrenchIcon/>} label="WhatsApp · Tue 2:18 PM"/>
      <ScrollingThread>
        {s<1  && <TypingDots/>}
        {s>=1 && <Bubble text="My washing machine isn't spinning since morning." visible ai={false} isNew={s===1}/>}
        {s===2 && <TypingDots/>}
        {s>=3 && <VoxiChip visible/>}
        {s>=3 && <Bubble text="Sorry to hear that! Model number on the back panel?" visible ai isNew={s===3}/>}
        {s>=4 && <Bubble text="WM-7234-IFB." visible ai={false} isNew={s===4}/>}
        {s===5 && <TypingDots/>}
        {s>=6 && <Bubble text="Ticket #4821 raised. Technician visit — when suits you?" visible ai isNew={s===6}/>}
        {s>=7 && <Bubble text="Tomorrow morning please." visible ai={false} isNew={s===7}/>}
        {s>=8 && <Bubble text="Booked: Wed 10–12 AM. You'll get an SMS reminder ✓" visible ai isNew={s===8}/>}
      </ScrollingThread>
    </SceneShell>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   4. FINTECH
   ═══════════════════════════════════════════════════════════════════════════ */
const FT_STEPS = [
  {delay:400},{delay:600},{delay:450},{delay:700},
  {delay:600},{delay:450},{delay:700},{delay:550},{delay:650},
];
export function FintechScene() {
  const { step:s, rootRef } = useSceneStep(FT_STEPS);
  const widthRef = useRef(null);
  const combinedRef = useCallback(node=>{ rootRef.current=node; widthRef.current=node; },[rootRef]);
  const compact = useContainerWidth(widthRef) < 440;

  const actions = [
    { label:'Right party connected',   checked:s>=1 },
    { label:'EMI amount confirmed',    checked:s>=4 },
    { label:'Promise-to-pay captured', checked:s>=6 },
    { label:'Payment link sent',       checked:s>=7 },
    { label:'Follow-up scheduled',     checked:s>=8 },
  ];

  return (
    <SceneShell combinedRef={combinedRef} compact={compact} watermark={<CoinWatermark/>}
      actions={actions} outcomeLabel="₹12,400 EMI collected. Zero agent." actionsVisible={s>=8}
      timerLabel="Connected in 6s" footerText="EMI 18 days overdue, no contact">
      <ChannelTag icon={<CreditCardIcon/>} label="Outbound call · Mon 10:05 AM"/>
      <ScrollingThread>
        {s<1  && <TypingDots/>}
        {s>=1 && <VoxiChip visible/>}
        {s>=1 && <Bubble text="Hi Rahul, this is Voxi from FinEdge. EMI due the 5th." visible ai isNew={s===1}/>}
        {s>=2 && <Bubble text="Yes, I know. I've been busy." visible ai={false} isNew={s===2}/>}
        {s===3 && <TypingDots/>}
        {s>=4 && <Bubble text="Your EMI is ₹12,400. Can you pay by Friday?" visible ai isNew={s===4}/>}
        {s>=5 && <Bubble text="Yes, Friday works for me." visible ai={false} isNew={s===5}/>}
        {s===6 && <TypingDots/>}
        {s>=7 && <Bubble text="Payment link sent to your number. Reminder set ✓" visible ai isNew={s===7}/>}
        {s>=8 && <Bubble text="Got it. Thanks." visible ai={false} isNew={s===8}/>}
      </ScrollingThread>
    </SceneShell>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   5. HEALTHCARE
   ═══════════════════════════════════════════════════════════════════════════ */
const HC_STEPS = [
  {delay:400},{delay:650},{delay:450},{delay:700},
  {delay:600},{delay:450},{delay:700},{delay:550},{delay:600},
];
export function HealthcareScene() {
  const { step:s, rootRef } = useSceneStep(HC_STEPS);
  const widthRef = useRef(null);
  const combinedRef = useCallback(node=>{ rootRef.current=node; widthRef.current=node; },[rootRef]);
  const compact = useContainerWidth(widthRef) < 440;

  const actions = [
    { label:'Patient identified',      checked:s>=3 },
    { label:'Slot availability checked',checked:s>=4 },
    { label:'Appointment booked',      checked:s>=6 },
    { label:'Reminder set (24h & 1h)', checked:s>=7 },
    { label:'Pre-visit form sent',     checked:s>=8 },
  ];

  return (
    <SceneShell combinedRef={combinedRef} compact={compact} watermark={<HeartbeatWatermark/>}
      actions={actions} outcomeLabel="Appointment confirmed. No hold time." actionsVisible={s>=8}
      timerLabel="Booked in 45s" footerText="Patient waited on hold for 25 min">
      <ChannelTag icon={<HeartIcon/>} label="WhatsApp · Thu 9:12 AM"/>
      <ScrollingThread>
        {s<1  && <TypingDots/>}
        {s>=1 && <Bubble text="I need to book an appointment with Dr. Mehta." visible ai={false} isNew={s===1}/>}
        {s===2 && <TypingDots/>}
        {s>=3 && <VoxiChip visible/>}
        {s>=3 && <Bubble text="Sure! Is this for a general check-up or follow-up?" visible ai isNew={s===3}/>}
        {s>=4 && <Bubble text="Follow-up after my surgery last month." visible ai={false} isNew={s===4}/>}
        {s===5 && <TypingDots/>}
        {s>=6 && <Bubble text="Dr. Mehta has Fri 11 AM or Mon 3 PM. Preference?" visible ai isNew={s===6}/>}
        {s>=7 && <Bubble text="Friday 11 AM please." visible ai={false} isNew={s===7}/>}
        {s>=8 && <Bubble text="Confirmed! Reminder & pre-visit form sent ✓" visible ai isNew={s===8}/>}
      </ScrollingThread>
    </SceneShell>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   6. UTILITIES
   ═══════════════════════════════════════════════════════════════════════════ */
const UT_STEPS = [
  {delay:400},{delay:650},{delay:450},{delay:700},
  {delay:600},{delay:450},{delay:700},{delay:500},{delay:600},
];
export function UtilitiesScene() {
  const { step:s, rootRef } = useSceneStep(UT_STEPS);
  const widthRef = useRef(null);
  const combinedRef = useCallback(node=>{ rootRef.current=node; widthRef.current=node; },[rootRef]);
  const compact = useContainerWidth(widthRef) < 440;

  const actions = [
    { label:'Account identified',     checked:s>=3 },
    { label:'Complaint logged #7731', checked:s>=4 },
    { label:'Field team notified',    checked:s>=6 },
    { label:'ETA communicated',       checked:s>=7 },
    { label:'Closure SMS queued',     checked:s>=8 },
  ];

  return (
    <SceneShell combinedRef={combinedRef} compact={compact} watermark={<BoltWatermark/>}
      actions={actions} outcomeLabel="Complaint resolved. No IVR drop." actionsVisible={s>=8}
      timerLabel="Logged in 20s" footerText="Complaint lost after IVR timeout">
      <ChannelTag icon={<ZapIcon/>} label="Missed call + SMS · Wed 6:40 PM"/>
      <ScrollingThread>
        {s<1  && <TypingDots/>}
        {s>=1 && <Bubble text="Power has been out in my area since 4 PM." visible ai={false} isNew={s===1}/>}
        {s===2 && <TypingDots/>}
        {s>=3 && <VoxiChip visible/>}
        {s>=3 && <Bubble text="Got it. Your account: Sector 12, Noida. Correct?" visible ai isNew={s===3}/>}
        {s>=4 && <Bubble text="Yes, exactly." visible ai={false} isNew={s===4}/>}
        {s===5 && <TypingDots/>}
        {s>=6 && <Bubble text="Complaint #7731 filed. Field team alerted now." visible ai isNew={s===6}/>}
        {s>=7 && <Bubble text="When will power be restored?" visible ai={false} isNew={s===7}/>}
        {s>=8 && <Bubble text="ETA 2 hrs. You'll get an SMS when resolved ✓" visible ai isNew={s===8}/>}
      </ScrollingThread>
    </SceneShell>
  );
}

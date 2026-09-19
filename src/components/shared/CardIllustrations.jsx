import React from 'react';

const S = {
  thin: '0.5',
  mid: '1',
  thick: '1.5',
};

// Reusable premium SVG definitions
const PremiumDefs = () => (
  <defs>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="6" result="coloredBlur" />
      <feMerge>
        <feMergeNode in="coloredBlur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-4px); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 1; }
      }
      @keyframes dash {
        to { stroke-dashoffset: -20; }
      }
      @keyframes rotate-slow {
        from { transform: rotate(0deg); transform-origin: center; }
        to { transform: rotate(360deg); transform-origin: center; }
      }
      .anim-float { animation: float 6s ease-in-out infinite; }
      .anim-pulse { animation: pulse-slow 4s ease-in-out infinite; }
      .anim-dash { animation: dash 10s linear infinite; stroke-dasharray: 4; }
      .anim-rotate { animation: rotate-slow 20s linear infinite; }
    `}</style>
  </defs>
);

export function IllustrationRealEstate() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-500">
      <PremiumDefs />
      <defs>
        <linearGradient id="re-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.08"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.01"/>
        </linearGradient>
        <linearGradient id="re-accent" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      
      {/* Premium Grid */}
      <g stroke="currentColor" strokeOpacity="0.03" strokeWidth={S.thin}>
        {[...Array(12)].map((_, i) => <line key={`v${i}`} x1={i*20} y1="0" x2={i*20} y2="180" />)}
        {[...Array(9)].map((_, i) => <line key={`h${i}`} x1="0" y1={i*20} x2="240" y2={i*20} />)}
      </g>

      <g className="anim-float">
        {/* Building Back */}
        <rect x="128" y="70" width="32" height="88" fill="url(#re-bg)" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.2"/>
        <line x1="144" y1="70" x2="144" y2="158" stroke="currentColor" strokeOpacity="0.1" strokeWidth={S.thin} />
        <rect x="176" y="90" width="24" height="68" fill="url(#re-bg)" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.2"/>
        
        {/* Building Front - Focus */}
        <rect x="48" y="50" width="48" height="108" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.5"/>
        <rect x="48" y="50" width="48" height="108" fill="url(#re-accent)" fillOpacity="0.1"/>
        
        {/* Data points / Windows */}
        {[60, 76, 92, 108, 124, 140].map((y, i) => (
          <g key={y}>
            <rect x="56" y={y} width="12" height="8" fill="currentColor" fillOpacity={i%2===0 ? "0.6" : "0.2"} filter={i%2===0 ? "url(#glow)" : ""} className={i%2===0 ? "anim-pulse" : ""} />
            <rect x="76" y={y} width="12" height="8" fill="currentColor" fillOpacity={i%3===0 ? "0.8" : "0.2"} filter={i%3===0 ? "url(#glow)" : ""} />
          </g>
        ))}
        
        {/* Network Arcs */}
        <path d="M72 40 Q130 10 200 60" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.4" fill="none" className="anim-dash" />
        <circle cx="72" cy="40" r="4" fill="currentColor" filter="url(#glow)" className="anim-pulse" />
        <circle cx="200" cy="60" r="3" fill="currentColor" fillOpacity="0.6" />
        <circle cx="72" cy="40" r="16" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.3" fill="none" className="anim-pulse" />
      </g>
      
      <line x1="20" y1="158" x2="220" y2="158" stroke="currentColor" strokeOpacity="0.1" strokeWidth={S.mid}/>
    </svg>
  );
}

export function IllustrationAutomobile() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-500">
      <PremiumDefs />
      <g stroke="currentColor" strokeOpacity="0.05" strokeWidth={S.thin}>
        {[...Array(6)].map((_, i) => <circle key={i} cx="120" cy="140" r={40 + i*20} fill="none" />)}
      </g>
      
      {/* Speed lines */}
      <g className="anim-dash" stroke="currentColor" strokeOpacity="0.15" strokeWidth={S.mid}>
        <line x1="20" y1="140" x2="220" y2="140" />
        <line x1="40" y1="120" x2="200" y2="120" />
        <line x1="40" y1="160" x2="200" y2="160" />
      </g>
      
      <g className="anim-float">
        {/* Sleek EV Car Profile */}
        <path d="M50 115 Q60 105 75 105 L150 105 Q170 105 180 120 L185 130 L45 130 Z" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.6"/>
        <path d="M75 105 L150 105" stroke="currentColor" strokeWidth={S.thick} strokeOpacity="0.9" filter="url(#glow)"/>
        
        {/* Wheels */}
        <circle cx="80" cy="130" r="12" fill="#111" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.8"/>
        <circle cx="80" cy="130" r="4" fill="currentColor" fillOpacity="0.8" filter="url(#glow)"/>
        <circle cx="150" cy="130" r="12" fill="#111" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.8"/>
        <circle cx="150" cy="130" r="4" fill="currentColor" fillOpacity="0.8" filter="url(#glow)"/>
        
        {/* LiDAR/Sensors */}
        <path d="M120 105 L120 90 M110 90 L130 90" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.4" />
        <circle cx="120" cy="90" r="2" fill="currentColor" filter="url(#glow)" className="anim-pulse" />
        
        {/* Data Stream */}
        <path d="M185 125 Q210 120 220 110" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.5" fill="none" strokeDasharray="2 4" />
      </g>
    </svg>
  );
}

export function IllustrationConsumerDurable() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-500">
      <PremiumDefs />
      
      {/* Background radial pulse */}
      <circle cx="120" cy="90" r="60" fill="currentColor" fillOpacity="0.02" filter="url(#glow-soft)" className="anim-pulse" />
      
      <g className="anim-float">
        {/* AI Processing Core */}
        <rect x="90" y="60" width="60" height="60" rx="12" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.4"/>
        <rect x="96" y="66" width="48" height="48" rx="8" fill="none" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.2" className="anim-rotate"/>
        
        {/* Core brain glow */}
        <circle cx="120" cy="90" r="10" fill="currentColor" fillOpacity="0.8" filter="url(#glow)" className="anim-pulse"/>
        <circle cx="120" cy="90" r="20" fill="none" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.3" strokeDasharray="4 4" className="anim-rotate"/>
        
        {/* Input/Output data flows */}
        <path d="M30 90 L80 90 M30 70 L85 80 M30 110 L85 100" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.3" className="anim-dash" strokeLinecap="round" />
        <path d="M160 90 L210 90 M155 80 L210 70 M155 100 L210 110" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.6" className="anim-dash" strokeLinecap="round" filter="url(#glow)"/>
        
        {/* Nodes */}
        <circle cx="40" cy="70" r="3" fill="currentColor" fillOpacity="0.5" />
        <circle cx="40" cy="90" r="3" fill="currentColor" fillOpacity="0.5" />
        <circle cx="40" cy="110" r="3" fill="currentColor" fillOpacity="0.5" />
        
        <circle cx="200" cy="70" r="4" fill="currentColor" filter="url(#glow)" />
        <circle cx="200" cy="90" r="4" fill="currentColor" filter="url(#glow)" />
        <circle cx="200" cy="110" r="4" fill="currentColor" filter="url(#glow)" />
      </g>
    </svg>
  );
}

export function IllustrationFintech() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-orange-500">
      <PremiumDefs />
      
      {/* Grid */ }
      <g stroke="currentColor" strokeOpacity="0.03" strokeWidth={S.thin}>
        {[...Array(6)].map((_, i) => <line key={`h${i}`} x1="20" y1={40 + i*20} x2="220" y2={40 + i*20} />)}
      </g>
      
      <g className="anim-float">
        {/* Glowing Data Area */}
        <path d="M30 140 L50 110 L90 120 L130 80 L170 90 L210 40 L210 140 Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M30 140 L50 110 L90 120 L130 80 L170 90 L210 40" stroke="currentColor" strokeWidth={S.thick} strokeOpacity="0.8" fill="none" strokeLinejoin="round" filter="url(#glow)"/>
        
        {/* Bar charts (background) */}
        {[40, 70, 100, 130, 160, 190].map((x, i) => (
          <rect key={x} x={x} y={140 - (30 + i*15)} width="10" height={30 + i*15} rx="3" fill="currentColor" fillOpacity="0.15" />
        ))}
        
        {/* Active nodes */}
        {[
          {x: 50, y: 110}, {x: 90, y: 120}, {x: 130, y: 80}, {x: 170, y: 90}, {x: 210, y: 40}
        ].map((pt, i) => (
          <circle key={i} cx={pt.x} cy={pt.y} r={i === 4 ? 6 : 4} fill="#111" stroke="currentColor" strokeWidth={S.mid} filter={i === 4 ? "url(#glow)" : ""} className={i === 4 ? "anim-pulse" : ""} />
        ))}
        
        {/* Forecast line */}
        <path d="M210 40 L230 20" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.5" strokeDasharray="2 3" />
      </g>
      
      <line x1="20" y1="140" x2="220" y2="140" stroke="currentColor" strokeOpacity="0.2" strokeWidth={S.mid}/>
    </svg>
  );
}

export function IllustrationHealthcare() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-cyan-500">
      <PremiumDefs />
      
      {/* DNA Helix / Sine Wave base */}
      <path d="M20 90 Q60 40 100 90 T180 90 T220 90" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.2" fill="none" />
      <path d="M20 90 Q60 140 100 90 T180 90 T220 90" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.1" fill="none" />
      
      <g className="anim-float">
        {/* Medical / Calendar Interface */}
        <rect x="50" y="40" width="140" height="100" rx="16" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.3" backdropFilter="blur(8px)"/>
        
        {/* Glowing health cross center */}
        <g transform="translate(120, 90)">
          <circle cx="0" cy="0" r="28" fill="currentColor" fillOpacity="0.05" className="anim-pulse" />
          <path d="M-8 -24 L8 -24 L8 -8 L24 -8 L24 8 L8 8 L8 24 L-8 24 L-8 8 L-24 8 L-24 -8 L-8 -8 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.5" />
          {/* Inner core */}
          <path d="M-4 -12 L4 -12 L4 -4 L12 -4 L12 4 L4 4 L4 12 L-4 12 L-4 4 L-12 4 L-12 -4 L-4 -4 Z" fill="currentColor" fillOpacity="0.9" filter="url(#glow)" className="anim-pulse" />
        </g>
        
        {/* Data rings */}
        <circle cx="120" cy="90" r="40" fill="none" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.3" strokeDasharray="4 8" className="anim-rotate"/>
        
        {/* Appointment nodes */}
        {[
          {x: 70, y: 60}, {x: 170, y: 60}, {x: 70, y: 120}, {x: 170, y: 120}
        ].map((pt, i) => (
          <g key={i}>
            <circle cx={pt.x} cy={pt.y} r="4" fill="currentColor" fillOpacity="0.8" filter="url(#glow)"/>
            <path d={`M${pt.x} ${pt.y} L120 90`} stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.2" className="anim-dash" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function IllustrationUtilities() {
  return (
    <svg viewBox="0 0 240 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-amber-500">
      <PremiumDefs />
      
      {/* Background ripples */}
      <circle cx="120" cy="90" r="80" fill="none" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.05" />
      <circle cx="120" cy="90" r="60" fill="none" stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.1" />
      
      <g className="anim-float">
        {/* Central Energy Hub */}
        <circle cx="120" cy="90" r="28" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.5"/>
        <path d="M125 75 L110 95 L120 95 L115 105 L130 85 L120 85 Z" fill="currentColor" fillOpacity="0.9" filter="url(#glow)" className="anim-pulse"/>
        
        {/* Satellite Nodes */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const cx = 120 + 46 * Math.cos(rad);
          const cy = 90 + 46 * Math.sin(rad);
          const isPulse = i % 2 === 0;
          return (
            <g key={i}>
              <line x1={120 + 28*Math.cos(rad)} y1={90 + 28*Math.sin(rad)} x2={cx} y2={cy} stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.3" className="anim-dash"/>
              <circle cx={cx} cy={cy} r={isPulse ? 6 : 4} fill="#111" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.8" />
              <circle cx={cx} cy={cy} r={2} fill="currentColor" filter={isPulse ? "url(#glow)" : ""} className={isPulse ? "anim-pulse" : ""} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function IllustrationAgentNetwork() {
  const nodes = [
    { cx: 120, cy: 90, r: 16, main: true },
    { cx: 60, cy: 54, r: 8 },
    { cx: 180, cy: 54, r: 8 },
    { cx: 44, cy: 120, r: 6 },
    { cx: 196, cy: 120, r: 6 },
    { cx: 80, cy: 150, r: 6 },
    { cx: 160, cy: 150, r: 6 },
  ];
  const edges = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
    [1,3],[2,4],[5,6],[1,5],[2,6],
  ];
  return (
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-500">
      <PremiumDefs />
      
      {/* Background glow */}
      <circle cx="120" cy="90" r="80" fill="currentColor" fillOpacity="0.02" filter="url(#glow-soft)" />
      
      {/* Connections */}
      <g stroke="currentColor" strokeOpacity="0.2" strokeWidth={S.mid} className="anim-dash">
        {edges.map(([a,b],i) => (
          <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy} />
        ))}
      </g>
      
      {/* Nodes */}
      {nodes.map((n, i) => (
        <g key={i} className={n.main ? "anim-float" : ""}>
          <circle cx={n.cx} cy={n.cy} r={n.r + (n.main ? 8 : 4)} fill="currentColor" fillOpacity="0.05" />
          <circle cx={n.cx} cy={n.cy} r={n.r} fill="#111" stroke="currentColor" strokeWidth={n.main ? S.thick : S.mid} strokeOpacity={n.main ? 0.9 : 0.6} filter={n.main ? "url(#glow)" : ""} />
          {n.main && (
            <circle cx={n.cx} cy={n.cy} r={6} fill="currentColor" fillOpacity="0.8" className="anim-pulse" filter="url(#glow)" />
          )}
        </g>
      ))}
    </svg>
  );
}

export function IllustrationInnovation() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-600">
      <PremiumDefs />
      <g className="anim-float">
        <path d="M60 20 Q80 20 80 40 Q80 56 66 64 L66 74 L54 74 L54 64 Q40 56 40 40 Q40 20 60 20Z"
          fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.8" filter="url(#glow)"/>
        
        {/* Filament */}
        <path d="M54 44 Q60 30 66 44" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.8" fill="none" filter="url(#glow)"/>
        
        {/* Base */}
        <path d="M54 76 L66 76 M56 80 L64 80 M58 84 L62 84" stroke="currentColor" strokeWidth={S.thick} strokeOpacity="0.5" strokeLinecap="round"/>
        
        {/* Sparks */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg,i) => {
          const rad = deg * Math.PI / 180;
          return <line key={i}
            x1={60 + 28*Math.cos(rad)} y1={40 + 28*Math.sin(rad)}
            x2={60 + 36*Math.cos(rad)} y2={40 + 36*Math.sin(rad)}
            stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.4" className="anim-pulse"/>;
        })}
      </g>
    </svg>
  );
}

export function IllustrationReliability() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-600">
      <PremiumDefs />
      <g className="anim-float">
        {/* Hex shield */}
        <path d="M60 16 L90 30 L90 60 Q90 80 60 90 Q30 80 30 60 L30 30 Z"
          fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth={S.thick} strokeOpacity="0.6" />
        <path d="M60 16 L90 30 L90 60 Q90 80 60 90 Q30 80 30 60 L30 30 Z"
          stroke="currentColor" strokeWidth={S.thin} strokeOpacity="0.8" fill="none" filter="url(#glow)" />
        
        {/* Infinity or stable pulse line inside */}
        <path d="M42 54 L52 54 L58 44 L66 64 L72 54 L80 54" stroke="currentColor" strokeWidth={S.thick} strokeOpacity="0.9" fill="none" strokeLinejoin="round" filter="url(#glow)"/>
        <circle cx="42" cy="54" r="2" fill="currentColor"/>
        <circle cx="80" cy="54" r="2" fill="currentColor"/>
      </g>
    </svg>
  );
}

export function IllustrationImpact() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-orange-600">
      <PremiumDefs />
      
      {/* Background grid */}
      <g stroke="currentColor" strokeOpacity="0.1" strokeWidth={S.thin}>
        {[...Array(4)].map((_, i) => <line key={`h${i}`} x1="16" y1={20 + i*20} x2="104" y2={20 + i*20} />)}
        {[...Array(5)].map((_, i) => <line key={`v${i}`} x1={20 + i*20} y1="16" x2={20 + i*20} y2="84" />)}
      </g>

      <g className="anim-float">
        {/* Glow Area */}
        <path d="M20 70 L40 50 L60 55 L80 30 L100 20 L100 80 L20 80 Z" fill="currentColor" fillOpacity="0.1" />
        
        {/* Trend line */}
        <polyline points="20,70 40,50 60,55 80,30 100,20"
          stroke="currentColor" strokeWidth={S.thick} strokeOpacity="0.9" fill="none" strokeLinejoin="round" filter="url(#glow)"/>
        
        {/* Data points */}
        {[[40,50], [60,55], [80,30], [100,20]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={3} fill="#111" stroke="currentColor" strokeWidth={S.mid} filter="url(#glow)" className="anim-pulse"/>
        ))}
      </g>
    </svg>
  );
}

export function IllustrationIntelligentAgents() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-indigo-500">
      <PremiumDefs />
      
      <circle cx="160" cy="100" r="120" fill="currentColor" fillOpacity="0.02" filter="url(#glow-soft)" />
      
      {/* Waveforms / Context Lines */}
      <g stroke="currentColor" strokeOpacity="0.2" strokeWidth={S.mid} fill="none" className="anim-pulse">
        <path d="M40 100 Q100 60 160 100 T280 100" />
        <path d="M40 100 Q100 140 160 100 T280 100" />
      </g>

      <g className="anim-float">
        {/* Multi-Agent Core */}
        <circle cx="160" cy="100" r="32" fill="#111" stroke="currentColor" strokeWidth={S.thick} strokeOpacity="0.8" filter="url(#glow)"/>
        <path d="M148 94 Q160 84 172 94 Q180 102 172 110 Q160 120 148 110 Q140 102 148 94Z"
          stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.6" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="160" cy="102" r="6" fill="currentColor" fillOpacity="0.9" filter="url(#glow)" className="anim-pulse"/>
        
        {/* Sub-agents orbiting */}
        {[0, 60, 120, 180, 240, 300].map((deg,i) => {
          const rad = deg * Math.PI / 180;
          const cx = 160 + 64 * Math.cos(rad);
          const cy = 100 + 64 * Math.sin(rad);
          return (
            <g key={i}>
              <line x1={160 + 32*Math.cos(rad)} y1={100 + 32*Math.sin(rad)} x2={cx} y2={cy} stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.3" className="anim-dash"/>
              <circle cx={cx} cy={cy} r="12" fill="#111" stroke="currentColor" strokeWidth={S.mid} strokeOpacity="0.6"/>
              <circle cx={cx} cy={cy} r="4" fill="currentColor" fillOpacity="0.8" filter="url(#glow)" className="anim-pulse"/>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function IllustrationResearchNodes() {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-slate-400">
       <PremiumDefs />
       <g className="anim-float">
         <line x1="20" y1="20" x2="100" y2="80" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" className="anim-dash" />
         <line x1="20" y1="80" x2="100" y2="20" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" className="anim-dash" />
         <circle cx="60" cy="50" r="14" fill="#111" stroke="currentColor" strokeOpacity="0.6" strokeWidth={S.mid} filter="url(#glow)" />
         <circle cx="60" cy="50" r="4" fill="currentColor" filter="url(#glow)" className="anim-pulse"/>
         
         {[[20,20], [100,80], [20,80], [100,20]].map(([x,y],i) => (
           <circle key={i} cx={x} cy={y} r="6" fill="#111" stroke="currentColor" strokeOpacity="0.8" strokeWidth={S.mid} />
         ))}
       </g>
    </svg>
  );
}

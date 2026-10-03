import React from 'react';
import { motion } from 'framer-motion';

const pulse = {
  animate: { opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] },
  transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
};

const dash = {
  animate: { strokeDashoffset: [40, 0] },
  transition: { duration: 1.5, repeat: Infinity, ease: 'linear' }
};

const float = (delay = 0) => ({
  animate: { y: [0, -4, 0] },
  transition: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay }
});

/* ── Shared defs ── */
export const GridBg = ({ id = 'gp' }) => (
  <>
    <defs>
      <pattern id={id} width="16" height="16" patternUnits="userSpaceOnUse">
        <circle cx="0" cy="0" r="0.8" fill="#14110F" fillOpacity="0.10" />
      </pattern>
      <radialGradient id="glow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--global-accent)" stopOpacity="0.18" />
        <stop offset="100%" stopColor="var(--global-accent)" stopOpacity="0" />
      </radialGradient>
      <filter id="blur4">
        <feGaussianBlur stdDeviation="4" />
      </filter>
    </defs>
    <rect width="200" height="100" fill={`url(#${id})`} />
    <rect width="200" height="100" fill="url(#glow)" />
  </>
);

export const Motifs = [
  /* 0 — AI Voice Agents: waveform / voice rings */
  () => (
    <g transform="translate(100, 50)">
      {/* glow blob */}
      <circle cx="0" cy="0" r="38" fill="var(--global-accent)" opacity="0.07" filter="url(#blur4)" />

      {/* outer rings */}
      {[44, 32, 22].map((r, i) => (
        <motion.circle
          key={r} cx="0" cy="0" r={r}
          fill="none" stroke="var(--global-accent)"
          strokeWidth={i === 0 ? 0.8 : i === 1 ? 1 : 1.2}
          strokeOpacity={0.3 - i * 0.05}
          animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
        />
      ))}

      {/* waveform bars */}
      {[-28,-20,-12,-4,4,12,20,28].map((x, i) => {
        const h = [8, 18, 28, 36, 36, 28, 18, 8][i];
        return (
          <motion.rect
            key={x} x={x - 2.5} y={-h / 2} width="5" height={h}
            rx="2.5"
            fill="var(--global-accent)"
            fillOpacity={i === 3 || i === 4 ? 0.9 : 0.45}
            animate={{ scaleY: [1, 1.4, 0.7, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1, ease: 'easeInOut' }}
          />
        );
      })}

      {/* Logo acts as centre dot now */}

      <text x="-16" y="52" fontSize="5.5" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.7" letterSpacing="2">VOICE AI</text>
    </g>
  ),

  /* 1 — WhatsApp Business: chat bubbles + connectivity */
  () => (
    <g>
      {/* glow */}
      <circle cx="100" cy="50" r="42" fill="var(--global-accent)" opacity="0.08" filter="url(#blur4)" />

      {/* left bubble */}
      <motion.g {...float(0)}>
        <rect x="22" y="22" width="64" height="24" rx="8" fill="#fff" fillOpacity="0.92" />
        <rect x="22" y="22" width="64" height="24" rx="8" fill="var(--global-accent)" fillOpacity="0.12" stroke="var(--global-accent)" strokeWidth="1" strokeOpacity="0.4" />
        <rect x="30" y="31" width="20" height="4" rx="2" fill="#14110F" fillOpacity="0.25" />
        <rect x="54" y="31" width="24" height="4" rx="2" fill="#14110F" fillOpacity="0.15" />
        {/* tail */}
        <path d="M30,46 L22,52 L36,46Z" fill="#fff" fillOpacity="0.92" />
      </motion.g>

      {/* right bubble */}
      <motion.g {...float(0.6)}>
        <rect x="114" y="42" width="64" height="24" rx="8" fill="var(--global-accent)" fillOpacity="0.85" />
        <rect x="122" y="51" width="24" height="4" rx="2" fill="#fff" fillOpacity="0.5" />
        <rect x="150" y="51" width="18" height="4" rx="2" fill="#fff" fillOpacity="0.3" />
        {/* tail */}
        <path d="M168,66 L178,72 L164,66Z" fill="var(--global-accent)" fillOpacity="0.85" />
      </motion.g>

      {/* animated dashed connector */}
      <motion.line
        x1="88" y1="46" x2="114" y2="54"
        stroke="var(--global-accent)" strokeWidth="1.2"
        strokeDasharray="4 4" strokeDashoffset="0"
        animate={{ strokeDashoffset: [0, -16] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
      />

      {/* Logo acts as pulse dot centre now */}

      <text x="72" y="90" fontSize="5.5" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.7" letterSpacing="2">WHATSAPP AI</text>
    </g>
  ),

  /* 2 — Telephony: circuit + phone signal */
  () => (
    <g transform="translate(18, 12)">
      {/* glow */}
      <circle cx="82" cy="40" r="38" fill="var(--global-accent)" opacity="0.08" filter="url(#blur4)" />

      {/* circuit horizontal rail */}
      <line x1="0" y1="38" x2="164" y2="38" stroke="#14110F" strokeOpacity="0.15" strokeWidth="1" />

      {/* nodes */}
      {[0, 40, 124, 164].map((x, i) => (
        <g key={x}>
          <circle cx={x} cy="38" r={4} fill="#fff" fillOpacity="0.7"
            stroke="var(--global-accent)" strokeWidth={1} strokeOpacity={0.4} />
        </g>
      ))}

      {/* vertical branches */}
      {[40, 124].map((x, i) => (
        <g key={x}>
          <line x1={x} y1="38" x2={x} y2={i === 0 ? 16 : 60} stroke="#14110F" strokeOpacity="0.2" strokeWidth="1" />
          <rect x={x - 8} y={i === 0 ? 8 : 60} width="16" height="10" rx="3"
            fill="var(--global-accent)" fillOpacity="0.15" stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.5" />
        </g>
      ))}

      {/* signal bars at centre */}
      {[0, 1, 2, 3].map(i => (
        <motion.rect key={i} x={86 + i * 7} y={30 - i * 4} width="5" height={8 + i * 4}
          rx="1.5" fill="var(--global-accent)"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      {/* animated data packet */}
      <motion.circle cx="0" cy="38" r="3" fill="var(--global-accent)"
        animate={{ cx: [0, 164] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />

      <text x="52" y="82" fontSize="5.5" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.7" letterSpacing="2">TELEPHONY</text>
    </g>
  ),

  /* 3 — QMS: quality gauge + score ring */
  () => (
    <g transform="translate(100, 52)">
      {/* glow */}
      <circle cx="0" cy="0" r="40" fill="var(--global-accent)" opacity="0.08" filter="url(#blur4)" />

      {/* outer gauge track */}
      <path d="M-35,0 A35,35 0 1,1 35,0" fill="none" stroke="#14110F" strokeOpacity="0.12" strokeWidth="6" strokeLinecap="round" />
      {/* gauge fill */}
      <motion.path d="M-35,0 A35,35 0 1,1 35,0" fill="none" stroke="var(--global-accent)"
        strokeWidth="6" strokeLinecap="round"
        strokeDasharray="110" strokeDashoffset="110"
        animate={{ strokeDashoffset: [110, 18] }}
        transition={{ duration: 2, delay: 0.5, ease: 'easeOut', repeat: Infinity, repeatDelay: 2 }}
      />

      {/* inner ring & text removed for Logo space */}

      {/* tick marks */}
      {Array.from({ length: 9 }).map((_, i) => {
        const angle = -180 + i * 22.5;
        const rad = angle * Math.PI / 180;
        return (
          <line key={i}
            x1={Math.cos(rad) * 28} y1={Math.sin(rad) * 28}
            x2={Math.cos(rad) * 34} y2={Math.sin(rad) * 34}
            stroke="#14110F" strokeOpacity={0.2} strokeWidth="1"
          />
        );
      })}

      {/* needle removed to clean up around logo */}
      {/* needle pivot removed for Logo space */}

      <text x="-12" y="48" fontSize="5.5" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.7" letterSpacing="2">QMS AI</text>
    </g>
  ),

  /* 4 — Customer Engagement: orbit / omnichannel */
  () => (
    <g transform="translate(100, 50)">
      {/* glow */}
      <circle cx="0" cy="0" r="40" fill="var(--global-accent)" opacity="0.08" filter="url(#blur4)" />

      {/* orbit tracks */}
      {[36, 24].map((r, i) => (
        <circle key={r} cx="0" cy="0" r={r} fill="none"
          stroke="#14110F" strokeOpacity={0.1 + i * 0.05} strokeWidth="1" strokeDasharray="3 4" />
      ))}

      {/* orbiting dots */}
      {[{ r: 36, dur: 5, color: 'var(--global-accent)', delay: 0 },
        { r: 36, dur: 5, color: '#fff', delay: 2.5, opacity: 0.6 },
        { r: 24, dur: 3.5, color: 'var(--global-accent)', delay: 1 }].map(({ r, dur, color, delay, opacity = 1 }, i) => (
        <motion.circle key={i} cx={r} cy="0" r="3.5" fill={color} fillOpacity={opacity}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: dur, repeat: Infinity, ease: 'linear', delay }}
          style={{ originX: '0px', originY: '0px', transformBox: 'fill-box' }}
        />
      ))}

      {/* channel icons: tiny squares */}
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = deg * Math.PI / 180;
        const labels = ['WA', 'SMS', 'MAIL', 'VOICE', 'CRM'];
        return (
          <g key={deg}>
            <rect x={Math.cos(rad) * 48 - 7} y={Math.sin(rad) * 48 - 7} width="14" height="14" rx="3"
              fill="var(--global-accent)" fillOpacity="0.15"
              stroke="var(--global-accent)" strokeWidth="0.8" strokeOpacity="0.5" />
            <text
              x={Math.cos(rad) * 48} y={Math.sin(rad) * 48 + 2.5}
              fontSize="4" fontFamily="monospace" fill="var(--global-accent)" fillOpacity="0.8"
              textAnchor="middle"
            >{labels[i]}</text>
          </g>
        );
      })}

      {/* core replaced by Logo */}
    </g>
  ),
];

import React from 'react';
import { motion } from 'framer-motion';

export const GridBg = () => (
  <>
    <defs>
      <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#14110F" strokeWidth="1" strokeOpacity="0.06" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="200" height="100" fill="url(#gridPattern)" />
  </>
);

export const Motifs = [
  ({ hoverAccent }) => (
    <g transform="translate(40, 20)">
      {[20, 40, 60].map(y => [10,30,50,70].map(y2 => <line key={`${y}-${y2}`} x1="0" y1={y} x2="60" y2={y2} stroke="#14110F" strokeOpacity="0.25" strokeWidth="1.5" />))}
      {[10,30,50,70].map(y => <line key={`2-${y}`} x1="60" y1={y} x2="120" y2="40" stroke="#14110F" strokeOpacity="0.25" strokeWidth="1.5" />)}
      {[20, 40, 60].map(y => <circle key={`c1-${y}`} cx="0" cy={y} r="3" fill="#14110F" fillOpacity="0.8" />)}
      {[10,30,50,70].map(y => <circle key={`c2-${y}`} cx="60" cy={y} r="3" fill="#14110F" fillOpacity="0.8" />)}
      <motion.circle variants={hoverAccent} cx="120" cy="40" r="4.5" fill="var(--global-accent)" />
      <text x="-15" y="42" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">IN</text>
      <text x="132" y="42" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">OUT</text>
    </g>
  ),
  ({ hoverAccent }) => (
    <g transform="translate(100, 20)">
      <path d="M0,0 L-40,25 M0,0 L40,25 M-40,25 L-60,50 M-40,25 L-20,50 M40,25 L20,50" stroke="#14110F" strokeOpacity="0.75" strokeWidth="1.5" />
      <path d="M40,25 L60,50" stroke="var(--global-accent)" strokeWidth="1.5" />
      <rect x="-4" y="-4" width="8" height="8" fill="#14110F" fillOpacity="0.85" />
      <rect x="-44" y="21" width="8" height="8" fill="#14110F" fillOpacity="0.85" />
      <rect x="36" y="21" width="8" height="8" fill="#14110F" fillOpacity="0.85" />
      <circle cx="-60" cy="50" r="3" fill="#14110F" fillOpacity="0.85" />
      <circle cx="-20" cy="50" r="3" fill="#14110F" fillOpacity="0.85" />
      <circle cx="20" cy="50" r="3" fill="#14110F" fillOpacity="0.85" />
      <motion.circle variants={hoverAccent} cx="60" cy="50" r="4.5" fill="var(--global-accent)" />
      <text x="15" y="15" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">P=0.9</text>
    </g>
  ),
  ({ hoverAccent }) => (
    <g transform="translate(40, 80)">
      <line x1="0" y1="0" x2="120" y2="0" stroke="#14110F" strokeOpacity="0.75" strokeWidth="1.5" />
      <line x1="0" y1="0" x2="0" y2="-60" stroke="#14110F" strokeOpacity="0.75" strokeWidth="1.5" />
      <path d="M0,0 L30,-15 L60,-10 L90,-35 L120,-20" stroke="#14110F" strokeOpacity="0.3" strokeWidth="1.5" fill="none" strokeDasharray="2 3"/>
      <path d="M0,0 L30,-5 L60,-25 L90,-15 L120,-45" stroke="#14110F" strokeOpacity="0.85" strokeWidth="1.5" fill="none" />
      <line x1="120" y1="0" x2="120" y2="-45" stroke="var(--global-accent)" strokeWidth="1.5" strokeOpacity="0.5" strokeDasharray="2 2" />
      <motion.circle variants={hoverAccent} cx="120" cy="-45" r="4.5" fill="var(--global-accent)" />
      {[30,60,90,120].map(x => <line key={x} x1={x} y1="0" x2={x} y2="3" stroke="#14110F" strokeOpacity="0.75" strokeWidth="1" />)}
      <text x="115" y="12" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">t4</text>
      <text x="-18" y="-55" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">100</text>
    </g>
  ),
  ({ hoverAccent }) => (
    <g transform="translate(40, 80)">
      <line x1="0" y1="0" x2="120" y2="0" stroke="#14110F" strokeOpacity="0.75" strokeWidth="1.5" />
      {[10, 40, 70, 100].map(x => (
        x === 70 
        ? <motion.rect variants={hoverAccent} key={x} x={x} y="-45" width="14" height="45" fill="var(--global-accent)" />
        : <rect key={x} x={x} y={x === 10 ? "-15" : x === 40 ? "-30" : "-20"} width="14" height={x === 10 ? "15" : x === 40 ? "30" : "20"} fill="#14110F" fillOpacity="0.12" stroke="#14110F" strokeOpacity="0.8" strokeWidth="1.5" />
      ))}
      <text x="70" y="-52" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">99.9%</text>
    </g>
  ),
  ({ hoverAccent }) => (
    <g transform="translate(100, 50)">
      <circle cx="0" cy="0" r="20" stroke="#14110F" strokeOpacity="0.2" strokeWidth="1.5" fill="none" />
      <circle cx="0" cy="0" r="35" stroke="#14110F" strokeOpacity="0.2" strokeWidth="1.5" fill="none" />
      {[0, 60, 120, 180, 240, 300].map(deg => {
        const rad = deg * Math.PI / 180;
        return (
          <g key={deg}>
            <line x1="0" y1="0" x2={Math.cos(rad) * 35} y2={Math.sin(rad) * 35} stroke="#14110F" strokeOpacity="0.4" strokeWidth="1.5" />
            <circle cx={Math.cos(rad) * 20} cy={Math.sin(rad) * 20} r="2" fill="#14110F" fillOpacity="0.85" />
            <circle cx={Math.cos(rad) * 35} cy={Math.sin(rad) * 35} r="2.5" fill="#14110F" fillOpacity="0.85" />
          </g>
        );
      })}
      <motion.circle variants={hoverAccent} cx="0" cy="0" r="5" fill="var(--global-accent)" />
      <text x="10" y="10" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">CORE</text>
    </g>
  ),
  ({ hoverAccent }) => (
    <g transform="translate(35, 50)">
      <rect x="0" y="-12" width="24" height="24" fill="none" stroke="#14110F" strokeOpacity="0.8" strokeWidth="1.5" />
      <line x1="24" y1="0" x2="40" y2="0" stroke="#14110F" strokeOpacity="0.8" strokeWidth="1.5" />
      <rect x="40" y="-12" width="24" height="24" fill="none" stroke="#14110F" strokeOpacity="0.8" strokeWidth="1.5" />
      <line x1="64" y1="0" x2="80" y2="0" stroke="#14110F" strokeOpacity="0.8" strokeWidth="1.5" />
      <line x1="52" y1="-12" x2="52" y2="-25" stroke="#14110F" strokeOpacity="0.8" strokeWidth="1.5" />
      <line x1="52" y1="-25" x2="80" y2="-25" stroke="#14110F" strokeOpacity="0.8" strokeWidth="1.5" />
      
      <rect x="80" y="-37" width="24" height="24" fill="none" stroke="#14110F" strokeOpacity="0.8" strokeWidth="1.5" />
      <motion.rect variants={hoverAccent} x="80" y="-12" width="24" height="24" fill="color-mix(in srgb, var(--global-accent) 12%, transparent)" stroke="var(--global-accent)" strokeWidth="1.5" />
      
      <text x="83" y="20" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">ACTION</text>
    </g>
  ),
  ({ hoverAccent }) => (
    <g transform="translate(30, 50)">
      <line x1="0" y1="0" x2="140" y2="0" stroke="#14110F" strokeOpacity="0.3" strokeWidth="1.5" />
      {[8, 12, 6, 20, 25, 12, 6, 10, 35, 16, 8, 4].map((h, i) => (
        i === 8
        ? <motion.rect variants={hoverAccent} key={i} x={i * 11} y={-h} width="6" height={h*2} fill="var(--global-accent)" />
        : <rect key={i} x={i * 11} y={-h} width="6" height={h*2} fill="#14110F" fillOpacity="0.8" />
      ))}
      <text x="80" y="30" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">fq: max</text>
    </g>
  ),
  ({ hoverAccent }) => (
    <g transform="translate(100, 35)">
      <path d="M0,30 L-35,45 L0,60 L35,45 Z" fill="none" stroke="#14110F" strokeOpacity="0.75" strokeWidth="1.5" />
      <path d="M0,15 L-35,30 L0,45 L35,30 Z" fill="none" stroke="#14110F" strokeOpacity="0.75" strokeWidth="1.5" />
      <motion.path variants={hoverAccent} d="M0,0 L-35,15 L0,30 L35,15 Z" fill="color-mix(in srgb, var(--global-accent) 12%, transparent)" stroke="var(--global-accent)" strokeWidth="1.5" />
      
      <line x1="0" y1="15" x2="0" y2="60" stroke="#14110F" strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="0" cy="30" r="2" fill="#14110F" />
      <circle cx="0" cy="45" r="2" fill="#14110F" />
      <motion.circle variants={hoverAccent} cx="0" cy="15" r="3" fill="var(--global-accent)" />
      
      <text x="42" y="18" fontSize="6" fontFamily="monospace" fill="#14110F" fillOpacity="0.5">L3</text>
    </g>
  )
];

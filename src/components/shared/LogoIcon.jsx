import React from 'react';

export function LogoIcon({ size = 28, color1 = "#111", color2 = "#111", className = "" }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 48 48" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12 20 L22 30 L32 20" 
        stroke={color1} 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16 28 L26 18 L36 28" 
        stroke={color2} 
        strokeWidth="8" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
}

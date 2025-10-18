import React from 'react';

type IconProps = { className?: string; strokeWidth?: number };

export const ShieldCheck = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3l7 3v5c0 4.5-2.9 8.6-7 10-4.1-1.4-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Radar = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M12 12l6-6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const FileLock = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M7 3h7l4 4v5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
    <path d="M7 3v18h6" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="14" y="14" width="6" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M16 14v-1.2a2 2 0 1 1 4 0V14" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const Firewall = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 6h16M4 12h16M10 18h10M4 18h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export const Lock = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const AppBlock = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M16 15l4 4m0-4l-4 4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export const Patch = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 3h8l5 5v8l-5 5H8l-5-5V8l5-5z" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export const VPN = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M8.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0z" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const UserShield = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <path d="M18 7l3 1.5V12c0 3-1.9 5.7-3 6.5-1.1-.8-3-3.5-3-6.5V8.5L18 7z" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const Dot = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className}>
    <circle cx="12" cy="12" r="5" fill="currentColor" />
  </svg>
);

export const Server = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="3" width="16" height="6" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="4" y="15" width="16" height="6" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="8" cy="6" r="1" fill="currentColor" />
    <circle cx="8" cy="18" r="1" fill="currentColor" />
  </svg>
);

export const Agent = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M8 20h8" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export const Report = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M7 3h7l4 4v14H7z" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M14 3v4h4" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export const CheckCircle = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const BarChart = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 20h16" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="6" y="10" width="3" height="8" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="11" y="6" width="3" height="12" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="16" y="12" width="3" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const Bolt = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
  </svg>
);

export const Usb = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3v12m0 0l-2-2m2 2l2-2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    <rect x="10" y="15" width="4" height="6" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const Mail = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth={strokeWidth} strokeLinejoin="round" />
  </svg>
);

export const Globe = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export const Key = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="8" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M12 12h9m-4 0v3m-2-3v2" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
  </svg>
);

export const Mobile = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export const Cloud = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11-2A4 4 0 0 0 7 18z" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const Database = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

export const ShieldLock = ({ className, strokeWidth = 1.8 }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 3l7 3v6c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect x="9" y="10" width="6" height="5" rx="1" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M11 10V9a2 2 0 1 1 4 0v1" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

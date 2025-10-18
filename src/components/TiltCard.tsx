import React, { useRef } from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
  maxTilt?: number; // degrees
  glare?: boolean;
}>;

export default function TiltCard({ className, children, maxTilt = 10, glare = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * maxTilt * -2; // invert for natural feel
    const ry = (px - 0.5) * maxTilt * 2;
    el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    if (glare) {
      const glow = el.querySelector('.tilt-glare') as HTMLDivElement | null;
      if (glow) {
        glow.style.background = `radial-gradient(600px 200px at ${px * 100}% ${py * 100}%, rgba(255,255,255,0.12), transparent 60%)`;
      }
    }
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{ transition: 'transform 200ms ease' }}
    >
      {glare && <div className="tilt-glare pointer-events-none absolute inset-0 rounded-2xl" />}
      {children}
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';

type Props = {
  from?: number;
  to: number;
  duration?: number; // ms
  decimals?: number;
  className?: string;
};

export default function CountUp({ from = 0, to, duration = 1200, decimals = 0, className }: Props) {
  const [val, setVal] = useState(from);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let raf = 0;
    const d = Math.max(200, duration);
    function step(ts: number) {
      if (start.current === null) start.current = ts;
      const p = Math.min(1, (ts - start.current) / d);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(from + (to - from) * ease);
      if (p < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration]);

  return <span className={className}>{val.toFixed(decimals)}</span>;
}

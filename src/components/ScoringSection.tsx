import { useEffect, useState } from 'react';
import CountUp from '@/components/CountUp';
import ProgressRing from '@/components/ProgressRing';

export default function ScoringSection() {
  const [score, setScore] = useState(62);
  useEffect(() => {
    const t = setTimeout(() => setScore(86), 600);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Resilience score — quantified readiness</h2>
          <p className="mt-4 text-slate-300">
            Weighted across 16 categories, the score translates complex control posture into a single number leaders
            can act on. Drill into category-level passes, fails, and misconfigurations with clear remediation steps.
          </p>
        </div>
        <div className="glass rounded-2xl p-8 border border-white/10 grid md:grid-cols-2 gap-6 items-center">
          <div className="flex items-center gap-6">
            <div className="relative">
              <ProgressRing value={score} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-3xl font-bold text-white"><CountUp from={62} to={score} duration={900} /></div>
              </div>
            </div>
            <div>
              <div className="text-slate-300 text-sm">Current Endpoint</div>
              <div className="text-emerald-400 mt-1">+24 after fixes</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {['AV/EDR', 'DLP', 'Firewall', 'Encryption', 'VPN', 'Patching'].map((k) => (
              <div key={k} className="rounded-lg bg-slate-900/60 border border-white/10 px-3 py-2 text-slate-200 relative overflow-hidden">
                <span className="relative z-10">{k}</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent bg-[length:200%_100%] animate-shimmer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

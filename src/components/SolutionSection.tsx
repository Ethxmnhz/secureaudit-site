export default function SolutionSection() {
  return (
    <section id="solution" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Behavioral validation across 16 controls</h2>
            <p className="mt-4 text-slate-300">
              SecureAudit confirms protection is actively enforced. From EICAR for AV/EDR to DLP, Firewall, VPN, and
              BitLocker checks, we score endpoint resilience and pinpoint misconfigurations in plain English.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ['Tool Presence', 'Detects agents, services, drivers'],
              ['Behavioral Tests', 'Safe triggers validate enforcement'],
              ['Resilience Score', 'Weighted across 16 categories'],
              ['Remediation', 'Clear fixes and hardening tips'],
            ].map(([title, desc]) => (
              <div key={title} className="relative">
                <div className="absolute inset-0 rounded-xl translate-y-1 bg-brand-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="group glass rounded-xl p-5 border border-white/10 hover:-translate-y-1 transition-transform will-change-transform">
                  <div className="text-brand-300 text-sm">{title}</div>
                  <div className="text-slate-200 font-medium mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

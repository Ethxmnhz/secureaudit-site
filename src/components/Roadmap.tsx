import SectionHeader from '@/components/common/SectionHeader';

export default function Roadmap() {
  const items = [
    ['Q4', 'Presence detection for 16 categories'],
    ['Q1', 'Behavioral validation suite (AV/EDR/DLP/Firewall/VPN)'],
    ['Q2', 'Scoring engine + remediation automation'],
    ['Q3', 'Full reporting (HTML/JSON/PDF) + SIEM/GRC integrations'],
  ];
  return (
    <section id="roadmap" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What’s next"
          title="Roadmap to category leadership"
          align="center"
        />
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="relative pl-8">
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-white/10" />
            {items.map(([q, desc], i) => (
              <div key={q} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-brand-400 shadow-glow" />
                <div className="glass rounded-xl p-5 border border-white/10">
                  <div className="text-brand-300 text-sm">{q}</div>
                  <div className="text-slate-200 mt-1">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

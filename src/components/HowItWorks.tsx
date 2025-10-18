import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';
import { Agent, Server, Report } from '@/components/icons';

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How it works"
          title="Agent collects → Server scores → Report proves"
          subtitle="Behavioral validation pipeline, end-to-end."
          align="center"
        />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            [<Agent className="h-6 w-6 text-brand-300" />, 'Endpoint Agent', 'Collects system info, detects tools, runs safe tests'],
            [<Server className="h-6 w-6 text-brand-300" />, 'SecureAudit Server', 'Normalizes, scores, correlates, recommends fixes'],
            [<Report className="h-6 w-6 text-brand-300" />, 'Reports & Integrations', 'HTML/PDF + JSON for SIEM/GRC; alerts and dashboards'],
          ].map(([icon, title, desc], i) => (
            <Reveal key={i} delay={0.05 * i}>
              <div className="glass rounded-xl p-6 border border-white/10 flex items-start gap-4">
                <div className="shrink-0 h-10 w-10 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center">{icon as React.ReactNode}</div>
                <div>
                  <div className="text-brand-300 text-sm">{title as string}</div>
                  <div className="text-slate-200 mt-1">{desc as string}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

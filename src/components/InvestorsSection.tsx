import SectionHeader from '@/components/common/SectionHeader';
import { CheckCircle, BarChart, Bolt } from '@/components/icons';

export default function InvestorsSection() {
  return (
    <section id="investors" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader
              eyebrow="Why invest"
              title="Category-defining: endpoint resilience validation"
              subtitle="We validate defenders, not just emulate attackers. Proof of protection is the missing layer."
            />
            <ul className="mt-6 space-y-3 text-slate-200">
              <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-emerald-400" /> 16 control categories — unmatched breadth</li>
              <li className="flex items-center gap-3"><Bolt className="h-5 w-5 text-brand-300" /> Real behavioral tests — product moat</li>
              <li className="flex items-center gap-3"><BarChart className="h-5 w-5 text-brand-300" /> JSON + HTML/PDF — platform-ready integrations</li>
              <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-emerald-400" /> Score + remediation — complete value loop</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Pipeline', '$1.2M ARR potential'],
                ['Pilot LoIs', '5 enterprise pilots'],
                ['Pricing', '$25/endpoint/mo'],
                ['Go-to-Market', 'MSSP + Direct'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-slate-900/60 border border-white/10 p-4">
                  <div className="text-slate-400 text-xs">{k}</div>
                  <div className="text-white font-medium">{v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Current allocation</span>
                <span>70% filled</span>
              </div>
              <div className="h-2 rounded-full bg-slate-800 overflow-hidden border border-white/10">
                <div className="h-full bg-brand-500" style={{ width: '70%' }} />
              </div>
            </div>
            <a href="#cta" className="mt-4 inline-flex items-center justify-center w-full rounded-lg bg-brand-500 hover:bg-brand-400 text-white py-3 font-medium">Request Investor Deck</a>
            <p className="mt-3 text-center text-xs text-slate-400">Limited allocation in the current round.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

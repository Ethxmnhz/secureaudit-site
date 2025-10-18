import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="The gap"
          title="Paper compliance ≠ real protection"
          subtitle="Traditional audits confirm presence, not protection. We prove controls actually enforce."
        />
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
          {[
            'Agents installed but not enforcing',
            'Updates applied, controls misconfigured',
            'No behavioral proof of protection',
            'Incomplete coverage across key categories',
          ].map((item, i) => (
            <Reveal key={item} delay={0.05 * i}>
              <div className="glass rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-rose-400"></div>
                  <p className="text-slate-200">{item}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { EDGE_POINTS } from '@/content/constants';

export default function CompetitiveEdge() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">What others miss — our edge</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {EDGE_POINTS.map((p) => (
            <div key={p.title} className="glass rounded-xl p-6 border border-white/10 hover:-translate-y-0.5 transition-transform">
              <div className="text-slate-300 text-sm">{p.title}</div>
              <div className="mt-2 text-rose-300 text-sm">{p.miss}</div>
              <div className="mt-1 text-white font-medium">{p.ourEdge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

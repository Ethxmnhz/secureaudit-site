export default function CTASection() {
  return (
    <section id="cta" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 glass">Private Beta</div>
        <h2 className="text-3xl md:text-4xl font-semibold">Own the proof of protection</h2>
        <p className="mt-3 text-slate-300">Join the private beta and get investor access. Be first to define endpoint resilience.</p>
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <a href="mailto:founders@secureaudit.io?subject=Early%20Access" className="px-6 py-4 rounded-lg bg-white text-slate-900 font-medium">Request Early Access</a>
          <a href="mailto:shaikhminhaz1975@gmail.com?subject=Investor%20Deck" className="px-6 py-4 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium gradient-border">Request Investor Deck</a>
        </div>
        <p className="mt-3 text-xs text-slate-400">We’re reserving a small allocation for strategic investors this quarter.</p>
      </div>
    </section>
  );
}

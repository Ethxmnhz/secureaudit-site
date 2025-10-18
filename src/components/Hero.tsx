import { motion } from 'framer-motion';
import { CATEGORIES } from '@/content/constants';
import { ShieldCheck, Radar, FileLock, Firewall as FirewallIcon, Lock, AppBlock, Patch, VPN as VPNIcon, UserShield } from '@/components/icons';
import TiltCard from '@/components/TiltCard';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="beam"></div>
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 glass">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Private Beta — Investor Preview
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              <span className="text-gradient">Validate endpoint defenses</span>
              <br /> not just checkboxes
            </h1>
            <p className="mt-5 text-slate-300 text-lg">
              SecureAudit runs safe behavioral tests across 16 control categories to prove your
              AV, EDR, DLP, Firewall, and more actually enforce protection. Stop assuming. Start validating.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#cta" className="px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-400 text-white font-medium shadow-glow">Request Early Access</a>
              <a href="#investors" className="px-6 py-3 rounded-lg border border-white/10 text-white glass">View Investor Highlights</a>
            </div>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <TiltCard className="relative aspect-[4/3] rounded-2xl glass border border-white/10 p-6 overflow-hidden gradient-border">
              <div className="grid grid-cols-3 gap-3">
                {[ 
                  [<ShieldCheck className="h-6 w-6 text-brand-300" />, CATEGORIES[0]],
                  [<Radar className="h-6 w-6 text-brand-300" />, CATEGORIES[1]],
                  [<FileLock className="h-6 w-6 text-brand-300" />, CATEGORIES[2]],
                  [<FirewallIcon className="h-6 w-6 text-brand-300" />, CATEGORIES[3]],
                  [<Lock className="h-6 w-6 text-brand-300" />, CATEGORIES[4]],
                  [<AppBlock className="h-6 w-6 text-brand-300" />, CATEGORIES[6]],
                  [<Patch className="h-6 w-6 text-brand-300" />, CATEGORIES[7]],
                  [<VPNIcon className="h-6 w-6 text-brand-300" />, CATEGORIES[13]],
                  [<UserShield className="h-6 w-6 text-brand-300" />, CATEGORIES[10]],
                ].map(([icon, label]) => (
                  <div key={label as string} className="h-24 rounded-xl bg-slate-900/60 border border-white/10 flex flex-col items-center justify-center px-2 text-center gap-2 hover:-translate-y-0.5 transition-transform">
                    {icon as React.ReactNode}
                    <div className="text-white font-medium text-xs leading-snug">{label as string}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-slate-300">Presence + Enforcement → Proven Resilience</div>
              <div className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl animate-floaty" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-brand-700/20 blur-3xl animate-floaty" />
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

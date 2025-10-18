import { CATEGORIES } from '@/content/constants';
import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';
import {
  ShieldCheck, Radar, FileLock, Firewall as FirewallIcon, Lock, AppBlock, Patch, VPN as VPNIcon, UserShield,
  Usb, Mail, Globe, Key, Mobile, Cloud, Database, ShieldLock
} from '@/components/icons';

export default function CategoriesGrid() {
  return (
    <section id="categories" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Coverage"
          title="16 control categories — full coverage"
          subtitle="Presence detection + enforcement validation across the controls that matter."
          align="center"
        />
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((c, i) => {
            const ICONS = [
              ShieldCheck, Radar, FileLock, FirewallIcon, Lock, Usb, AppBlock, Patch,
              Mail, Globe, Key, ShieldLock, Mobile, VPNIcon, Cloud, Database,
            ];
            const Icon = ICONS[i] || ShieldCheck;
            // Demo presence/enforcement flags (could be wired from real data later)
            const presence = i % 3 !== 0; // majority true
            const enforcement = i % 4 !== 0; // majority true
            return (
              <Reveal key={c} delay={0.02 * i} className="h-full">
                <div className="glass rounded-xl p-4 border border-white/10 hover:-translate-y-0.5 transition-transform h-full min-h-[128px] flex flex-col">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-slate-900/60 border border-white/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-brand-300" />
                    </div>
                    <div className="flex-1">
                      <div className="text-slate-100 font-medium leading-tight">{c}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] border whitespace-nowrap ${presence ? 'text-emerald-300 border-emerald-500/30 bg-emerald-500/10' : 'text-slate-400 border-white/10 bg-slate-800'}`}>Presence</span>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] border whitespace-nowrap ${enforcement ? 'text-sky-300 border-sky-500/30 bg-sky-500/10' : 'text-slate-400 border-white/10 bg-slate-800'}`}>Enforcement</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

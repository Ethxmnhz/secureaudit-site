export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-brand-500" />
          <span className="text-slate-300 text-sm">© {new Date().getFullYear()} SecureAudit</span>
        </div>
        <div className="text-slate-400 text-sm">Endpoint resilience validation — proof over policy.</div>
      </div>
    </footer>
  );
}

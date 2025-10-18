export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-brand-500 shadow-glow" />
            <span className="font-semibold text-white text-lg tracking-tight">SecureAudit</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-slate-300">
            <a href="#problem" className="hover:text-white">Problem</a>
            <a href="#solution" className="hover:text-white">Solution</a>
            <a href="#categories" className="hover:text-white">Coverage</a>
            <a href="#investors" className="hover:text-white">Investors</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#cta" className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:opacity-90">Request Early Access</a>
          </div>
        </div>
      </div>
    </header>
  );
}

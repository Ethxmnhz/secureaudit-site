type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: Props) {
  return (
    <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : ''}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300 glass">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
    </div>
  );
}

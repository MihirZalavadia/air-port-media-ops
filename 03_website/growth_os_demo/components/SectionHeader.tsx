type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  right?: React.ReactNode;
};

export default function SectionHeader({ eyebrow, title, subtitle, right }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="block w-8 h-[2px] bg-brass" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="section-title text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.08] text-ink">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-[14.5px] text-ink/75 leading-relaxed">{subtitle}</p>
        )}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

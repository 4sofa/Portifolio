interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
        {eyebrow}
      </span>
      <div className="space-y-3">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? <p className="section-copy">{description}</p> : null}
      </div>
    </div>
  );
}


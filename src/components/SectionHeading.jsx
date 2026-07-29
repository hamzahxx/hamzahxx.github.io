export default function SectionHeading({ index, eyebrow, title }) {
  return (
    <div className="mb-12 md:mb-14" data-reveal>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.22em] uppercase text-accent whitespace-nowrap">
          {eyebrow}
        </span>
        <span className="h-px flex-1 bg-rule" aria-hidden="true" />
        <span className="font-mono text-xs text-ash whitespace-nowrap">
          {index} <span className="text-rule">/</span> 05
        </span>
      </div>
      <h2 className="mt-5 font-display font-medium text-4xl md:text-5xl text-bone tracking-tight">
        {title}
      </h2>
    </div>
  );
}

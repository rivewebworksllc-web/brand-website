type Stage = { step: string; title: string; description: string };

export function EngagementRelationship({ stages }: { stages: Stage[] }) {
  return (
    <ol className="relative mt-12 grid gap-7 md:grid-cols-4 md:gap-0">
      <div aria-hidden="true" className="absolute top-3 right-0 left-0 hidden h-px bg-hairline md:block" />
      {stages.map((stage) => (
        <li key={stage.title} className="relative md:pr-8">
          <span aria-hidden="true" className="relative z-10 block h-6 w-6 rounded-full border-[6px] border-surface-alt bg-brand-maroon" />
          <p className="mt-5 font-serif text-2xl font-semibold text-heading">{stage.title}</p>
          <p className="mt-2 text-sm leading-[1.65] text-body">{stage.description}</p>
        </li>
      ))}
    </ol>
  );
}

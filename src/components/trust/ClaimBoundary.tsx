type ClaimSide = {
  label: string;
  statement: string;
  items: readonly string[];
};

export function ClaimBoundary({ supported, withheld }: { supported: ClaimSide; withheld: ClaimSide }) {
  return (
    <div className="mt-14 grid border-y border-hairline lg:grid-cols-12">
      <section aria-labelledby="supported-claims-heading" className="py-12 lg:col-span-7 lg:py-16 lg:pr-16">
        <p className="text-eyebrow text-brand-maroon">Evidence present</p>
        <h3 id="supported-claims-heading" className="mt-5 font-serif text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-heading">
          {supported.label}
        </h3>
        <p className="mt-8 max-w-xl text-lg leading-[1.65] text-body">{supported.statement}</p>
        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {supported.items.map((item) => (
            <li key={item} className="border-l-2 border-brand-maroon pl-4 text-sm font-semibold leading-[1.6] text-heading">
              {item}
            </li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="withheld-claims-heading" className="border-t border-hairline py-12 lg:col-span-5 lg:border-t-0 lg:border-l lg:py-16 lg:pl-14">
        <p className="text-eyebrow text-muted">Evidence absent or approval pending</p>
        <h3 id="withheld-claims-heading" className="mt-5 font-serif text-[clamp(2.7rem,5.5vw,5.5rem)] leading-[0.94] font-semibold tracking-[-0.035em] text-muted">
          {withheld.label}
        </h3>
        <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-body">{withheld.statement}</p>
        <ul className="mt-10 space-y-4">
          {withheld.items.map((item) => (
            <li key={item} className="text-sm leading-[1.65] text-muted">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

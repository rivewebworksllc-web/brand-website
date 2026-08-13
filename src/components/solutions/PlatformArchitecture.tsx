type Domain = {
  name: string;
  detail: string;
};

const domains: Domain[] = [
  { name: "AWS", detail: "Cloud foundations" },
  { name: "Microsoft Azure", detail: "Architecture and modernization" },
  { name: "Microsoft 365", detail: "Security and operations" },
];

export function PlatformArchitecture() {
  return (
    <figure aria-labelledby="platform-architecture-title" className="border-y border-hairline bg-surface-alt">
      <figcaption id="platform-architecture-title" className="sr-only">
        AWS, Microsoft Azure, and Microsoft 365 connect to one shared operating layer.
      </figcaption>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {domains.map((domain, index) => (
          <div
            key={domain.name}
            className={`relative min-h-36 px-6 py-7 md:min-h-48 md:px-8 md:py-9 ${
              index === 0 ? "" : "border-t border-hairline md:border-t-0 md:border-l"
            }`}
          >
            <span className="text-eyebrow text-brand-maroon">0{index + 1}</span>
            <p className="text-h3 mt-5 text-heading">{domain.name}</p>
            <p className="mt-1.5 max-w-52 text-[14px] leading-[1.55] text-body">{domain.detail}</p>
            <span
              aria-hidden="true"
              className="absolute right-6 bottom-0 h-8 w-px bg-brand-maroon md:right-1/2 md:h-10"
            />
          </div>
        ))}
      </div>
      <div className="relative border-t border-hairline px-6 py-8 text-center md:px-10 md:py-10">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 mx-auto h-px w-1/3 bg-brand-maroon" />
        <p className="text-eyebrow text-brand-maroon">One operating discipline</p>
        <p className="text-h3 mt-2 text-heading">Shared controls, evidence, and operations</p>
      </div>
    </figure>
  );
}

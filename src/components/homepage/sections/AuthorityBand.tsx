import { Section } from "@/components/layout/Section";
import type { HomepageContent } from "@/lib/content/homepage";

type AuthorityBandProps = {
  content: HomepageContent["authorityBand"];
};

export function AuthorityBand({ content }: AuthorityBandProps) {
  return (
    <Section as="section" dark aria-labelledby="authority-band-heading" className="border-t border-white/10">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3">
          <h2 id="authority-band-heading" className="text-h2 max-w-lg text-white">
            {content.heading}
          </h2>
          <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {content.principles.map((principle, index) => (
              <div key={principle.title}>
                <dt className="flex items-center gap-2 text-[15px] font-semibold text-white">
                  <span aria-hidden="true" className="text-evidence text-brand-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {principle.title}
                </dt>
                <dd className="mt-1.5 text-[14px] leading-[1.6] text-white/70">
                  {principle.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-2">
          <div
            aria-label="Evidence Pack preview"
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
          >
            <p className="text-eyebrow text-white/50">Evidence Pack™</p>
            <ul className="mt-4 divide-y divide-white/10">
              {content.evidencePreview.map((artifact) => (
                <li key={artifact.id} className="flex items-center justify-between gap-3 py-2.5">
                  <span className="text-[14px] text-white/85">{artifact.title}</span>
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold/70"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

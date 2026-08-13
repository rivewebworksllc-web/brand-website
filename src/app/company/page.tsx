import type { Metadata } from "next";
import Link from "next/link";
import { companyContent } from "@/lib/content/company";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/ui/Reveal";
import { FinalConversion } from "@/components/homepage/FinalConversion";
import { Placeholder } from "@/components/media/Placeholder";

export const metadata: Metadata = {
  title: "Company",
  description:
    "A website, its cloud, and the AI layered on top are one system — built by one accountable, founder-led team.",
  alternates: { canonical: "/company/" },
};

/**
 * RW-PHASE-02, first slice. Interaction identity: "humanises" — a quiet,
 * editorial, mostly-static narrative (deliberately NOT the accent-surface +
 * diagram hero the Solutions page uses, for real visual rhythm variety, not
 * just different copy in the same shell). No team roster: none exists in
 * this repository yet, so that section says so honestly instead of
 * inventing names.
 */
export default function CompanyPage() {
  const { statement, process, proofFootnote, links, finalConversion } = companyContent;

  return (
    <main id="main-content">
      <Section spacing="generous" aria-labelledby="company-statement-heading" className="bg-surface">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">Company</p>
          <h1
            id="company-statement-heading"
            className="text-h1 mt-5 text-balance text-heading"
          >
            {statement.lead}
          </h1>
          <p className="text-hero-lead mt-6 max-w-xl text-body">
            {statement.body}
          </p>
        </div>
      </Section>

      <Section spacing="generous" className="border-t border-hairline-faint bg-surface-alt">
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-[18px] leading-[1.6] font-medium text-heading md:text-[20px]">
              {process}
            </p>
          </div>
          <div className="lg:col-span-5">
            <Placeholder
              meta={{
                id: "RW-COMPANY-WORKSPACE-01",
                category: "workspace-photography",
                purpose: "Founder-led delivery, in practice",
                aspect: "4:3",
                composition: "A real working session, not a stock office",
                mood: "Grounded, unpolished, credible",
                replacement: "Original photography",
                priority: "P1",
                motion: "none",
              }}
            />
          </div>
        </Reveal>
      </Section>

      <Section aria-labelledby="company-team-heading" className="border-t border-hairline-faint bg-surface">
        <h2 id="company-team-heading" className="text-h2 text-heading">
          Who&apos;s behind Rive
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-[1.65] text-body md:text-base">
          Full team profiles aren&apos;t published yet. Until they are, what you can rely on is
          this: every engagement is founder-led, and you&apos;re never handed off to an anonymous
          production queue.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {["RW-COMPANY-TEAM-01", "RW-COMPANY-TEAM-02", "RW-COMPANY-TEAM-03", "RW-COMPANY-TEAM-04"].map(
            (id) => (
              <Placeholder
                key={id}
                meta={{
                  id,
                  category: "team-photography",
                  purpose: "Team profile — not yet published",
                  aspect: "1:1",
                  composition: "Portrait, direct gaze, plain background",
                  mood: "Approachable, credible",
                  replacement: "Real team photography",
                  priority: "P2",
                  motion: "none",
                }}
              />
            ),
          )}
        </div>
      </Section>

      <Section spacing="tight" className="border-t border-hairline-faint bg-surface-alt">
        <p className="max-w-2xl text-[13px] leading-[1.6] text-muted">{proofFootnote}</p>
      </Section>

      <Section className="border-t border-hairline-faint bg-surface" aria-labelledby="company-explore-heading">
        <h2 id="company-explore-heading" className="text-h2 text-heading">
          Explore Company
        </h2>
        <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href} className="border-t border-hairline-faint">
              <Link
                href={link.href}
                className="flex items-center justify-between gap-2 py-3 text-[15px] font-medium text-heading transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none"
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section accent spacing="generous" aria-labelledby="final-conversion-heading">
        <FinalConversion {...finalConversion} />
      </Section>
    </main>
  );
}

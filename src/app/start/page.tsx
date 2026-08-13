import type { Metadata } from "next";
import { DirectionFinder } from "@/components/start/DirectionFinder";
import { Section } from "@/components/layout/Section";
import { startContent } from "@/lib/content/start";

export const metadata: Metadata = {
  title: startContent.metadata.title,
  description: startContent.metadata.description,
  alternates: { canonical: "/start/" },
};

export default function StartPage() {
  return (
    <main id="main-content">
      <Section
        spacing="generous"
        aria-labelledby="start-heading"
        className="-mt-20 border-b border-hairline-faint bg-surface pt-36 pb-16 md:pt-44 md:pb-20"
      >
        <p className="text-eyebrow text-brand-maroon">{startContent.hero.eyebrow}</p>
        <h1 id="start-heading" className="text-h1 mt-5 max-w-[13ch] text-heading">
          {startContent.hero.heading}
        </h1>
        <p className="text-hero-lead mt-7 max-w-xl text-body">{startContent.hero.description}</p>
      </Section>

      <Section spacing="generous" aria-label="Solution direction finder" className="bg-surface-alt">
        <DirectionFinder />
      </Section>

      <Section spacing="tight" aria-labelledby="start-reassurance-heading" className="border-y border-hairline-faint bg-surface">
        <div className="grid gap-5 md:grid-cols-12 md:items-baseline">
          <h2 id="start-reassurance-heading" className="font-serif text-2xl leading-tight font-semibold text-heading md:col-span-5 md:text-3xl">
            {startContent.reassurance.heading}
          </h2>
          <p className="max-w-xl text-[15px] leading-[1.75] text-body md:col-span-6 md:col-start-7">{startContent.reassurance.body}</p>
        </div>
      </Section>
    </main>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { PackageField } from "@/components/pricing/PackageField";
import { ManagedServices } from "@/components/pricing/ManagedServices";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PhilosophyFlow } from "@/components/pricing/PhilosophyFlow";
import { DiscoveryResolutionArt } from "@/components/pricing/DiscoveryResolutionArt";
import { DiscoveryIcon } from "@/components/pricing/PricingIcons";
import {
  paidDiscovery,
  pricingContent,
  pricingDisclaimer,
  pricingFaq,
  projectPackages,
} from "@/lib/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starting prices for Rive Webworks project packages and managed services, with visible inclusions, exclusions and next steps. Final scope is confirmed in Paid Discovery.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  const { hero, philosophy, packagesIntro, managedIntro, discoveryIntro, faqIntro, final } = pricingContent;

  const offerCatalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Rive Webworks project packages",
    itemListElement: projectPackages
      .filter((pkg) => !pkg.price.unresolved)
      .map((pkg) => ({
        "@type": "Offer",
        name: pkg.name,
        sku: pkg.code,
        priceSpecification: {
          "@type": "PriceSpecification",
          price: (pkg.price as { from: number }).from,
          priceCurrency: "USD",
          description: "Starting price. Final scope and price confirmed in Paid Discovery.",
        },
      })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.list ? `${item.answer} ${item.list.join(", ")}.` : item.answer,
      },
    })),
  };

  return (
    <main id="main-content">
      <JsonLd id="pricing-offer-catalog-jsonld" data={offerCatalogJsonLd} />
      <JsonLd id="pricing-faq-jsonld" data={faqJsonLd} />

      <Section
        spacing="generous"
        aria-labelledby="pricing-heading"
        className="-mt-20 overflow-hidden border-b border-hairline-faint bg-surface pt-36 pb-20 md:pt-44 md:pb-28"
      >
        <div className="relative grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="text-eyebrow text-brand-maroon">{hero.eyebrow}</p>
            <h1 id="pricing-heading" className="text-h1 mt-5 max-w-[14ch] text-balance text-heading">
              {hero.heading}
            </h1>
          </div>
          <div className="relative self-end border-l border-brand-maroon pl-6 lg:col-span-4 lg:pl-8">
            <p className="text-hero-lead max-w-lg text-body">{hero.summary}</p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <LinkButton href={hero.primary.href}>{hero.primary.label}</LinkButton>
              <LinkButton href={hero.secondary.href} variant="text">{hero.secondary.label}</LinkButton>
            </div>
          </div>
        </div>
      </Section>

      <Section spacing="default" aria-labelledby="pricing-philosophy-heading" className="bg-surface-alt">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-maroon">{philosophy.eyebrow}</p>
            <h2 id="pricing-philosophy-heading" className="text-h2 mt-4 max-w-[20ch] text-heading">{philosophy.heading}</h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-body md:text-base">{philosophy.description}</p>
          </div>
          {/*
            RW-PAGE-08C: the page's first visual-depth moment (chosen over a
            hero illustration or a packages-transition visual, per the
            refinement directive's "choose ONE"). Scope determines evidence,
            timeline and price, in that order - the same relationship the
            copy just described, made scannable at a glance.
          */}
          <div className="lg:col-span-5">
            <PhilosophyFlow />
          </div>
        </div>
      </Section>

      {/*
        RW-PAGE-08B §26/§33: the disclaimer must be visible, not buried as
        fine print. Its own bordered banner between the philosophy statement
        and the package field, not a footer footnote.
      */}
      <div className="border-y border-hairline-faint bg-surface">
        <div className="container-rw py-6">
          <p className="max-w-3xl border-l-2 border-brand-gold pl-5 text-sm leading-[1.7] font-medium text-heading">
            {pricingDisclaimer}
          </p>
        </div>
      </div>

      <Section spacing="generous" aria-labelledby="packages-heading" className="bg-surface">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{packagesIntro.eyebrow}</p>
          <h2 id="packages-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">{packagesIntro.heading}</h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body md:text-base">{packagesIntro.description}</p>
        </div>
        <div className="mt-12">
          <PackageField />
        </div>
      </Section>

      {/*
        RW-PAGE-08B Design Decision Brief: the page's one immersive beat.
        Navy dark-accent surface, matching Trust's contextual-photography
        convention, marks Paid Discovery as the hinge between an unscoped
        need and a priced next step.
      */}
      <section aria-labelledby="discovery-heading" className="bg-navy-950 py-20 text-white md:py-28">
        <div className="container-rw">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <DiscoveryIcon className="h-6 w-6 text-brand-gold" />
                <p className="text-eyebrow text-brand-gold">{discoveryIntro.eyebrow}</p>
              </div>
              <h2 id="discovery-heading" className="mt-5 max-w-[14ch] font-serif text-[clamp(2.2rem,4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
                {discoveryIntro.heading}
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-slate-200 md:text-base">{discoveryIntro.description}</p>

              <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/15 pt-6">
                <div>
                  <dt className="text-eyebrow text-brand-gold">Price</dt>
                  <dd className="mt-1 font-serif text-2xl font-semibold text-white">{paidDiscovery.priceDetail}</dd>
                </div>
                <div>
                  <dt className="text-eyebrow text-brand-gold">Duration</dt>
                  <dd className="mt-1 font-serif text-2xl font-semibold text-white">{paidDiscovery.duration}</dd>
                </div>
              </dl>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {paidDiscovery.purpose.map((item) => (
                  <li key={item} className="text-[13px] leading-[1.6] text-slate-200">&bull; {item}</li>
                ))}
              </ul>

              <p className="mt-6 max-w-md text-xs leading-[1.6] text-slate-400">{paidDiscovery.creditNote}</p>

              <div className="mt-8" data-analytics-event="book_discovery" data-service-code="paid-discovery">
                <LinkButton href="/connect/" variant="inverse">{paidDiscovery.cta.label}</LinkButton>
              </div>
            </div>
            <div className="lg:col-span-6">
              <DiscoveryResolutionArt />
            </div>
          </div>
        </div>
      </section>

      <Section spacing="generous" aria-labelledby="managed-heading" className="bg-surface">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{managedIntro.eyebrow}</p>
          <h2 id="managed-heading" className="text-h2 mt-4 max-w-[22ch] text-heading">{managedIntro.heading}</h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-body md:text-base">{managedIntro.description}</p>
        </div>
        <div className="mt-12">
          <ManagedServices />
        </div>
      </Section>

      <Section spacing="generous" aria-labelledby="pricing-faq-heading" className="border-t border-hairline-faint bg-surface-alt">
        <div className="max-w-3xl">
          <p className="text-eyebrow text-brand-maroon">{faqIntro.eyebrow}</p>
          <h2 id="pricing-faq-heading" className="text-h2 mt-4 max-w-[20ch] text-heading">{faqIntro.heading}</h2>
        </div>
        <div className="mt-10 max-w-3xl">
          <PricingFAQ />
        </div>
      </Section>

      <section aria-labelledby="pricing-final-heading" className="surface-accent border-y border-accent-foreground/10 py-16 md:py-24">
        <div className="container-rw grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2 id="pricing-final-heading" className="max-w-[16ch] font-serif text-[clamp(2.2rem,4.5vw,4.25rem)] leading-[1.04] font-semibold tracking-[-0.02em] text-accent-foreground">
              {final.heading}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.75] text-accent-foreground/80">{final.body}</p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
            <div className="w-full" data-analytics-event="book_discovery" data-service-code="final-cta">
              <LinkButton href={final.primary.href} className="w-full">{final.primary.label}</LinkButton>
            </div>
            <LinkButton href={final.secondary.href} variant="secondary" className="w-full">{final.secondary.label}</LinkButton>
          </div>
        </div>
      </section>
    </main>
  );
}

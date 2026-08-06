import type { Metadata } from "next";
import { getHomepageContent } from "@/lib/content/homepage";
import { getSiteUrl, siteName } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArchitectureSpine } from "@/components/homepage/ArchitectureSpine";
import { Hero } from "@/components/homepage/sections/Hero";
import { Manifesto } from "@/components/homepage/sections/Manifesto";
import { BuyerPathGrid } from "@/components/homepage/sections/BuyerPathGrid";
import { FeaturedEngagement } from "@/components/homepage/sections/FeaturedEngagement";
import { PlatformParitySection } from "@/components/homepage/sections/PlatformParitySection";
import { EvidencePackSection } from "@/components/homepage/sections/EvidencePackSection";
import { GovernedAISection } from "@/components/homepage/sections/GovernedAISection";
import { IndustryFitSection } from "@/components/homepage/sections/IndustryFitSection";
import { ProcessSection } from "@/components/homepage/sections/ProcessSection";
import { ProofFootnoteSection } from "@/components/homepage/sections/ProofFootnoteSection";
import { ResourcesSection } from "@/components/homepage/sections/ResourcesSection";
import { FinalCTASection } from "@/components/homepage/sections/FinalConversionSection";

export const metadata: Metadata = {
  title: "One Accountable Team for Web, Cloud & AI",
  description:
    "Rive Webworks builds the website, modernizes the AWS or Microsoft cloud behind it, and ships governed AI on top — one accountable team, documented evidence at every stage.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const content = await getHomepageContent();
  const siteUrl = getSiteUrl();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
  };

  // RW-PW06A: the four sections that genuinely correspond to one stage of
  // the Rive Operating Architecture each get a `stage` prop (index + the
  // real architectureFlow entry) so the architectural spine and their
  // attachment-point markers stay driven by the same single source of
  // content as the hero illustration — not a second, hand-maintained list.
  const [experience, cloud, governedAi, outcomes] = content.hero.architectureFlow;

  return (
    <>
      <JsonLd id="organization-jsonld" data={organizationJsonLd} />
      <JsonLd id="website-jsonld" data={websiteJsonLd} />

      <ArchitectureSpine steps={content.hero.architectureFlow} />

      <main id="main-content">
        <Hero content={content.hero} />
        <Manifesto content={content.manifesto} stage={{ index: 1, step: experience }} />
        <BuyerPathGrid intro={content.buyerPathsIntro} paths={content.buyerPaths} />
        <FeaturedEngagement content={content.featuredEngagement} />
        <PlatformParitySection content={content.platformParity} stage={{ index: 2, step: cloud }} />
        <EvidencePackSection content={content.evidencePack} />
        <GovernedAISection content={content.governedAi} stage={{ index: 3, step: governedAi }} />
        <IndustryFitSection content={content.industries} />
        <ProcessSection content={content.process} stage={{ index: 4, step: outcomes }} />
        <ProofFootnoteSection text={content.proofFootnote} />
        <ResourcesSection content={content.resources} />
        <FinalCTASection content={content.finalConversion} />
      </main>
    </>
  );
}

import type { Metadata } from "next";
import { getHomepageContent } from "@/lib/content/homepage";
import { getSiteUrl, siteName } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
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

  return (
    <>
      <JsonLd id="organization-jsonld" data={organizationJsonLd} />
      <JsonLd id="website-jsonld" data={websiteJsonLd} />

      <main id="main-content">
        <Hero content={content.hero} />
        <Manifesto content={content.manifesto} />
        <BuyerPathGrid intro={content.buyerPathsIntro} paths={content.buyerPaths} />
        <FeaturedEngagement content={content.featuredEngagement} />
        <PlatformParitySection content={content.platformParity} />
        <EvidencePackSection content={content.evidencePack} />
        <GovernedAISection content={content.governedAi} />
        <IndustryFitSection content={content.industries} />
        <ProcessSection content={content.process} />
        <ProofFootnoteSection text={content.proofFootnote} />
        <ResourcesSection content={content.resources} />
        <FinalCTASection content={content.finalConversion} />
      </main>
    </>
  );
}

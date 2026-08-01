import type { Metadata } from "next";
import { getHomepageContent } from "@/lib/content/homepage";
import { getSiteUrl, siteName } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/homepage/sections/Hero";
import { BuyerPathGrid } from "@/components/homepage/sections/BuyerPathGrid";
import { AuthorityBand } from "@/components/homepage/sections/AuthorityBand";
import { FeaturedEngagement } from "@/components/homepage/sections/FeaturedEngagement";
import { EvidencePackSection } from "@/components/homepage/sections/EvidencePackSection";
import { PlatformParitySection } from "@/components/homepage/sections/PlatformParitySection";
import { SecureAISection } from "@/components/homepage/sections/SecureAISection";
import { IndustryFitSection } from "@/components/homepage/sections/IndustryFitSection";
import { ProcessSection } from "@/components/homepage/sections/ProcessSection";
import { ProofSection } from "@/components/homepage/sections/ProofSection";
import { ResourcesSection } from "@/components/homepage/sections/ResourcesSection";
import { FinalCTASection } from "@/components/homepage/sections/FinalConversionSection";

export const metadata: Metadata = {
  title: "Web, Cloud & AI Solutions Built for Growth, Security and Scale",
  description:
    "Rive Webworks helps growing and regulated organizations create high-converting websites, modernize AWS and Microsoft cloud environments, and deploy governed AI solutions — with clear scope, documented evidence, and ongoing support.",
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
        <BuyerPathGrid paths={content.buyerPaths} />
        <AuthorityBand content={content.authorityBand} />
        <FeaturedEngagement content={content.featuredEngagement} />
        <PlatformParitySection content={content.platformParity} />
        <EvidencePackSection content={content.evidencePack} />
        <SecureAISection content={content.governedAi} />
        <IndustryFitSection content={content.industries} />
        <ProcessSection content={content.process} />
        <ProofSection content={content.proof} />
        <ResourcesSection content={content.resources} />
        <FinalCTASection content={content.finalConversion} />
      </main>
    </>
  );
}

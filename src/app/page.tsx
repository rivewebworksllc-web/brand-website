import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCTASection } from "@/components/homepage/sections/FinalConversionSection";
import { BuyerPathGrid } from "@/components/homepage/sections/BuyerPathGrid";
import { EvidencePackSection } from "@/components/homepage/sections/EvidencePackSection";
import { Hero } from "@/components/homepage/sections/Hero";
import { IndustryFitSection } from "@/components/homepage/sections/IndustryFitSection";
import { OfferPresentationSection } from "@/components/homepage/sections/OfferPresentationSection";
import { ProcessSection } from "@/components/homepage/sections/ProcessSection";
import { ResourcesSection } from "@/components/homepage/sections/ResourcesSection";
import { SelectedCapabilitiesSection } from "@/components/homepage/sections/SelectedCapabilitiesSection";
import { getHomepageContent } from "@/lib/content/homepage";
import { getSiteUrl, siteName } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cloud, AI & Web Design Built on Evidence",
  description:
    "Founder-led Cloud, AI and Web Design across AWS and Microsoft foundations, governed AI systems and modern web platforms, with documented evidence at every stage.",
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
        <EvidencePackSection content={content.homepageEvidencePack} />
        <BuyerPathGrid intro={content.buyerPathsIntro} paths={content.buyerPaths} />
        <OfferPresentationSection content={content.pillars} />
        <ProcessSection content={content.process} />
        <IndustryFitSection content={content.homepageIndustries} />
        <SelectedCapabilitiesSection content={content.capabilities} />
        <ResourcesSection content={content.resources} />
        <FinalCTASection content={content.finalConversion} />
      </main>
    </>
  );
}

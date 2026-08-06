import { homepageFallbackContent } from "@/lib/content/homepage";
import { footerNav } from "@/lib/nav";

/**
 * RW-PHASE-02: no fabricated team bios, names, or photos — none exist
 * anywhere in this repository, and `CLAIMS_REGISTER.md` blocks credentials
 * (CLM-006) pending approval. This page is built entirely from real,
 * already-approved themes (the manifesto's "one system" statement, the
 * founder-led process description, the honest no-case-studies footnote)
 * plus the real Company link group already in the footer.
 */
export const companyContent = {
  statement: homepageFallbackContent.manifesto,
  process: homepageFallbackContent.process.description,
  proofFootnote: homepageFallbackContent.proofFootnote,
  links: footerNav.find((group) => group.heading === "Company")!.items,
  finalConversion: homepageFallbackContent.finalConversion,
};

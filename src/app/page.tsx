import { sanityClient } from "@/lib/sanity/client";
import { documentCountQuery } from "@/lib/sanity/queries";
import { siteEnv } from "@/lib/sanity/env";

export default async function HomePage() {
  let sanityStatus: "connected" | "unavailable" = "unavailable";

  try {
    await sanityClient.fetch(documentCountQuery);
    sanityStatus = "connected";
  } catch {
    sanityStatus = "unavailable";
  }

  return (
    <main id="main-content" className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Rive Webworks</h1>
      <p className="mt-2 text-sm text-neutral-500">
        Week 0 build foundation. This diagnostic page is not the approved
        homepage design.
      </p>

      <dl className="mt-8 space-y-2 text-sm">
        <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 dark:border-neutral-800">
          <dt>Environment</dt>
          <dd>{siteEnv()}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-neutral-200 py-2 dark:border-neutral-800">
          <dt>Sanity connectivity</dt>
          <dd>{sanityStatus}</dd>
        </div>
      </dl>
    </main>
  );
}

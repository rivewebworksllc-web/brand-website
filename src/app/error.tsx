"use client";

import { Section } from "@/components/layout/Section";
import { Button, LinkButton } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content">
      <Section className="bg-white text-center">
        <h1 className="text-h1 text-navy-950">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.65] text-slate-700 md:text-base">
          This page hit an unexpected error. You can try again, or head back
          to the homepage.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" onClick={reset}>
            Try again
          </Button>
          <LinkButton href="/" variant="outline">
            Return home
          </LinkButton>
        </div>
      </Section>
    </main>
  );
}

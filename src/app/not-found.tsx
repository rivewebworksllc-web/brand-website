import { Section } from "@/components/layout/Section";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main id="main-content">
      <Section className="bg-white text-center">
        <p className="text-eyebrow text-brand-maroon">404</p>
        <h1 className="text-h1 mt-3 text-navy-950">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.65] text-slate-700 md:text-base">
          The page you requested doesn&apos;t exist or hasn&apos;t been built
          yet. Here are two useful places to go instead.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href="/" variant="primary">
            Return home
          </LinkButton>
          <LinkButton href="/start/" variant="outline">
            Find Your Solution
          </LinkButton>
        </div>
      </Section>
    </main>
  );
}

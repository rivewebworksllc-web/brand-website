import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { primaryNav, connectCta, startCta } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark bg-navy-950 text-white">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-bold">Rive Webworks</p>
            <p className="mt-3 text-[15px] leading-[1.65] text-white/70">
              Web, Cloud &amp; AI solutions for growing and regulated
              organizations — clear scope, documented evidence, ongoing
              support.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-3">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-white/80 transition-colors duration-200 hover:text-brand-gold motion-reduce:transition-none"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-3">
            <LinkButton href={startCta.href} variant="primary" className="px-5">
              {startCta.label}
            </LinkButton>
            <Link
              href={connectCta.href}
              className="text-[15px] font-medium text-white underline decoration-white/30 underline-offset-4 hover:text-brand-gold"
            >
              {connectCta.label}
            </Link>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-[13px] text-white/50">
          © {year} Rive Webworks. AWS-aligned · Microsoft cloud-aligned.
        </p>
      </Container>
    </footer>
  );
}

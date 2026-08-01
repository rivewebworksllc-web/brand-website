import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { footerNav, connectCta, startCta } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark border-t border-white/10 bg-navy-950 text-white">
      <Container className="py-14 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-7 w-7 items-center justify-center rounded-sm border border-brand-gold/40 text-xs font-bold text-brand-gold"
              >
                R
              </span>
              <p className="text-xl font-bold">Rive Webworks</p>
            </div>
            <p className="mt-4 max-w-sm text-[15px] leading-[1.65] text-white/75">
              Web, Cloud &amp; AI solutions for growing and regulated
              organizations — clear scope, documented evidence, ongoing
              support.
            </p>

            <div className="mt-6 flex flex-col items-start gap-3">
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

          <nav aria-label="Footer" className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {footerNav.map((group) => (
                <div key={group.heading}>
                  <p className="text-eyebrow text-white/50">{group.heading}</p>
                  <ul className="mt-3 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="text-[14px] text-white/85 transition-colors duration-200 hover:text-brand-gold motion-reduce:transition-none"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-[13px] text-white/60">
          © {year} Rive Webworks. Cloud architecture and delivery practices
          follow AWS and Microsoft standards; no partner-program affiliation
          is implied or claimed.
        </p>
      </Container>
    </footer>
  );
}

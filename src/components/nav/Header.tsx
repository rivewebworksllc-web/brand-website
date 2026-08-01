import Link from "next/link";
import { primaryNav, startCta } from "@/lib/nav";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="surface-dark sticky top-0 z-40 bg-navy-950 text-white">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-white"
          aria-label="Rive Webworks — home"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-brand-gold/40 text-sm font-bold text-brand-gold"
          >
            R
          </span>
          <span className="text-lg font-bold tracking-tight">Rive Webworks</span>
        </Link>

        <DesktopNav items={primaryNav} />

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <LinkButton href={startCta.href} variant="primary" className="px-5 py-2.5">
              {startCta.label}
            </LinkButton>
          </div>

          <MobileNav items={primaryNav} startCta={startCta} />
        </div>
      </Container>
    </header>
  );
}

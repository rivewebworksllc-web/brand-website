import Link from "next/link";
import { primaryNav, startCta } from "@/lib/nav";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="surface-dark sticky top-0 z-40 bg-navy-950 text-white">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white"
          aria-label="Rive Webworks — home"
        >
          Rive Webworks
        </Link>

        <DesktopNav items={primaryNav} />

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <LinkButton href={startCta.href} variant="primary" className="px-5">
              {startCta.label}
            </LinkButton>
          </div>

          <MobileNav items={primaryNav} startCta={startCta} />
        </div>
      </Container>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, startCta, connectCta } from "@/lib/nav";
import { Container } from "@/components/layout/Container";
import { LinkButton } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

/**
 * Fixed (not sticky) so it can visually float over the hero — the hero
 * section cancels the layout gap this leaves with its own -mt-20/pt-* pair.
 * Every other route gets a plain h-20 spacer (below) to push content clear.
 * The full nav + both CTAs only fit from `xl` (1280px) up; 1024-1279px
 * (Tailwind `lg`) collapses to the same mobile drawer used below `lg`,
 * rather than overflowing horizontally.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    function onScroll() {
      setScrolled(window.scrollY > 48);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const solid = !isHome || scrolled;

  return (
    <header
      className={`surface-dark fixed inset-x-0 top-0 z-40 text-white transition-colors duration-200 motion-reduce:transition-none ${
        solid ? "border-b border-white/10 bg-navy-950/95 backdrop-blur" : "border-b border-transparent bg-transparent"
      }`}
    >
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

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href={connectCta.href}
            className="hidden text-[14px] font-medium text-white/90 hover:text-brand-gold xl:block"
          >
            {connectCta.label}
          </Link>

          <div className="hidden xl:block">
            <LinkButton href={startCta.href} variant="primary" className="px-5 py-2.5">
              {startCta.label}
            </LinkButton>
          </div>

          <MobileNav items={primaryNav} startCta={startCta} connectCta={connectCta} />
        </div>
      </Container>
    </header>
  );
}

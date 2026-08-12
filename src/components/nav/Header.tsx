"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/nav";
import { Container } from "@/components/layout/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

/**
 * Fixed (not sticky) so it can visually float over the hero — the hero
 * section cancels the layout gap this leaves with its own -mt-20/pt-* pair.
 * Every other route gets a plain h-20 spacer (in layout.tsx) to push
 * content clear. The full nav + both CTAs only fit from `xl` (1280px) up;
 * 1024-1279px collapses to the same mobile drawer used below `xl`.
 *
 * RW-PW03: uses the theme-aware accent surface (warm ivory in light mode,
 * navy in dark) instead of a fixed navy background, so it matches the hero
 * it floats over in both themes.
 *
 * RW-PW07A: sticky *background* state is driven by an IntersectionObserver
 * watching the `#header-scroll-sentinel` element (layout.tsx, positioned
 * 48px down the document) rather than a `window.addEventListener("scroll",
 * ...)` listener — once that point scrolls out of the viewport, the header
 * goes solid. No per-frame work, no continuous scroll-position reads.
 *
 * RW-PW11B: the same sentinel now also drives a *compact size* state
 * (`scrolled`), reused directly rather than adding a second observer — the
 * trigger behaviour directive asked for ("default while the sentinel is
 * visible, compact once it exits, stable reversal at the top") is exactly
 * what this already did for `solid`. The two concerns stay conceptually
 * separate even though they share one boolean: `solid` (background/
 * border/shadow) is `!isHome || scrolled` — non-home routes have no hero to
 * float over, so they're always solid regardless of scroll position;
 * `scrolled` alone (no `isHome` override) drives the compact *size*
 * classes, because every route should still arrive spacious and shrink on
 * scroll, not just the homepage. The observer previously only attached
 * `if (isHome)` — now attaches on every route so compact tracking works
 * everywhere `solid` already did.
 *
 * Desktop-only shrink (`xl:` prefixed throughout): RW-PW11B §8 explicitly
 * warns against forcing the same dramatic shrink onto mobile/tablet, whose
 * header is already minimal (logo + theme toggle + drawer trigger, no full
 * nav, no CTA) — there's nothing there to meaningfully compact, and
 * touch-target spacing matters more than a few px of chrome.
 */
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const sentinel = document.getElementById("header-scroll-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const solid = !isHome || scrolled;
  const compact = scrolled;

  return (
    <header
      className={`surface-accent fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,box-shadow] duration-200 motion-reduce:transition-none ${
        solid
          ? "border-b border-accent-foreground/10 bg-accent-surface/95 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container
        className={`flex items-center justify-between gap-4 transition-[min-height] duration-[280ms] ease-out motion-reduce:transition-none ${
          compact ? "min-h-20 xl:min-h-16" : "min-h-20"
        }`}
      >
        <Link
          href="/"
          className={`flex items-center gap-2.5 text-accent-foreground transition-transform duration-[280ms] ease-out motion-reduce:transition-none ${
            compact ? "xl:origin-left xl:scale-[0.92]" : ""
          }`}
          aria-label="Rive Webworks — home"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-brand-maroon/40 text-sm font-bold text-brand-maroon"
          >
            R
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Rive Webworks
          </span>
        </Link>

        <DesktopNav items={primaryNav} compact={compact} />

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <MobileNav items={primaryNav} />
        </div>
      </Container>
    </header>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type { FocusEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { megaMenu, type NavItem } from "@/lib/nav";
import { Container } from "@/components/layout/Container";
import { MegaMenuPanel } from "./MegaMenuPanel";

type DesktopNavProps = {
  items: NavItem[];
  /** RW-PW11B: tightens nav-item gaps and re-aligns the mega-menu panel's
   * fixed `top` offset to match the header's compact height — see the
   * panel comment further down for why the two must move together. */
  compact?: boolean;
};

const OPEN_DELAY = 100;
const CLOSE_DELAY = 150;

/**
 * RW-PW07A: mega-menu orchestration for the four labels that have real
 * content in `lib/nav.ts`'s `megaMenu` (Solutions/Services/Company/
 * Resources). Industries/Platforms/Work/Pricing have no `megaMenu` entry and
 * render as the same plain links they always were.
 *
 * A single shared timer ref (not per-item) means every hover/focus
 * transition cancels whatever was previously scheduled before scheduling
 * its own — this is what makes "move quickly from trigger A to trigger B"
 * switch cleanly instead of B's open racing A's delayed close.
 *
 * Triggers stay real `<a>` elements (required — `tests/e2e/navigation.spec.ts`
 * asserts `getByRole("link", { name })`), so there is no button/menu-role
 * substitute here: opening is driven by hover-intent and by focus, closing
 * by mouseleave-with-delay, Escape, blur-outside and route change.
 */
export function DesktopNav({ items, compact = false }: DesktopNavProps) {
  const currentPath = usePathname();
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearTimer() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  function openNow(label: string) {
    clearTimer();
    setOpenLabel(label);
  }

  function scheduleOpen(label: string) {
    clearTimer();
    timerRef.current = setTimeout(() => setOpenLabel(label), OPEN_DELAY);
  }

  function scheduleClose() {
    clearTimer();
    timerRef.current = setTimeout(() => setOpenLabel(null), CLOSE_DELAY);
  }

  function closeNow() {
    clearTimer();
    setOpenLabel(null);
  }

  useEffect(() => {
    closeNow();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  useEffect(() => {
    if (!openLabel) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        const label = openLabel;
        closeNow();
        if (label) triggerRefs.current[label]?.focus();
      }
    }

    function onPointerDown(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeNow();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openLabel]);

  useEffect(() => () => clearTimer(), []);

  function onNavBlur(event: FocusEvent<HTMLElement>) {
    const next = event.relatedTarget as Node | null;
    if (!next || !navRef.current?.contains(next)) {
      closeNow();
    }
  }

  const openGroup = openLabel ? megaMenu[openLabel] : null;
  const panelId = openLabel ? `megamenu-${openLabel.toLowerCase()}` : undefined;

  return (
    <nav ref={navRef} aria-label="Primary" className="hidden xl:block" onBlur={onNavBlur}>
      <ul
        className={`flex items-center transition-[gap] duration-[280ms] ease-out motion-reduce:transition-none ${
          compact ? "gap-4 2xl:gap-6" : "gap-5 2xl:gap-7"
        }`}
      >{/* RW-PW11B: gap tightens modestly in the compact state — see Header.tsx's `compact` for the trigger. */}
        {items.map((item) => {
          const isCurrent = item.href === currentPath;
          const candidate = megaMenu[item.label];
          const group = candidate && (candidate.links.length > 0 || (candidate.secondaryLinks?.length ?? 0) > 0) ? candidate : undefined;
          const isOpen = group ? openLabel === item.label : false;
          const itemPanelId = group ? `megamenu-${item.label.toLowerCase()}` : undefined;

          return (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={group ? () => scheduleOpen(item.label) : undefined}
              onMouseLeave={group ? scheduleClose : undefined}
            >
              {group ? (
                <button
                  ref={(el) => { triggerRefs.current[item.label] = el; }}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={itemPanelId}
                  onFocus={() => openNow(item.label)}
                  onClick={() => openNow(item.label)}
                  className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium tracking-wide text-accent-foreground/95 transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none"
                >
                  {item.label}
                  <span aria-hidden="true" className={`text-xs transition-transform motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}>⌄</span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center text-[15px] font-medium tracking-wide text-accent-foreground/95 transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none ${isCurrent ? "text-brand-maroon" : ""}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>

      {/*
       * RW-PW07B: a single shared overlay, not a per-trigger dropdown — a
       * floating rounded card (not a flush edge-to-edge strip, per the
       * approved reference), aligned to the header's own `Container` (same
       * max-width, same gutters) so its edges line up with the logo and CTA.
       * Fixed exactly at the header's current height so there's no gap for
       * pointer travel to fail across and no dependency on which trigger is
       * hovered for the panel's own width or position.
       *
       * RW-PW11B: the header's height is no longer a single constant — it's
       * `min-h-20` by default and `xl:min-h-16` once compact (Header.tsx).
       * `top-20`/`top-16` here has to track that exactly, or the panel
       * would either float with a visible gap under a shrunk header or
       * overlap a full-height one. The mega-menu only ever renders from
       * `DesktopNav` (`hidden xl:block`), so this is always effectively an
       * xl+-only value regardless of the plain (non-`xl:`-prefixed) class
       * used below.
       */}
      {openGroup ? (
        <div
          id={panelId}
          onMouseEnter={clearTimer}
          onMouseLeave={scheduleClose}
          className={`fixed inset-x-0 z-30 motion-safe:animate-[megamenu-in_150ms_ease-out] ${
            compact ? "top-16" : "top-20"
          }`}
        >
          <Container className="pt-3">
            <div className="card rounded-2xl border border-hairline bg-surface p-8 shadow-xl">
              <MegaMenuPanel group={openGroup} label={openLabel!} />
            </div>
          </Container>
        </div>
      ) : null}
    </nav>
  );
}

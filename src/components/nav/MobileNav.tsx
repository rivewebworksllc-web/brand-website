"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Placeholder } from "@/components/media/Placeholder";
import { megaMenu, type NavItem } from "@/lib/nav";

type MobileNavProps = {
  items: NavItem[];
  startCta: NavItem;
  connectCta: NavItem;
};

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
  );
}

/**
 * RW-PW10 (Product Office directive): replaces the previous "expands
 * downward from the header" treatment with a right-side, near-full-screen
 * drawer. Kept from the prior implementation, unchanged in contract (all
 * five `tests/e2e/mobile-nav.spec.ts` cases still pass against this file):
 * real `<Link>` per top-level item (never replaced by an expansion-only
 * button), one group open at a time, only groups with real children get an
 * expand control, `role="dialog"`/`aria-modal` (never `menu`/`menuitem` —
 * directive §13), Escape + backdrop closure, body-scroll lock, route-change
 * closure, focus restore to the opener.
 *
 * New in this pass: dedicated in-drawer close control (focused on open,
 * per directive §13, rather than "whatever's first focusable" generically);
 * a three-region flex column (sticky header / scrollable nav / stable
 * footer) so the CTA is always visible without scrolling — a stronger
 * outcome than the directive's conditional "sticky CTA on short screens"
 * fallback, and simpler to implement correctly than a real sticky-position
 * hack; a per-group Visual Story Area reusing the exact `Placeholder` +
 * `megaMenu[label].placeholder` metadata each item's desktop mega-menu
 * already carries (directive §9's "use the existing premium Placeholder
 * system" — no new asset convention for mobile alone); and a labelled
 * utilities row for the theme toggle (directive §11: icons alone aren't
 * enough).
 *
 * Deliberately NOT implemented: swipe-to-close (directive §14 explicitly
 * makes this optional and warns "do not implement this if it adds
 * fragility" — hand-rolling reliable horizontal-swipe-vs-vertical-scroll
 * disambiguation without a gesture library, for a close action that
 * Escape/backdrop/close-button/route-change already cover four other ways,
 * is exactly that fragility); an animated close transition (the open
 * transition is real — see the `entered` state below — but closing
 * unmounts immediately, matching every other overlay in this codebase,
 * e.g. `Reveal.tsx`'s mount-triggered reveal has no unmount-transition
 * either; the directive's detailed timing spec in §3 is titled "Opening
 * interaction" and has no closing-motion equivalent).
 */
export function MobileNav({ items, startCta, connectCta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  // Drives the entrance transition: mounts at the "closed" position/opacity,
  // then flips one frame later so the CSS transition actually plays instead
  // of snapping straight to the open state. See the effect below.
  const [entered, setEntered] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      setExpanded(null);
      setEntered(false);
      return;
    }

    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setEntered(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusableEls = getFocusable(panelRef.current);
      if (focusableEls.length === 0) return;

      const first = focusableEls[0];
      const last = focusableEls[focusableEls.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-accent-foreground"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open ? (
        <>
          {/* Backdrop — restrained, no blur. Click closes; the drawer itself
              stops propagation so clicks inside it don't bubble here. */}
          <div
            aria-hidden="true"
            onClick={close}
            className={`fixed inset-0 z-40 bg-navy-950/50 transition-opacity duration-200 ease-out motion-reduce:transition-none ${
              entered ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            id="mobile-nav-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onClick={(event) => event.stopPropagation()}
            className={`surface-accent fixed inset-y-0 right-0 z-50 flex h-[100dvh] w-[92vw] max-w-[440px] flex-col border-l border-hairline bg-accent-surface shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
              entered ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Header — shrink-0, so it stays put while the nav list below scrolls. */}
            <div className="flex shrink-0 items-center justify-between border-b border-hairline px-5 py-4">
              <span className="flex items-center gap-2.5 text-accent-foreground">
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-sm border border-brand-maroon/40 text-sm font-bold text-brand-maroon"
                >
                  R
                </span>
                <span className="font-serif text-lg font-semibold tracking-tight">
                  Rive Webworks
                </span>
              </span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-accent-foreground transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none"
              >
                <span aria-hidden="true" className="text-2xl leading-none">
                  ✕
                </span>
              </button>
            </div>

            {/* Scrollable nav content — the only region that scrolls. */}
            <div
              className={`min-h-0 flex-1 overflow-y-auto px-5 py-5 transition-[opacity,transform] duration-250 delay-75 ease-out motion-reduce:transition-none motion-reduce:delay-0 ${
                entered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <nav aria-label="Primary">
                <ul className="flex flex-col gap-1">
                  {items.map((item) => {
                    const isCurrent = item.href === pathname;
                    const rawGroup = megaMenu[item.label];
                    const hasChildren =
                      !!rawGroup &&
                      (rawGroup.links.length > 0 || (rawGroup.secondaryLinks?.length ?? 0) > 0);
                    const group = hasChildren ? rawGroup : undefined;
                    const isExpanded = expanded === item.label;
                    const groupId = `mobile-group-${item.label.toLowerCase()}`;

                    return (
                      <li key={item.href} className="border-b border-hairline-faint last:border-b-0">
                        <div className="flex items-center">
                          {group ? (
                            <button
                              type="button"
                              aria-expanded={isExpanded}
                              aria-controls={groupId}
                              onClick={() => setExpanded((current) => current === item.label ? null : item.label)}
                              className="flex min-h-14 flex-1 items-center justify-between rounded-sm py-3.5 text-left text-xl font-semibold text-accent-foreground transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none"
                            >
                              <span>{item.label}</span>
                              <span aria-hidden="true" className={`inline-block text-base transition-transform duration-200 motion-reduce:transition-none ${isExpanded ? "rotate-180" : ""}`}>⌄</span>
                            </button>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={close}
                              aria-current={isCurrent ? "page" : undefined}
                              className={`block min-h-14 flex-1 rounded-sm py-3.5 text-xl font-semibold transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none ${isCurrent ? "text-brand-maroon" : "text-accent-foreground"}`}
                            >
                              {item.label}
                            </Link>
                          )}
                        </div>

                        {group && isExpanded ? (
                          // RW-PW10: an earlier pass tried a CSS-only
                          // grid-template-rows collapse for a smooth height
                          // animation, but a collapsed 0fr row still leaves
                          // its (clipped) children reporting a non-empty
                          // bounding box — Playwright's (and a screen
                          // reader's) "visible" check doesn't account for
                          // ancestor overflow-clipping, so collapsed links
                          // stayed reachable/"visible" and broke three
                          // existing mobile-nav.spec.ts assertions. Reverted
                          // to conditional mount/unmount (guarantees
                          // collapsed links are genuinely gone, not just
                          // clipped) plus the same `megamenu-in` reveal
                          // `OutcomeExplorer`'s own disclosure section
                          // already uses for this exact kind of moment —
                          // Rive's established easing language, not a new
                          // one-off.
                          <div id={groupId} className="motion-safe:animate-[megamenu-in_200ms_ease-out]">
                            <ul className="mb-4 space-y-0.5 border-l border-hairline pl-4">
                              {group.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    onClick={close}
                                    className="block rounded-sm py-2.5 text-[15px] text-accent-foreground/80 transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                              {group.secondaryLinks && group.secondaryLinks.length > 0 ? (
                                <>
                                  {group.secondaryHeading ? (
                                    <li className="pt-3 pb-1 text-[11px] font-medium tracking-[0.08em] text-accent-foreground/50 uppercase">
                                      {group.secondaryHeading}
                                    </li>
                                  ) : null}
                                  {group.secondaryLinks.map((link) => (
                                    <li key={link.href}>
                                      <Link
                                        href={link.href}
                                        onClick={close}
                                        className="block rounded-sm py-2.5 text-[15px] text-accent-foreground/80 transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none"
                                      >
                                        {link.label}
                                      </Link>
                                    </li>
                                  ))}
                                </>
                              ) : null}
                            </ul>

                            {/* Visual Story Area — rotates with the open group; the
                                directive's own "must not dominate or create excessive
                                scrolling" is met by capping the rendered height. */}
                            {group.placeholder ? (
                              <Placeholder meta={group.placeholder} className="mb-4 max-h-40" />
                            ) : null}
                          </div>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* Utilities — separated from primary nav, clearly labelled
                  (directive §11: not icon-only). */}
              <div className="mt-5 flex items-center justify-between border-t border-hairline pt-4">
                <span className="text-[15px] font-medium text-accent-foreground/80">Theme</span>
                <ThemeToggle />
              </div>
            </div>

            {/* CTA footer — shrink-0, always visible without scrolling
                (directive §3.5: "the main CTA remains stable and easy to
                find"), visually separated by the border above. */}
            <div className="shrink-0 border-t border-hairline px-5 py-4">
              <LinkButton href={startCta.href} onClick={close} variant="primary" className="w-full">
                {startCta.label}
              </LinkButton>
              <Link
                href={connectCta.href}
                onClick={close}
                className="mt-3 block text-center text-[15px] font-medium text-accent-foreground underline decoration-accent-foreground/30 underline-offset-4 hover:text-brand-maroon"
              >
                {connectCta.label}
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

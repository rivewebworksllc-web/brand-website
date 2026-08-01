"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import type { NavItem } from "@/lib/nav";

type MobileNavProps = {
  items: NavItem[];
  startCta: NavItem;
  connectCta: NavItem;
};

function getFocusable(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    ),
  );
}

export function MobileNav({ items, startCta, connectCta }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const focusable = panel ? getFocusable(panel) : [];
    focusable[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusableEls = getFocusable(panel);
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
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-sm text-white"
      >
        <span aria-hidden="true" className="text-2xl leading-none">
          {open ? "✕" : "☰"}
        </span>
      </button>

      {open ? (
        <div
          id="mobile-nav-panel"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 top-20 z-50 overflow-y-auto bg-navy-950 px-6 py-8"
        >
          <nav aria-label="Primary">
            <ul className="flex flex-col gap-1">
              {items.map((item) => {
                const isCurrent = item.href === pathname;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`block rounded-sm px-2 py-3 text-lg font-medium transition-colors duration-200 hover:text-brand-gold motion-reduce:transition-none ${
                        isCurrent ? "text-brand-gold" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <LinkButton
            href={startCta.href}
            onClick={close}
            variant="primary"
            className="mt-6 w-full"
          >
            {startCta.label}
          </LinkButton>
          <Link
            href={connectCta.href}
            onClick={close}
            className="mt-3 block text-center text-[15px] font-medium text-white underline decoration-white/30 underline-offset-4 hover:text-brand-gold"
          >
            {connectCta.label}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

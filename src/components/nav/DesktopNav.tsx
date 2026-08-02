"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/nav";

type DesktopNavProps = {
  items: NavItem[];
};

export function DesktopNav({ items }: DesktopNavProps) {
  const currentPath = usePathname();

  return (
    <nav aria-label="Primary" className="hidden xl:block">
      <ul className="flex items-center gap-5 2xl:gap-7">
        {items.map((item) => {
          const isCurrent = item.href === currentPath;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`text-[15px] font-medium tracking-wide text-accent-foreground/95 transition-colors duration-200 hover:text-brand-maroon motion-reduce:transition-none ${
                  isCurrent ? "text-brand-maroon" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

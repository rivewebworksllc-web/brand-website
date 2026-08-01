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
    <nav aria-label="Primary" className="hidden lg:block">
      <ul className="flex items-center gap-7">
        {items.map((item) => {
          const isCurrent = item.href === currentPath;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`text-[15px] font-medium tracking-wide text-white/95 transition-colors duration-200 hover:text-brand-gold motion-reduce:transition-none ${
                  isCurrent ? "text-brand-gold" : ""
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

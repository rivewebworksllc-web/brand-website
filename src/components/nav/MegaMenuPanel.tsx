"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Placeholder } from "@/components/media/Placeholder";
import { DefaultDestinationIcon, MEGA_MENU_ICONS } from "./MegaMenuIcons";
import type { MegaMenuGroup, NavItem } from "@/lib/nav";

type MegaMenuPanelProps = {
  group: MegaMenuGroup;
  /** RW-PW07B (mega menu visual rebalancing): Services and Company get a
   * bespoke right-column arrangement (see `ServicesGrid`/`CompanyGrid`
   * below); every other group keeps the original auto-flow grid
   * (`DefaultGrid`). Identifies the group by its `primaryNav` label rather
   * than adding a new field to `MegaMenuGroup` — no content-shape change. */
  label: string;
};

const TILE_TONES = [
  "border-gold-deep/40 text-gold-deep",
  "border-brand-maroon/40 text-brand-maroon",
  "border-accent-azure-strong/40 text-accent-azure-strong",
];

function toneFor(index: number) {
  return TILE_TONES[index % TILE_TONES.length]!;
}

function RailLinks({ items, heading, currentPath }: { items: NavItem[]; heading?: string; currentPath: string | null }) {
  return (
    <div>
      {heading ? <p className="text-eyebrow px-2 text-muted">{heading}</p> : null}
      <ul className="mt-1">
        {items.map((item) => {
          const isCurrent = item.href === currentPath;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isCurrent ? "page" : undefined}
                className={`block rounded-sm px-2 py-2 text-[14px] transition-colors duration-150 hover:bg-surface-alt hover:text-heading motion-reduce:transition-none ${
                  isCurrent ? "text-brand-maroon" : "text-body"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function TileLink({ item, tone }: { item: NavItem; tone: string }) {
  const Icon = MEGA_MENU_ICONS[item.label] ?? DefaultDestinationIcon;
  return (
    <Link
      href={item.href}
      className="group flex min-h-[112px] flex-col justify-between gap-6 rounded-lg border border-hairline p-4 transition-colors duration-200 hover:border-gold-deep/50 hover:bg-surface-alt motion-reduce:transition-none"
    >
      <span
        aria-hidden="true"
        className={`flex h-9 w-9 items-center justify-center rounded-md border transition-transform duration-200 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${tone}`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex items-center gap-1.5 text-[14px] font-medium text-heading">
        {item.label}
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
        >
          →
        </span>
      </span>
    </Link>
  );
}

/** Original auto-flow grid — unchanged, still used by Solutions/Work/Resources. */
function DefaultGrid({ group, hasLinks }: { group: MegaMenuGroup; hasLinks: boolean }) {
  return (
    <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-3">
      {hasLinks ? group.links.map((item, index) => <TileLink key={item.href} item={item} tone={toneFor(index)} />) : null}
      <Placeholder
        meta={group.placeholder}
        className={hasLinks ? "col-span-2" : "col-span-2 sm:col-span-3 lg:max-w-lg"}
      />
    </div>
  );
}

/**
 * RW-PW12A (Product Office correction): AI and Automation are a single
 * capability cluster ("Web enables the platform, AI enables intelligence,
 * Automation operationalises intelligence") and read as one column — a
 * `flex flex-col` pair placed as one grid item, so it occupies exactly one
 * cell of row 2 (under Web) with no gap between the two cards and no
 * manual row/column indices. The Placeholder stays inside the same grid as
 * its own item: with the AI/Automation column taking row 2's first cell,
 * auto-placement drops the `col-span-2` Placeholder into the row's
 * remaining two cells — directly under Cloud and Microsoft, spanning
 * exactly their combined width, with no manual row/column indices needed.
 * `self-stretch` matches its height to the AI/Automation column (the
 * row's tallest item) instead of the row overflowing to its own aspect
 * ratio. Card styling, spacing, gutters, hover behaviour, icon treatment
 * and the grid's own column count are all untouched per the directive's
 * "preserve existing grid" requirement — only which items go where
 * changes.
 */
function ServicesGrid({ group }: { group: MegaMenuGroup }) {
  const ai = group.links.find((item) => item.label === "AI");
  const automation = group.links.find((item) => item.label === "Automation");
  const topRow = group.links.filter((item) => item.label !== "AI" && item.label !== "Automation");

  return (
    <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-3">
      {topRow.map((item, index) => (
        <TileLink key={item.href} item={item} tone={toneFor(index)} />
      ))}
      {ai ? (
        <div className="flex flex-col gap-4">
          <TileLink item={ai} tone={toneFor(topRow.length)} />
          {automation ? <TileLink item={automation} tone={toneFor(topRow.length + 1)} /> : null}
        </div>
      ) : null}
      <Placeholder meta={group.placeholder} className="col-span-2 self-stretch sm:col-span-2" />
    </div>
  );
}

/**
 * RW-PW07B (rebalancing): Partners and Readiness/Careers/Contact stack in a
 * single narrow column (their approved reading order, top to bottom); the
 * Placeholder fills the freed two-thirds beside them and stretches to the
 * row's full height via CSS Grid's default `align-items: stretch` (no
 * `items-start` on this wrapper, unlike `DefaultGrid`) — that's what
 * "spans enough height to balance the three stacked items" turns into
 * without hand-measuring pixel heights.
 */
function CompanyGrid({ group }: { group: MegaMenuGroup }) {
  const stackedLabels = ["Partners and Readiness", "Careers", "Contact"];
  const stacked = stackedLabels
    .map((label) => group.links.find((item) => item.label === label))
    .filter((item): item is NavItem => Boolean(item));
  const topLinks = group.links.filter((item) => !stackedLabels.includes(item.label));

  return (
    <div>
      <div className="grid grid-cols-2 items-start gap-4 sm:grid-cols-3">
        {topLinks.map((item, index) => (
          <TileLink key={item.href} item={item} tone={toneFor(index)} />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-4">
          {stacked.map((item, index) => (
            <TileLink key={item.href} item={item} tone={toneFor(topLinks.length + index)} />
          ))}
        </div>
        <Placeholder meta={group.placeholder} className="h-full sm:col-span-2" />
      </div>
    </div>
  );
}

/**
 * RW-PW07B: floating visual workspace modelled on the reference recording —
 * a left rail (one gradient "featured" tile carrying the panel's real intro
 * copy and CTA, plus any consolidated `secondaryLinks` as a plain list
 * beneath it) and a right-hand area for the group's real `links` plus the
 * mandated placeholder visual. The right-hand area's internal arrangement
 * is per-group (see `ServicesGrid`/`CompanyGrid`/`DefaultGrid` above) —
 * every group still gets a real placeholder with full traceability
 * metadata, none get a manufactured empty column.
 */
export function MegaMenuPanel({ group, label }: MegaMenuPanelProps) {
  const hasLinks = group.links.length > 0;
  const currentPath = usePathname();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <div className="flex flex-col gap-5 lg:col-span-4">
        <Link
          href={group.panel.cta.href}
          className="group block rounded-lg p-5 text-white transition-opacity duration-200 hover:opacity-95"
          style={{
            background: "linear-gradient(135deg, var(--color-brand-maroon) 0%, var(--color-gold-deep) 130%)",
          }}
        >
          <p className="font-serif text-[17px] leading-snug font-semibold">{group.panel.heading}</p>
          <p className="mt-2 text-[13px] leading-[1.55] text-white/85">{group.panel.body}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold">
            {group.panel.cta.label}
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </span>
        </Link>

        {group.secondaryLinks && group.secondaryLinks.length > 0 ? (
          <RailLinks items={group.secondaryLinks} heading={group.secondaryHeading} currentPath={currentPath} />
        ) : null}
      </div>

      <div className="lg:col-span-8">
        {label === "Services" ? (
          <ServicesGrid group={group} />
        ) : label === "Company" ? (
          <CompanyGrid group={group} />
        ) : (
          <DefaultGrid group={group} hasLinks={hasLinks} />
        )}
      </div>
    </div>
  );
}

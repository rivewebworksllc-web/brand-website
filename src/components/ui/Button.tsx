import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

/**
 * RW-PW07B: Rive's tactile button interaction system. Six variants, one
 * shared hover language — a solid colour fill that wipes left-to-right
 * (`scale-x` from a left `transform-origin`, not a width transition) plus a
 * few pixels of arrow movement. No lift, no hover shadow, no bounce —
 * Product Office correction after the first pass leaned on translate/shadow.
 * Every variant gets the same `motion-reduce:` fallback (the wipe disappears,
 * colour still changes instantly) and the same focus-visible ring.
 *
 * - primary: the one loud action per screen (header CTA, hero, final CTA).
 * - secondary: bordered, `currentColor`-based so it reads correctly whether
 *   it sits on a plain surface (error/404) or an accent surface (Hero,
 *   Footer) without a separate "on dark" variant for that case; fills to a
 *   solid maroon with white text on hover.
 * - inverse: translucent-filled, for busy/textured accent surfaces (the
 *   final-conversion gradient); fills to a solid accent-foreground with
 *   accent-surface text on hover — a controlled invert.
 * - text: no border or fill — an editorial link with the same arrow
 *   micro-interaction, for mega-menu and inline CTAs. No wipe; there's no
 *   surface for one to fill.
 * - nav: primary's colour at header scale (compact padding, smaller type)
 *   so the header CTA doesn't need one-off size overrides at every call
 *   site.
 * - quiet: the least prominent action — colour shift only, no arrow, no
 *   fill — for de-emphasised choices sitting next to a real CTA.
 */
type Variant = "primary" | "secondary" | "inverse" | "text" | "nav" | "quiet";

const variantClasses: Record<Variant, string> = {
  primary:
    "min-h-11 min-w-11 px-6 py-3 rounded-full bg-brand-gold text-navy-950 focus-visible:ring-gold-deep",
  secondary:
    "min-h-11 min-w-11 px-6 py-3 rounded-full border border-current bg-transparent text-current " +
    "hover:text-white focus-visible:ring-current",
  inverse:
    "min-h-11 min-w-11 px-6 py-3 rounded-full border border-accent-foreground/40 bg-accent-foreground/10 text-accent-foreground " +
    "hover:text-accent-surface focus-visible:ring-accent-foreground",
  text:
    "min-h-9 gap-1.5 rounded-sm bg-transparent px-0 py-1 text-brand-maroon " +
    "hover:text-brand-maroon focus-visible:ring-brand-maroon",
  // RW-PW12: header "Contact Us" is the only caller of this variant — the
  // one loud gold CTA (primary/hero) needed a visually distinct header
  // action, so this uses the brand's other accent (maroon) instead of gold
  // at rest, with a left-to-right gold wipe on hover (`Fill`, below). A
  // literal hex rather than the `brand-maroon` token deliberately, matching
  // how `bg-brand-gold` above is already theme-invariant across this
  // component: `--color-brand-maroon` intentionally converges with gold in
  // dark mode (see globals.css) for *text-on-navy-card* legibility, a
  // different problem than a solid, self-contained button fill with its
  // own dedicated text colour.
  nav: "min-h-11 min-w-11 rounded-full bg-[#6b1f32] px-5 py-2.5 text-[14px] text-white hover:text-navy-950 focus-visible:ring-gold-deep",
  quiet:
    "min-h-9 rounded-sm bg-transparent px-2 py-1 text-muted hover:text-heading focus-visible:ring-current",
};

/** Solid fill colour each wipe reveals — chosen so the variant's text colour still reads once the fill has passed under it. */
const FILL_CLASSES: Partial<Record<Variant, string>> = {
  primary: "bg-[#c29f2f]",
  secondary: "bg-brand-maroon",
  inverse: "bg-accent-foreground",
  nav: "bg-brand-gold",
};

/** Variants whose arrow moves — every variant except the deliberately quiet one. */
const ARROW_VARIANTS: Variant[] = ["primary", "secondary", "inverse", "text", "nav"];

const baseClasses =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden " +
  "text-[15px] font-semibold whitespace-nowrap select-none " +
  "transition-colors duration-300 ease-out " +
  "motion-reduce:duration-0 " +
  "disabled:cursor-not-allowed disabled:opacity-50 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

function Fill({ variant }: { variant: Variant }) {
  const fillClass = FILL_CLASSES[variant];
  if (!fillClass) return null;
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:hidden ${fillClass}`}
    />
  );
}

function Arrow({ variant }: { variant: Variant }) {
  if (!ARROW_VARIANTS.includes(variant)) return null;
  return (
    <span
      aria-hidden="true"
      className="relative inline-block leading-none transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
    >
      →
    </span>
  );
}

type CommonProps = {
  variant?: Variant;
  className?: string;
  /** Defaults per-variant (see ARROW_VARIANTS); set false to suppress on primary/secondary/inverse/text/nav. */
  arrow?: boolean;
};

type LinkButtonProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function LinkButton({
  variant = "primary",
  className = "",
  arrow,
  href,
  children,
  ...rest
}: LinkButtonProps) {
  const showArrow = arrow ?? ARROW_VARIANTS.includes(variant);
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()} {...rest}>
      <Fill variant={variant} />
      <span className="relative">{children}</span>
      {showArrow ? <Arrow variant={variant} /> : null}
    </Link>
  );
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  className = "",
  arrow,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const showArrow = arrow ?? ARROW_VARIANTS.includes(variant);
  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}
      {...rest}
    >
      <Fill variant={variant} />
      <span className="relative">{children}</span>
      {showArrow ? <Arrow variant={variant} /> : null}
    </button>
  );
}

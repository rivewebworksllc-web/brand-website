import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";

type SectionSpacing = "tight" | "default" | "generous";

/**
 * RW-PW05: named spacing steps instead of every section sharing one
 * hardcoded py value — deliberate pacing (some sections breathe more than
 * others) rather than the "equal section rhythm everywhere" default.
 * "default" is byte-identical to the pre-RW-PW05 value, so any section that
 * doesn't opt in is visually unchanged.
 */
const spacingClasses: Record<SectionSpacing, string> = {
  tight: "py-8 md:py-14",
  default: "py-12 md:py-20",
  generous: "py-16 md:py-28",
};

type SectionProps = {
  as?: ElementType;
  id?: string;
  className?: string;
  containerClassName?: string;
  /**
   * Applies the theme-aware brand accent surface: warm gold-tinted ivory in
   * light mode, navy in dark mode (see .surface-accent in globals.css).
   * Not a fixed "dark section" — RW-PW03 corrected that assumption.
   */
  accent?: boolean;
  spacing?: SectionSpacing;
  "aria-labelledby"?: string;
  children: ReactNode;
};

export function Section({
  as: Tag = "section",
  id,
  className = "",
  containerClassName = "",
  accent = false,
  spacing = "default",
  children,
  ...aria
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`${spacingClasses[spacing]} ${accent ? "surface-accent" : ""} ${className}`.trim()}
      {...aria}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";

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
  "aria-labelledby"?: string;
  children: ReactNode;
};

export function Section({
  as: Tag = "section",
  id,
  className = "",
  containerClassName = "",
  accent = false,
  children,
  ...aria
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`py-12 md:py-20 ${accent ? "surface-accent" : ""} ${className}`.trim()}
      {...aria}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

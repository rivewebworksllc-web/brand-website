import type { ElementType, ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  as?: ElementType;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Applies the gold-on-navy focus-ring variant for dark-background sections. */
  dark?: boolean;
  "aria-labelledby"?: string;
  children: ReactNode;
};

export function Section({
  as: Tag = "section",
  id,
  className = "",
  containerClassName = "",
  dark = false,
  children,
  ...aria
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`py-12 md:py-20 ${dark ? "surface-dark bg-navy-950 text-white" : ""} ${className}`.trim()}
      {...aria}
    >
      <Container className={containerClassName}>{children}</Container>
    </Tag>
  );
}

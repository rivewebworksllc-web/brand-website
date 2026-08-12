"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * RW-PW05: restrained entrance motion for a handful of high-signal moments
 * (not every element) — a state transition (off-screen -> read), never
 * decoration. IntersectionObserver-based, not a scroll listener (the
 * design-taste-frontend hard ban on window.addEventListener('scroll')).
 * `prefers-reduced-motion` is checked before the first paint decision (skips
 * straight to the resting position) and the global reduced-motion block in
 * globals.css additionally zeroes the transition duration as a CSS-level
 * backstop. Text remains fully opaque throughout: fading a whole content
 * container creates a temporary low-contrast state while colours blend with
 * the section surface. The `js-reveal` class remains the stable hook for the
 * `<noscript>` transform override in layout.tsx.
 */
export function Reveal({ children, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`js-reveal transition-transform duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0" : "translate-y-4"
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}

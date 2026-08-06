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
 * straight to visible) and the global reduced-motion block in globals.css
 * additionally zeroes the transition duration as a CSS-level backstop.
 * The `js-reveal` class is a stable hook for the `<noscript>` override in
 * layout.tsx — without it, content would stay permanently opacity-0 for any
 * visitor whose JavaScript never runs (the `useEffect` that reveals it would
 * simply never fire).
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
      className={`js-reveal transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}

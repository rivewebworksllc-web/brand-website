"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type PresentationMode = "presentation" | "manual";

type PresentationCycleOptions = {
  itemCount: number;
  interval?: number;
  enabled?: boolean;
  initialIndex?: number;
  resumeDelay?: number;
  visibilityThreshold?: number;
};

export const PRESENTATION_INTERVAL = 6000;
export const PRESENTATION_RESUME_DELAY = 1500;
export const PRESENTATION_VISIBILITY_THRESHOLD = 0.45;

export function usePresentationCycle({
  itemCount,
  interval = PRESENTATION_INTERVAL,
  enabled = true,
  initialIndex = 0,
  resumeDelay = PRESENTATION_RESUME_DELAY,
  visibilityThreshold = PRESENTATION_VISIBILITY_THRESHOLD,
}: PresentationCycleOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const remainingRef = useRef(interval);
  const hadPassivePauseRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [mode, setMode] = useState<PresentationMode>("presentation");
  const [hovered, setHovered] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [resumeReady, setResumeReady] = useState(true);
  const [inViewport, setInViewport] = useState(false);
  const [documentVisible, setDocumentVisible] = useState(false);
  const [motionPreferenceKnown, setMotionPreferenceKnown] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const passivePause = hovered || focusWithin;

  const stopRunningTimer = useCallback(() => {
    if (timerRef.current === null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
    if (startedAtRef.current !== null) {
      const elapsed = Date.now() - startedAtRef.current;
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
      startedAtRef.current = null;
    }
  }, []);

  const select = useCallback(
    (index: number) => {
      stopRunningTimer();
      const next = itemCount > 0 ? ((index % itemCount) + itemCount) % itemCount : 0;
      remainingRef.current = interval;
      setActiveIndex(next);
      setMode("manual");
    },
    [interval, itemCount, stopRunningTimer],
  );

  useEffect(() => {
    remainingRef.current = interval;
  }, [interval]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPreference = () => {
      setReducedMotion(query.matches);
      setMotionPreferenceKnown(true);
      if (query.matches) {
        stopRunningTimer();
        setMode("manual");
      }
    };
    applyPreference();
    query.addEventListener("change", applyPreference);
    return () => query.removeEventListener("change", applyPreference);
  }, [stopRunningTimer]);

  useEffect(() => {
    const updateVisibility = () => setDocumentVisible(document.visibilityState === "visible");
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting && entry.intersectionRatio >= visibilityThreshold),
      { threshold: visibilityThreshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visibilityThreshold]);

  useEffect(() => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    if (passivePause) {
      hadPassivePauseRef.current = true;
      setResumeReady(false);
      return;
    }
    if (!hadPassivePauseRef.current || mode === "manual") return;
    resumeTimerRef.current = window.setTimeout(() => {
      setResumeReady(true);
      resumeTimerRef.current = null;
      hadPassivePauseRef.current = false;
    }, resumeDelay);
    return () => {
      if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    };
  }, [mode, passivePause, resumeDelay]);

  const shouldAdvance =
    enabled &&
    itemCount > 1 &&
    mode === "presentation" &&
    motionPreferenceKnown &&
    !reducedMotion &&
    inViewport &&
    documentVisible &&
    !passivePause &&
    resumeReady;

  useEffect(() => {
    if (!shouldAdvance) return;
    const duration = Math.max(1, remainingRef.current);
    startedAtRef.current = Date.now();
    const timer = window.setTimeout(() => {
      timerRef.current = null;
      startedAtRef.current = null;
      remainingRef.current = interval;
      setActiveIndex((current) => (current + 1) % itemCount);
    }, duration);
    timerRef.current = timer;
    return () => {
      if (timerRef.current !== timer) return;
      window.clearTimeout(timer);
      timerRef.current = null;
      if (startedAtRef.current !== null) {
        remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAtRef.current));
        startedAtRef.current = null;
      }
    };
  }, [activeIndex, interval, itemCount, shouldAdvance]);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
      if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    },
    [],
  );

  const interactionProps = useMemo(
    () => ({
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocusCapture: () => setFocusWithin(true),
      onBlurCapture: (event: React.FocusEvent<HTMLDivElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocusWithin(false);
      },
    }),
    [],
  );

  return {
    activeIndex,
    mode,
    isPaused: !shouldAdvance,
    interval,
    containerRef,
    select,
    interactionProps,
  };
}

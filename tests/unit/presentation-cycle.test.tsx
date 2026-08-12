import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { usePresentationCycle } from "@/hooks/usePresentationCycle";

let reducedMotion = false;
let intersectionCallback: IntersectionObserverCallback | null = null;

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    intersectionCallback = callback;
  }
  observe(element: Element) {
    intersectionCallback?.([{ isIntersecting: true, intersectionRatio: 1, target: element } as IntersectionObserverEntry], this as unknown as IntersectionObserver);
  }
  disconnect() {}
  unobserve() {}
  takeRecords() { return []; }
  root = null;
  rootMargin = "0px";
  thresholds = [0.45];
}

function emitIntersection(isVisible: boolean) {
  act(() => {
    intersectionCallback?.([{ isIntersecting: isVisible, intersectionRatio: isVisible ? 1 : 0 } as IntersectionObserverEntry], {} as IntersectionObserver);
  });
}

function Harness({ interval = 1000 }: { interval?: number }) {
  const cycle = usePresentationCycle({ itemCount: 3, interval, resumeDelay: 150 });
  return (
    <div ref={cycle.containerRef} {...cycle.interactionProps} data-testid="cycle" data-mode={cycle.mode}>
      <output data-testid="active">{cycle.activeIndex}</output>
      <button type="button" onClick={() => cycle.select(2)}>Select third</button>
      <button type="button" onKeyDown={(event) => { if (event.key === "ArrowRight") cycle.select(1); }}>Keyboard select</button>
    </div>
  );
}

describe("usePresentationCycle", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    reducedMotion = false;
    intersectionCallback = null;
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
    vi.stubGlobal("matchMedia", vi.fn().mockImplementation(() => ({
      matches: reducedMotion,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })));
    Object.defineProperty(document, "visibilityState", { configurable: true, value: "visible" });
  });

  afterEach(() => {
    cleanup();
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("starts in presentation mode, advances and wraps in authored order", () => {
    render(<Harness />);
    expect(screen.getByTestId("cycle")).toHaveAttribute("data-mode", "presentation");
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByTestId("active")).toHaveTextContent("1");
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByTestId("active")).toHaveTextContent("2");
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByTestId("active")).toHaveTextContent("0");
  });

  it("pauses immediately on hover and resumes after the passive delay", () => {
    render(<Harness />);
    act(() => vi.advanceTimersByTime(400));
    fireEvent.mouseEnter(screen.getByTestId("cycle"));
    act(() => vi.advanceTimersByTime(1200));
    expect(screen.getByTestId("active")).toHaveTextContent("0");
    fireEvent.mouseLeave(screen.getByTestId("cycle"));
    act(() => vi.advanceTimersByTime(150));
    expect(screen.getByTestId("active")).toHaveTextContent("0");
    act(() => vi.advanceTimersByTime(600));
    expect(screen.getByTestId("active")).toHaveTextContent("1");
  });

  it("pauses while focus is within and resumes only after focus leaves", () => {
    render(<Harness />);
    const control = screen.getByRole("button", { name: "Keyboard select" });
    act(() => vi.advanceTimersByTime(300));
    fireEvent.focus(control);
    act(() => vi.advanceTimersByTime(1200));
    expect(screen.getByTestId("active")).toHaveTextContent("0");
    fireEvent.blur(control, { relatedTarget: null });
    act(() => vi.advanceTimersByTime(150));
    act(() => vi.advanceTimersByTime(700));
    expect(screen.getByTestId("active")).toHaveTextContent("1");
  });

  it("click or tap selection permanently transfers control", () => {
    render(<Harness />);
    fireEvent.click(screen.getByRole("button", { name: "Select third" }));
    expect(screen.getByTestId("cycle")).toHaveAttribute("data-mode", "manual");
    expect(screen.getByTestId("active")).toHaveTextContent("2");
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByTestId("active")).toHaveTextContent("2");
  });

  it("keyboard selection permanently transfers control", () => {
    render(<Harness />);
    fireEvent.keyDown(screen.getByRole("button", { name: "Keyboard select" }), { key: "ArrowRight" });
    expect(screen.getByTestId("cycle")).toHaveAttribute("data-mode", "manual");
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByTestId("active")).toHaveTextContent("1");
  });

  it("does not advance outside the viewport or while the document is hidden", () => {
    render(<Harness />);
    emitIntersection(false);
    act(() => vi.advanceTimersByTime(1500));
    expect(screen.getByTestId("active")).toHaveTextContent("0");
    emitIntersection(true);
    Object.defineProperty(document, "visibilityState", { configurable: true, value: "hidden" });
    fireEvent(document, new Event("visibilitychange"));
    act(() => vi.advanceTimersByTime(1500));
    expect(screen.getByTestId("active")).toHaveTextContent("0");
    Object.defineProperty(document, "visibilityState", { configurable: true, value: "visible" });
    fireEvent(document, new Event("visibilitychange"));
    act(() => vi.advanceTimersByTime(1000));
    expect(screen.getByTestId("active")).toHaveTextContent("1");
  });

  it("begins in manual mode under reduced motion and cleans up timers", () => {
    reducedMotion = true;
    const view = render(<Harness />);
    expect(screen.getByTestId("cycle")).toHaveAttribute("data-mode", "manual");
    act(() => vi.advanceTimersByTime(3000));
    expect(screen.getByTestId("active")).toHaveTextContent("0");
    view.unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});

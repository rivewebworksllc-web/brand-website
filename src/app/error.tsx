"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-2xl font-semibold">Something went wrong</h1>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded border border-neutral-300 px-4 py-2 text-sm dark:border-neutral-700"
      >
        Try again
      </button>
    </main>
  );
}

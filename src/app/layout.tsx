import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { isProductionSite } from "@/lib/sanity/env";
import { getSiteUrl, siteName } from "@/lib/site";
import { Header } from "@/components/nav/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Editorial serif for display headings only (h1/h2 and the manifesto
 * statement) — paired with Inter for body/UI so the page doesn't read as
 * the default single-sans-serif AI-SaaS template.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  adjustFontFallback: false,
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description:
    "Rive Webworks builds the website, modernizes the AWS or Microsoft cloud behind it, and ships governed AI on top — one accountable team, documented evidence at every stage.",
  robots: isProductionSite()
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

/**
 * Runs before paint (blocking, in <head>) so the correct theme applies with
 * no flash of the wrong colour scheme — persisted choice wins, otherwise
 * light is the default regardless of system preference (Product Office
 * direction: light is the brand's default presentation; dark is an
 * explicit opt-in via the toggle, not something sprung on a visitor whose
 * OS happens to be in dark mode). Defensive: storage access can throw in
 * locked-down/private browsing contexts.
 */
const themeInitScript = `(function () {
  try {
    var stored = window.localStorage.getItem("rive-theme");
    var theme = stored === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Reveal.tsx (and the RW-PW06A architecture "boot" reveal) start
            content at opacity-0 and reveal it via an IntersectionObserver
            effect. Without this, a visitor whose JavaScript never runs would
            see that content permanently hidden — this forces it visible when
            JS is unavailable, so motion stays a progressive enhancement. */}
        <noscript>
          <style>{`.js-reveal{opacity:1!important;transform:none!important;scale:none!important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        {/* RW-PW07A: sticky-header sentinel. Header.tsx observes this via
            IntersectionObserver instead of a `window.addEventListener`
            scroll listener. `absolute` (not `fixed`) with no positioned
            ancestor resolves against the document, not the viewport, so it
            sits at a fixed 48px down the page and scrolls normally — once
            it scrolls out of the (default, un-margined) viewport root, the
            header goes solid. That's the entire trick: no scroll-position
            math, just "is this point still on screen". */}
        <div id="header-scroll-sentinel" aria-hidden="true" className="absolute top-12 h-px w-px" />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {/* Compensates for the fixed Header. The homepage's Hero section
            cancels this out with -mt-20 so its background sits behind the
            transparent header instead of leaving a gap. */}
        <div className="h-20" aria-hidden="true" />
        {children}
        <Footer />
      </body>
    </html>
  );
}

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
 * no flash of the wrong colour scheme — persisted choice wins, otherwise the
 * system preference decides on a first visit. Defensive: storage access can
 * throw in locked-down/private browsing contexts.
 */
const themeInitScript = `(function () {
  try {
    var stored = window.localStorage.getItem("rive-theme");
    var theme = stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
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
      </head>
      <body className="antialiased">
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

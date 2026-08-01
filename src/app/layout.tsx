import type { Metadata } from "next";
import { Inter } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description:
    "Rive Webworks helps growing and regulated organizations create high-converting websites, modernize AWS and Microsoft cloud environments, and deploy governed AI solutions—with clear scope, documented evidence and ongoing support.",
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
    <html lang="en" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {/* Compensates for the now-fixed Header. The homepage's Hero
            section cancels this out with -mt-20 so its own background sits
            behind the transparent header instead of leaving a gap. */}
        <div className="h-20" aria-hidden="true" />
        {children}
        <Footer />
      </body>
    </html>
  );
}

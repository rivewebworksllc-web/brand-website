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
  description: "Rive Webworks — Week 0 build foundation.",
  robots: isProductionSite()
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

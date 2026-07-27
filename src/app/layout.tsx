import type { Metadata } from "next";
import "./globals.css";
import { isProductionSite } from "@/lib/sanity/env";

export const metadata: Metadata = {
  title: "Rive Webworks",
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
    <html lang="en">
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

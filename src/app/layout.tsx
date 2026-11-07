import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";

const switzer = localFont({
  src: [
    {
      path: "../fonts/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Switzer-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
  preload: true,
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});

const tiro = localFont({
  src: [
    {
      path: "../fonts/TiroDevanagariHindi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-tiro",
  display: "swap",
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NitiSeva — Service, every day",
    template: "%s — NitiSeva",
  },
  description:
    "NitiSeva runs community kitchens, learning centres, shelter and relief work across northern India. Care that shows up every day, not just in a crisis.",
  keywords: [
    "NitiSeva",
    "Indian NGO",
    "donate India",
    "community kitchen",
    "education NGO",
    "shelter",
    "disaster relief",
    "80G donation",
  ],
  authors: [{ name: "NitiSeva Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "NitiSeva",
    title: "NitiSeva — Service, every day",
    description:
      "Community kitchens, learning centres, shelter and relief across northern India. Care that shows up every day.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1536,
        height: 1024,
        alt: "A teacher reading with four children at a NitiSeva learning centre",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NitiSeva — Service, every day",
    description:
      "Community kitchens, learning centres, shelter and relief across northern India.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4efe4",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${switzer.variable} ${tiro.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

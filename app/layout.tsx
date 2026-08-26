import type { Metadata } from "next";
import { Playfair_Display, Manrope, Geist } from "next/font/google";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import ThemeProvider from "@/components/motion/ThemeProvider";
import FloatingContactButtons from "@/components/layout/FloatingContactButtons";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://twinkledairy.com";
const ogImage = "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=1200&h=630&q=80";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Twinkle Dairy | Fresh Dairy, Handcrafted Sweets",
    template: "%s | Twinkle Dairy",
  },
  description:
    "Premium dairy and traditional sweets, made fresh daily in Kathmandu. Three generations of honest, small-batch craft.",
  keywords: [
    "dairy Kathmandu",
    "fresh milk Nepal",
    "ghee Kathmandu",
    "traditional sweets Nepal",
    "mithai Kathmandu",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Twinkle Dairy",
    title: "Twinkle Dairy | Fresh Dairy, Handcrafted Sweets",
    description:
      "Premium dairy and traditional sweets, made fresh daily in Kathmandu. Three generations of honest, small-batch craft.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Twinkle Dairy - fresh dairy and traditional sweets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twinkle Dairy | Fresh Dairy, Handcrafted Sweets",
    description:
      "Premium dairy and traditional sweets, made fresh daily in Kathmandu.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const htmlClassName = playfair.variable + " " + manrope.variable;

  return (
    <html
      lang="en"
      className={cn(htmlClassName, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-green-500 focus:text-white focus:px-6 focus:py-3 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <AnnouncementBar />
        <ThemeProvider>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <FloatingContactButtons />
        </ThemeProvider>
      </body>
    </html>
  );
}

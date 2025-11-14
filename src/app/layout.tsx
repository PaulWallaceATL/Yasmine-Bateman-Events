import type { Metadata } from "next";
import { Fraunces, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingAnimation from "@/components/LoadingAnimation";
import ScrollToTop from "@/components/ScrollToTop";
import SkipToMain from "@/components/SkipToMain";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YB Studio | Flawless Events, Better Memories",
  description:
    "Flawless events, better memories. Atlanta-based studio crafting editorial celebrations, signature content, and guest experiences.",
  keywords: [
    "Yasmine Bateman",
    "Atlanta events",
    "event designer",
    "luxury celebrations",
    "editorial events",
    "brand experiences",
    "content studio",
  ],
  authors: [{ name: "Yasmine Bateman" }],
  creator: "Yasmine Bateman",
  publisher: "Yasmine Bateman",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#a35bff" },
    { media: "(prefers-color-scheme: dark)", color: "#7b34d5" },
  ],
  appleWebApp: {
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yasminebateman.com",
    title: "YB Studio | Flawless Events, Better Memories",
    description:
      "Atlanta studio dedicated to flawless events and better memories—harmonizing editorial design, production, and storytelling.",
    siteName: "YB Studio",
    images: [
      {
        url: "/og-image.svg?v=flawless",
        width: 1200,
        height: 630,
        alt: "YB Studio monogram with tagline Flawless Events Better Memories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YB Studio | Flawless Events, Better Memories",
    description:
      "Editorial events, intentional content, and guest-first experiences from Atlanta-based YB Studio.",
    images: ["/og-image.svg?v=flawless"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased`}
      >
        <SkipToMain />
        <LoadingAnimation />
        <SmoothScroll />
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

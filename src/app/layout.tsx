import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat, Cinzel } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingAnimation from "@/components/LoadingAnimation";
import ScrollToTop from "@/components/ScrollToTop";
import SkipToMain from "@/components/SkipToMain";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yasmine Bateman | Content Creator & Influencer",
  description: "Atlanta-based lifestyle content creator with 300K+ followers. Fashion, beauty, wellness content and brand partnerships across YouTube, Instagram, and TikTok.",
  keywords: ["Yasmine Bateman", "Atlanta influencer", "content creator", "lifestyle influencer", "fashion influencer", "beauty influencer", "brand partnerships", "YouTube creator", "Instagram influencer", "TikTok creator"],
  authors: [{ name: "Yasmine Bateman" }],
  creator: "Yasmine Bateman",
  publisher: "Yasmine Bateman",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yasminebateman.com",
    title: "Yasmine Bateman | Content Creator & Influencer",
    description: "Atlanta-based lifestyle content creator with 300K+ followers. Fashion, beauty, wellness content and brand partnerships.",
    siteName: "Yasmine Bateman",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Yasmine Bateman - Content Creator & Influencer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasmine Bateman | Content Creator & Influencer",
    description: "Atlanta-based lifestyle content creator with 300K+ followers across YouTube, Instagram, and TikTok.",
    images: ["/og-image.svg"],
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
        className={`${playfair.variable} ${cormorant.variable} ${cinzel.variable} ${montserrat.variable} antialiased`}
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

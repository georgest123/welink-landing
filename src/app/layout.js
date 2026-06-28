import { Geist, Geist_Mono } from "next/font/google";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { createPageMetadata } from "@/lib/seo";
import SiteChrome from "./components/SiteChrome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  ...createPageMetadata({}),
  icons: {
    icon: "/images/InLoop.png",
    apple: "/images/InLoop.png",
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

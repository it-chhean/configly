import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://configly.site";
const siteName = "Configly";
const siteDescription =
  "Convert yaml, json, toml, env, properties, and xml configuration files instantly. Fast, simple, and browser-based — your data stays on your device.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} - The Configuration File Converter`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "converter",
    "yaml",
    "json",
    "toml",
    "env",
    "properties",
    "xml",
    "configuration file converter",
    "config file converter",
    "configuration converter",
    "YAML to JSON converter",
    "JSON to YAML converter",
    "TOML converter",
    "XML converter",
    "ENV file converter",
    "Java properties converter",
    "developer tools",
  ],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    locale: "en_US",
    title: `${siteName} - The Configuration File Converter`,
    description: siteDescription,
    images: [
      {
        url: "/assets/image/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: `${siteName} — The Configuration File Converter`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - The Configuration File Converter`,
    description: siteDescription,
    images: ["/assets/image/og-image.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
    <body className="h-screen scroll-smooth">
      <Navbar/>
        {children}
      <Footer/>
    </body>
    </html>
  );
}

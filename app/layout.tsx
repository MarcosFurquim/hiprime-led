import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hiprime-led.marcosfurquim.chatgpt.site"),
  title: "HiPrime LED | LED Screen & Module Repair in Florida",
  description:
    "Dead pixels, dark lines, or a damaged LED module? Call or email HiPrime for an LED screen repair assessment in Florida.",
  keywords: [
    "LED screen repair",
    "LED module repair",
    "dead pixel repair",
    "LED panel repair Florida",
    "commercial LED display repair",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "HiPrime LED Screen & Module Repair in Florida",
    description:
      "LED screen and module repair in Florida for dead pixels, dark lines, damaged modules, color faults, and more.",
    type: "website",
    locale: "en_US",
    siteName: "HiPrime LED",
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "HiPrime Solutions — LED Screen Repair Experts",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "HiPrime LED | LED Screen Repair",
    description: "LED screen and module repair in Florida.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

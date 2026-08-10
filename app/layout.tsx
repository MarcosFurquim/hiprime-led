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
  title: "HiPrime LED | LED Screen & Module Repair in Florida",
  description:
    "Precision LED screen repair for dead pixels, dark lines, damaged modules, and panel faults. Contact HiPrime LED for an assessment in Florida.",
  keywords: [
    "LED screen repair",
    "LED module repair",
    "dead pixel repair",
    "LED panel repair Florida",
    "commercial LED display repair",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "HiPrime LED | Every Pixel Back to Brilliant",
    description:
      "Precision LED screen and module repair for dead pixels, dark lines, damaged modules, and display faults.",
    type: "website",
    locale: "en_US",
    siteName: "HiPrime LED",
  },
  twitter: {
    card: "summary",
    title: "HiPrime LED | LED Screen Repair",
    description: "Every pixel back to brilliant. Precision LED screen and module repair in Florida.",
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

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import { ThemeProvider } from "@/lib/provider/theme-provider/Theme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Christian Bangay",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider defaultTheme="dark" storageKey="mode">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Suspense fallback={<Loader />}>
            {children}
            <Analytics />
            <SpeedInsights />
          </Suspense>
        </body>
      </ThemeProvider>
    </html>
  );
}

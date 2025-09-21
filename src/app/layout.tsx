import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "../app/globals.css";

const MainProvider = dynamic(() => import("@/providers/main-provider"));

export const runtime = "edge";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Casino & Sports",
  description: "Premium casino and sports betting experience with Branch Name",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {" "}
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}

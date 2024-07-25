import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { Appbar } from "./Components/Appbar";

export const readexPro = Readex_Pro({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe Street",
  description: "Unmatchable Taste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background  antialiased", readexPro)}
      >
        <div>
          <Appbar />
          {children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Readex_Pro } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { Appbar } from "../components/Appbar";
import { AppContextProvider } from "@/context/appContext";
import { Footer } from "@/components/Footer";

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
      <AppContextProvider>
        <body
          className={cn(
            "min-h-screen h-screen bg-background overflow-x-hidden overflow-y-auto  antialiased",
            readexPro
          )}
        >
          <Appbar />
          {children}
          <Footer />
        </body>
      </AppContextProvider>
    </html>
  );
}

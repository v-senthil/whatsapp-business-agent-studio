import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "WhatsApp Business Agent Studio",
  description: "Build and manage AI agents on the Meta Business Agent Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
        <Script
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
          data-goatcounter="https://scsenthil.goatcounter.com/count"
        />
      </body>
    </html>
  );
}

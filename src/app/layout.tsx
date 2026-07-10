import type { Metadata } from "next";
import "@/app/globals.css";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ReadOnlySync } from "@/components/providers/ReadOnlySync";
import { DevDrawerMount } from "@/components/dev/DevDrawerMount";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "WhatsApp Business Agent Studio",
  description: "Build and manage AI agents on the Meta Business Agent Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <QueryProvider>
            <ReadOnlySync />
            <TooltipProvider delayDuration={200}>
              {children}
              <DevDrawerMount />
              <Toaster />
            </TooltipProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

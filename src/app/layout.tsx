import type { Metadata } from "next";
import { Poppins, PT_Serif } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import ClientProvider from "@/providers/client-provider";
import { Navbar } from "@/components/navbar";
import { NuqsAdapter } from "nuqs/adapters/react";
import { BottomTabs } from "@/components/bottom-tabs";
import { Toaster } from "@/components/ui/sonner";
import { WhatsappFloatingButton } from "@/components/whatsapp-floating-button";
import { ThemeProvider } from "@/providers/theme-provider";
import { DeviceTracker } from "@/components/modals/DeviceTracker";
import { FeedbackFloatingDialog } from "@/components/feedback-dialog-button";
import Footer from "@/components/footer";
import { DataDialog } from "@/components/modals/data-dialog";
import { WhatsappDialog } from "@/components/modals/whatsapp-dialog";

const headingFont = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PU Vault | Parul University Student Portal",
  description: "Comprehensive study materials, notes, lab practical codes, assignments, timetable, and attendance tools for Parul University students.",
  icons: "/favicon.png",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="e9eIkOpqVq_U5Yr9k7MwVzJYOte8oSit0W8UW3ZbpIU"
        />
        <meta name="google-adsense-account" content="ca-pub-6721729055053884" />
      </head>
      <body
        className={`${poppins.className} ${headingFont.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <ClientProvider>
              <div className="md:w-[calc(100%-16rem)] ml-auto w-full relative min-h-screen flex flex-col justify-between">
                <Suspense fallback={<div className="h-16 lg:h-20 bg-background/85 border-b" />}>
                  <Navbar />
                </Suspense>
                <main className="w-full max-md:pb-16 pt-16 md:pt-20 z-[5] relative flex-1">
                  <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
                    {children}
                  </Suspense>
                </main>
                <Footer />
              </div>
              <BottomTabs />
              <Toaster position="top-center" richColors />
              <DataDialog />
              <WhatsappFloatingButton />
              <FeedbackFloatingDialog />
              <DeviceTracker />
              <WhatsappDialog />
            </ClientProvider>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}

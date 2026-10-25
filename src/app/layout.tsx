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
  description:
    "Comprehensive study materials, notes, lab practical codes, assignments, timetable, and attendance tools for Parul University students.",
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
        className={`${poppins.className} ${headingFont.variable} antialiased min-h-screen bg-background text-foreground relative selection:bg-primary/20`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <ClientProvider>
              {/* Ambient Apple Glass Lighting Mesh (Fixed Backdrop) */}
              <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none">
                <div className="absolute -top-[15%] -left-[10%] w-[60vw] h-[60vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-transparent blur-[110px] dark:from-indigo-600/18 dark:via-blue-600/12 dark:to-transparent" />
                <div className="absolute top-[30%] -right-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-bl from-purple-400/15 via-sky-400/12 to-transparent blur-[120px] dark:from-purple-600/16 dark:via-pink-600/10 dark:to-transparent" />
                <div className="absolute -bottom-[20%] left-[15%] w-[65vw] h-[65vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-cyan-400/15 via-teal-400/10 to-transparent blur-[130px] dark:from-cyan-600/12 dark:via-indigo-800/10 dark:to-transparent" />
              </div>

              <div className="md:w-[calc(100%-16rem)] ml-auto w-full relative min-h-screen flex flex-col justify-between">
                <Suspense
                  fallback={
                    <div className="h-16 lg:h-20 bg-background/60 backdrop-blur-xl border-b border-white/20" />
                  }
                >
                  <Navbar />
                </Suspense>
                <main className="w-full max-md:pb-24 pt-16 md:pt-20 z-[5] relative flex-1">
                  <Suspense
                    fallback={
                      <div className="p-8 text-center text-muted-foreground animate-pulse">
                        Loading PU Vault...
                      </div>
                    }
                  >
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

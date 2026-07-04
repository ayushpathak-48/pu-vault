import type { Metadata } from "next";
import { Poppins, PT_Serif } from "next/font/google";
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
import { FeaturedAppsBanner } from "@/components/featured-apps-banner";
import Link from "next/link";
import Script from "next/script";

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
  title: "Pu Vault",
  description: "Parul University MCA sem 1 - 3 materials",
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
        className={`${poppins.className} ${headingFont.variable} antialiased `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <ClientProvider>
              <div className="md:w-[calc(100%-16rem)] ml-auto w-full relative">
                <Navbar />
                <main className="w-full max-md:pb-14 pt-16 md:pt-20 z-[5] relative h-full">
                  <div className="px-3 md:px-5 pt-3 md:pt-5 pb-0">
                    <div className="flex items-center justify-between mb-2 px-1">
                      <h2 className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5">
                        <span>✨</span> Featured Apps
                      </h2>
                      <Link href="/featured-apps" className="text-xs font-semibold text-primary hover:underline">
                        View All
                      </Link>
                    </div>
                    <FeaturedAppsBanner />
                  </div>
                  {children}
                </main>
                <Footer />
              </div>
              <BottomTabs />
              <Toaster position="top-center" />
              <DataDialog />
              <WhatsappFloatingButton />
              <FeedbackFloatingDialog />
              <DeviceTracker />
              <WhatsappDialog />
            </ClientProvider>
          </NuqsAdapter>
        </ThemeProvider>
<Script
    src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    strategy="afterInteractive"
    data-name="BMC-Widget"
    data-cfasync="false"
    data-id="puvault"
    data-description="Support me on Buy me a coffee!"
    data-message=""
    data-color="#26B0A1"
    data-position="Left"
    data-x_margin="48"
    data-y_margin="48"
  />
      </body>
    </html>
  );
}

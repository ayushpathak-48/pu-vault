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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var c=null,m=document.cookie.match(new RegExp("(^| )theme-color=([^;]+)"));if(m&&m[2])c=decodeURIComponent(m[2]);if(!c)c=localStorage.getItem("theme-color");if(!c){var d=localStorage.getItem("client-data");if(d){var p=JSON.parse(d);if(p&&p.state&&p.state.color)c=p.state.color;}}var t={blue:"217.2 91.2% 59.8%",cyan:"191.6 91.4% 36.5%",pink:"335.1 77.6% 42%",amber:"32.1 94.6% 43.7%",gray:"220 13% 91%"};if(c&&t[c]){var v=t[c],r=document.documentElement;r.style.setProperty("--primary",v);r.style.setProperty("--ring",v);r.style.setProperty("--sidebar-ring",v);r.style.setProperty("--sidebar-primary",v);if(c==="gray"){r.style.setProperty("--primary-foreground","0 0% 0%");r.style.setProperty("--sidebar-primary-foreground","0 0% 0%");}else{r.style.setProperty("--primary-foreground","0 0% 100%");r.style.setProperty("--sidebar-primary-foreground","0 0% 100%");}}}catch(e){}})();`,
          }}
        />
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
              {/* Authentic Studio Background (Clean, Architectural & Non-AI) */}
              <div
                aria-hidden="true"
                className="fixed inset-0 pointer-events-none -z-10 select-none overflow-hidden"
              >
                {/* Soft top ambient studio lighting falloff */}
                <div className="absolute top-0 inset-x-0 h-[380px] bg-gradient-to-b from-black/[0.02] to-transparent dark:from-white/[0.03] dark:to-transparent" />

                {/* Precision architectural micro-dot grid */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-35 dark:opacity-45" />
              </div>

              <div className="md:w-[calc(100%-16rem)] ml-auto w-full relative min-h-screen flex flex-col justify-between">
                <Suspense
                  fallback={
                    <div className="h-16 bg-background/60 backdrop-blur-xl border-b border-white/20" />
                  }
                >
                  <Navbar />
                </Suspense>
                <main className="w-full max-md:pb-24 pt-16 z-[5] relative flex-1">
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

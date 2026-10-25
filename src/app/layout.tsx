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
            __html: `(function(){try{var c=null,m=document.cookie.match(new RegExp("(^| )theme-color=([^;]+)"));if(m&&m[2])c=decodeURIComponent(m[2]);if(!c)c=localStorage.getItem("theme-color");if(!c){var d=localStorage.getItem("client-data");if(d){var p=JSON.parse(d);if(p&&p.state&&p.state.color)c=p.state.color;}}var t={blue:{l:"217 91% 54%",d:"215 95% 62%",fgl:"0 0% 100%",fgd:"220 40% 98%"},cyan:{l:"188 95% 40%",d:"186 95% 52%",fgl:"0 0% 100%",fgd:"0 0% 100%"},pink:{l:"340 85% 54%",d:"340 95% 66%",fgl:"0 0% 100%",fgd:"0 0% 100%"},amber:{l:"38 96% 48%",d:"40 98% 58%",fgl:"0 0% 100%",fgd:"0 0% 10%"},emerald:{l:"152 76% 42%",d:"152 82% 54%",fgl:"0 0% 100%",fgd:"0 0% 100%"},purple:{l:"265 85% 58%",d:"265 95% 70%",fgl:"0 0% 100%",fgd:"0 0% 100%"},gray:{l:"220 14% 45%",d:"220 14% 75%",fgl:"0 0% 100%",fgd:"0 0% 0%"}};if(c&&t[c]){var r=document.documentElement,th=localStorage.getItem("theme"),isD=r.classList.contains("dark")||(th==="dark")||(th!=="light"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches),v=isD?t[c].d:t[c].l,fg=isD?t[c].fgd:t[c].fgl;r.style.setProperty("--primary",v);r.style.setProperty("--ring",v);r.style.setProperty("--sidebar-ring",v);r.style.setProperty("--sidebar-primary",v);r.style.setProperty("--primary-foreground",fg);r.style.setProperty("--sidebar-primary-foreground",fg);}}catch(e){}})();`,
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
                {/* Luminous dynamic ambient theme aura bloom */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] sm:w-[950px] h-[340px] bg-primary/[0.14] dark:bg-primary/[0.22] blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />

                {/* Soft top ambient studio lighting falloff with live accent tint */}
                <div className="absolute top-0 inset-x-0 h-[450px] bg-gradient-to-b from-primary/[0.10] dark:from-primary/[0.15] via-primary/[0.03] to-transparent pointer-events-none transition-colors duration-500" />

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

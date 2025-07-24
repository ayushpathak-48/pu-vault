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
          content="vtrzY1YqIApSPysm6mMEW85Pl0KVVQShRMdDIvxosck"
        />
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
                <main className="w-full h-full max-md:pb-14 pt-16 md:pt-20">
                  {children}
                </main>
              </div>
              <BottomTabs />
              <Toaster position="top-center" />
              <WhatsappFloatingButton />
              {/* <WhatsappDialog /> */}
            </ClientProvider>
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}

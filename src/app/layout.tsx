import type { Metadata } from "next";
import { PT_Serif, Poppins } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/providers/client-provider";
import { Navbar } from "@/components/navbar";
import { NuqsAdapter } from "nuqs/adapters/react";
import { BottomTabs } from "@/components/bottom-tabs";
import { Toaster } from "@/components/ui/sonner";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { MATERIAL_LINK_BASE_URL } from "@/lib/constants";
import { WhatsappButton } from "@/components/WhatsappButton";

const headingFont = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pu Vault",
  description: "Parul University MCA sem 2 materials",
  icons: "/favicon.png",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${headingFont.variable} antialiased`}
      >
        <NuqsAdapter>
          <ClientProvider>
            <div className="md:w-[calc(100%-16rem)] ml-auto w-full relative">
              <Navbar />
              <main className="w-full h-full max-md:pb-14 pt-16 md:pt-20">
                <div className="bg-white border-2 border-gray-200 m-5 py-2 px-5 flex items-center justify-between rounded-xl">
                  <Link
                    target="_blank"
                    href={"https://chat.whatsapp.com/D88Nxz3agYV7or3fbUR9zc"}
                    className="font-semibold"
                  >
                    Whatsapp Community for Updates
                  </Link>
                  <WhatsappButton />
                </div>
                {children}
              </main>
            </div>
            <BottomTabs />
            <Toaster position="top-center" />
          </ClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

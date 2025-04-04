import type { Metadata } from "next";
import { PT_Serif, Lexend_Deca } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/providers/client-provider";
import { Navbar } from "@/components/navbar";
import { NuqsAdapter } from "nuqs/adapters/react";
import { BottomTabs } from "@/components/bottom-tabs";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MATERIAL_LINK_BASE_URL } from "@/lib/constants";
import { WhatsappFloatingButton } from "@/components/whatsapp-floating-button";

const headingFont = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const lexendDeca = Lexend_Deca({
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
        className={`${lexendDeca.className} ${headingFont.variable} antialiased`}
      >
        <NuqsAdapter>
          <ClientProvider>
            <div className="md:w-[calc(100%-16rem)] ml-auto w-full relative">
              <Navbar />
              <main className="w-full h-full max-md:pb-14 pt-16 md:pt-20">
                <div className="p-2 lg:p-5 flex flex-col gap-1">
                  {/* <div className="flex flex-col gap-2"> */}
                  <div className="bg-gray-50 rounded-md p-2 px-4 flex items-center justify-between gap-4">
                    <div>End Sem Theory Time Table</div>
                    <Button asChild>
                      <Link
                        href={`${MATERIAL_LINK_BASE_URL}/time-table/sem-2-end-sem-theory-time-table.pdf`}
                        target="_blank"
                      >
                        View
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-gray-50 rounded-md p-2 px-4  flex items-center justify-between gap-4">
                    <div>End Sem Practical Time Table</div>
                    <Button asChild>
                      <Link
                        href={`${MATERIAL_LINK_BASE_URL}/time-table/sem-2-end-sem-practical-time-table.pdf`}
                        target="_blank"
                      >
                        View
                      </Link>
                    </Button>
                  </div>
                  {/* </div> */}
                </div>
                {children}
              </main>
            </div>
            <BottomTabs />
            <Toaster position="top-center" />
            <WhatsappFloatingButton />
          </ClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

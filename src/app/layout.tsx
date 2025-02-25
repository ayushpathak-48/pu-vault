import type { Metadata } from "next";
import { PT_Serif, Poppins } from "next/font/google";
import "./globals.css";
import ClientProvider from "@/providers/client-provider";
import { Navbar } from "@/components/navbar";
import { NuqsAdapter } from "nuqs/adapters/react";
import { BottomTabs } from "@/components/bottom-tabs";

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
            <div className="md:w-[calc(100%-16rem)] w-full relative">
              <Navbar />
              <main className="w-full">{children}</main>
            </div>
            <BottomTabs />
          </ClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}

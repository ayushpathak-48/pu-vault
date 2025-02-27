"use client"; // Force client-side execution

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
      <GoogleAnalytics trackPageViews />
    </SidebarProvider>
  );
}

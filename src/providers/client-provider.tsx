"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useDataStore } from "@/stores/data.store";
import { Loader } from "lucide-react";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const isHydrated = useDataStore((state) => state.hydrated);
  if (!isHydrated) {
    return (
      <div className="flex items-center justify-center h-96 w-full">
        <Loader className="animate-spin text-lg" />
      </div>
    );
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
      <GoogleAnalytics trackPageViews />
    </SidebarProvider>
  );
}

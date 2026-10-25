"use client";

import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useDataStore } from "@/stores/data.store";
import {
  applyThemeColor,
  THEME_COLOR_STORAGE_KEY,
} from "@/lib/theme-color";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const color = useDataStore((state) => state.color);
  const setColor = useDataStore((state) => state.setColor);
  const hydrated = useDataStore((state) => state.hydrated);

  // Sync saved theme color on mount and rehydration
  useEffect(() => {
    const saved = localStorage.getItem(THEME_COLOR_STORAGE_KEY);
    if (saved) {
      applyThemeColor(saved);
      if (saved !== color) {
        setColor(saved);
      }
    } else if (color) {
      applyThemeColor(color);
    }
  }, [hydrated]);

  // Sync whenever user changes color in data store
  useEffect(() => {
    if (color) {
      applyThemeColor(color);
    }
  }, [color]);

  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
      <GoogleAnalytics trackPageViews />
    </SidebarProvider>
  );
}

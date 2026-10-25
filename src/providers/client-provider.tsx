"use client";

import { useEffect, useRef } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useDataStore } from "@/stores/data.store";
import {
  applyThemeColor,
  getSavedThemeColor,
} from "@/lib/theme-color";

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const color = useDataStore((state) => state.color);
  const setColor = useDataStore((state) => state.setColor);
  const isInitialMount = useRef(true);

  // 1. Initial mount: Ensure saved theme color from storage is applied
  useEffect(() => {
    const saved = getSavedThemeColor();
    if (saved) {
      applyThemeColor(saved);
      if (color !== saved) {
        setColor(saved);
      }
    }
    isInitialMount.current = false;
  }, []);

  // 2. Subsequent user changes: Apply when user explicitly changes color in store
  useEffect(() => {
    if (isInitialMount.current) return;
    if (color) {
      applyThemeColor(color);
    }
  }, [color]);

  // 3. Listen to light/dark mode changes and re-tune accent color
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (m.attributeName === "class") {
          applyThemeColor(useDataStore.getState().color);
        }
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      {children}
      <GoogleAnalytics trackPageViews />
    </SidebarProvider>
  );
}

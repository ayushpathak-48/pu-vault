"use client";

import { useEffect, useState } from "react";
import { AppItem, fetchApps, fallbackApps } from "@/lib/services/apps.service";

let cachedApps: AppItem[] | null = null;

export function useApps() {
  const [apps, setApps] = useState<AppItem[]>(cachedApps || fallbackApps);
  const [loading, setLoading] = useState<boolean>(!cachedApps);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadApps() {
      try {
        const data = await fetchApps();
        if (isMounted) {
          cachedApps = data;
          setApps(data);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to load apps");
          setLoading(false);
        }
      }
    }

    loadApps();

    return () => {
      isMounted = false;
    };
  }, []);

  return { apps, loading, error };
}
